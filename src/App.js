import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import ProductPage from './Pages/ProductPage';
import Components from './MainComponents/Components'




function App() {
  return (

         <BrowserRouter>
       <Routes>
        <Route path='/' element={<Components/>}/>
        <Route path='/product' element={<ProductPage/>}/>
       </Routes>
    </BrowserRouter>
 

 
  );
        
 
}




export default App;
