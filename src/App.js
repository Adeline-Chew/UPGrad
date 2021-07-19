import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import Job from './pages/jobs';
import Feed from './pages/feed'
import Chat from './pages/chat';
import Event from './pages/event';
import Profile from './pages/profile'
import SideBar from './component/SideBar';

function App() {
  return (
    <Router >
      <SideBar />
      <Switch>
        
        <Route path="/" exact component={Home} />
        <Route path="/jobs" exact component={Job} />
        <Route path="/feed" exact component={Feed} />
        <Route path="/chat" exact component={Chat} />
        <Route path="/event" exact component={Event} />
        <Route path="/profile" exact component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
