import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
// import M from 'materialize-css';
import classnames from 'classnames';

import questions from '../../question.json';
import isEmpty from '../../utils/is-empty';
import {withAuthenticator} from 'aws-amplify-react';
import { API, graphqlOperation } from 'aws-amplify';
import queryString from 'query-string';
import {listQuestions} from '../../graphql/queries'

// import correctNotification from '../../assets/audio/correct-answer.mp3';
// import wrongNotification from '../../assets/audio/wrong-answer.mp3';
// import buttonSound from '../../assets/audio/button-sound.mp3';

class quizReview extends Component {
 
        state = {
            questions:[],
            currentQuestion: {},
            nextQuestion: {},
            previousQuestion: {},
            answer: '',
            explanation:'',
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

    

    async componentDidMount () {
        const values = queryString.parse(this.props.location.search)
        console.log(values)
        const result = await API.graphql(graphqlOperation(listQuestions, {
            filter: {
                topic: {
                    eq: values.topic
                }
            }
    
        }));
        this.setState({questions:result.data.listQuestions.items})
        const { questions, currentQuestion, nextQuestion, previousQuestion } = this.state;
        this.displayQuestions(questions, currentQuestion, nextQuestion, previousQuestion);
        console.log(result)
        // this.startTimer();
    }

    // componentWillUnmount () {
    //     clearInterval(this.interval);
    // }

    displayQuestions = (questions = this.state.questions, currentQuestion, nextQuestion, previousQuestion) => {
        let { currentQuestionIndex } = this.state;   
        if (!isEmpty(this.state.questions)) {
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];
            // explanation=questions[explanation];
            const answer = currentQuestion.answer;
            this.setState({
                currentQuestion,
                nextQuestion,
                previousQuestion,
                numberOfQuestions: questions.length,
                answer,
                // explanation,
                previousRandomNumbers: []
            }, () => {
                this.showOptions();
                this.handleDisableButton();
            });
        }     
    };

    // handleOptionClick = (e) => {
    //     if (e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
    //         this.correctTimeout = setTimeout(() => {
    //             this.correctSound.current.play();
    //         }, 500);
    //         this.correctAnswer();
    //     } else {
    //         this.wrongTimeout = setTimeout(() => {
    //             this.wrongSound.current.play();
    //         }, 500);
    //         this.wrongAnswer();
    //     }
    // }

