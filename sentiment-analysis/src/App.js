import React, { Component } from 'react';
import './App.css';
import Sentiment from 'sentiment';

const sentiment = new Sentiment();


class App extends Component {

  constructor(props){
  super(props);
  this.state = {
    sentimentScore: null,
    generalSentiment: null
  };
  this.findSentiment = this.findSentiment.bind(this);
}

findSentiment(e){
  e.preventDefault()
  const result = sentiment.analyze(e.target.value)
  // console.log(result)
  this.setState({
    sentimentScore: result.score
  })
  if(result.score < 0) {
    this.setState({
      generalSentiment: "Negative"
    })
  } 
  else if(result.score > 0){
    this.setState({
      generalSentiment: "Positive"
    })
  } else {
    this.setState({
      generalSentiment: "Neutral"
    })
  }
}

render() {
  return (
    <div className='App'>
      <h2>Text Sentiment Analysis</h2>
      <p>Enter for real-time analysis:</p>
      <textarea onChange={this.findSentiment} />
      <p>Sentiment Score: {this.state.sentimentScore}</p>
      <p>General Sentiment: {this.state.generalSentiment}</p>
    </div>
  )
}
}


export default App;
