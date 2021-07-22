import React, { useContext } from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cardapio from './pages/Cardapio';
import SideBar from './components/SideBar';
import Store from './component-provider/Store';
import Footer from './components/Footer';
import QuemSomos from './pages/Quem-somos';


function App() {
  
  return (   
    <Store>
      <div className="App">
        <div className="App-menu">
          <NavBar />
        </div>        
        <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/cardapio" exact>
                <Cardapio />
              </Route>
              <Route path="/quem-somos" exact>
                <QuemSomos />
              </Route>
            </Switch>
          </div>
          <SideBar />
        </div>
        <Footer />
      </div>
    </Store> 
  );
}

export default App;
