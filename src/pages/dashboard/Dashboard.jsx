import React from 'react'
import "./dashboard.css"
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react'


const Dashboard = () => {

  const [todolist, setTodolist] = useState([
    {
      todo: "Play Elden Ring",
      completed: false
    },
    {
      todo: "Tiding up the bed",
      completed: false
    },
    {
      todo: "Meeting with a client",
      completed: false
    },
    {
      todo: "Mandi",
      completed: false
    },
  ])

  const handleComplete = () => {

  }

  const handleAddToDo = (e) => {
    e.preventDefault();
  }

  return (
    <section className='main'>
      <div className='main-container'>

        <div className='header-section'>
          <h3>Don't be lazy!</h3>
          <h1>Here are your list to do</h1>
        </div>

        <div className='search-section'>
          <Form>
            <Form.Group className='input-list'>
              <Form.Control placeholder='add new to do list'
                aria-describedby="basic-addon1" />
              <Button className='button-form' 
              onClick={handleAddToDo}>Add</Button>
            </Form.Group>
          </Form>
        </div>

        <div className='todolist-section'>
          {todolist.map((todo) => {
            return(
              <div className='todo-container'>
                <p>
                   <span></span>
                   <span></span>
                   <span></span>
                   {todo.todo}
                </p>
                <Button className='btn-done' onClick={handleComplete}>Done</Button>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default Dashboard