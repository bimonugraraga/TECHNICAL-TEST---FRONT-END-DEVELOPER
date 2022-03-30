import axios from 'axios';
import {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styling/Add.css'
function AddScreen () {
  const navigate = useNavigate()
  let [name, setName] = useState(undefined)
  let [javascript, setJ] = useState(undefined)
  let [python, setP] = useState(undefined)
  let [golang, setG] = useState(undefined)
  let [php, setPh] = useState(undefined)

  const getNewName = (e) => {
    e.preventDefault()
    let {value} = e.target
    setName(value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(name, javascript, python, golang, php)
    let arrTemp = [javascript, python, golang, php]
    let temp = name.split(' ')
    let objAdd = {}

    if (temp.length > 1) {
      objAdd.first_name = temp[0]
      objAdd.last_name = temp[1]
    } else {
      objAdd.first_name = name
      objAdd.last_name = ''
    }
    let objSkill = {}

    arrTemp.forEach((el) => {
      if(el){
        objSkill[el] = 'expert'
      }
    })

    objAdd.skills = objSkill

    axios.post('http://localhost:3000/data', objAdd)
      .then(() => {
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className='addPage'>
      <div className='progCard'>

        <h1 className='textCol'>CREATE PERSON</h1>
        <form className='formAdd'>
          <label className='textCol'>
            Name
          </label>
          <input type="text" value={name} onChange={getNewName} className='forInput'/>
          <label className='textCol' style={{padding: '10px'}}>
            Expert Skills
          </label>
          <div className='bigCheck'>

            <div className='forCheck'>

              <div>
                <input type="checkbox"  onChange={() => setJ('javascript')}/><label className='textCol'>JavaScript</label>
              </div>
              <div>
                <input type="checkbox" onChange={() => setP('python')}/><label className='textCol'>Python</label>
              </div>
              <div>
                <input type="checkbox" onChange={() => setG('golang')}/><label className='textCol'>Golang</label>
              </div>
              <div>
                <input type="checkbox" onChange={() => setPh('php')}/><label className='textCol'>PHP</label>
              </div>
            </div>
          </div>
          
          <input type="submit" value="Submit" onClick={submitHandler} className='textCol btnColor'/>
        </form>
      </div>
    </div>
  )
}
export default AddScreen