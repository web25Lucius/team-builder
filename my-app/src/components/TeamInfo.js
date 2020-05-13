import React , {useState} from 'react';
import logo from '../logo.svg';

// const teamArr = ["Jose", "Caleb", "Donny", "Gabriellia", "Raul", "Tony"];

const TeamInfo = ()=> {
    const [name, setName] = useState(["Matthew", "Raul"]);
    return (
            <div>
                <header className="App-header">
                {name.map(( teamMember)=> {
                    return (
                            <div>
                            {/* {console.log(teamMember)} */}
                            {/* {props.firstname ? props.firstname : <span>Ramona</span>} */}
                            <p> 
                                <img src={logo} className="App-logo" alt="logo" key={teamMember}/>
                                {teamMember} is learning &nbsp;
                                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">React</a>
                            </p> 
                            </div>
                        )
                })}
                </header>
            </div>
            )

}

export default TeamInfo;