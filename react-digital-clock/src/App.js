import React from 'react';
import './App.css';
import './index.css';
import Clock from './Clock';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Fredoka One', 'cursive'],
  },
});

const styles = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerStyle: {
    fontFamily: 'sans-serif',
    fontSize: '50px',
    color: 'white',
    textShadow: '2px 2px #000000',
    webkitTextStrokeWidth: '3.5px',
    webkitTextStrokeColor: 'black',
  },
  iconStyle: {
    fontSize: '50px',
    marginRight: '10px',
    color: '#0099ff',

    textShadow: '1.5px 2px #000000',
  },
};

const App = () => (
  <div style={styles.containerStyle}>
    <Clock color='#067678' />
  </div>
);

export default App;
