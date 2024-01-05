import { createContext } from "react" ;

type searchQuery = {
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


export const ResultContext = createContext({
    querId : null as number | null,
});
