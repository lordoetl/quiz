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
                        {/* <li>
                        <Link className='button-two' to="/play/Quiz?topic=pythonapi"><span>Python API Quiz</span></Link>
                        </li>
                        <hr></hr>
                        <br></br>
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=sql1"><span>SQL Day 1 Quiz</span></Link>
                        </li>
                        
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=sql2"><span>SQL Day 2 Quiz</span></Link>
                        </li>
                       
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=sql3"><span>SQL Day 3 Quiz</span></Link>
                        <hr></hr>
                        </li>
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=advstor1"><span>Advanced Data Storage and Retrieval Day 1 Quiz</span></Link>
                        </li>
                        
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=advstor2"><span>Advanced Data Storage and Retrieval Day 2 Quiz</span></Link>
                        </li>
                       
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=advstor3"><span>Advanced Data Storage and Retrieval Day 3 Quiz</span></Link>
                        <hr></hr>
                        </li>
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=Web1"><span>Web Day 1 Quiz</span></Link>
                        </li>
                        
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=Web2"><span>Web Day 2 Quiz</span></Link>
                        </li>
                       
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=Web3"><span>Web Day 3 Quiz</span></Link>
                        <hr></hr>
                        </li> */}
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=Scrape1"><span>Web Scraping and Document Databases Day 1 Quiz</span></Link>
                        </li>
                        
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=Scrape2"><span>Web Scraping and Document Databases Day 2 Quiz</span></Link>
                        </li>
                       
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=Scrape3"><span>Web Scraping and Document Databases Day 3 Quiz</span></Link>
                        <hr></hr>
                        </li>
                        
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=JavaScript1"><span>JavaScript Day 1 Quiz</span></Link>
                        </li>
                      
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=JavaScript2"><span>JavaScript Day 2 Quiz</span></Link>
                        </li>
  {/*                        
                        <li>
                        <Link className='button-two' to="/play/Quiz?topic=JavaScript3"><span>JavaScript Day 3 Quiz</span></Link>
                        <hr></hr>
                        </li> */} 
                        
                
                    </ul>
                </div>

            </section>
           {/* <Link className='button-two' to="/play/createQuestions">add questions</Link> */}
            </div>
        </Fragment>

        
    )
;

// export default Home;
export default withAuthenticator(Home);