import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import AuthPage from './AuthPage';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';
import { client } from './services/client';



import './App.css';
import { logout } from './services/fetch-utils';


export default function App() {
  //when the user first comes to the site, go see if we already have a user logged in (living in session/local storage). that way we don't force a user to sign in if they were
  const [user, setUser] = useState(client.auth.user());
  


  // async function handleLogoutClick() {
  //   await logout();
  //   setUser('');
  //   history.push('/');
  // }

  return (
    <Router>
      <div>
        {user &&
        
          <ul>
            <li>
              <Link to="/">Sign in</Link>
            </li>
            <li>
              <Link to="/create">Create new book</Link>
            </li>
            <li>
              <Link to="/book/1">Update a book</Link>
            </li>
            <li>
              <Link to="/book">List of books</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
              
            </li>
          </ul>
        }

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            {
              !user
                ? <AuthPage setUser={setUser} />
                : <Redirect to="/book" />
              
            }
          </Route>
          <Route exact path="/book"><ListPage/></Route>
           
          <Route exact path="/create"><CreatePage/></Route> 
            
          <Route exact path="/book/:id" element={UpdatePage} />
            
        </Switch>
      </div>
    </Router>
  );
}

