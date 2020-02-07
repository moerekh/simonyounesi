import React from 'react';
import logo from './logo.svg';

class Intro extends React.Component {
  render() {
    return(
      <div>
        <h1>
          Hi, I'm Simon.
          <br />
          <small>It's a pleasure to meet you!</small>
        </h1>
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
