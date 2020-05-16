import React from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import TeamInfo from './TeamInfo';
import gandalf from './gandalf.jpg';




const HomeTeam = ()=> {
    return (
        <div className="App-header">
        <Route exact path="/TeamInfo" component={TeamInfo} />
        <h5>&lambda; Welcome<br/>Shall you pass? &lambda;</h5>
            <Link to="/TeamInfo">
                <img src={gandalf} alt="Gandalf awaits you. Click here if you dare."/>
           </Link>
            <h6>Are you a Team Player? </h6>
       </div>
   )
 }

 export default HomeTeam; 

