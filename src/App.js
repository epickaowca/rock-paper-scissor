import React from 'react'
import './App.css';
import View from './View'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-image: radial-gradient(#1f3756, #141539);
  min-height: 100vh;
`

function App() {
  return (
    <Wrapper>
      <View />
    </Wrapper>
  );
}

export default App;
