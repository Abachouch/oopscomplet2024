
import { Amplify } from 'aws-amplify';
import config from '../../amplifyconfiguration.json';
import { generateClient } from 'aws-amplify/api';
import { createOrder } from '@/graphql/mutations';
import { getTransaction } from '@/graphql/queries';

import { json } from 'stream/consumers';

Amplify.configure(config);

const client = generateClient();

// call this when payment is completed successfully
async function persistTransaction(transaction: any) {
  
}

// call this when user clicks on pay
async function savePayment( name : string , age : string , location : string , sites : string[] , userId : string ){
    const payment = {
        name : name,
        age : age,
        location : location,
        sites : sites,
        userId : userId,
    }
    const order = await client.graphql(
      {
        query: createOrder,
        variables: { input: {
          clientID: payment.userId,
          query : JSON.stringify({name:name , age:age , location:location , sites:sites })
        } },
      }
    )
}

// test elegibility of the user to payed results
async function testElegibility( userId : string , searchQuery : string ){
    const query = JSON.parse(searchQuery);
    const name = query.name;
    const age = query.age;
    const location = query.location;
    const sites = query.sites;

    

    // check if the user is logged in
    // check if the user has a valid subscription
    // check if the user has payed for the current search
}