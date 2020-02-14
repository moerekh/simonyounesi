import React from 'react';
import logo from './logo.svg';
import my_info from './simonyounesi_info.js';

class Intro extends React.Component {
  render() {
    return(
      <div className="container">
        <div id="intro" className="row intro_row">
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

class JobSection extends React.Component {
  render() {
    let duty = this.props.job.duties.map((desc, j) => (
      <li key={j}>
        {desc}
      </li>
    ))

    return(
      <div id={"job-" + this.props.job_key} className="row job_row">
        <hr />
        <div className="col">
          <span className="employer_name">{this.props.job.employer}</span>
          <span className="job_dates">
          {(this.props.job.duration.start.month)? this.props.job.duration.start.month + " " + this.props.job.duration.start.year : ''} 
          {(this.props.job.duration.present)? " - Present" : 
          (this.props.job.duration.end.month)? " - " + this.props.job.duration.end.month + " " + this.props.job.duration.end.year : ''}
          </span>

          <span className="employer_description">{this.props.job.description}</span>
          <hr />
          <span className="job_title">{this.props.job.title}</span>
          <ul>
            {duty}
          </ul>
        </div>
      </div>
    )
  }
}

class Employment extends React.Component {
  render() {
    let jobs = my_info.employment_history.map((job, i) => (
      <JobSection
        key={i}
        job={job}
        job_key={i}
      >
      </JobSection>
    ))
    return(
      <div className="container">
        <div className="row jobs_row">
          <div className="col">
            <h2 className="jobs_row_title">My Work Experience</h2>
            {jobs}
          </div>
        </div>
      </div>
    )
  }
}

class Degree extends React.Component {
  render() {
    return(
      <div id={"edu-" + this.props.edu_key}>
        <p><span className="degree">{this.props.edu.degree}</span> | <span className="school">{this.props.edu.school}</span> | <span className="graduated">{this.props.edu.graduated}</span></p>
      </div>
    )
  }
}

class Education extends React.Component {
  render() {
    let education = my_info.education.map((edu, i) => (
      <Degree
        key={i}
        edu={edu}
        edu_key={i}
      ></Degree>
    ))
    return(
      <div className="container">
        <div className="row education_row">
          <div className="col">
            <h2 className="education_header">Education</h2>
            {education}
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
      <main id="fullscreen">
        <Intro></Intro>
        <Employment></Employment>
        <Education></Education>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
