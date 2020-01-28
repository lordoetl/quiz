import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import M from 'materialize-css';
import classnames from 'classnames';
import {withAuthenticator} from 'aws-amplify-react';
import {API, graphqlOperation} from 'aws-amplify';

import {createQuestion} from '../../graphql/mutations'

import questions from '../../question.json';
import isEmpty from '../../utils/is-empty';

import correctNotification from '../../assets/audio/correct-answer.mp3';
import wrongNotification from '../../assets/audio/wrong-answer.mp3';
import buttonSound from '../../assets/audio/button-sound.mp3';

class createQuestions extends Component {
    state={
        questions: [
            {
                "question": "What dependencies are used for calling and viewing API data?",
                "optionA": "Pandas and JSON",
                "optionB": "Numpy and Pandas",
                "optionC": "requests and JSON",
                "optionD": "requests and Pandas",
                "answer": "requests and JSON",
                "explanation": "the requests library give us access to the 'get' method and JSON library allows us to view and parse the json return."
            },

            {
                "question": "Given the following: data={'birth_year':'1990','name':'Bob'} How would you retrieve the value of 'name'?",
            
                "optionA": "name=",
                "optionB": "data.name",
                "optionC": "name['data']",
                "optionD": "data['name']",
                "answer": "data['name']",
                "explanation": "data['name'] will call the variable and the 'name' property"
            },
        
            {
                "question": "It is safe to assign an API key to a variable in your jupyter notebook.",
            
                "optionA": "True",
                "optionB": "False",
                "optionC": "Do Not Select",
                "optionD": "Do Not Select",        
        
                "answer": "False",
                "explanation": "Particularly if you intend to upload the notebook to Git.  Best to store your key in a seperate file."
            }
        ],
        
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: '',
            numberOfQuestions: 0,
            numberOfAnsweredQuestions: 0,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            hints: 5,
            fiftyFifty: 2,
            usedFiftyFifty: false,
            nextButtonDisabled: false,
            previousButtonDisabled: true,
            previousRandomNumbers: [],
            time: {},
    
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         questions,
    //         currentQuestion: {},
    //         nextQuestion: {},
    //         previousQuestion: {},
    //         answer: '',
    //         numberOfQuestions: 0,
    //         numberOfAnsweredQuestions: 0,
    //         currentQuestionIndex: 0,
    //         score: 0,
    //         correctAnswers: 0,
    //         wrongAnswers: 0,
    //         hints: 5,
    //         fiftyFifty: 2,
    //         usedFiftyFifty: false,
    //         nextButtonDisabled: false,
    //         previousButtonDisabled: true,
    //         previousRandomNumbers: [],
    //         time: {}
    //     };
        interval: null,
        correctSound: React.createRef(),
        wrongSound: React.createRef(),
        buttonSound: React.createRef()
    }

    handleAddQuestion= async event =>{
        event.preventDefault();
        const input = {
            "question": "It is safe to assign an API key to a variable in your jupyter notebook.",
            "optionA": "True",
            "optionB": "False",
            "optionC": "Do Not Select",
            "optionD": "Do Not Select",
            "answer": "False",
            "explanation": "Particularly if you intend to upload the notebook to Git.  Best to store your key in a seperate file.",
            "topic": "pythonapi"
          }
        await API.graphql(graphqlOperation(createQuestion, {
          input
        }))
        
    }

    render () {
        const { 
            currentQuestion, 
            currentQuestionIndex, 
            fiftyFifty, 
            hints, 
            numberOfQuestions,
            time 
        } = this.state;

        return (
            <Fragment>
                <Helmet><title>CreateQuestion Page</title></Helmet>

                <div className="questions">
                    <h2>Create a Question</h2>
                    <button onClick={this.handleAddQuestion}>click me</button>


                </div>
            </Fragment>
        );
    }
}

// export default Play;
export default withAuthenticator(createQuestions);
