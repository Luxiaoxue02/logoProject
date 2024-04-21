import React from 'react'
import logo from '../src/assets/logo.png'

export default class Login extends React.Component {
  render() {
    const backgroundImageStyle={
      backgroundImage: `url(${logo})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center', 
      backgroundSize: 'contain', 
      width: '100vw',
      height: '100vh',
      overflowY: 'scroll', 
    };
    return (
      <div style={backgroundImageStyle}>
    </div>
    );
  }
}