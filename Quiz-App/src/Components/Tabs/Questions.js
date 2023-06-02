import React, { Component } from "react";
import { ActionTypes } from "../constants/actionTypes";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  ...state.quiz,
  ...state.mode,
  ...state.pager,
});

const mapDispatchToProps = (dispatch) => ({
  onAnswer: (payload) => dispatch({ type: ActionTypes.QuizAnswer, payload }),
});

const Questions = (props) => {
  const onAnswer = (question, option) => {
    let quiz = JSON.parse(JSON.stringify(props.quiz));
    let q = quiz.questions.find((x) => x.id === question.id);
    if (q.questionTypeId === 1) {
      q.options.forEach((x) => {
        x.selected = false;
      });
    }
    q.options.find((x) => x.id === option.id).selected = true;
    props.onAnswer(quiz);
  };

  let questions = props.quiz.questions
    ? props.quiz.questions.slice(
        props.pager.index,
        props.pager.index + props.pager.size
      )
    : [];

  return (
    <div id="quiz">
      <h2 className="text-center font-weight-normal">{props.quiz.name}</h2>
      <hr />
      {questions.map((q) => (
        <div key={q.id}>
          <div className="badge badge-info">
            Question {props.pager.index + 1} of {props.pager.count}.
          </div>
          <h3 className="font-weight-normal">
            {props.pager.index + 1}. <span>{q.name}</span>
          </h3>
          <div
            className="row text-left options"
            style={{ fontSize: "1.3rem", marginLeft: "4rem" }}
          >
            {q.options.map((option) => (
              <div key={option.id} className="col-6">
                <div className="option">
                  <label className="font-weight-normal" htmlFor={option.id}>
                    <input
                      id={option.id}
                      checked={option.selected}
                      type="checkbox"
                      style={{ marginRight: "1rem" }}
                      onChange={() => onAnswer(q, option)}
                    />
                    {option.name}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <hr />
      <div className="text-center">
        {props.quiz.config.allowBack && (
          <button id="first" className="btn btn-default" onClick={props.move}>
            First
          </button>
        )}
        {props.quiz.config.allowBack && (
          <button id="prev" className="btn btn-default" onClick={props.move}>
            Prev
          </button>
        )}
        <button id="next" className="btn btn-primary" onClick={props.move}>
          Next
        </button>
        <button id="last" className="btn btn-default" onClick={props.move}>
          Last
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
