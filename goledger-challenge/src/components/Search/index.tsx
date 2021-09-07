import React from 'react';

import { Container, SearchForm } from './styles';

const Search: React.FC = () => {
  return(
    <Container>
      <SearchForm>
        <input placeholder="Buscar"></input>
      </SearchForm>
    </Container>
  );
}

export default Search;