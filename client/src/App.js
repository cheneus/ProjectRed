import React, { Component } from 'react'
import './App.css'
import Quiz from './components/Quiz/Quiz'
import quizQuestions from './components/Quiz/quizQuestions'
import NavBar from './components/NavBar'
import update from 'react-addons-update'
import Result from './components/Quiz/Result'

class App extends Component {

  constructor(props) {
    super(props);

   this.state = {
     counter: 0,
     history: [],
     questionId: 1,
     question: '',
     answerOptions: [],
     answer: '',
     answersCount: {
       Laidback: 0,
       Tourist: 0,
       Adventurous: 0
     },
     result: '',
     response: []
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount () {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));  

    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

 shuffleArray = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

//chen's code
  componentDidMount() {
   
  };

  setUserAnswer = () => {
    const updatedAnswersCount = update(this.state.answersCount, {
      [this.state.answer]: {$apply: (currentValue) => currentValue + 1}
    });
    this.setState({
      answersCount: updatedAnswersCount,
    });
  }

  handleBackButton = (event) => {
    event.preventDefault()
    console.log("prev")
    const counter = this.state.counter - 1;
    const questionId = this.state.questionId -1;
    this.setState({
      counter: counter,
      questionId: questionId,

      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  handleNextButton = (event) => {
    event.preventDefault()
    console.log("next")
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
     if (this.state.questionId === quizQuestions.length) {
        setTimeout(() => this.setResults(this.getResults()), 300)
      }
      else {
        this.setUserAnswer()
        this.setState({
          counter: counter,
          questionId: questionId,
          question: quizQuestions[counter].question,
          answerOptions: quizQuestions[counter].answers,
          answer: ''
        });
     }
  }


  handleAnswerSelected = (event) => {
    this.setState({
    answer: event.currentTarget.value
  });
  }

  getResults = () => {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults = (result) => {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Tourist' });
    }
  }

   renderQuiz = () => {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        onNextPressed={this.handleNextButton}
        onBackPressed={this.handleBackButton}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }
  
  render() {
    return (
      <div className="App">
        <header>
          <NavBar />
        </header>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default App;
