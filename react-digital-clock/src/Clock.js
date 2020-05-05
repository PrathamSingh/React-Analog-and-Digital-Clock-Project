import React from 'react';
import Ticker from './Ticker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Fredoka One', 'cursive'],
  },
});

class Clock extends React.Component {
  state = {};

  render() {
    const styles = {
      fontFamily: 'Fredoka One',
      fontSize: '50px',
      maxWidth: '300px',
      padding: '25px',
      borderRadius: '10px',
      border: '5px solid black',
      boxShadow: '10px 10px black',
      textAlign: 'center',
      color: 'white',
      textShadow: '3px 4px #000000',
      WebkitTextStrokeWidth: '3.5px',
      WebkitTextStrokeColor: 'black',
      backgroundColor: this.props.color,
    };

    return (
      <div style={styles}>
        <Ticker />
      </div>
    );
  }
}

export default Clock;
