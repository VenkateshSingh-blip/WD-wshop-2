import React from 'react'

import RegisterForm from "./RegisterForm";

import './App.css'

function App() {
    return (
        <div className="app">
            <h1>Registration Form</h1>
            <RegisterForm />
           
           
            <div className="STUDENT-INFO">
              <p><strong>NAME:</strong>Venkatesh singh</p>
              <p><strong>roll no:</strong>2503201001313</p>
              <p><strong>class:</strong>cse-26</p>
            </div>

        </div>
    )
}

export default App

