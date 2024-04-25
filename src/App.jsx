
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Rooms from './Pages/Rooms';
import Home from './Pages/Home';
import RoomPage from './Pages/RoomPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='rooms' element={<Rooms/>}/>
          <Route path='rooms/:id' element={<RoomPage/>}/>


        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App;
