import React, { Component } from 'react';
import './App.css';
import Sentiment from 'sentiment';

const sentiment = new Sentiment();


class App extends Component {

  constructor(props){
  super(props);
  this.state = {
    sentimentScore: null,
    generalSentiment: null;
  };
}

render() {
  return (
    <div className='App'>
      <h2>Text Sentiment Analysis</h2>
      <p>Enter for real-time analysis:</p>
      
    </div>
  )
}
}


export default App;
