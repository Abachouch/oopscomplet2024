import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import data from "../../../../data/profiles.json";
import { NextResponse } from "next/server";

type SearchSession = {
    name : string , 
    location : string ,
    age : number ,
    gender : string ,
    idUser : string ,
}

// get teaser data from database
export async function POST(req: Request){
    const cookiePassword = process.env.COOKIE_SESSION_PASSWORD;
    const cookiesession = await getIronSession<SearchSession> ( cookies() , { password: cookiePassword as string, cookieName: "searchsession" });

    const searchQuery = {
        name : cookiesession.name ,
        location : cookiesession.location ,
        age : cookiesession.age ,
        gender : cookiesession.gender
    }
    const profiles = await getFakeData(searchQuery);
    const states = await getStates(searchQuery);

    return NextResponse.json({
        states : states,
        profiles :profiles
    });
}

const getFakeData = async (searchQuery : {name:string , location :string , age : number , gender : string}) => {
    const tinder = data.filter((profile) => profile.website === "tinder").splice(0, 4).map((profile) => { return {...profile , name : searchQuery.name , age : searchQuery.age , location : searchQuery.location} });
    const bumble = data.filter((profile) => profile.website === "bumble").splice(0, 4).map((profile) => { return {...profile , name : searchQuery.name , age : searchQuery.age , location : searchQuery.location} });
    const hinge = data.filter((profile) => profile.website === "hinge").splice(0, 3).map((profile) => { return {...profile , name : searchQuery.name , age : searchQuery.age , location : searchQuery.location} });

    return {
        tinder,
        bumble,
        hinge
    };
}

// get the count of results from each app in database
const getStates = async (searchQuery: {name:string , location :string , age : number , gender : string}) => {
    return {
        tinder : 255 ,
        bumble : 100 , 
        hinge : 3
    }
}