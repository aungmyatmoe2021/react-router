// Learning from React-လို-တို-ရှင်း - အခန်း(၈) - React Basic
// Follow By 
// Name : Aung Myat Moe
// Date : 17 Nov 2024 (11:27 PM)
// Description :  how to create route

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';

const users  =[
  {id : 1, name : 'Alice', gender : 'f'},
  {id : 2, name : 'Bob', gender : 'm'},
  {id : 3, name : 'Tom', gender : 'm'},
  {id : 4, name : 'Mary', gender : 'f'},
]

const Male = props => {
  return(
    <ul>
      {users.filter(u => u.gender == "m").map(u=> <li key={u.id}>{u.name}</li>)}
    </ul>
  )
}

const Female = props => {
  return(
    <ul>
      {users.filter(u => u.gender == "f").map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  )
}

const User = props => {
  const { name } = useParams();
  return <h1>Profile = {name}</h1>
}

const App = props => {
  return(
    <Router>
      <div>
        <ul>
          <li><Link to='/male'>Male</Link></li>
          <li><Link to='/female'>Female</Link></li>
          <li><Link to='/user/Alice'>Alice</Link></li>
          <li><Link to='/user/Bob'>Bob</Link></li>
        </ul>

        <div style={{ background: 'cyan', padding: 20 }}>
          <Routes>
            <Route path="/male" Component={Male}></Route>
            <Route path="/female" Component={Female}></Route>
            <Route path="user/:name" Component={User}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;