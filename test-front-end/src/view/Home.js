import {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styling/Home.css'
import axios from 'axios'
function HomeScreen(){
  let navigate = useNavigate()

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
          delete el.skills
          return el
        })
     
        setData(temp)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  
  const joined = (ex) => {
    
    ex = ex.join(', ')
    return (
      <div>

        <p className='forText'>Expert Skills:</p>
        <p className='forText'>{ex}</p>
      </div>
    )
  }
  const toDetail = (id) => {
    navigate(`/${id}`)

  }
  const toAdd = (e) => {
    e.preventDefault()
    navigate('/add')
  }
  return (
    
    <div className='HomePage'>

      <div className='myBox'>
        {data.length === 0? <></>:data.map((el, i) => {
          return(
            <button className='cardProgrammer' onClick={() => toDetail(el.id)} key={el.id}>

              <div className='cardProgrammer'  >
                <h1 className='forText'>{el.full_name}</h1>
                {joined(el.expert_skills)}
              </div>
            </button>
            )
          }) 
        }

        
      </div>
      <button className='addBtn addBtnS' onClick={toAdd}>
        +
      </button>
    </div>
  
  );
}

export default HomeScreen