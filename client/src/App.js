import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import OneProduct from './components/OneProduct';
import Main from './views/Main';

function App() {
  return (
    <BrowserRouter>
    <div className = "App">
      <Routes>
        <Route path = '/' default element = {<Main/>}/>
        <Route path = '/products/:_id' element = { <OneProduct/> }/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
