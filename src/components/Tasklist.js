import React, {useState} from "react";
function Tasklist () {
    const [list, setList] = useState([])
    const handleclick = (e) => {
        e.preventDefault();
        const request = indexedDB.open("List_Task", 1);
        request.onsuccess=(e)=>{
            const db = e.target.result;
            const transaction = db.transaction(['task'], 'readonly');
            const store = transaction.objectStore('task');
            const getAllRequest = store.getAll();
            getAllRequest.onsuccess = () => {
              setList(getAllRequest.result);
            };
        }
    } 
    return(
        <div>
            <div id="list">
                <h1>Mostrar tareas</h1>
                <ul>
                    {
                      list.map((task) => (
                            <li key={task.clave}>
                            {task.name}: {task.description}
                            </li>
                        )
                      )
                    }
                </ul>
                <div></div>
                <button  id="btn_list" onClick={(e) => handleclick(e)}>listar tareas</button>
            </div>
        </div>
    )
}
export default Tasklist;