import React from 'react'
import Link from '../../../node_modules/next/link'
import { redirect } from '../../../node_modules/next/navigation'
import { prisma } from '../db'

async function createTodo(data: FormData) {
    "use server"
    const title = data.get("title")?.valueOf()
    if (typeof title !== 'string' || title.length === 0) {
        throw new Error("Invalid input")
    }
    await prisma.todo.create({ data: { title, complete: false } })
    redirect("/");
    console.log("hi")
}

const page = () => {
    return (
        <>
            <header className="flex justify-between mb-4 items-center">
                <h1 className="text-2xl">New</h1>
            </header>
            <form action={createTodo} className='flex gap-2 flex-col'>
                <input type='text' name="title" className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100' />
                <div className='flex gap-1 justify-end'>
                    <Link href=".." className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'>Cancel</Link>
                    <button type='submit' className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'>Create</button>
                </div>
            </form>
        </>
    )
}

export default page