import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  const email = await req.json();
  console.log(email.email);
  if(!email.email) return NextResponse.json({ message: 'email is required'}, {status: 400});

  // mail shimp api
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const DATACENTER = process.env.MAILCHIMP_DATA_CENTER;

    const API_URL = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;


    try{
        const data = {
            email_address: email.email,
            status: "subscribed",
          };
            const response = await axios.post(API_URL, data, {
                headers: {
                Authorization: `apikey ${API_KEY}`,
                "Content-Type": "application/json",
                },
            });
            return NextResponse.json({ message: 'success'});
    }
    catch(error){
      return NextResponse.json({ message: 'error'});
    }
}
