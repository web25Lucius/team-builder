import React from 'react';
import TeamInfo from './TeamInfo';
import logo from '../logo.svg';


const TeamCard = (props)=> {
    return (
        <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TeamInfo>{props.firstName}</TeamInfo>
          <span> is learning <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
           React
          </a></span>
        </header>
      </div>
    )
}

export default TeamCard; 