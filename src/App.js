import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Create from './Components/Product/Create';
import Edit from './Components/Product/Edit';
import List from './Components/Product/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path="/product/create" element={<Create />} />
            <Route path="/product/edit/:id" element={<Edit />} />
            <Route exact path='/' element={<List />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
