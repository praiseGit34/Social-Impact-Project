import React, { useState } from 'react';
import './Assignments.css'; 

function Assignments() {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState({ A: '', B: '', C: '', D: '' });
  const [questionsList, setQuestionsList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleOptionChange = (event) => {
    const { name, value } = event.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newQuestion = { question, options };

    if (editIndex !== null) {
      const updatedList = questionsList.map((item, index) => 
        index === editIndex ? newQuestion : item
      );
      setQuestionsList(updatedList);
      setEditIndex(null); 
    } else {
      setQuestionsList((prevList) => [...prevList, newQuestion]);
    }

    setQuestion('');
    setOptions({ A: '', B: '', C: '', D: '' });
  };

  const handleEdit = (index) => {
    const questionToEdit = questionsList[index];
    setQuestion(questionToEdit.question);
    setOptions(questionToEdit.options);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      setQuestionsList((prevList) => prevList.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="assignments-container">
      <h1>Assignments</h1>
      <form className="assignment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Question:</label>
          <input 
            type="text" 
            value={question} 
            onChange={(e) => setQuestion(e.target.value)} 
            required 
          />
        </div>
        <div className="options-container">
          {['A', 'B', 'C', 'D'].map((option) => (
            <div className="form-group" key={option}>
              <label>Option {option}:</label>
              <input 
                type="text" 
                name={option} 
                value={options[option]} 
                onChange={handleOptionChange} 
                required 
              />
            </div>
          ))}
        </div>
        <button type="submit" className="submit-button">
          {editIndex !== null ? 'Update Question' : 'Add Question'}
        </button>
        <button type="button" onClick={() => {
          setQuestion('');
          setOptions({ A: '', B: '', C: '', D: '' });
          setEditIndex(null);
        }} className="submit-button">Clear</button>
      </form>

      <h2>Questions List</h2>
      <div className="questions-list">
        {questionsList.map((item, index) => (
          <div key={item.question} className="question-item">
            <strong>Question {index + 1}: {item.question}</strong><br />
            A) {item.options.A}<br />
            B) {item.options.B}<br />
            C) {item.options.C}<br />
            D) {item.options.D}<br />
            <button onClick={() => handleEdit(index)} className="edit-button">Edit</button>
            <button onClick={() => handleDelete(index)} className="edit-button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignments;
