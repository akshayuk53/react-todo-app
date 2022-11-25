import React from 'react'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import Typography from '@mui/material/Typography'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';

function TodoItem({ data, actions }) {
    return (
        <div className='todo-item-container'>
            {data?.isEditing ?
                <TextField
                    onChange={(e) => actions.editTodo(data?.id, e.target.value)}
                    value={data?.title}
                    id="outlined-basic"
                    label="Edit todo"
                    variant="outlined"
                    style={{ width: '78%' }}
                    maxRows={3}
                    multiline
                /> :
                <Typography className='todo-item-text' style={{ textDecoration: data?.completed ? 'line-through' : 'none' }} onClick={() => actions.completeTodo(data?.id)}>{data?.title}</Typography>
            }
            <div className='todo-item-icons'>
                <IconButton onClick={() => actions.editTodo(data?.id)}>
                    {data?.isEditing ? <DoneOutlinedIcon /> : <ModeEditOutlineOutlinedIcon />}
                </IconButton>
                <IconButton onClick={() => actions.deleteTodo(data?.id)}>
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default TodoItem