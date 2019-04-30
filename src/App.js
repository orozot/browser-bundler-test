import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store'
//import logo from './logo.svg';
import Layout from './components/layout'
import Header from './components/header/header'
import MainContent from './components/mainContent'
import Footer from './components/footer'
import './App.css';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
            <Layout header={<Header/>} main={<MainContent/>} footer={<Footer/>}/>
          </div>
        </Provider>
    );
  }
}

export default App;
