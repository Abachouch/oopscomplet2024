'use client'

import { createContext, use, useEffect, useState } from 'react'
import dummyProfilesData from '../data/profiles.json'
import Image from 'next/image'
import ProfileCard from './profileCard'
import TinderGrid from './tinder-grid'
import BumbleGrid from './bumble-grid'
import HingeGrid from './hinge-grid'

import { ResultContext } from '../context/result-context'
import { usePathname, useRouter } from 'next/navigation'
import { Router } from 'next/router'


type profileEntry = {
    id: number
    age: number,
    name: string,
    gender: string,
    location: string,
    avatar: string,
    website: string,
    screenshots : string[]
    hobbies: string[],
}

type states = {
    hinge: number,
    bumble: number,
    tinder: number
}

export default function ResultGrid() {

    const [tinderProfiles, setTinderProfiles] = useState<profileEntry[]>([])
    const [bumbleProfiles, setBumbleProfiles] = useState<profileEntry[]>([])
    const [hingeProfiles, setHingeProfiles] = useState<profileEntry[]>([])
    const [selectedTinderProfile, setSelectedTinderProfile] = useState<profileEntry | null>(null)
    const [selectedBumbleProfile, setSelectedBumbleProfile] = useState<profileEntry | null>(null)
    const [selectedHingeProfile, setSelectedHingeProfile] = useState<profileEntry | null>(null)

    const [tinderPagination, setTinderPagination] = useState(1);
    const [bumblePagination, setBumblePagination] = useState(1);
    const [hingePagination, setHingePagination] = useState(1);


    const hideProfile = (profileId: number , website :string) => {
    }

    const loadMore =async (website: string) => {
        // const res = await fetch('/api/v1/search/profile', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json'
        //     },
        //     body : JSON.stringify({
        //         website,
        //         pagination : website === 'tinder' ? tinderPagination : website === 'bumble' ? bumblePagination : hingePagination
        //     })
        // })
        // const data = await res.json();
        // console.log(data)
        // if (website === 'tinder') {
        //     setTinderProfiles([...tinderProfiles, ...data.profiles])
        //     setTinderPagination(tinderPagination + 1)
        // }
        // if (website === 'bumble') {
        //     setBumbleProfiles([...bumbleProfiles, ...data.profiles])
        //     setBumblePagination(bumblePagination + 1)
        // }
        // if (website === 'hinge') {
        //     setHingeProfiles([...hingeProfiles, ...data.profiles])
        //     setHingePagination(hingePagination + 1)
        // }
    }

    const selectProfile = (profile: profileEntry , website:string) => {
    }

    
    const [activeFilter, setActiveFilter] = useState<'tinder' | 'bumble' | 'hinge'>("tinder");

    const [states, setStates] = useState<states>({ tinder: 0, bumble: 0, hinge: 0 })

    const filter = (filter: 'tinder' | 'bumble' | 'hinge') => {
        setActiveFilter(filter)
    }
    const path = usePathname()
    useEffect(() => {

        history.pushState(null, '', path);
        
        window.addEventListener('popstate', function (event) {
            history.pushState(null, '', path);
        });
        
console.log("useEffect")
        const handleBeforeUnload = (event:any) => {
            const message = 'Are you sure you want to leave?';
            event.returnValue = message; // Standard for most browsers
            return message; // For some older browsers
          };

          window.addEventListener('beforeunload', handleBeforeUnload);
          
        const jwt = {
            idUser: '1',
            idQuery: '1',
        }
        const fetchStates = async () => {
            const res = await fetch('/api/search/states', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    jwt
                })
            })
            const data = await res.json();
            setStates(data);
        }
        //fetchStates();

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
          };
    }, [])
    return (
        <>
                <header className="finalresult-header">
                    <div>
                        <h1 className="finalresult-heading"> {states.bumble + states.hinge + states.tinder} profile found</h1>
                        <p className="finalresult-subheading">We found many profile with your search criteria</p>
                    </div>
                    <div className="finalresult-filter-wraper" >
                        <button className={`finalresult-filter ${activeFilter === 'tinder' ? 'active' : ''}`} onClick={() => filter('tinder')}>Tinder ( {states.tinder} )</button>
                        <button className={`finalresult-filter ${activeFilter === 'bumble' ? 'active' : ''}`} onClick={() => filter('bumble')}>Bumble ({states.bumble})</button>
                        <button className={`finalresult-filter ${activeFilter === 'hinge' ? 'active' : ''}`} onClick={() => filter('hinge')}>Hinge ({states.hinge})</button>
                    </div>
                </header>
                <ResultContext.Provider value={ {tinderProfiles , bumbleProfiles , hingeProfiles, selectedBumbleProfile , selectedHingeProfile , selectedTinderProfile  , loadMore , selectProfile  , states , hideProfile}   } >
                    {activeFilter === 'tinder' ? <TinderGrid /> : ''}
                    {activeFilter === 'bumble' ? <BumbleGrid /> : ''}
                    {activeFilter === 'hinge' ? <HingeGrid /> : ''}
                </ResultContext.Provider>
        </>
    )
}