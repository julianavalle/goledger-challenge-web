import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

import { Container, Menu } from './styles';

const Header: React.FC = () => {
  return(
    <Container>
      <img className="logo" src={logo} alt="GoLegder" style={{ width: "10%", marginLeft: "10%"}}/> 
      
      <Menu>
        <Link to="/artistas">
          Artistas 
        </Link>

        <Link to="/albuns">
          Albuns 
        </Link>

        <Link to="/streaming">
          Streaming  
        </Link>
        
      </Menu>
    </Container>
  );

}

export default Header;