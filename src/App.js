import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages'
import SideBar from './component/SideBar';
import Job from './pages/jobs';
import Feed from './pages/feed'
import Chat from './pages/chat';
import Event from './pages/event';
import Profile from './pages/profile'

function App() {
  return (
    <Router >
      <SideBar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/jobs" component={Job} />
        <Route path="/feed" component={Feed} />
        <Route path="/chat" component={Chat} />
        <Route path="/event" component={Event} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
