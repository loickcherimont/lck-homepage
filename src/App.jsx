import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ContactUs } from './components/ContactUs'
import { Blog } from './components/Blog'
import { Gallery } from './components/Gallery'
import { Error } from './components/Error'
import { Home } from './components/Home'

function App() {

  return (
    <div className='bg-slate-200 h-screen flex flex-col justify-stretch text-indigo-600'>
      <Routes>
      {/* <Header/> */}
      {/* 2023-09-30 : Routes component contains all the route and route defines the individual routes to choose from */}
      {/* By default */}
        <Route index element={<Home />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
        {/* Not existing route */}
        <Route path='*' element={<Error/>}/>
      {/* <Jumbotron /> */}
      </Routes>
    </div>

  )
}

export default App
