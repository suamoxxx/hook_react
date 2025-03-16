import './index.css';
import Nav from './components/Nav'
import Tasklist from './components/Tasklist.js'
import TaskItem from './components/TaskItem.js'
import TaskForm from './components/TaskForm.js'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      {/* Componente solo para el navegador de la pagina, no tiene logica, solo estilos */}
      <Nav></Nav>
      {/* Componente que almacena los datos en IndexedDB */}
      <TaskForm></TaskForm>
       {/* Componente que trae y lista las tareas de IndexedDB */}
       <Tasklist></Tasklist>
      {/* Componente solo para el pie de la pagina, no tiene logica, solo estilos */}
      <Footer></Footer>
    </div>
  );
}
export default App;
