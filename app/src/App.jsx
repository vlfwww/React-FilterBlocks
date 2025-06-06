import './App.css'
import {Routes,Route} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import ItemPage from './pages/ItemPage/ItemPage'
import StarPage from './pages/StarPage/StarPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}> </Route>
        <Route path='/item/:id' element={<ItemPage/>}> </Route>
        <Route path='/basket' element={<StarPage/>}> </Route>
      </Routes>
    </>
  )
}

export default App
