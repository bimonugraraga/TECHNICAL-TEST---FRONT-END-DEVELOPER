import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'

function App() {
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/data')
      .then((resp) => {
        console.log(resp.data)
        let temp = resp.data.map((el) => {
          let temp2 = []
          for (const key in el.skills){
            if (el.skills[key] === 'expert'){
              temp2.push(key)
            }
          }

          el.expert_skills = temp2
          delete el.skills
          return el
        })

        setData(temp)
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
