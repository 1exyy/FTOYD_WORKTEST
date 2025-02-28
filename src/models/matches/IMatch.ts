import {ITeam} from "./ITeam.ts";

export enum MatchStatus {
    Scheduled = "Match preparing",
    Ongoing = "Live",
    Finished = "Finished"
}

export interface IMatch {
    time: string;
    title: string;
    homeTeam: ITeam;
    awayTeam: ITeam;
    status: MatchStatus;
    homeScore: number
    awayScore: number;
}

