import React, { Component } from "react";
import { ActionTypes } from "../constants/actionTypes";
import Review from "./Review";
import Questions from "./Questions";
import Result from "./Result";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { ...state.quiz, ...state.mode, ...state.pager };
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (payload) => dispatch({ type: ActionTypes.QuizSubmit, payload }),
  onPagerUpdate: (payload) =>
    dispatch({ type: ActionTypes.PagerUpdate, payload }),
});

const Quiz = (props) => {
  const move = (e) => {
    let id = e.target.id;
    let index = 0;
    if (id === "first") index = 0;
    else if (id === "prev") index = props.pager.index - 1;
    else if (id === "next") index = props.pager.index + 1;
    else if (id === "last") index = props.pager.count - 1;
    else index = parseInt(e.target.id, 10);

    if (index >= 0 && index < props.pager.count) {
      let pager = {
        index: index,
        size: 1,
        count: props.pager.count,
      };
      props.onPagerUpdate(pager);
    }
  };

  const setMode = (e) => props.onSubmit(e.target.id);

  const renderMode = () => {
    if (props.mode === "quiz") {
      return <Questions move={move} />;
    } else if (props.mode === "review") {
      return <Review quiz={props.quiz} move={move} />;
    } else {
      return <Result questions={props.quiz.questions || []} />;
    }
  };

  return (
    <div>
      {renderMode()}
      {props.mode !== "submit" && (
        <div>
          <hr />
          <button
            id="quiz"
            className="btn btn-info"
            onClick={setMode}
            style={{ marginLeft: "16rem", marginTop: "3rem", width: "8rem" }}
          >
            Quiz
          </button>
          <button
            id="review"
            className="btn btn-info"
            onClick={setMode}
            style={{ marginTop: "3rem", marginLeft: "5rem", width: "8rem" }}
          >
            Review
          </button>
          <button
            style={{ marginTop: "3rem", marginLeft: "5rem", width: "8rem" }}
            id="submit"
            className="btn btn-primary"
            onClick={setMode}
          >
            Submit Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