    handleNextButtonClick = () => {
        // this.playButtonSound();
        if (this.state.nextQuestion !== undefined) {
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex + 1
            }), () => {
                this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
            });
        }
    };

    handlePreviousButtonClick = () => {
        // this.playButtonSound();
        if (this.state.previousQuestion !== undefined) {
            this.setState(prevState => ({
                currentQuestionIndex: prevState.currentQuestionIndex - 1
            }), () => {
                this.displayQuestions(this.state.state, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
            });
        }
    };

    handleQuitButtonClick = () => {
        // this.playButtonSound();
        if (window.confirm('Are you sure you want to quit?')) {
            this.props.history.push('/');
        }
    };

    handleButtonClick = (e) => {
        switch (e.target.id) {
            case 'next-button':
                this.handleNextButtonClick();
                break;

            case 'previous-button':
                this.handlePreviousButtonClick();
                break;

            case 'quit-button':
                this.handleQuitButtonClick();
                break;

            default:
                break;
        }
        
    };

    // playButtonSound = () => {
    //     this.buttonSound.current.play();
    // };

    // correctAnswer = () => {
    //     M.toast({
    //         html: 'Correct Answer!',
    //         classes: 'toast-valid',
    //         displayLength: 1500
    //     });
    //     this.setState(prevState => ({
    //         score: prevState.score + 1,
    //         correctAnswers: prevState.correctAnswers + 1,
    //         currentQuestionIndex: prevState.currentQuestionIndex + 1,
    //         numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
    //     }), () => {            
    //         if (this.state.nextQuestion === undefined) {
    //             this.endGame();
    //         } else {
    //             this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
    //         }
    //     });
    // }

    // wrongAnswer = () => {
    //     navigator.vibrate(1000);
    //     M.toast({
    //         html: 'Wrong Answer!',
    //         classes: 'toast-invalid',
    //         displayLength: 1500
    //     });
    //     this.setState(prevState => ({
    //         wrongAnswers: prevState.wrongAnswers + 1,
    //         currentQuestionIndex: prevState.currentQuestionIndex + 1,
    //         numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions + 1
    //     }), () => {
    //         if (this.state.nextQuestion === undefined) {
    //             this.endGame();
    //         } else {
    //             this.displayQuestions(this.state.questions, this.state.currentQuestion, this.state.nextQuestion, this.state.previousQuestion);
    //         }
    //     });
    // }
    //showOptions ensure all options that were removed with hints or 50/50 are visible
    showOptions = () => {
        const options = Array.from(document.querySelectorAll('.option'));

        options.forEach(option => {
            option.style.visibility = 'visible';
            
        });

        this.setState({
            usedFiftyFifty: false
        });
    }

    // handleHints = () => {
    //     if (this.state.hints > 0) {
    //         const options = Array.from(document.querySelectorAll('.option')); //convert options list to an array
    //         let indexOfAnswer; // variable to hold index of the answer
    //         //console.log(options)
    //         //assign the index of Answer
    //         options.forEach((option, index) => {
    //             if (option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
    //                 indexOfAnswer = index;
    //             }
    //         });
            
    //         // remove a random "option"
    //         while (true) {
    //             const randomNumber = Math.round(Math.random() * 3); //random num
    //             // verify the random number is NOT our answer and hasn't already been used.
    //             if (randomNumber !== indexOfAnswer && !this.state.previousRandomNumbers.includes(randomNumber)) {
    //                 // loop through each option /index
    //                 options.forEach((option, index) => {
    //                     // if it is equal (and visible) "hide" it. and set the previousRandomNumbers and hints
    //                     if (index === randomNumber) {
    //                         option.style.visibility = 'hidden';
    //                         this.setState((prevState) => ({
    //                             hints: prevState.hints - 1,
    //                             previousRandomNumbers: prevState.previousRandomNumbers.concat(randomNumber)
    //                         }));
    //                     }
    //                 });
    //                 // remember to break
    //                 break;
    //             }
    //             if (this.state.previousRandomNumbers.length >= 3) break;
    //         }
    //     }
    // }
    // this works exactly like hints but will remove 2 options
    // handleFiftyFifty = () => {
    //     if (this.state.fiftyFifty > 0 && this.state.usedFiftyFifty === false) {
    //         const options = document.querySelectorAll('.option');
    //         const randomNumbers = [];
    //         let indexOfAnswer;

    //         options.forEach((option, index) => {
    //             if (option.innerHTML.toLowerCase() === this.state.answer.toLowerCase()) {
    //                 indexOfAnswer = index;
    //             }
    //         });

    //         let count = 0;
    //         do {
    //             const randomNumber = Math.round(Math.random() * 3);
    //             if (randomNumber !== indexOfAnswer) {
    //                 if (randomNumbers.length < 2 && !randomNumbers.includes(randomNumber) && !randomNumbers.includes(indexOfAnswer)) {
    //                         randomNumbers.push(randomNumber);
    //                         count ++;
    //                 } else {
    //                     while (true) {
    //                         const newRandomNumber = Math.round(Math.random() * 3);
    //                         if (!randomNumbers.includes(newRandomNumber) && newRandomNumber !== indexOfAnswer) {
    //                             randomNumbers.push(newRandomNumber);
    //                             count ++;
    //                             break;
    //                         }
    //                     }
    //                 }
    //             }
    //         } while (count < 2);

    //         options.forEach((option, index) => {
    //             if (randomNumbers.includes(index)) {
    //                 option.style.visibility = 'hidden';
    //             }
    //         });
    //         this.setState(prevState => ({
    //             fiftyFifty: prevState.fiftyFifty - 1,
    //             usedFiftyFifty: true
    //         }));
    //     }
    // }

    // startTimer = () => {
    //     const countDownTime = Date.now() + 180000;
    //     this.interval = setInterval(() => {
    //         const now = new Date();
    //         const distance = countDownTime - now;

    //         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //         if (distance < 0) {
    //             clearInterval(this.interval);
    //             this.setState({
    //                 time: {
    //                     minutes: 0,
    //                     seconds: 0
    //                 }
    //             }, () => {
    //                 this.endGame();
    //             });
    //         } else {
    //             this.setState({
    //                 time: {
    //                     minutes,
    //                     seconds,
    //                     distance
    //                 }
    //             });
    //         }
    //     }, 1000);
    // }

    handleDisableButton = () => {
        if (this.state.previousQuestion === undefined || this.state.currentQuestionIndex === 0) {
            this.setState({
                previousButtonDisabled: true
            });
        } else {
            this.setState({
                previousButtonDisabled: false
            });
        }

        if (this.state.nextQuestion === undefined || this.state.currentQuestionIndex + 1 === this.state.numberOfQuestions) {
            this.setState({
                nextButtonDisabled: true
            });
        } else {
            this.setState({
                nextButtonDisabled: false
            });
        }

      }

    // endGame = () => {
    //     alert('Quiz has eneded!');
    //     const { state } = this;
    //     const playerStats = {
    //         score: state.score,
    //         numberOfQuestions: state.numberOfQuestions,
    //         numberOfAnsweredQuestions: state.correctAnswers + state.wrongAnswers,
    //         correctAnswers: state.correctAnswers,
    //         wrongAnswers: state.wrongAnswers,
    //         fiftyFiftyUsed: 2 - state.fiftyFifty,
    //         hintsUsed: 5 - state.hints
    //     };
    //     setTimeout(() => {
    //         this.props.history.push('/play/QuizSummary', playerStats);
    //     }, 1000);
    // }

    render () {
        const { 
            currentQuestion, 
            currentQuestionIndex, 
            fiftyFifty, 
            hints, 
            numberOfQuestions,
            time ,
            explanation
        } = this.state;

        return (
            <Fragment>
                <Helmet><title>Quiz Page</title></Helmet>
                {/* <Fragment>
                    <audio ref={this.correctSound} src={correctNotification}></audio>
                    <audio ref={this.wrongSound} src={wrongNotification}></audio>
                    <audio ref={this.buttonSound} src={buttonSound}></audio>
                </Fragment> */}
                <div className="questions">
                    <h2>Review Mode</h2>
                    {/* <div className="lifeline-container">
                        <p>
                            <span onClick={this.handleFiftyFifty} className="mdi mdi-set-center mdi-24px lifeline-icon">
                                <span className="lifeline">{fiftyFifty}</span>
                            </span>
                        </p>
                        <p>
                            <span onClick={this.handleHints} className="mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon">
                                <span className="lifeline">{hints}</span>
                            </span>
                        </p>
                    </div> */}
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
                        <p className={currentQuestion.optionA===currentQuestion.answer?"right-answer":"option"}>{currentQuestion.optionA}</p>
                        <p  className={currentQuestion.optionB===currentQuestion.answer?"right-answer":"option"}>{currentQuestion.optionB}</p>
                    </div>
                    <div className="options-container">
                        <p  className={currentQuestion.optionC===currentQuestion.answer?"right-answer":"option"}>{currentQuestion.optionC}</p>
                        <p className={currentQuestion.optionD===currentQuestion.answer?"right-answer":"option"}>{currentQuestion.optionD}</p>
                    </div>
                    <div className="explanation">
                        <h3>{currentQuestion.explanation}</h3>
                    </div>
                    <div className="button-container">
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
                    </div>
                </div>
            </Fragment>
        );
    }
}


export default withAuthenticator(quizReview);
