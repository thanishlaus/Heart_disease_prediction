import './App.css'
import React, { Component } from "react";
import axios from "axios";

class App extends Component{
  state = {
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",          
    predict: null,
    error: null,
  };
  handleChanges = (e) =>{
    this.setState({
      [e.target.name]:e.target.value,
    });
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    const{age, sex, cp, trestbps, chol, fbs, restecg, thalach,exang,oldpeak, slope, ca, thal} = this.state;
    axios.post("http://127.0.0.1:8000/api/predict/", {
      age: age,
      sex: sex,
      cp: cp,
      trestbps: trestbps,
      chol: chol,
      fbs: fbs,
      restecg: restecg,
      thalach: thalach,
      exang: exang,
      oldpeak: oldpeak,
      slope: slope,
      ca: ca,
      thal: thal
    })
    .then((response) => {
      this.setState({predict: response.data.predict, error: null});
    })
  };
  render(){
    const {age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal, predict , error} = this.state;
    return(
      <div className="container">
        <h1>Heart disease prediction</h1>
        <form onSubmit={this.handleSubmit}>
        <div>
          <input className="input" placeholder="age" value={age} onChange={this.handleChanges} required type="number" name="age" />
        </div>

        <div className="form-group">
          <input className='input' placeholder='sex' value={sex} onChange={this.handleChanges} required type="number" name='sex'/>
        </div>

        <div className="form-group">
          <input className="input" placeholder="cp" value={cp} onChange={this.handleChanges} required type="number" name="cp" />
        </div>

        <div className="form-group">
          <input className="input" placeholder="trestbps" value={trestbps} onChange={this.handleChanges} required type="number" name="trestbps" />
        </div>

        <div className="form-group">
          <input className="input" placeholder="chol" value={chol} onChange={this.handleChanges} type="chol" required name="chol" />
        </div>

        <div className="form-group">
          <input className="input" placeholder="fbs" value={fbs} onChange={this.handleChanges} type="number" required name="fbs" />
        </div>

        <div className="form-group">
          <input className="input" placeholder="restecg" value={restecg} onChange={this.handleChanges} type="number" required name="restecg" />
        </div>  

        <div className="form-group">
          <input className="input" placeholder="thalach" value={thalach} onChange={this.handleChanges} type="number" required name="thalach" />
        </div>

        <div className="form-group">
          <input className="input" placeholder="exang" value={exang} onChange={this.handleChanges} type="number" required name="exang" />
        </div>  

        <div className="form-group">
          <input className="input" placeholder="oldpeak" value={oldpeak} onChange={this.handleChanges} type="number" required name="oldpeak" />
        </div>

        <div className="form-group">
          <input className="input" placeholder="slope" value={slope} onChange={this.handleChanges} type="number" required name="slope" />
        </div>

        <div className="form-group">
          <input className="input" placeholder="ca" value={ca} onChange={this.handleChanges} type="number" required name="ca" />
        </div>                        

        <div className="form-group">
          <input className="input" placeholder="thal" value={thal} onChange={this.handleChanges} type="number" required name="thal" />
        </div> 

        <div className="form-group">
        <button type='submit'>Submit</button>
        </div>
        </form>
        <h2>
        Not affected by heart disease
        </h2>
        {predict !== null && (
          <div>
            <h2>You are </h2>
            <h2>{predict}</h2>
          </div>
        )}
        {error &&<div>Error:{error}</div>}
      </div>
    );
  }
}

export default App
