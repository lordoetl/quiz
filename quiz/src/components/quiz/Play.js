import React, {Component, Fragment} from 'react';
import {Helmet} from 'react-helmet'
import questions from '../../question.json'
import isEmpty from '../../utils/is-empty'

class Play extends Component{
    constructor (props) {
        super(props);
        this.state = {
            questions,
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
            time: {}
        };

    }

    componentDidMount () {
        const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state;
        this.displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion);
        // this.startTimer();
    }

    displayQuestions=(questions=this.state.question,currentQuestion, nextQuestion, previousQuestion)=>{
        let { currentQuestionIndex } = this.state;   
        if (!isEmpty(this.state.questions)) {
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];
            const answer = currentQuestion.answer;
            this.setState({
                currentQuestion,
                nextQuestion,
                previousQuestion,
                numberOfQuestions: questions.length,
                answer
            })
        }
    }
    

    increaseCount=()=>{
        this.setState({
            counter:5
        });
    };
    
    render(){
        const { 
            currentQuestion, 
            currentQuestionIndex, 
            fiftyFifty, 
            // hints, 
            numberOfQuestions,
            time 
        } = this.state;
        return(
            <Fragment>
            <Helmet><title>Quiz Page</title></Helmet>
            <Fragment>
                {/* <audio ref={this.correctSound} src={correctNotification}></audio>
                <audio ref={this.wrongSound} src={wrongNotification}></audio>
                <audio ref={this.buttonSound} src={buttonSound}></audio> */}
            </Fragment>
            <div className="questions">
                <h2>Quiz Mode</h2>
                <div className="lifeline-container">
                    <p>
                        <span  className="mdi mdi-set-center mdi-24px lifeline-icon">
                            <span className="lifeline">{fiftyFifty}</span>
                        </span>
                    </p>
                    <p>
                        <span onClick={this.handleHints} className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon">
                            <span className="lifeline"></span>
                        </span>
                    </p>
                </div>
                {/* <div className="timer-container">
                    <p>
                        <span className="left" style={{ float: 'left' }}>{currentQuestionIndex + 1} of {numberOfQuestions}</span>
                        <span className={classnames('right valid', {
                            'warning': time.distance <= 120000,
                            'invalid': time.distance < 30000
                        })}>
                            {time.minutes}:{time.seconds}
                        <span  className="mdi mdi-clock-outline mdi-24px"></span></span>
                    </p>
                </div> */}
                <h5>{currentQuestion.question}</h5>
                <div className="options-container">
                    <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionA}</p>
                    <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionB}</p>
                </div>
                <div className="options-container">
                    <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p>
                    <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionD}</p>
                </div>

                {/* <div className="button-container">
                    <button 
                        className={classnames('', {'disable': this.state.previousButtonDisabled})}
                        id="previous-button" 
                        onClick={this.handleButtonClick}>
                        Previous
                    </button>
                    <button 
                        className={classnames('', {'disable': this.state.nextButtonDisabled})}
                        id="next-button" 
                        onClick={this.handleButtonClick}>
                            Next
                        </button>
                    <button id="quit-button" onClick={this.handleButtonClick}>Quit</button>
                </div> */}
            </div>
        </Fragment>
        )
    }
}

export default Play;