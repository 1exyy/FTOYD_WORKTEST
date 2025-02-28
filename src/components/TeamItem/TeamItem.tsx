import {ComponentPropsWithoutRef, FC} from 'react';
import {ITeam} from "../../models/matches/ITeam.ts";
import Output from "../Output/Output.tsx";

interface ITeamItemProps extends ComponentPropsWithoutRef<'div'> {
    team: ITeam
}

const TeamItem: FC<ITeamItemProps> = ({team, ...rest}) => {
    return (
        <div className="match__more__item" {...rest}>
            {team.players.map((player, index) => (
                <div className="match__more__player" key={player.username + index}>
                    <div className="match__more__player_nickname">
                        <img src="../../assets/avatar_global.png" alt={player.username}/>
                        <span>{player.username}</span>
                    </div>
                    <div className=" match__more__output">
                        <Output title=" Убийств:" value={player.kills}/>
                    </div>
                </div>
            ))}
            <div className=" match__more__team">
                <Output title=" Points:" value={`+${team.points}`}/>
                <Output title=" Место:" value={`${team.points}`}/>
                <Output title=" Всего убийств:" value={team.total_kills}/>
            </div>
        </div>
    );
};
export default TeamItem;