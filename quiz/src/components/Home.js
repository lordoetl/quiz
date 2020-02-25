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
                <h1>Quiz App</h1>
              
                
                <div><Link className='play-button' to="/play/instructions"><span>Instructions</span></Link></div>
                <div className="play-button-container">
                <br></br>
                    <ul> 
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=pythonapi"><span>Python API Quiz</span></Link>
                        </li>
                        <br></br>
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=sql1"><span>SQL Day 1 Quiz</span></Link>
                        </li>
                
                    </ul>
                </div>

            </section>
           <Link className='button-two' to="/play/createQuestions">add questions</Link>
            </div>
        </Fragment>

        
    )
;

// export default Home;
export default withAuthenticator(Home);