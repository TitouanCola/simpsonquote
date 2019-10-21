import React from 'react';

class Quote extends React.Component {
  constructor() {
    super();
    this.state={quote :"ahah",name:"on s'amuse",image:"bcp"}
  }

  componentDidMount = () => {
    this.fetchQuote();
  }

  fetchQuote = () =>{
    fetch('https://quests.wilders.dev/simpsons-quotes/quotes')
    .then(result => result.json())
    .then((result) => {
      this.setState({
        quote : result[0].quote,
        name : result[0].character,
        image : result[0].image
      })
    })
  }

  render() {
    return(
      <div>
        <p>{this.state.quote}</p>
        <p>{this.state.name}</p>
        <p><img src={this.state.image} alt="quoted character"></img></p>
        <button type="button" onClick={this.fetchQuote}>New Quote !</button>
      </div>
    )
  }
}

export default Quote;