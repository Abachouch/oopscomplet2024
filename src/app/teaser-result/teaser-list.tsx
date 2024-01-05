'use client'

import { useState, useEffect } from 'react';
import SearchSites from './searchSites';

type dummDataEntry = {
    age: string,
    name: string
    gender: string,
    location: string,
    avatar: string
}

const TeasersLists = function () {

    const [states, setStates] = useState({
        hinge: 0,
        bumble: 0,
        tinder: 0
    })

    const [tinderResult, setTinderResult] = useState<dummDataEntry[]>([])
    const [bumbleResult, setBumbleResult] = useState<dummDataEntry[]>([])
    const [hingeResult, setHingeResult] = useState<dummDataEntry[]>([])
    const [queryId, setQuerId] = useState<string>('')
    const [selectedSite, setSelectedSite] = useState('')

    const shortenName = (name: string) => {
        const nameArr = name.split(' ')
        return nameArr[0]
    }

    useEffect(() => {
       
        const searchQuery = {
            name: localStorage.getItem('fullname') || '',
            age: localStorage.getItem('age') || 0,
            gender: localStorage.getItem('gender') || '',
            location: localStorage.getItem('location') || '',
        }

        const fetchData = async () => {
            if (tinderResult.length > 0) return
            if (bumbleResult.length > 0) return
            if (hingeResult.length > 0) return

            // try {
            //     const res = await fetch('/api/search/states', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Accept': 'application/json'
            //         },
            //         body: JSON.stringify({
            //             searchQuery
            //         })
            //     });
            //     const states = await res.json()
            //     setStates(states)
            // }
            // catch (err) {
            //     console.error(err)
            // }

            try {


                const resTeasers = await fetch('/api/v1/search/teasers', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });
                const teasers = await resTeasers.json()

            
                
                setTinderResult(teasers.profiles.tinder);
                setBumbleResult(teasers.profiles.bumble);
                setHingeResult(teasers.profiles.hinge);
                setStates(teasers.states)
            }
            catch (err) {
                console.error(err)
            }
        }

        fetchData()

    }, [])

    return (
        <>
            {/* tinder results */}
            <section className='bg-[#f5140018] p-6 rounded-3xl'>
                <header className="result-header">
                    <svg width="37" height="43" viewBox="0 0 37 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.8435 17.3724C18.9922 14.5637 20.3793 7.24717 19.339 0.520124C19.339 0.277395 19.547 0.104018 19.7551 0.173369C27.5571 3.98767 36.33 12.3098 36.33 24.793C36.33 34.3634 28.9094 42.8242 18.1253 42.8242C14.2773 42.9992 10.4805 41.8877 7.33429 39.6652C4.18808 37.4426 1.87163 34.2356 0.75053 30.5503C-0.370565 26.865 -0.232448 22.9113 1.14308 19.3132C2.51861 15.7152 5.05321 12.6776 8.34684 10.68C8.55489 10.5413 8.8323 10.68 8.8323 10.9228C8.93633 12.2058 9.28308 15.4306 10.7048 17.3724H10.8435Z" fill="#121212" />
                    </svg>
                    <div>
                        <h1 className="result-heading">{states.tinder} Tinder Profile found</h1>
                        <p className="result-subheading">We found many profile with your search criteria </p>
                    </div>
                    {
                        (states.tinder > 0) &&
                        <button onClick={() => {
                            setSelectedSite('tinder')
                        }} className="cta result-cta">See all Tinder profile</button>
                    }
                </header>
                <div className="result-grid-wraper">
                    <div id="resultsList" className="result-grid">
                        {
                            tinderResult.slice(0, 4).map((result, index) => {
                                return (
                                    <a onClick={() => {
                                        setSelectedSite('tinder')
                                    }} key={index} className="result-item-wraper">
                                        <figure className='result-item'>
                                            <img className='result-avatar' src={result.avatar} alt="persone" />
                                            <figcaption className="result-caption">
                                                <h2 className="result-info">{shortenName(result.name)} , {result.age} </h2>
                                                <span className="result-address"> {result.location} </span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                )
                            })
                        }
                        {
                            (states.tinder > 4) ?
                                <div
                                    onClick={() => {
                                        setSelectedSite('tinder')
                                    }} className="result-item-others"
                                >
                                    <div>+{states.tinder - 4} more profiles</div>
                                </div>
                                : ''
                        }
                    </div>
                </div>
            </section>
            <section className='bg-[#f5140018] p-6 rounded-3xl my-4' >
                <header className="result-header">
                    <svg width="44" height="39" viewBox="0 0 44 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M39.5094 0.485025C37.3661 0.475592 35.6589 2.16046 35.6524 4.29043V4.28807C35.6456 5.30107 36.0415 6.27532 36.7529 6.99642C37.4644 7.71752 38.4331 8.12645 39.4461 8.13327C40.459 8.14005 41.4333 7.74419 42.1542 7.03267C42.8751 6.32119 43.284 5.35237 43.291 4.33936C43.2992 2.21706 41.6109 0.493868 39.5094 0.485025ZM33.8228 21.2206C34.5553 20.948 35.2676 20.6241 35.9544 20.2514C36.0181 20.3764 36.0129 20.483 36.0081 20.5815C36.0068 20.608 36.0056 20.6339 36.0057 20.6594V38.0929C36.0057 38.5055 36.0069 38.5055 36.4024 38.5055C36.9065 38.5057 37.4107 38.5053 37.9151 38.505C39.2666 38.504 40.6189 38.503 41.9706 38.512C42.262 38.5138 42.3533 38.4407 42.3533 38.1365C42.3454 30.058 42.3454 21.9793 42.3533 13.9004C42.3541 13.6334 42.2538 13.5272 42.0208 13.44C40.5053 12.8711 38.9915 12.2969 37.4853 11.7044C37.1994 11.5918 37.0727 11.616 36.9295 11.9108C35.8436 14.1392 34.0563 15.3642 31.5881 15.6336C30.6375 15.7376 29.6864 15.7404 28.7347 15.7432C28.4996 15.7439 28.2645 15.7446 28.0294 15.7468C27.6132 15.7533 27.6132 15.7498 27.6132 15.3341V1.43425C27.6132 1.04163 27.612 1.04163 27.223 1.04163H21.7137C21.2721 1.04163 21.2721 1.04281 21.2721 1.49851V15.3371C21.2721 15.7498 21.2716 15.7498 20.8512 15.7498C19.0541 15.7525 17.2568 15.7525 15.4592 15.7498C14.3298 15.7486 13.2062 15.8016 12.0862 15.9738C10.0879 16.2821 8.22919 16.9435 6.571 18.1226C6.55931 18.1309 6.54801 18.1411 6.53648 18.1515C6.49099 18.1923 6.44187 18.2365 6.35112 18.1857V17.8438V1.44074C6.35112 1.04575 6.3505 1.04222 5.96676 1.04222H0.398492C0.00648424 1.04222 0.00648436 1.04693 0.00648436 1.4372C0.0092353 13.6683 0.00707381 25.8995 0 38.1306C0 38.4254 0.0789908 38.515 0.380218 38.515C1.79271 38.5051 3.2069 38.5062 4.621 38.5073C5.06353 38.5076 5.50605 38.5079 5.94851 38.5079C6.35112 38.5079 6.35112 38.5067 6.35112 38.1047C6.35129 37.2429 6.35073 36.3811 6.35018 35.5193C6.34886 33.4853 6.34755 31.4514 6.3558 29.4174C6.35995 28.4659 6.41655 27.5162 6.63524 26.5829C7.05141 24.8149 7.99932 23.4991 9.74654 22.843C10.6321 22.5161 11.5657 22.3382 12.5094 22.3165C14.321 22.2669 16.133 22.2738 17.9452 22.2806C18.9123 22.2842 19.8794 22.2878 20.8465 22.2829C21.268 22.2811 21.268 22.2841 21.268 22.7021C21.2723 27.8459 21.2704 32.9895 21.2621 38.1329C21.2615 38.4277 21.337 38.515 21.6382 38.515C23.0349 38.5047 24.4302 38.5059 25.8252 38.5071C26.2766 38.5075 26.728 38.5079 27.1794 38.5079C27.6115 38.5079 27.6115 38.5073 27.6115 38.0734V22.7598C27.6115 22.7306 27.6123 22.7012 27.6132 22.6718C27.6149 22.6129 27.6166 22.5538 27.6115 22.4951C27.5979 22.3206 27.6657 22.2487 27.8472 22.2487C28.1783 22.2428 28.5089 22.2217 28.8391 22.2006C28.871 22.1986 28.9029 22.1965 28.9349 22.1945C30.6072 22.0843 32.2419 21.7895 33.8228 21.2206Z" fill="#121212" />
                    </svg>
                    <div>
                        <h1 className="result-heading"> {states.hinge} Hinge Profile found</h1>
                        <p className="result-subheading">We found many profile with your search criteria </p>
                    </div>
                    {
                        (states.hinge > 0) &&
                        <button onClick={() => {
                            setSelectedSite('hinge')
                        }} className="cta result-cta">See all Hinge profile</button>
                    }
                </header>
                {/* hinge results */}
                <div className="result-grid-wraper">
                    <div id="resultsList" className="result-grid">
                        {
                            hingeResult.slice(0, 4).map((result, index) => {
                                return (
                                    <a key={index} onClick={() => {
                                        setSelectedSite('hinge')
                                    }} className="result-item-wraper">
                                        <figure className='result-item'>
                                            <img className='result-avatar' src={result.avatar} alt="persone" />
                                            <figcaption className="result-caption">
                                                <h2 className="result-info">{shortenName(result.name)} , {result.age} </h2>
                                                <span className="result-address"> {result.location} </span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                )
                            })
                        }
                        {
                            (states.hinge > 4) ?
                                <div onClick={() => {
                                    setSelectedSite('hinge')
                                }} className="result-item-others">
                                    <div>
                                        <div>
                                            + {states.hinge - 4} more profile
                                        </div>
                                    </div>
                                </div> : ''
                        }
                    </div>
                </div>
            </section>
            <section className='bg-[#f5140018] p-6 rounded-3xl '>
                <header className="result-header">
                    <svg width="47" height="43" viewBox="0 0 47 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M46.1871 20.0006C46.7186 20.9275 46.7186 22.0724 46.1871 22.9993L36.0322 40.5556C35.7696 41.0104 35.3922 41.3883 34.9377 41.6514C34.4832 41.9145 33.9676 42.0537 33.4424 42.0549H13.1328C12.6076 42.0537 12.092 41.9145 11.6375 41.6514C11.183 41.3883 10.8055 41.0104 10.5429 40.5556L0.401755 22.9993C0.138561 22.5435 0 22.0263 0 21.4999C0 20.9736 0.138561 20.4564 0.401755 20.0006L10.5429 2.44432C10.8055 1.9895 11.183 1.61162 11.6375 1.34849C12.092 1.08536 12.6076 0.946202 13.1328 0.944946H33.4424C34.5056 0.944946 35.487 1.51743 36.0322 2.44432L46.1871 20.0006ZM33.5378 24.0761C34.9418 24.0761 36.0868 22.9175 36.0868 21.4999C36.0868 20.0824 34.9418 18.9374 33.5378 18.9374H13.051C12.3695 18.9374 11.716 19.2081 11.2342 19.6899C10.7523 20.1718 10.4816 20.8253 10.4816 21.5068C10.4816 22.1882 10.7523 22.8417 11.2342 23.3236C11.716 23.8054 12.3695 24.0761 13.051 24.0761H33.5242H33.5378ZM26.3954 32.7997C27.7857 32.7997 28.917 31.6548 28.917 30.2372C28.917 28.8196 27.7857 27.661 26.3954 27.661H20.1662C18.7759 27.661 17.6445 28.8196 17.6445 30.2372C17.6445 31.6548 18.7759 32.7997 20.1662 32.7997H26.3817H26.3954ZM17.6445 10.2138C16.2406 10.2138 15.0956 11.3588 15.0956 12.7763C15.0956 14.1939 16.2406 15.3525 17.6445 15.3525H28.9307C30.3346 15.3525 31.4796 14.1939 31.4796 12.7763C31.4796 11.3588 30.3346 10.2138 28.9307 10.2138H17.6445Z" fill="#121212" />
                    </svg>
                    <div>
                        <h1 className="result-heading">{states.bumble} Bumble Profile found</h1>
                        <p className="result-subheading">We found many profile with your search criteria </p>
                    </div>

                    {
                        (states.bumble > 0) &&
                        <button onClick={() => {
                            setSelectedSite('bumble')
                        }} className="cta result-cta">See all Bumble profile</button>
                    }
                </header>
                {/* bumble results */}
                <div className="result-grid-wraper">
                    <div id="resultsList" className="result-grid " >
                        {
                            bumbleResult.slice(0, 5).map((result, index) => {
                                return (
                                    <a key={index} onClick={() => {
                                        setSelectedSite('bumble')
                                    }} className="result-item-wraper ">
                                        <figure className='result-item'>
                                            <img className='result-avatar' src={result.avatar} alt="persone" />
                                            <figcaption className="result-caption">
                                                <h2 className="result-info">{shortenName(result.name)} , {result.age} </h2>
                                                <span className="result-address"> {result.location} </span>
                                            </figcaption>
                                        </figure>
                                    </a>
                                )
                            })
                        }
                        {
                            (states.bumble > 4) ?
                                <div onClick={() => {
                                    setSelectedSite('bumble')
                                }} className="result-item-others">
                                    <div>
                                        +{states.bumble - 4} more profile
                                    </div>
                                </div> : ''
                        }
                    </div>
                </div>
            </section>
            <SearchSites searchQueryId={queryId} preSelectedSite={selectedSite} states={states} hideDialog={() => {
                setSelectedSite('')
            }} />
        </>
    )
}

export default TeasersLists