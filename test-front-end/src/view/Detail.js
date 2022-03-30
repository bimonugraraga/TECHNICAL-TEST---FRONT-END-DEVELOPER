import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useEffect, useState} from 'react'
import '../styling/Detail.css'

function DetailScreen (){
  let {id} = useParams()
  let [programmer, setProg] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:3000/data/${id}`)
      .then((resp) => {
        let temp = []
        for (const key in resp.data.skills){
          if (resp.data.skills[key] === 'expert'){
            temp.push(key)
          }
        }

        resp.data.full_name = `${resp.data.first_name} ${resp.data.last_name}`
        
        resp.data.expert_skills = temp
        setProg(resp.data)
      })
  }, [])

  return (
    <div className='detailPage'>

      <div className='programmerCard'>
        {
          !programmer? <></>: 
          <div>
            <div className='pic'>
              <img src={require('../assets/user.png')} width="300" height="300"/> 
              <div className='cPic'>
                <p className='cText'>C</p>
              </div>
            </div>
            <h1 className='forText'>{programmer.full_name}</h1>
            <h3 className='forText'>Expert skills</h3>
              <ul>
                {programmer.expert_skills.map((el) => {
                  return(
                    <li className='forText'>{el}</li>
                  )
                })}
              </ul>
            <p className='forText forLorem'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        }
      </div>
    </div>
  )
}

export default DetailScreen