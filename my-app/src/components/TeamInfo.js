import React , {useState} from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom' 
import HomeTeam from './HomeTeam'
import TeamForm from './TeamForm'
import logo from '../logo.svg';

// const teamArr = ["Jose", "Caleb", "Donny", "Gabriellia", "Raul", "Tony"];

const TeamInfo = ()=> {
    const [name, setName] = useState(["Caleb", "Raul"]);
    return (
            <div>
                <header className="App-header">
                    <h2>The Bedard Bunch</h2>
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
                <TeamForm />
                <Route exact path="/" component={HomeTeam} />
                <h6>Turn back?</h6>
                    <Link to="/">
                     <img src={logo} className="App-logo" alt="logo"/> 
                    </Link>
                <h6> will always bring you Home.</h6>
                </header>
            </div>
            )

}

export default TeamInfo;