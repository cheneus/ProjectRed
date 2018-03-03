import React from 'react';
import './Welcome.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import QuizApp from '../../pages/Quiz'


const Welcome = () => (
	<div>
		<img src="/mytraveLlama.jpg" alt="logo" />
		<div className="takeQuiz">
			<h3>Take our quiz to see your travel personality type and more!</h3>
	  		<button className='btn btn-primary quizbtn' type='submit'><Link to="quiz">Take me to the quiz</Link></button>
		</div>
	</div>
);

export default Welcome;
