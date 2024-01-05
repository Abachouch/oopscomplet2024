import { useState  } from "react"; 
import FeedsList from "./feedsList";
import  FeedStats from "./feedsState";



function Feeds(){
 
  

    return (
        <main className="feed">
        <FeedStats/>
        <section className="recent-feed">
            <h1 className="recent-feed-heading">Today Busted cheaters</h1>
            <FeedsList/>
        </section>
    </main>
    )
}
export default Feeds ;