import React, { useState } from 'react';
import axios from "axios";
import { SERVER } from '../server';

const Questions = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const submit = () => {
    axios.post(`${SERVER}/api/v1/question`, data)
        .then((res) => {
          setData("")
        })
        .catch((err) => {
          setData("")
        })
  }


  return (
    <div style={{ margin: "2rem", border: "1px solid grey", padding: "1rem", borderRadius: "0.5rem" }}>
      <h1>Questions</h1>
      <div>
        <p>How many countries exist in this world?</p>
        <div><input type="radio" name='q1' value="a1" onChange={(e) => handleChange(e)} /> 200</div>
        <div><input type="radio" name='q1' value="a2" onChange={(e) => handleChange(e)} /> 199</div>
        <div><input type="radio" name='q1' value="a3" onChange={(e) => handleChange(e)} /> 198</div>
        <div><input type="radio" name='q1' value="a4" onChange={(e) => handleChange(e)} /> 197</div>
      </div>
      <div>
        <p>How many states are in India?</p>
        <div><input type="radio" name='q2' value="a5" onChange={(e) => handleChange(e)} /> 27</div>
        <div><input type="radio" name='q2' value="a6" onChange={(e) => handleChange(e)} /> 28</div>
        <div><input type="radio" name='q2' value="a7" onChange={(e) => handleChange(e)} /> 29</div>
        <div><input type="radio" name='q2' value="a8" onChange={(e) => handleChange(e)} /> 30</div>
      </div>

      <button onClick={submit}>Submit</button>
    </div>
  );
};

export default Questions;
