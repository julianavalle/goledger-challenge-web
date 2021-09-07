import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';
import Artistas from './pages/Artistas';
import Albuns from './pages/Albuns';
import Streaming from './pages/Streaming';


function App() {
  return (
    
    <BrowserRouter>

      <h1>AAAAAAAAAAAAAAAAAAAAAAA</h1>

      <Header>
      </Header> 
      
      <Route component={Artistas} path="/artistas" />
      <Route component={Albuns} path="/albuns" />
      <Route component={Streaming} path="/streaming" />

    </BrowserRouter>
  );
}

export default App;
