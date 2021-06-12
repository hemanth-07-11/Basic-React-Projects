import React, { useState } from 'react';
import './App.css';
import data from './data';
import SingleQuestion from './questions';

function App() {

  const [questions, setQuestions] = useState(data)

  return (
    <div className="app">
      <div className="container">
        <h3>Questions and Answers about Cyber Security</h3>
          <section className='info'>
            {
              questions.map( (question) => {
                return (
                  <SingleQuestion key={question.id} {...question}></SingleQuestion>
                )
              })
            }
          </section>
      </div>
    </div>
  );
}

export default App;
