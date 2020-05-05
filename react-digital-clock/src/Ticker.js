import React from 'react';
class Ticker extends React.Component {
  state = {};

  formatTime = (t) => {
    return t < 10 ? '0' + t : t;
  };

  getTime = () => {
    this.time = new Date();
    this.h = this.time.getHours();
    this.ampm = this.h >= 12 ? 'pm' : 'am';
    this.h = this.h % 12;
    this.h = this.h ? this.h : 12;
    this.m = this.formatTime(this.time.getMinutes());
    this.s = this.formatTime(this.time.getSeconds());
    this.setState({
      time: this.h + ':' + this.m + ':' + this.s + ' ' + this.ampm,
    });
  };
  render() {
    setInterval(this.getTime, 1000);
    return <div>{this.state.time}</div>;
  }
}

export default Ticker;
