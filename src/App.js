import './App.css';
import React, { Component } from 'react'
import axios from 'axios'


const api = axios.create({
  baseURL: 'https://arha83.pythonanywhere.com/api/vars/'
})


class App extends Component {

  
  state = {
    courses:[]
  }


  constructor(){
    super();
    this.getdata()
  }

  getdata = async() =>{
    let data = await api.get('/').then(({data}) =>data)
      this.setState({courses: data})
  }


  render (){return (
    <div className="App">
      <main className="App-header">
        <table>
          <tr>
          <th>id</th>
          <th>text</th>
          <th>number</th>
          <th>bit</th>
          <th>date</th>
          </tr>
          {this.state.courses.map((course) => (
            <tr>
           <td>{course.id}</td>
           <td>{course.text}</td>
            <td>{course.num}</td>
           <td>{String(course.bit)}</td>
            <td>{course.date}</td>
            </tr>
          ))}
        </table>
        
      </main>
    </div>
  );}
}

export default App;
