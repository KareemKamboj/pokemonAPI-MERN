import './App.css';
import {Link, Navigate, Route, Routes} from 'react-router-dom'
import {Pokemon, pokemon} from './views/pokemon'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/pokemon" replace/>}> </Route>
        <Route path="/pokemon" element={<Pokemon></Pokemon>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
