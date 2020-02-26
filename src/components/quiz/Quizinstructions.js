import React, { Fragment} from 'react';
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import {withAuthenticator} from 'aws-amplify-react';

import answer from '../../assets/answer.png'
import fiftyFifty from '../../assets/fiftyFifty.PNG'
import hints from '../../assets/hints.PNG'
import options from '../../assets/options.PNG'
const QuizInstructions=()=>(
    <Fragment>
        <Helmet><title>Quiz Instructions - Quiz App</title></Helmet>
        <div className="instructions container">
            <h1>How to play the game</h1>
            <p>Ensure you read the guide</p>
            <ul className="browser-default" id="main-list">
                <li>The game has a duration of 15 mintes and ends as soon as your time elaspes</li>
                <li>Each game consists of 15 questions</li>
                <li>Every question contains 4 options<br/>
                <img src={options} alt="Quiz app options example"/></li>
                <li>Select the option which best answers the question by clicking (or selecting) it.
                <br/><img src={answer} alt="Quiz app answer example"/></li>
                <li>Each game has 2 lifelines:
                    <ul id="sublist">
                        <li>2 50-50 chances</li>
                        <li> 5 hints</li>
                    </ul>
                    </li>
                    <li>
                        Selecting a 50-50 lifeline by clicking the instructions
                        <span className="mdi mdi-set-center mdi-24px lifeline-icon"></span>
                        will remove 2 wrong answers, leaving the correct answer and one incorrect answer.
                        <br></br><img  src={fiftyFifty} alt="Quiz app fiftyFifty example "/>
                    </li>
                    <li>
                        Using a hint by clicking
                        <span className="mdi mdi-lightbulb-on mdi-24px lifeline-icon"></span>
                        will remove one wrong answer leaving two wrong answers and one correct asnwer.  You can use as many hints as possilbe on a single question.
                        <br></br><img src={hints} alt="Quiz app hints example"/>
                    </li>
                    <li>
                        Feel free to quit (or retire from) the game at any time. In that case your score will recieved afterwards
                    </li>
                    <li>
                        The timer starts as soon as the game loads
                    </li>
                    <li>
                        Let's do this if you think you've got what it takes.
                    </li>

            </ul>
            <div>
                <span className="left">
                <Link to="/">No Take Me back</Link>
                </span>
                <span className="right">
                <Link to="/play/Quiz">Let's do this</Link>

                </span>
            </div>
        </div>

    </Fragment>
);

// export default QuizInstructions;
export default withAuthenticator(QuizInstructions);