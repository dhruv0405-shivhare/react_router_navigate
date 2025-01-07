
import { Route,Routes } from 'react-router-dom'
import Nav from './Layout'
import Home from './Home'
import About from './About'
import Contact from './Contact'


function App() {


  return (


    <>
      <Routes>
        <Route path='/' element={<Nav />} >
        <Route index element={<Home/>} />
        <Route  path='/about/:name/:age' element={<About/>} />
        <Route  path='/contact' element={<Contact/>} />
       

        </Route>
      </Routes>

    </>
  )
}

export default App
