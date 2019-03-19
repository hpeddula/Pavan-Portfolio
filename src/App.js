import React, { Component } from 'react';
import './App.scss';
import Header from '../src/Components/header/header';
import Body from './Components/body/loader';
import Footer from './Components/footer/loader';
class App extends Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
