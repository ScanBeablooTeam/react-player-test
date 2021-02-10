import scan_logo from './scan.png';
import beabloo_logo from './beabloo.png';
import './App.css';
import { 
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import { Company } from './components';

function App() {
  return (
    <Router>
      <div className='App'>

        <p>choose an option</p>
        <ul>
          <li><Link to='scan' >Scan Computers</Link></li>
          <li><Link to='beabloo' >Beabloo</Link></li>
        </ul>

        <Switch>
          <Route path='/scan'>
            <Company text='Scan Computers' image={ scan_logo } />
          </Route>

          <Route path='/beabloo'>
            <Company text='Beabloo' image={ beabloo_logo } />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
