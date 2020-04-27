import React, { useState } from 'react';
import LoadingScreen from 'react-loading-screen';
import { BreedingRhombusSpinner } from 'react-epic-spinners';
import styled from 'styled-components';

import Burguer from './components/home/menu';
import './App.css';


function App() {

  const [isLoading, setisLoading] = useState(true);
  
  const goHome = () => {
    setisLoading(false);
  }

  const spinner = <div className="spindiv">
                      <BreedingRhombusSpinner color="black"/>
                      <p onClick={goHome}>Haga click aqui para ingresar</p>
                  </div>;

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;


  return (
    <div className="App">
        <LoadingScreen
      loading={isLoading}
      bgColor='red'
      textColor='black'
      text={spinner}
      > 
      <Burguer/>
        <Wrapper>
          <Title>Probando styled componentss</Title>
        </Wrapper>
      </LoadingScreen>
    </div>
  );
}

export default App;
