import React, { useRef } from 'react'
import "./dashboard.css"
import { Form, Button } from 'react-bootstrap'
import { useContext, useState } from 'react'
import { todolistContext } from '../../states/todolist'

const Dashboard = () => {

  const {todolist, setTodolist} = useContext(todolistContext)
  const [todo, setNewTodo] = useState('')
  const ref = useRef()
 
console.info(todo)
  const handleComplete = () => {

  }

  const handleAddToDo = (e) => {
    e.preventDefault();
    setTodolist((prev) => [
      ...prev,
      {
        todo:todo,
        completed:false
      }
    ])

    ref.current.focus()
    setNewTodo("")
  }
  
  console.info(todolist)
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
              <Form.Control placeholder='add new to do list' aria-describedby="basic-addon1" 
              ref={ref} value={todo} onChange={(e) => setNewTodo(e.target.value)} />
              <Button type='submit' className='button-form' 
              onClick={(e) => handleAddToDo(e)}>Add</Button>
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