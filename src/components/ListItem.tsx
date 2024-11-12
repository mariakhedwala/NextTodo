"use client"
import React from 'react'

type TodoItemProps = {
    id: string
    title: string
    complete: boolean
    toggleTodo: (id: string, checked: boolean) => void
}


function ListItem({ id, title, complete, toggleTodo }: TodoItemProps) {
    return (
        <li className='flex gap-1 items-center'>
            <input id={id} type="checkbox" className='cursor-pointer peer' defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)} />
            <label htmlFor={id} className="peer-checked:line-through cursor-pointer peer-checked:ext-slate-500">{title}</label>
        </li>
    )
}

export default ListItem

