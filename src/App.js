import logo from './logo.svg';
import './App.css';
import TodosContainer from './components/container/TodoContainer';
import TodoFormContainer from './components/container/TodoFormContainer';
import FilterOptions from './components/pure/filterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodosContainer></TodosContainer>
        <TodoFormContainer></TodoFormContainer>
        {/**FIltrar options contain filter container */}
        <FilterOptions></FilterOptions>
      </header>
    </div>
  );
}

export default App;
