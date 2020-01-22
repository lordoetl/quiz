import React, { Fragment } from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'

import {withAuthenticator} from 'aws-amplify-react';


const Home = () =>
    (
        <Fragment>
        <Helmet><title>Quiz App - Home</title></Helmet>
            <div id="home">
            <section>
                <div style={{textAlign:'center'}}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>QuizApp</h1>
              
                <div className="play-button-container">
                    <ul>
                        <li >
                            <Link className='play-button' to="/play/instructions">Instructions</Link></li>
                            <br></br>
                        <li>    <Link className='quiz-button' to="/play/Quiz">Python API Quiz</Link>
                        </li>
                    </ul>
                </div>
1
            </section>
           
            </div>
        </Fragment>

        
    )
;

// export default Home;
export default withAuthenticator(Home);