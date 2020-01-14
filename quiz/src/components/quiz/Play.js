import React, {Component, Fragment} from 'react';
import {Helmet} from 'react-helmet'

class Play extends Component{
    // constructor(props){
    //     super(props);
    //     };
    // }

    increaseCount=()=>{
        this.setState({
            counter:5
        });
    };
    render(){
        return(
            <Fragment>
                <Helmet>
                    <title>Quiz Page
                    </title>
                </Helmet>
                <div className="questions">
                <h2>Quiz Mode</h2>
                    <div className="lifeline-container">
                        <p><span className="mdi mdi-set-center mdi-24px lifeline icon"/>
                        <span className="lifeline">2</span>

                        </p>
                        <p><span className="mdi mdi-lightbulb-on-outline mdi-24px lifeline icon"/>
                        <span className="lifeline">5</span>

                        </p>
                    </div>
                    <div >
                        <p>
                            <span className="left" style={{float:'left'}}>1 of 15</span>
                            <span className="right">2:15</span><span className="mdi mdi-clock-outline mdi-24px "></span>
                        </p>
                    </div>
                    <h1>Google was found?</h1>
                    <div className="options-container">
                        <p className="option">1997</p>
                        <p className="option">1998</p>
                    </div>
                    <div className="options-contaienr">
                        <p className="option">1999</p>
                        <p className="option">1995</p>
                    </div>

                    <div className="button-container">
                        <button>Previous</button>
                        <button>Next</button>
                        <button>Quit</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Play;