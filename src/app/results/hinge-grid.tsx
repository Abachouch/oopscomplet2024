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

export default function HingeGrid() {
    const { hingeProfiles, selectedHingeProfile, selectProfile, loadMore, hideProfile, states } = useContext(ResultContext)

    const showDetails = (profileId: number) => {
        window.location.href = '/details/' + profileId;
    }

    useEffect(() => {
        loadMore('hinge')
    }, [])

    return (
        (hingeProfiles.length > 0) ? (
            <div>
                {
                    (!selectedHingeProfile) ?
                        (
                            <div>
                                <div className="finalresult-grid">
                                    {hingeProfiles.map((result, index) => (
                                        <ProfileCard key={index} avatar={result.avatar} profileId={result.id} onCancel={() => {
                                            // remouve the profile from the list
                                            hideProfile(result.id, 'hinge')
                                        }}
                                            onSelect={() => {
                                                selectProfile(result, 'hinge')
                                            }} />
                                    )
                                    )
                                }
                                </div>
                                {
                                    (hingeProfiles.length < states.hinge) &&
                                    <button className="finalresult-loadmore" onClick={() => {
                                        //loadMore()
                                    }}>load more
                                    </button>
                                }
                            </div>
                        )
                        :
                        (<div>
                            <figure className='h-80 group relative cursor-pointer' onClick={() => {
                                showDetails(selectedHingeProfile.id)
                            }}>
                                <Image className='rounded-lg h-80 w-auto' height={320} width={190} style={{ objectFit: "cover" }} src={selectedHingeProfile.avatar} alt={"avatar"} />
                            </figure>
                        </div>)

                }
            </div>
        )
            :
            <NoItems />
    )
}