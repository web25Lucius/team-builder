import React from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import TeamInfo from './TeamInfo';
import gandalf from './gandalf.jpg';
import TeamForm from './TeamForm';



const HomeTeam = (props)=> {
    return (
        <div className="App-header">
           <h5>&lambda; Welcome...Shall you pass? &lambda;</h5>
           <Route path="/TeamInfo" component = {TeamInfo} />
           <Link to="/TeamInfo"><img src={gandalf} alt="Gandalf awaits you.  Click here."/></Link>
           <Link to="/TeamInfo"><h6>Are you a Team Player? </h6></Link>
       </div>
   )
 }

 export default HomeTeam; 

 