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

class ListGroupInfo extends React.Component {
  render() {
    let employer=this.props.employer,
        city=this.props.city,
        state=this.props.state,
        jobTitle=this.props.jobTitle;
    return(
      <li class="list-group-item">{employer}</li>
    )
  }
}

class ListGroupItems extends React.Component {
  render() {
    let duty = this.props.job.duties.map((desc, j) => (
      <li key={j}>
        {desc}
      </li>
    ))
    return(
      <li className="list-group-item">
        <span className="employer_name">{this.props.job.employer}</span>
        <span className="job_dates">
        {(this.props.job.duration.start.month)? this.props.job.duration.start.month + " " + this.props.job.duration.start.year : ''} 
        {(this.props.job.duration.present)? " - Present" : 
        (this.props.job.duration.end.month)? " - " + this.props.job.duration.end.month + " " + this.props.job.duration.end.year : ''}
        </span>
        <span className="job_title">{this.props.job.title}</span>
        <span className="employer_description">{this.props.job.description}</span>
        <hr />

        <ul>
          {duty}
        </ul>
      </li>
    )
  }
}

class Employment extends React.Component {
  render() {
    let listgroupitems = my_info.employment_history.map((job, i) => (
      <ListGroupItems
        key={i}
        job={job}
      >
      </ListGroupItems>
    ))
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <ul className="list-group">
              {listgroupitems}
            </ul>
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
        <Employment></Employment>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
