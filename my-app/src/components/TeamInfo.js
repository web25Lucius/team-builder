import React , {useState} from 'react';
import TeamCard from './TeamCard';

const [name, setName] = useState(teamArr);
const teamArr = ["Jose", "Caleb", "Donny", "Gabriellia", "Raul", "Tony"];

const TeamInfo = ()=> {
return (
    <div>
    {name.map((teamMember => {
        return <TeamCard firstName={teamMember}/>
    }))}
    </div>
)
}

export default TeamInfo;