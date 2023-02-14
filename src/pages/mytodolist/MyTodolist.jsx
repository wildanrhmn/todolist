import React from 'react'
import { useContext } from 'react'
import { todolistContext } from '../../states/todolist'

const MyTodolist = () => {

    const { todolist, setTodolist } = useContext(todolistContext)
    console.info(todolist)
  return (
    <div>
        
    </div>
  )
}

export default MyTodolist