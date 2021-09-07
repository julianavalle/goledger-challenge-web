import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';
import Artistas from './pages/Artistas';
import Albuns from './pages/Albuns';
import Streaming from './pages/Streaming';
import Search from './components/Search';


function App() {
  return (
    
    <BrowserRouter>

      <Header>
      </Header>
      <Search>
      </Search>
      
      <Route component={Artistas} path="/artistas" />
      <Route component={Albuns} path="/albuns" />
      <Route component={Streaming} path="/streaming" />

      <GlobalStyles />

    </BrowserRouter>
  );
}

export default App;
