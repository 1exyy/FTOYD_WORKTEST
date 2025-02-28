import {ComponentPropsWithoutRef, FC} from "react";
import {IMatch, MatchStatus} from "../../models/matches/IMatch.ts";
import Collapse from "../Collapse/Collapse.tsx";
import './MatchItem.scss'
import {clsx} from "clsx";
import TeamItem from "../TeamItem/TeamItem.tsx";

interface IMatchItemProps extends ComponentPropsWithoutRef<'div'> {
    match: IMatch
}

const MatchItem: FC<IMatchItemProps> = ({match, ...rest}) => {
    return (
        <Collapse {...rest}>
            <Collapse.Title>
                <div className="match__item">
                    <div className="match__item__team">
                        <svg width={48} height={48}>
                            <use xlinkHref="#team_avatar"/>
                        </svg>
                        {match.homeTeam.name}
                    </div>
                    <div className="match__item__info">
                        <div className="match__item__score">{match.homeScore}:{match.awayScore}</div>
                        <div className={clsx("match__item__status", match.status.toLowerCase())}>
                            {MatchStatus[match.status as keyof typeof MatchStatus]}</div>
                    </div>
                    <div className="match__item__team">
                        {match.awayTeam.name}
                        <svg width={48} height={48}>
                            <use xlinkHref="#team_avatar"/>
                        </svg>
                    </div>
                </div>
            </Collapse.Title>
            <Collapse.Body className="match__more">
                    <TeamItem team={match.homeTeam}/>
                    <TeamItem team={match.awayTeam}/>
            </Collapse.Body>
        </Collapse>
    );
};

export default MatchItem;