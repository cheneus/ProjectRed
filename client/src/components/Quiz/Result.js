import React from 'react';
import PropTypes from 'prop-types';

  function Result(props) {
    return (
      <div className="result">
        You are a <strong>{props.quizResult}</strong> Llama!
      </div>
    );
  }

  Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
  };

  export default Result;