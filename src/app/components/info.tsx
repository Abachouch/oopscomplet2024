'use client'

import data from '../data/profiles.json';
import { useEffect, useState } from "react";
import mapHolder from "../../../../public/images/map.png"
import Image from 'next/image';

type userEntry = {
    name: string,
    age: string,
    gender: string,
    location: string,
    avatar: string,
    hobbies: string[],
    website: string
}

export default function Info(){
        const [user, setUser] = useState<userEntry>({ name: '', age: "", location: "", hobbies: [], website: '', gender: "", avatar: "" })
        function getRandomNumber(min: number, max: number) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        useEffect(() => {
            const dname = localStorage.getItem('fullname') || data[getRandomNumber(0 , 30)].name;
            const dlocation = localStorage.getItem('location') || data[getRandomNumber(0 , 40)].location;
            const dage = localStorage.getItem('age') || getRandomNumber( 18,  50).toString();
            setUser(prevData => ({
                ...prevData,
                name: dname,
                location : dlocation ,
                age:dage,
                hobbies :  data[getRandomNumber(0 , 40)].hobbies ,
                website : data[getRandomNumber(0 , 40)].website,
              }));
        }, [])
        return (
            <>
                <div className="detail-slider">
                    <div className="detail-slides">
                        <div className="detail-slide"></div>
                        <div className="detail-slide"></div>
                        <div className="detail-slide"></div>
                    </div>
                </div>
                <div className="detail-content">
                    <div className="detail-card">
                        <header className="detail-header">
                            <h1 className="detail-name">{user.name} , {user.age}</h1>
                            <span className="detail-site">
                                <svg width="86" height="20" viewBox="0 0 86 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M5.89327 8.06597C9.71141 6.74992 10.3613 3.3217 9.87389 0.169695C9.87389 0.0559627 9.97137 -0.0252747 10.0689 0.00722028C13.7245 1.79444 17.8351 5.69384 17.8351 11.5429C17.8351 16.0272 14.3582 19.9916 9.30523 19.9916C7.50219 20.0736 5.72319 19.5528 4.24902 18.5114C2.77485 17.47 1.68946 15.9674 1.16417 14.2406C0.63887 12.5138 0.703585 10.6613 1.3481 8.97536C1.99261 7.28945 3.18021 5.86618 4.72346 4.9302C4.82094 4.86521 4.95092 4.9302 4.95092 5.04394C4.99966 5.64509 5.16214 7.15611 5.82828 8.06597H5.89327Z"
                                        fill="#F51600" />
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M28.6953 16.4332L28.9715 16.1082L29.8326 18.8378L29.7189 18.9515C29.069 19.5527 28.0941 19.8614 26.8431 19.8614H26.7943C25.657 19.8614 24.7634 19.5364 24.146 18.9353C23.5286 18.3179 23.2037 17.3918 23.2037 16.2219V8.78059H21.0103V5.77481H23.2037V2.15163H26.5831V5.77481H29.2639V8.78059H26.5669V15.4908C26.5669 15.7995 26.6481 16.7906 27.5905 16.7906C28.0779 16.7906 28.5328 16.6119 28.6953 16.4169V16.4332ZM30.4825 19.5527V5.79106H33.862V19.5527H30.4825ZM32.156 0.169434C32.557 0.169446 32.949 0.28816 33.2826 0.510612C33.6162 0.733064 33.8765 1.0493 34.0307 1.41946C34.1849 1.78962 34.226 2.19713 34.149 2.59065C34.0719 2.98416 33.8801 3.34606 33.5977 3.63072C33.3153 3.91539 32.9549 4.11009 32.5621 4.19028C32.1692 4.27047 31.7613 4.23256 31.39 4.08133C31.0186 3.9301 30.7003 3.67232 30.4752 3.34048C30.2501 3.00864 30.1283 2.61759 30.125 2.21662C30.125 1.11179 31.0512 0.169434 32.156 0.169434ZM42.9443 5.44986C45.8688 5.44986 47.4773 7.04212 47.4773 9.95041V19.5364H44.0978V10.7628C44.0328 9.20303 43.2854 8.48814 41.6932 8.48814C40.2634 8.48814 39.1099 9.3655 38.525 10.1129V19.5364H35.1455V5.80731H38.525V7.26958C39.4998 6.32723 41.0596 5.48236 42.9443 5.48236V5.44986ZM58.7205 7.22084V0.754343H62.0999V19.5689H58.7205V18.1391C58.2034 18.6846 57.5813 19.1197 56.8916 19.4185C56.2019 19.7173 55.459 19.8734 54.7074 19.8776C51.0192 19.8776 48.5496 16.9856 48.5496 12.68C48.5496 8.35816 51.0192 5.46611 54.7074 5.46611C55.4606 5.46955 56.2051 5.62698 56.8953 5.92874C57.5854 6.2305 58.2065 6.67021 58.7205 7.22084ZM58.7205 10.1291C58.3439 9.6386 57.8626 9.23823 57.3117 8.95717C56.7608 8.67611 56.1542 8.52142 55.536 8.50439C53.4401 8.50439 52.0428 10.1779 52.0428 12.68C52.0428 15.1659 53.4401 16.8393 55.536 16.8393C56.7546 16.8393 58.0868 16.1894 58.7205 15.2471V10.1291ZM69.9962 5.46611C73.9931 5.46611 76.7714 8.55313 76.7714 12.9399V13.8661H66.5517C66.8929 15.7995 68.4202 17.0343 70.4999 17.0343C71.8159 17.0343 73.2619 16.4656 74.0905 15.637L74.318 15.4421L75.9265 17.7492L75.764 17.8954C74.2416 19.2453 72.2568 19.9554 70.2237 19.8776C65.9993 19.8776 63.0261 16.9043 63.0261 12.6637C62.9932 11.7275 63.1499 10.7943 63.4866 9.92008C63.8234 9.04588 64.3334 8.24875 64.9859 7.57653C65.6383 6.90431 66.4199 6.37086 67.2837 6.0082C68.1475 5.64554 69.0756 5.46116 70.0124 5.46611H69.9962ZM66.5355 11.3152H73.4731C73.2782 9.25177 71.5722 8.30942 69.9962 8.30942C67.6241 8.30942 66.7305 10.0966 66.5355 11.3314V11.3152ZM84.9438 5.46611H85.1875V8.87808L84.8951 8.82934C84.6513 8.78059 84.3427 8.7481 84.034 8.7481C82.9454 8.7481 81.4344 9.51173 80.8657 10.3241V19.5364H77.4862V5.79106H80.882V7.31832C82.003 6.1485 83.4815 5.46611 84.9438 5.46611Z"
                                        fill="#F51600" />
                                </svg>
                            </span>
                            <span className="detail-address">LA. California</span>
                        </header>
                        <div className="detail-labels-list">
                            {
                                user.hobbies.map(hobby => (
                                    <span key={hobby} className="detail-label">{hobby}</span>
                                ))
                            }
                        </div>
                        <div className="detail-map-wraper">
                            <Image className="detail-map" src={mapHolder} alt="map" />
                        </div>
                    </div>
                    <div className="detail-quetion">
                        <h2>Is this your partner ?</h2>
                        <p>Please let us know if this is your partner to make sure that let you know when he/she stop using tinder</p>
                        <div className="detail-quetion-buttons">
                            <button className="nothime">is not him</button>
                            <button className="ishime">it is him</button>
                        </div>
                    </div>
                </div>
        </>
        
    )
}