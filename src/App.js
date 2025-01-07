import React from 'react';
import QuoteGenerator from './components/QuoteGenerator.js';
import './App.scss'


var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      index: 0
    }

    // bind functions to state here
    this.getQuoteIndex = this.getQuoteIndex.bind(this);
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
  }

  // fetch data here using componentDidMount
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then(response => response.json())
    .then(data => this.setState({ quotes: data }), this.assignNewQuoteIndex);
  }

    // create functions here

  getQuoteIndex () {
    if (!this.state.quotes.length) return;
    return Math.floor(Math.random() * this.state.quotes.length);
  } // returns a number


  assignNewQuoteIndex = () => {
  console.log('Button clicked');
  this.setState({index: this.getQuoteIndex()});


  var color = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[color];
    document.getElementById('new-quote').style.backgroundColor = colors[color];
    document.getElementById('x-btn').style.backgroundColor = colors[color];
} // function gets new quote based on getQuoteIndex


// GET request to retrieve a random quote

get getQuote () {
  if (!this.state.quotes.length || !Number.isInteger(this.state.index)) {
    return undefined;
  } 
  return this.state.quotes[this.state.index];
}


  
  render () {
  return (
    <div className='App'>
    <QuoteGenerator getQuoteIndex={this.assignNewQuoteIndex} RandomQuote={this.getQuote} />
    </div>
  )};
}

export default App;