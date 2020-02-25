import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import M from 'materialize-css';
import classnames from 'classnames';
import {withAuthenticator} from 'aws-amplify-react';
import {API, graphqlOperation} from 'aws-amplify';

import {createQuestion} from '../../graphql/mutations'
import { Form, Button, Input, Notification, Radio, Progress, Dropdown } from "element-react";
import 'element-theme-default';





class createQuestions extends Component {
    state={
        question: "",
        
        optionA: "",
        optionB: "",
        optionC: "",
        optionD: "",
        answer: "",
        explanation: "",
        topic: ""
    }

    handleAddQuestion= async event =>{
        // event.preventDefault();
        const input = {
            "question": this.state.question,
            "optionA": this.state.optionA,
            "optionB": this.state.optionB,
            "optionC": this.state.optionC,
            "optionD": this.state.optionD,
            "answer": this.state.answer,
            "explanation": this.state.explanation,
            "topic": this.state.topic
          }
        await API.graphql(graphqlOperation(createQuestion, {
          input
        }))
        console.log(input)
        
    }

    render () {
        const {
            question ,
            optionA,
            optionB,
            optionC,
            optionD,
            answer,
            explanation,
            topic
        } = this.state;

        return (
        <div className="flex-center">
        <h2 className="header">Add New Question</h2>
        
        <div>
          <Form className="market-header">
            <Form.Item label="Add Question">
              <Input
                type="textarea"
                icon="information"
                placeholder="Question"
                value={question}
                onChange={question => this.setState({ question })}
              />
            </Form.Item>
            <Form.Item label="option A">
              <Input
                type="textarea"
                icon="information"
                placeholder="optionA"
                value={optionA}
                onChange={optionA => this.setState({ optionA })}
              />
            </Form.Item>
            <Form.Item label="option B">
              <Input
                type="textarea"
                icon="information"
                placeholder="optionB"
                value={optionB}
                onChange={optionB => this.setState({ optionB })}
              />
            </Form.Item>
            <Form.Item label="option C">
              <Input
                type="textarea"
                icon="information"
                placeholder="optionC"
                value={optionC}
                onChange={optionC => this.setState({ optionC })}
              />
            </Form.Item>
            <Form.Item label="option A">
              <Input
                type="textarea"
                icon="information"
                placeholder="optionD"
                value={optionD}
                onChange={optionD => this.setState({ optionD })}
              />
            </Form.Item>
            <Form.Item label="Correct Answer">
              <Input
                type="textarea"
                icon="information"
                placeholder="answer"
                value={answer}
                onChange={answer => this.setState({ answer })}
              />
            </Form.Item>
            <Form.Item label="explanation">
              <Input
                type="textarea"
                icon="information"
                placeholder="explanation"
                value={explanation}
                onChange={explanation => this.setState({ explanation })}
              />
            </Form.Item>
            <Form.Item label="topic">
              <Input
                type="text"
                icon="information"
                placeholder="topic"
                value={topic}
                onChange={topic => this.setState({ topic })}
              />
            </Form.Item>

            {/* <Form.Item label="Set Product Price">
              <Input
                type="number"
                icon="plus"
                placeholder="Price ($USD)"
                value={price}
                onChange={price => this.setState({ price })}
              />
            </Form.Item>
            <Form.Item label="Is the Product Shipped or Emailed to the Customer?">
              <div className="text-center">
                <Radio
                  value="true"
                  checked={shipped === true}
                  onChange={() => this.setState({ shipped: true })}
                >
                  Shipped
                </Radio>
                <Radio
                  value="false"
                  checked={shipped === false}
                  onChange={() => this.setState({ shipped: false })}
                >
                  Emailed
                </Radio>
              </div>
            </Form.Item>
            {imagePreview && (
              <img
                className="image-preview"
                src={imagePreview}
                alt="Product Preview"
              />
            )}
            {percentUploaded > 0 && (
              <Progress
                type="circle"
                className="progress"
                percentage={percentUploaded}
              />
            )}
            <PhotoPicker
              title="Product Image"
              preview="hidden"
              onLoad={url => this.setState({ imagePreview: url })}
              onPick={file => this.setState({ image: file })}
              theme={{
                formContainer: {
                  margin: 0,
                  padding: "0.8em"
                },
                formSection: {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center"
                },
                sectionBody: {
                  margin: 0,
                  width: "250px"
                },
                sectionHeader: {
                  padding: "0.2em",
                  color: "var(--darkAmazonOrange)"
                },
                photoPickerButton: {
                  display: "none"
                }
              }}
            /> */}
            <Form.Item>
            <button onClick={this.handleAddQuestion}>click me</button>
            </Form.Item>
          </Form>
        </div>
      </div>
  
 
        );
    }
}

// export default Play;
export default withAuthenticator(createQuestions);
