import React, { useEffect, useRef, useState } from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import './todo.css'
import TodoItem from './TodoItem';
import dataItems from '../../config/defaultEntry'
import { uid } from '../../utils/randomId';
import { Typography } from '@mui/material';

function Todo() {
    const [todos, setTodos] = useState(dataItems)
    const [newTodo, setNewTodo] = useState('')
    const todoEndRef = useRef(null)


    useEffect(() => {
        todoEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }, [todos.length])

    const addNewTodo = () => {
        if (newTodo.length)
            setTodos((prev) => [...prev, {
                id: uid(),
                title: newTodo,
                isEditing: false,
                completed: false
            }])
        setNewTodo('')
    }

    const editTodo = (id, text) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((item) => item?.id === id);
        if (text) {
            newTodos[index].title = text;
            setTodos(newTodos);
            return;
        }
        newTodos[index].isEditing = !newTodos[index].isEditing;
        setTodos(newTodos);
    }

    const completeTodo = (id) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((item) => item?.id === id);
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }


    const deleteTodo = (id) => {
        const newTodos = [...todos];
        const index = newTodos.findIndex((item) => item?.id === id);
        if (index > -1) { // only splice array when item is found
            newTodos.splice(index, 1); // 2nd parameter means remove one item only
        }
        setTodos(newTodos);
    }



    return (
        <div className='todo'>
            <div className='todo-input-container'>
                <TextField
                    onChange={(e) => setNewTodo(e.target.value)}
                    value={newTodo} id="outlined-basic"
                    label="Enter text and add Todo"
                    variant="outlined"
                    fullWidth
                    maxRows={3}
                    multiline
                />
                <IconButton onClick={addNewTodo}>
                    <AddBoxOutlinedIcon style={{ fontSize: '1.6rem', color: '#6c27ba' }} />
                </IconButton>
            </div>
            <div style={{ maxHeight: '340px', overflowY: 'scroll' }}>
                {todos?.map((item) => {
                    return (
                        <TodoItem
                            data={item}
                            key={item?.id}
                            actions={{ editTodo, completeTodo, deleteTodo }} />
                    )
                })}
                {!todos.length ? (
                    <Typography variant='h5' style={{ textAlign: 'center', marginTop: 14 }}>Start Adding Todos!</Typography>
                ) : null}
                <div ref={todoEndRef} style={{ height: '10px', width: '100%' }} />
            </div>
        </div>
    )
}

export default Todo