import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
  const [tittle, setTittle] = useState("");
  const [descripcion, setDescripcion] = useState('');
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(
      {
        tittle,
        descripcion
      }
    )
    setTittle('')
    setDescripcion('')
  };

  return (
    <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
            <h1 className="text-white text-3xl font-bold mb-3 text-center">CREA TU TAREA</h1>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTittle(e.target.value)}
        value={tittle}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
      />
      <textarea 
        placeholder="Escriba su descripcion..."
        onChange={(e) => setDescripcion(e.target.value)}
        value={descripcion}
        className="bg-slate-300 p-3 w-full mb-2"
      />
      <button className="bg-slate-500 hover:bg-slate-400 rounded-md text-white px-3 py-1"> GUARDAR </button>
    </form>
    </div>
  );
}

export default TaskForm;
