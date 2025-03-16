import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup.tsx'
import Signin from './pages/Signin.tsx'
import Blogs from './pages/BlogsPage.tsx'
import Blog from './pages/Blog.tsx'
import Publish from './pages/Publish.tsx'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/:id' element={<Blog/>}/>
          <Route path='/publish' element={<Publish/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
