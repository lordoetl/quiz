import React, { Fragment } from 'react'
import {Helmet} from 'react-helmet'
import {Link} from 'react-router-dom'

const Home = () =>
    (
        <Fragment>
        <Helmet><title>Quiz App - Home</title></Helmet>
            <div id="home">
            <section>
                <div>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>QuizApp</h1>
                <div className="play-button-container">
                    <ul>
                        <li>
                            <Link to="/play/instructions">Play</Link>
                        </li>
                    </ul>
                </div>
                <div className="auth-container">
                    <Link to="/login">Login</Link>
                    <Link to="/register">register</Link>
                </div>
            </section>
           1
            </div>
        </Fragment>

        
    )
;

export default Home;