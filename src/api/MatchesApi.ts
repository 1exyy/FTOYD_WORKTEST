import {IMatch} from "../models/matches/IMatch.ts";

export const fetchMatches = async (): Promise<IMatch[]> => {
    try {
        const response = await fetch(`https://app.ftoyd.com/fronttemp-service/fronttemp`, {method: "GET"});
        const data = await response.json();
        return data.data.matches;
    } catch (fetchError) {
        throw fetchError;
    }
}