'use client';
import { useEffect, useState } from "react";
import feeds from '../data/feed.json' ;
import Link from "next/link";

type recentFeed = { name: string, age: string, location: string, avatar: string, time: number }

export default function HomeRecent() {

  const [animationClass, setAnimationClass] = useState('animate-show');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentFeed , setCurrentFeed] = useState<recentFeed>()
  const [recentFeeds] = useState<recentFeed[]>(feeds)
  const [isElementVisible, setElementVisibility] = useState(true);

  function getFirstName(fullName:string) {
    // Split the full name into an array of words
    const nameParts = fullName.split(' ');
  
    // Take the first element (the first name)
    const firstName = nameParts[0];
  
    return firstName;
  }

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      // Calculate the distance from the bottom of the page
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);

      // Set visibility based on the distance from the bottom
      setElementVisibility(distanceFromBottom > 200); // Adjust the threshold as needed
    };

    const interval = setInterval(() => {
      setAnimationClass('animate-hide')
      setTimeout(() => {
        setCurrentIndex((currentIndex+1) % recentFeeds.length)
        setCurrentIndex((prevIndex) => (prevIndex + 1) % recentFeeds.length);
        setAnimationClass('animate-show')
      }, 10000); // Hide for 10 seconds before showing the next record
    }, 30000); // Show each record for 30 seconds

    setCurrentFeed(recentFeeds[currentIndex])
    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval)
    };

  }, [recentFeeds.length , currentIndex , recentFeeds]);

 return (currentFeed && isElementVisible)?
   (
    <div id="recentlyBustedCard" className={"hero-recent recent " + animationClass} >
      <img src={currentFeed.avatar} alt="mike Johson photo" className="recent-avatar" />
      <span className="recent-name">
        <span className="recent-first-name">{ getFirstName(currentFeed.name)  } ,  </span> 
        <span className="recent-age" >{currentFeed.age}</span>
      </span>

      <span className="recent-address">{currentFeed.location}</span>
      <Link href={"feeds"} className="recent-time">
        Busted <span className="recent-minutes">{currentFeed.time}</span>  mins ago <span className="recent-time-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="12" fill="#F51600" />
          <mask id="mask0_291_1508" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
            <rect x="4" y="4" width="16" height="16" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_291_1508)">
            <path
              d="M13.6532 12.0011L8.75317 7.10106C8.5865 6.93439 8.50594 6.73717 8.5115 6.50939C8.51705 6.28161 8.60317 6.08439 8.76983 5.91772C8.9365 5.75106 9.13372 5.66772 9.3615 5.66772C9.58928 5.66772 9.7865 5.75106 9.95317 5.91772L15.0698 11.0511C15.2032 11.1844 15.3032 11.3344 15.3698 11.5011C15.4365 11.6677 15.4698 11.8344 15.4698 12.0011C15.4698 12.1677 15.4365 12.3344 15.3698 12.5011C15.3032 12.6677 15.2032 12.8177 15.0698 12.9511L9.9365 18.0844C9.76983 18.2511 9.57539 18.3316 9.35317 18.3261C9.13094 18.3205 8.9365 18.2344 8.76983 18.0677C8.60317 17.9011 8.51983 17.7038 8.51983 17.4761C8.51983 17.2483 8.60317 17.0511 8.76983 16.8844L13.6532 12.0011Z"
              fill="white" />
          </g>
        </svg>
        </span> </Link>
    </div>
  )
  :(
    <div></div>
  )
}