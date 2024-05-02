import React, { useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions}) {
  

  useEffect(()=> {
    fetch(" http://localhost:4000/questions")
    .then(res => res.json())
    .then(data => setQuestions(data)
    )
  }, [])

  function handleDeleteUpdate(deletedQuestion) {
   const updatedQList = questions.filter(question => question.id !== deletedQuestion.id) 
    setQuestions(updatedQList)
  }

  const questionList = questions.map(question => {
    return <QuestionItem key={question.id} question={question} handleDeleteUpdate={handleDeleteUpdate}/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionList}</ul>
    </section>
  );
}

export default QuestionList;