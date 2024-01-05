import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const form = await req.json();
    const email = form.email;
    const name = form.name;
    const message = form.message;

    if(!email) return NextResponse.json({error :true , message: 'email is required'});
    if(!name) return NextResponse.json({error :true , message: 'name is required'});
    if(!message) return NextResponse.json({error :true , message: 'message is required'});

    console.log("email: " + email + " name: " + name + " message: " + message);
   

    // mail shimp api
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const DATACENTER = process.env.MAILCHIMP_DATA_CENTER;

    const API_URL = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;
    const formURL  = `https://${DATACENTER}.list-manage.com/contact-form?u=4a2aeec2ea0ed604e3c835463&form_id=cea2d26f9f563822f47038c5bcb2e4a7`

    try{
        const data = {
            email_address: email,
              merge_fields: {
                 LNAME: name,
                  MMERGE1: message },
              status: "subscribed",
              tags: ["contact-form"]
          };
            const response = await axios.post(API_URL, data, {
                headers: {
                Authorization: `apikey ${API_KEY}`,
                "Content-Type": "application/json",
                },
            });
            console.log("response: ");
            console.log(response);
            return NextResponse.json({ message: 'success'});
    }
    catch(error:any){
        console.dir(error.response.data);   
      return NextResponse.json({ message: 'error'});
    }

}