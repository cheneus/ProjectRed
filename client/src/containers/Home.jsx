import React from 'react';
import './Welcome.css';
import {Link} from 'react-router-dom'


const HomePage = () => (
    <div className="back">
    <img src="/img/logo_resize.png" alt="logo" className="wlogo img-fluid mx-auto d-block"/>
    <h1 className="display-3">Welcome to my traveLlama</h1>
      <div className="takeQuiz">
        <h2>Take our quiz to see your travel personality type and more!</h2>
          <Link to="quiz" className='btn btn-primary quizbtn'>Take me to the quiz</Link>
      </div>
    </div>
);

export default HomePage;