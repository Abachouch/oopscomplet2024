import { createContext } from "react";


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

export const ResultContext = createContext({
    hingeProfiles:[] as profileEntry[],
    bumbleProfiles: [] as profileEntry[],
    tinderProfiles: [] as profileEntry[],
    selectedTinderProfile: {} as profileEntry | null,
    selectedBumbleProfile : {} as profileEntry | null,
    selectedHingeProfile : {} as profileEntry | null,
    hideProfile : (profileId : number, website:string) => {},
    states : {} as states,
    loadMore: (website:string) => {},
    selectProfile: (profile :profileEntry , website:string) => {},
});
