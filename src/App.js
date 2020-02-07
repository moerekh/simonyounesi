import React from 'react';
import logo from './logo.svg';
import my_info from './simonyounesi_info.js';

class Intro extends React.Component {
  render() {
    return(
      <div className="container">
        <div class="row">
          <div className="col">
            <h1 className="my_greeting">
              Hi, I'm { my_info.name }.
            </h1>
            <p>{ my_info.introduction }</p>
          </div>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <Intro></Intro>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
