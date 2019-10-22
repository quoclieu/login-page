import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './routes/LoginPage';
import WelcomePage from './routes/WelcomePage';

const App = () => {
  const [username, setUsername] = useState('');
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage setUsername={setUsername} />
        </Route>
        <Route path="/welcome" exact>
          <WelcomePage username={username} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
