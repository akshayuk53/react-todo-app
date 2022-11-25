import React from 'react'
import Todo from '../components/Todo'

function TodoContainer() {
    return (
        <div style={{
            display: 'grid', placeItems: 'center', height: '100vh', background: 'rgb(82,149,154)',
            background: 'linear-gradient(90deg, rgba(82,149,154,1) 0%, rgba(108,39,186,1) 100%)'
        }}>
            <Todo />
        </div>
    )
}

export default TodoContainer