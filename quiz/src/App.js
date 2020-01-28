import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home'
import QuizInstructions from './components/quiz/Quizinstructions'
import Play from './components/quiz/Play'
import QuizSummary from './components/quiz/QuizSummary'
import QuizReview from './components/quiz/quizReview'
import CreateQuestion from './components/quiz/createQuestions'

import {withAuthenticator} from 'aws-amplify-react';


function App() {
  return (
    <Router>
     <Route path="/" exact component={Home} />
     <Route path="/play/instructions" component={QuizInstructions}/>
     <Route path="/play/Quiz" component={Play}/>
     <Route path="/play/quizSummary" exact component={QuizSummary} />
     <Route path="/play/quizReview" exact component={QuizReview} />
     <Route path="/play/createQuestions" exact component={CreateQuestion} />
    </Router>
  );
}


export default withAuthenticator(App, {includeGreetings: true});