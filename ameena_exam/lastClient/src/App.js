import './App.css';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Router, navigate } from '@reach/router';
import Main from './components/Main'
import InputNew from './components/Input'

function App() {
  const [errors, setErrors] = useState({ projectName: "", dueDate: "" });
  const [toDoProjects, setToDoProjects] = useState([]);
  const [doingProjects, setDoingProjects] = useState([]);
  const [doneProjects, setDoneProjects] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const boxStyle = {
    display: "flex",
    justifyContent: "center",
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/project/backlog')
      .then(res => {
        console.log(res.data)
        setToDoProjects(res.data);
      });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8000/api/project/progress')
      .then(res => {
        setDoingProjects(res.data);
      });
  }, [])
  useEffect(() => {
    axios.get('http://localhost:8000/api/project/complete')
      .then(res => {
        setDoneProjects(res.data);
        setLoaded(true);
      });
  }, [])

  const addNewProject = project => {
    axios.post('http://localhost:8000/api/project', project)
      .then(res => {
        setToDoProjects([...toDoProjects, res.data]);
        setErrors({ projectName: "", dueDate: "" });
        navigate('/');
      })
      .catch(err => {
        setErrors(err.response.data.errors);
      })
  }
  const startDoing = (e, project) => {
    project.status = "doning";
    axios.put('http://localhost:8000/api/project/' + project._id, project)
      .then(res => {
        setDoingProjects([...doingProjects, project]);
        const newProjectArray = toDoProjects.filter((eachProject) => {
          return eachProject._id !== project._id
        })
        setToDoProjects(newProjectArray);
      })
      .catch(err => {
        console.log(err);
      })
  }
  const finishProject = (e, project) => {
    project.status = "done";
    axios.put('http://localhost:8000/api/project/' + project._id, project)
      .then(res => {
        setDoneProjects([...doneProjects, project]);
        const newProjectArray = doingProjects.filter((eachProject) => {
          return eachProject._id !== project._id
        })
        setDoingProjects(newProjectArray);
      })
      .catch(err => {
        console.log(err);
      })
  }
  const removeProject = (e, deletedProject) => {
    axios.delete('http://localhost:8000/api/project/' + deletedProject._id)
      .then(res => {
        const newProjectArray = doneProjects.filter((eachProject) => {
          return eachProject._id !== deletedProject._id
        })
        setDoneProjects(newProjectArray);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <div className="App">
      <h2>AmeenA Project Manager</h2>
      <Router>
        {loaded && <Main path="/" boxStyle={boxStyle} toDoProjects={toDoProjects} doingProjects={doingProjects} doneProjects={doneProjects} startDoing={startDoing} finishProject={finishProject} removeProject={removeProject} />}
        <InputNew path="projects/new" addNewProject={addNewProject} initialProject="" allErrors={errors} initialDueDate="" />
      </Router>
    </div>
  );
}

export default App;
