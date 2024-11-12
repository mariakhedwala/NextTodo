import ListItem from "@/components/ListItem";
import { JSX } from "react";
import Link from "../../node_modules/next/link";
import { prisma } from "./db";

const getTodos: () => any = () => {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server"
  await prisma.todo.update({ where: { id }, data: { complete } })
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Todos</h1>
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href='/new'>New</Link>
      </header>
      <ul className="pl-4">
        {
          todos.map((todo: JSX.IntrinsicAttributes & { id: String; title: String; complete: Boolean; }) => (
            <ListItem toggleTodo={toggleTodo} key={todo.id} {...todo} />
          ))
        }

      </ul>
    </>
  );
}
