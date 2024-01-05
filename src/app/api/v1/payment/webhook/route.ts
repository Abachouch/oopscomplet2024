import { NextResponse } from "next/server";

type Metadata = {
    idUser: string,
    name: string,
    location: string,
    age: number,
    gender: string,
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

const fulfillOrder = async (lineItems: [], metadata: Metadata) => {
    let transaction = {
        age: metadata.age,
        fullName: metadata.name,
        location: metadata.location,
        gender: metadata.gender,
        payedAt: new Date(),
        websites: new Array<string>(),
        userId: metadata.idUser,
    }
    const websites = lineItems.map((item: any) => {
        return item.description;
    })
    transaction.websites = websites;
    // save transaction to database width id of the user
}

export async function POST(req: Request) {
    const payload = await req.text();
    const sig = req.headers.get('stripe-signature');
    let event;

    try {
        event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
        if (event.type === 'checkout.session.completed') {
        
            // Retrieve the session. If you require line items in the response, you may include them by expanding line_items.
            const sessionWithLineItems = await stripe.checkout.sessions.retrieve(
                event.data.object.id,
                {
                    expand: ['line_items'],
                }
            );
            const lineItems = sessionWithLineItems.line_items;
            fulfillOrder(lineItems, event.data.object.metadata);
        }
    } catch (err) {
        return NextResponse.json({ error: err });
    }
}


