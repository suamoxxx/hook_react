import '../index.css';
import React, { useState } from "react";
import img from '../img/img.jpg'
function TaskForm() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, description);
    const indexedDB = window.indexedDB;
    const request = indexedDB.open("List_Task", 1); // Creamos la BD en IndexeDB que tiene 3 estados: success, onupgradeneeded y error
    request.onsuccess = () => {
      const db = request.result;
      console.log(`Base de datos abierta ${db}`);
      const transaction = db.transaction(['task'], 'readwrite');
      const store = transaction.objectStore('task');
      const taskBD = {
        name: name,
        description: description
      };
      store.add(taskBD);
      transaction.oncomplete = () => {
        console.log('Transacción completada: Se añadió la tarea a la base de datos.');
      };
      transaction.onerror = (event) => {
        console.error('Transacción fallida', event);
      };
    };
    request.onerror = (error) => {
      console.error("Ocurrio un error", error);
    };  
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      db.createObjectStore("task", {
        keyPath: "clave", autoIncrement: true
      });
      console.log(`Base de datos creada ${db}`);
    };
    const notification = document.getElementById('note');//Este codigo simula una notificacion 
    notification.classList.add('article')
    setName('');
    setDescription('');
    setInterval(()=>{
      notification.classList.remove('article')
    },2000)
    clearInterval();
  };
  return (
    <div id="bf">
      <div>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Ingresa tu tarea</label>
          {/* Input de nombre de la tarea */}
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}></input>
          <label htmlFor="description">Descripción de la tarea</label>
          {/* Input de descripción de la tarea */}
          <textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}></textarea>
          <button id='btn_form'>&#43;</button>{/* Se hace uso de las identidades de caracteres para representar el símbolo "+" */}
        </form>
      </fieldset>
      </div>
      <div id="bf_">
        <img src={img} alt='book_task'/>
        <article id='note'>se guardo</article>
      </div>
    </div>
  );
}

export default TaskForm;




