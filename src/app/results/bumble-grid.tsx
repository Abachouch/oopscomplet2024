import Image from "next/image";
import { useContext, useEffect, useState } from "react"
import ProfileCard from "./profileCard";

import profilesData from '../data/profiles.json'
import NoItems from "./noitems";
import { ResultContext } from "../context/result-context";

type profileEntry = {
    id: number
    age: number,
    name: string,
    gender: string,
    location: string,
    avatar: string,
    website: string,
    hobbies: string[],
}

export default function BumbleGrid() {

    const {bumbleProfiles , selectedBumbleProfile , selectProfile , loadMore , hideProfile , states} = useContext(ResultContext)
    

    const showDetails = (profileId: number) => {
        // navigate to the details page
        window.location.href = '/details/' + profileId;
    }

    useEffect(() => {
        loadMore('bumble')
    }, [])

    return (

        (bumbleProfiles.length > 0) ? (

            <div>
                {
                    (!selectedBumbleProfile) ?

                        (
                            <div>


                                <div className="finalresult-grid">

                                    {bumbleProfiles.map((result, index) => (
                                        <ProfileCard key={index} avatar={result.avatar} profileId={result.id} onCancel={() => {
                                            // remouve the profile from the list
                                            hideProfile(result.id , 'bumble')
                                        }}
                                            onSelect={() => {
                                                selectProfile(result , 'bumble')
                                            }} />
                                    )
                                    )
                                    }
                                </div>
                                    
                                    {
                                        (bumbleProfiles.length < states.bumble ) &&
                                        <button className="finalresult-loadmore" onClick={() => {
                                            //loadMore()
                                        }}>load more
                                        </button>}
                            </div>
                        )

                        :
                        (<div>
                            <figure className='h-80 group relative cursor-pointer' onClick={() => {
                                showDetails(selectedBumbleProfile.id)
                            }}>
                                <Image className='rounded-lg h-80 w-auto' height={320} width={190} style={{ objectFit: "cover" }} src={selectedBumbleProfile.avatar} alt={"avatar"} />
                            </figure>
                        </div>)

                }
            </div>
        )
            :
            <NoItems />
    )
}