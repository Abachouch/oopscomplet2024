'use client'

import data from '../../data/profiles.json';
import { useEffect, useState } from "react";
import mapHolder from "../../../../public/images/map.png"
import Image from 'next/image';
import { profile } from 'console';
import moment from 'moment';

type userEntry = {
    id: string,
    name: string,
    age: string,
    location: string,
    gender: string,
    avatarUrl: string,
    screenshotes: string[] ,
    website: string,
    bustedAt: string,
    lastActive: string,
    hobbies: string[],
}

export default function Info() {
    const [profile, setProfile] = useState<userEntry>({ name: '', age: "", location: "", hobbies: [], website: '', gender: "", avatarUrl: "", bustedAt: "", screenshotes: [] , id : '' , lastActive : '' })

    useEffect(() => {
        // fetch profile from api/search/profile[profileId]
        const fakeProfileID = 1;
        const fetchProfile = async () => {
            const res = await fetch(`/api/search/profile/${fakeProfileID}` , {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({id : fakeProfileID ,
                jwt : localStorage.getItem('jwt') || 'jwt'}
                )
            });
            const data = await res.json();
            console.log(data);
            if(data.error){
                alert(data.error);
                return;
            }
            if(data.selectedProfile){
                setProfile(data.selectedProfile)
            }
        }

        fetchProfile();

    }, [])
    return (
        <>
            <div className="detail-slider">
                <div className="detail-slides">
                    {

                        profile.screenshotes.map((screenshot, index) => (
                            <div key={index} className="detail-slide">
                                <Image className='detail-slide-image' src={screenshot} width={612} height={1360} alt="profile" />
                            </div>
                        ))
                    }
                   

                </div>
            </div>
            <div className="detail-content">
                <div className="detail-card shadow-md">
                    <header className="detail-header">
                        <div className='flex gap-2 items-baseline'>
                            <h1 className="detail-name">{profile.name} , {profile.age}</h1>
                            <span className="detail-address">LA. California</span>
                        </div>
                        <span className="detail-lastactive"> {moment(profile.lastActive).fromNow()} </span>
                    </header>
                   
                    <div className="detail-map-wraper flex-grow min-h-[300px]">
                        <Image className="detail-map object-cover h-full"  src={mapHolder} alt="map" />
                    </div>
                    <div className="detail-labels-list">
                        {
                            profile.hobbies.map(hobby => (
                                <span key={hobby} className="detail-label">{hobby}</span>
                            ))
                        }
                    </div>
                </div>
                <div className="detail-profile rounded-2xl bg-white p-6 flex flex-col justify-between gap-4">
                    <img src={profile.avatarUrl} alt="profile" className='rounded-2xl w-full aspect-square bg-slate-500' />
                    <div className='flex justify-between'>
                        <span className='info-card-name'>
                            {profile.name}
                            {profile.age}
                        </span>
                        <span className='info-card-location'>
                            {profile.location}
                        </span>
                    </div>
                    <div className='flex justify-between'>
                        <div className=' info-card-date-wraper border border-solid border-red-700 rounded-lg grid grid-cols-2 min-w-44'>
                            <div className='bg-[#F04438] text-white info-card-date-heading'>Busted</div>
                            <div className='info-card-date-value'>{moment(profile.bustedAt).format('l')} </div>
                        </div>
                        <div className='info-card-icons'>
                            <a href="profile/download">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_698_4708" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <rect width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_698_4708)">
                                        <path d="M12 16L7 11L8.4 9.55L11 12.15V4H13V12.15L15.6 9.55L17 11L12 16ZM6 20C5.45 20 4.97917 19.8042 4.5875 19.4125C4.19583 19.0208 4 18.55 4 18V15H6V18H18V15H20V18C20 18.55 19.8042 19.0208 19.4125 19.4125C19.0208 19.8042 18.55 20 18 20H6Z" fill="#1C1B1F" />
                                    </g>
                                </svg>
                            </a>
                            <a href="profile/share">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="mask0_698_4711" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                        <rect width="24" height="24" fill="#D9D9D9" />
                                    </mask>
                                    <g mask="url(#mask0_698_4711)">
                                        <path d="M18 22C17.1667 22 16.4583 21.7083 15.875 21.125C15.2917 20.5417 15 19.8333 15 19C15 18.8833 15.0083 18.7625 15.025 18.6375C15.0417 18.5125 15.0667 18.4 15.1 18.3L8.05 14.2C7.76667 14.45 7.45 14.6458 7.1 14.7875C6.75 14.9292 6.38333 15 6 15C5.16667 15 4.45833 14.7083 3.875 14.125C3.29167 13.5417 3 12.8333 3 12C3 11.1667 3.29167 10.4583 3.875 9.875C4.45833 9.29167 5.16667 9 6 9C6.38333 9 6.75 9.07083 7.1 9.2125C7.45 9.35417 7.76667 9.55 8.05 9.8L15.1 5.7C15.0667 5.6 15.0417 5.4875 15.025 5.3625C15.0083 5.2375 15 5.11667 15 5C15 4.16667 15.2917 3.45833 15.875 2.875C16.4583 2.29167 17.1667 2 18 2C18.8333 2 19.5417 2.29167 20.125 2.875C20.7083 3.45833 21 4.16667 21 5C21 5.83333 20.7083 6.54167 20.125 7.125C19.5417 7.70833 18.8333 8 18 8C17.6167 8 17.25 7.92917 16.9 7.7875C16.55 7.64583 16.2333 7.45 15.95 7.2L8.9 11.3C8.93333 11.4 8.95833 11.5125 8.975 11.6375C8.99167 11.7625 9 11.8833 9 12C9 12.1167 8.99167 12.2375 8.975 12.3625C8.95833 12.4875 8.93333 12.6 8.9 12.7L15.95 16.8C16.2333 16.55 16.55 16.3542 16.9 16.2125C17.25 16.0708 17.6167 16 18 16C18.8333 16 19.5417 16.2917 20.125 16.875C20.7083 17.4583 21 18.1667 21 19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22ZM18 6C18.2833 6 18.5208 5.90417 18.7125 5.7125C18.9042 5.52083 19 5.28333 19 5C19 4.71667 18.9042 4.47917 18.7125 4.2875C18.5208 4.09583 18.2833 4 18 4C17.7167 4 17.4792 4.09583 17.2875 4.2875C17.0958 4.47917 17 4.71667 17 5C17 5.28333 17.0958 5.52083 17.2875 5.7125C17.4792 5.90417 17.7167 6 18 6ZM6 13C6.28333 13 6.52083 12.9042 6.7125 12.7125C6.90417 12.5208 7 12.2833 7 12C7 11.7167 6.90417 11.4792 6.7125 11.2875C6.52083 11.0958 6.28333 11 6 11C5.71667 11 5.47917 11.0958 5.2875 11.2875C5.09583 11.4792 5 11.7167 5 12C5 12.2833 5.09583 12.5208 5.2875 12.7125C5.47917 12.9042 5.71667 13 6 13ZM18 20C18.2833 20 18.5208 19.9042 18.7125 19.7125C18.9042 19.5208 19 19.2833 19 19C19 18.7167 18.9042 18.4792 18.7125 18.2875C18.5208 18.0958 18.2833 18 18 18C17.7167 18 17.4792 18.0958 17.2875 18.2875C17.0958 18.4792 17 18.7167 17 19C17 19.2833 17.0958 19.5208 17.2875 19.7125C17.4792 19.9042 17.7167 20 18 20Z" fill="#1C1B1F" />
                                    </g>
                                </svg>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}