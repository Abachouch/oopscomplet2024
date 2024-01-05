import { v4 } from 'uuid';
import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

type SearchSession = {
    name : string , 
    location : string ,
    age : number ,
    gender : string ,
    idUser : string ,
}

export async function POST(req: Request){
    const cookiePassword = process.env.COOKIE_SESSION_PASSWORD;
    const body = await req.json();
    
    const searchQuery = body.searchQuery;
    const newUserID = v4();

    const ironSession  = await getIronSession<SearchSession>(cookies(), { password: cookiePassword as string, cookieName: "searchsession" });
    ironSession.age = searchQuery.age;
    ironSession.gender = searchQuery.gender;
    ironSession.location = searchQuery.location;
    ironSession.name = searchQuery.name;    
    ironSession.idUser = newUserID;

    await ironSession.save();

    console.dir(ironSession)
    return NextResponse.json({ idUser: newUserID});
}