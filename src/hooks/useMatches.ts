import {useEffect, useState} from "react";
import {IMatch} from "../models/matches/IMatch.ts";
import {fetchMatches} from "../api/MatchesApi.ts";


export const useMatches = (): {
    isLoading: boolean;
    isError: boolean;
    fetchData: () => Promise<void>;
    matches: IMatch[]
} => {
    const [matches, setMatches] = useState<IMatch[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    const fetchData = async () => {
        setIsLoading(true);
        setIsError(false);
        try {
            const result = await fetchMatches();
            setMatches(result);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            setIsError(true);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {matches, isLoading, isError, fetchData}
}