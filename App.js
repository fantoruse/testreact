  import React from 'react';
import './App.css';
import Header from './Header';
import Instructions from './Instructions';
import Forme from './forme';
import Accueil from './forme';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//pour les routes mais j'ai pas eu le temps
const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Accueil />
        </Route>
      </Switch>
    </Router>
  )
}

const App = () => {
  return (
    <div className="App">
      <Header />
      <Instructions/>
      <MainRouter/>
    </div>
  );
}

export default App;
