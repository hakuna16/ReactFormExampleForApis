import React, { Component } from 'react';
import FormPage from './components/FormPage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import 'react-day-picker/lib/style.css';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <FormPage/>
      <Footer/>
      </div>
    );
  }
}

export default App;
