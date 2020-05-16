import React from 'react';
import HomeTeam from './components/HomeTeam';
import './App.css';
import TeamInfo from './components/TeamInfo';
// import TeamForm from './components/TeamForm';
import { Route } from 'react-router-dom';



function App() {
  return (
    <div>
       <Route exact path="/">
         <HomeTeam />
      </Route>
      <Route exact path="/TeamInfo">
        <TeamInfo />
      </Route>
      
    </div>
  );
}

export default App;






























// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
