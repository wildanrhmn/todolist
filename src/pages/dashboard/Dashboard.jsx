import React, { useRef, useContext, useState } from 'react'
import "./dashboard.css"
import { Form, Button } from 'react-bootstrap'
import { todolistContext } from '../../states/todolist'

const Dashboard = () => {

  const {todolist, setTodolist} = useContext(todolistContext)
  const [todo, setNewTodo] = useState('')
  const ref = useRef()
 
  const handleComplete = (id) => {
    let listTodo = todolist.map((task) => {

      return task.id === id ? { ...task, completed: !task.completed} : {...task};
    })
    
    let filteredItem = listTodo.filter(task => {
      return !task.completed
    })
    setTodolist(filteredItem)
  }

  const handleAddToDo = (e) => {
    const id = todolist.length + 1
    e.preventDefault()
    setTodolist((prev) => [
      ...prev,
      {
        id: id,
        todo:todo,
        completed:false
      }
    ])

    ref.current.focus()
    setNewTodo("")
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
              <Form.Control placeholder='add new to do list' aria-describedby="basic-addon1" 
              ref={ref} value={todo} onChange={(e) => setNewTodo(e.target.value)} />
              <Button type='submit' className='button-form' 
              onClick={(e) =>handleAddToDo(e)}>Add</Button>
            </Form.Group>
          </Form>
        </div>

        <div className='todolist-section'>
          {todolist.map((todo) => {
            return todo.completed === false ?
            <div className='todo-container'>
            <p>
               <span></span>
               <span></span>
               <span></span>
               {todo.todo}
            </p>
            <Button className='btn-done' onClick={() =>{
              handleComplete(todo.id);
              }}>Done</Button>
          </div> : null
}     )}
        </div>

      </div>
    </section>
  )
}

export default Dashboard