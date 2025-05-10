import './App.css'
import {Routes,Route} from 'react-router-dom'
import MainPage from './pages/MainPage/MainPage'
import ItemPage from './pages/ItemPage/ItemPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage/>}> </Route>
        <Route path='item' element={<ItemPage/>}> </Route>
      </Routes>
    </>
  )
}

export default App
