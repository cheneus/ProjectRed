import React from 'react';
import './Welcome.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import QuizApp from '../../pages/Quiz'


const Welcome = () => (
	<div>
	<img src="/mytraveLlama.jpg" alt="logo" className="img-fluid mx-auto d-block"/>
		<div className="takeQuiz">
			<h3>Take our quiz to see your travel personality type and more!</h3>
	  		<Link to="quiz" className='btn btn-primary quizbtn'>Take me to the quiz</Link>
		</div>
	</div>
);

export default Welcome;
