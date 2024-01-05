
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
import {getIronSession} from 'iron-session';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { generateClient } from 'aws-amplify/api';
import { createOrder } from '@/graphql/mutations';

import { Amplify } from 'aws-amplify';

import config from '../../../../amplifyconfiguration.json';
Amplify.configure(config);

const client = generateClient();

const stripPublishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
const tinderPriceId = process.env.TINDER_PRICE_ID;
const bumblePriceId = process.env.BUMBLE_PRICE_ID;
const hingePriceId = process.env.HINGE_PRICE_ID;

type SearchSession = {
    name : string , 
    location : string ,
    age : number ,
    gender : string ,
    idUser : string ,
}

export async function POST(req: Request) {

    const body = await req.json();
    const selectedSites = body.selectedSites as string[];
    const cookiePassword = process.env.COOKIE_SESSION_PASSWORD;
    const cookiesession = await getIronSession<SearchSession> ( cookies() , { password: cookiePassword as string, cookieName: "searchsession" });
    const userId = cookiesession.idUser;
    const searchQuery ={
        name : cookiesession.name,
        location : cookiesession.location,
        age : cookiesession.age,
        gender : cookiesession.gender,
    }

    if(userId === undefined) return NextResponse.redirect('/');

    // create a stripe cart with the selected sites
    const lineItems = selectedSites.map((site: string) => {
        if (site === "bumble") {
          return {
            price: bumblePriceId,
            quantity: 1,
          }
        }
        if (site === "hinge") {
          return {
            price: hingePriceId,
            quantity: 1,
          }
        }
        if (site === "tinder") {
          return {
            price: tinderPriceId,
            quantity: 1,
          }
        }
      })

      try {
        const hostName = req.headers.get("host");
        const session = await stripe.checkout.sessions.create({
          metadata: {
            userId: userId,
            name : searchQuery.name,
            location : searchQuery.location,
            age: searchQuery.age,
            gender: searchQuery.gender,
          },
          line_items: lineItems,
          mode: 'payment',
          success_url: `http://${hostName}/results/?success=true`,
          cancel_url: `http://${hostName}/teaser-result/?payment-canceled=true`,
          
        });
        return NextResponse.json({ url: session.url })
      } catch (err) {
        console.log(err);
        return NextResponse.json({ err })
      }
}

