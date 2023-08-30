import React from 'react';

import './App.css';


import UserForm from "./components/UserForm";
import MessageForm from "./components/MessageForm";
import BasicExample from "./components/BasicExample";

function App() {
  return (
    <div className="App">
            <h1>Formik with TS</h1>
      <UserForm />
      {/*  <MessageForm />*/}
      {/*  <BasicExample />*/}
    </div>
  );
}

export default App;
