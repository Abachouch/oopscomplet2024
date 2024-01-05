'use client';
import React from "react";
import feedsData from '../data/feed.json';
import FeedItem from "./feedItem";

// const maleNames = ["Liam", "Noah", "Lucas", "Joseph", "Jacob", "Oliver", "Ethan", "Michael", "David", "Benjamin", "Jack", "James", "Leo", "Theodore", "Dylan", "Aiden", "Alexander", "Henry", "Luca", "Matthew", "Daniel", "Logan", "Anthony", "Mason", "Jayden", "Sebastian", "Gabriel", "Owen", "William", "Elijah", "John", "Samuel", "Levi", "Ryan", "Mateo", "Asher", "Isaac", "Jackson", "Nicholas", "Julian", "Moshe", "Thomas", "Nathan", "Christopher", "Joshua", "Hudson", "Carter", "Adam", "Cameron", "Aaron", "Caleb", "Elias", "Grayson", "Ezra", "Luke", "Andrew", "Charles", "Ian", "Adrian", "Miles", "Muhammad", "Amir", "Eli", "Kai", "Thiago", "Chaim", "Austin", "Christian", "Wyatt", "Josiah", "Jordan", "Maverick", "Dominic", "Kayden", "Leonardo", "Wesley", "Abraham", "Hunter", "Roman", "Nolan", "Theo", "Jonathan", "Robert", "Axel", "Enzo", "Vincent", "Landon", "Chase", "Greyson", "Giovanni", "Cole", "Connor", "Jaxon", "Jeremiah", "Evan", "Lorenzo"];
// const femaleNames = ["Olivia", "Emma", "Sophia", "Mia", "Charlotte", "Isabella", "Ava", "Amelia", "Luna", "Leah", "Sofia", "Chloe", "Gianna", "Madison", "Esther", "Emily", "Scarlett", "Mila", "Ella", "Aria", "Evelyn", "Sarah", "Abigail", "Zoe", "Grace", "Harper", "Penelope", "Lily", "Hannah", "Camila", "Rachel", "Layla", "Avery", "Scarlett", "Violet", "Maya", "Aurora", "Eliana", "Hailey", "Miriam", "Nora", "Victoria", "Stella", "Eleanor", "Chaya", "Emilia", "Sara", "Gabriella", "Ellie", "Nova", "Sophie", "Zoey", "Alaia", "Natalie", "Isla", "Lucy", "Hazel", "Madelyn", "Naomi", "Elena", "Maeve", "Savannah", "Ariana", "Sienna", "Willow", "Ivy", "Eva", "Alice", "Josephine", "Arya", "Lillian", "Claire", "Julia", "Chana", "Quinn", "Anna"];


type FeedEntry = {
    name: string,
    age: string,
    location: string,
    time: number,
    avatar: string,
    bustedBy: string,
    website: string
}


// function generateRandomListOfNumbers(length: number) {
//     const numbers: number[] = [];
//     let lastNumber = 0;
//     for (let i = 0; i < length; i++) {
//         lastNumber += Math.floor(Math.random() * 10) + 1; // random increment between 1 and 10
//         numbers.push(lastNumber);
//     }
//     return numbers;
// }

const FeedsList: React.FC = () => {
    const feeds: FeedEntry[] = feedsData;
    //const incrementTimes = generateRandomListOfNumbers(feeds.length);

    return (
        <ul id="feedsList" className="recent-feed-list">
            {feeds.map((feed, index) => (
                <FeedItem  key={index} website={feed.website} bustedBy={feed.bustedBy} name={feed.name} age={feed.age} location={feed.location} time={(index *8 +3)} avatar={feed.avatar} />
            ))}
        </ul>
    );
}

export default FeedsList;