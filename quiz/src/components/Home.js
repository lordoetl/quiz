import React, { Fragment } from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'


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
                            <Link className='play-button' to="/play/instructions">Play</Link>
                        </li>
                    </ul>
                </div>
                <div className="auth-container">
                    <Link to="/login" className="auth-buttons" id="login-button"> Login</Link>
                    <Link to="/register" className="auth-buttons" id="signup-button"> Register</Link>
                </div>
            </section>
           1
            </div>
        </Fragment>

        
    )
;

export default Home;