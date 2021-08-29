import './App.css';
import Search from './Search'
import Header from './Header'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/search" component={Search} />
      </Switch> 
      </BrowserRouter>
    </>
  );
}

export default App;
