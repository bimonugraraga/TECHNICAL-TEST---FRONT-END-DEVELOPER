import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import './styling/Home.css'

function App() {
  let [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/data')
      .then((resp) => {
        let temp = resp.data.map((el) => {
          let temp2 = []
          for (const key in el.skills){
            if (el.skills[key] === 'expert'){
              temp2.push(key)
            }
          }


          el.full_name = `${el.first_name} ${el.last_name}`
          el.expert_skills = temp2
          el.expert_skills2 = temp2.join(', ')
          delete el.skills
          return el
        })
     
        setData(temp)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  console.log(JSON.stringify(data, null, 2))
  return (
    
    <div className='HomeApp'>

      {data?data.map((el, index) => {
        // el.expert_skills = el.expert_skills.join(',')
        return(
          <div key={index}>

            <p>{el.full_name} <br></br> {el.expert_skills2}</p>
          </div>

        )
      }):<></>}
    </div>
  
  );
}

export default App;
