import React, { Component} from 'react';
import './App.css';
import Button from './components/Button'


class  App extends Component {
  state = {
    answers:[],
    input: "Enter your question here",
    loading: false,
    text: "Fetch Data",
    showAnswer:""
  }
  fetchData = () =>{
    this.setState({ loading: true})
    
    setTimeout(() => {
      this.setState({ loading: false, showAnswer: this.state.answers[Math.floor(Math.random() * this.state.answers.length)]})
    }, 3000);
  }
componentDidMount(){
  fetch('/answers').then(res => res.json()).then(answers => this.setState({answers}, () => console.log("Data Fetched from Express Server API:", answers)))
}
  render() {
    const { loading } = this.state;
    return( <div className="App">
        <div className="wrapper">
          <div className="row">
          <h3>Ask a Question and click on the button below: to see your answer:</h3>
          </div>
      <div className="row">
<Button handleClick={this.fetchData} className="App-header"  disabled={loading}>
      { loading ?   <div id="loading"> </div>:  this.state.text}
    </Button>   
      </div>
      <div className="answer">
      {this.state.showAnswer}
      </div>
      </div>
    
    
  </div>);
  }
  
}

export default App;
