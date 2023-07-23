import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import OneProduct from './components/OneProduct';
import Update from './components/Update';
import Main from './views/Main';

function App() {
  return (
    <BrowserRouter>
    <div className = "App">
      <Routes>
        <Route path = '/' default element = {<Main/>}/>
        <Route path = '/products/:_id' element = { <OneProduct/> }/>
        <Route path = '/products/edit/:_id' element = { <Update/> }/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
