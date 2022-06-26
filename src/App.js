import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

import './App.css';

import AuthPage from './AuthPage';
import ListPage from './ListPage';
import DetailPage from './DetailPage';
import CreatePage from './CreatePage';
import UpdatePage from './UpdatePage';
import { client } from './services/client';

import { logout } from './services/fetch-utils';

export default function App() {
  const [user, setUser] = useState(client.auth.user());

  async function handleLogout() {
    await logout();
    setUser('');
  }

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/CreateBook">Add New Book</Link>
            </li>
            <li>
              <Link to="/books">List Page</Link>
            </li>
            {
              user && <li>
                <button onClick={handleLogout}>Logout</button>
              </li> 
            }
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/* Route to Auth Page if NOT a user; 
          if a user, redirect to /books */}
          <Route exact path="/">
            {
              !user
                ? <AuthPage setUser={setUser} />
                : <Redirect to="/books" />
            }
          </Route>
          {/* User: Route to List Page; 
          NOT a user, redirect to root/auth page */}
          <Route exact path="/books">
            {
              user
                ? <ListPage />
                : <Redirect to="/" />
            }
          </Route>

          <Route exact path="/books/:id">
            <DetailPage />
          </Route>

          <Route exact path="/CreateBook">
            <CreatePage />
          </Route>

          <Route exact path="/UpdatePage">
            <UpdatePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}