import logo from './logo.svg';
// import './App.css';
import Form from './Form';
import TaskList from './TaskList';

const [todos,setTodos] = useState([])

function App() {
  return (
    <div className="App">
      <Form todos={todos} setTodos={setTodos} />
      <TaskList/>
    </div>
  );
}

export default App




