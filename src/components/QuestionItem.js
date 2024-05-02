import React from "react";

function QuestionItem({ question, handleDeleteUpdate }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleAnswerChange(e) {
    
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        "correctIndex": e.target.value
      })
    })
    .then(res => res.json())
    .then(data => data)
  }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function onDeleteClick(e){
    fetch(`http://localhost:4000/questions/${e.target.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDeleteUpdate(question));
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleAnswerChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button id={id} onClick={onDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;