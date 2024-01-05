import Image from "next/image";
import { useContext, useEffect, useState } from "react"
import ProfileCard from "./profileCard";
import profilesData from '../data/profiles.json';
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

export default function TinderGrid() {

    const {tinderProfiles , selectedTinderProfile , selectProfile , loadMore , hideProfile , states} = useContext(ResultContext)
    
    const showDetails = (profileId: number) => {
        window.location.href = '/details/' + profileId;
    }

    useEffect(() => {
        loadMore('tinder')
    }, [])
    
    return (
        (tinderProfiles.length > 0) ? (
            <div>
                {
                    (!selectedTinderProfile) ?
                        (
                            <div>
                                <div className="finalresult-grid">
                                    {
                                        tinderProfiles.map((result, index) => (
                                            <ProfileCard key={index} avatar={result.avatar} profileId={result.id} onCancel={() => {
                                               hideProfile(result.id , 'tinder')
                                            }}
                                                onSelect={() => {
                                                    selectProfile(result , 'tinder')
                                                }} />
                                        ))
                                    }
                                </div>

                                {
                                    (tinderProfiles.length < states.tinder ) &&
                                    <button className="finalresult-loadmore" onClick={() => {
                                }}>load more
                                </button>}


                            </div>
                        )
                        :
                        (<div>
                            <figure className='h-80 group relative cursor-pointer max-w-xs' onClick={() => {
                                showDetails(selectedTinderProfile.id)
                            }}>
                                <Image className='rounded-lg h-80 w-auto' height={320} width={190} style={{ objectFit: "cover" }} src={selectedTinderProfile.avatar} alt={"avatar"} />
                                <figcaption >
                                    <button onClick={() => {
                                    }} className='absolute bottom-1 right-1 left-1  py-1 px-7 bg-[#dbf0e667] rounded backdrop-blur-[2] hover:bg-[#dbf0df]  text-[#F8F8F8] hover:text-green-400'>
                                        <svg className='m-auto' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_698_3734" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                                <rect width="24" height="24" fill="#D9D9D9" />
                                            </mask>
                                            <g mask="url(#mask0_698_3734)">
                                                <path d="M9.54961 18.0001L3.84961 12.3001L5.27461 10.8751L9.54961 15.1501L18.7246 5.9751L20.1496 7.4001L9.54961 18.0001Z" className="fill-current" />
                                            </g>
                                        </svg>
                                    </button>
                                </figcaption>
                            </figure>
                        </div>)
                }
            </div>
        )
            :
            <NoItems />
    )
}