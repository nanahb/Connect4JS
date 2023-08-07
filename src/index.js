import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/game.js';

const App = () => {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '160px',
    background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(47,47,184,1) 35%, rgba(0,212,255,1) 100%)',
    backgroundRepeat: 'repeat',
    width: '100%',
    minHeight: '100vh',
  }
  return <div style={style}><Game></Game></div>;
};

ReactDOM.render(<App style={{background: 'radial-gradient(circle, rgba(2,0,36,1) 0%, rgba(47,47,184,1) 35%, rgba(0,212,255,1) 100%)',
}}/>, document.getElementById('root'));