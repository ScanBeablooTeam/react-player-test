import scan_logo from './scan.png';
import beabloo_logo from './beabloo.png';
import './App.scss';
import { 
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import { Company } from './components';

function App() {

  const devEnv = process.env.NODE_ENV === 'development' ? '/' : '(/[a-zA-Z]{0,15}/[a-zA-Z0-9]{0,22}/)';

  return (
    <Router>
      <div className='App'>

        <div className='nav'>
          <ul>
            <Link to='scan' ><li><p>Scan Computers</p></li></Link>
            <Link to='beabloo' ><li><p>Beabloo</p></li></Link>
          </ul>
        </div>

        <Switch>
          <div className='flex-grid'>
            <Route path={`${ devEnv }scan`}> 
              <Company text='Scan Computers' image={ scan_logo } />
            </Route>

            <Route path={`${ devEnv }beabloo`}> 
              <Company text='Beabloo' image={ beabloo_logo } />
            </Route>
          </div>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
