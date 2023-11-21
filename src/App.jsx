import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div className='max-w-[375px] h-screen flex flex-col justify-between mx-auto bg-slate-200'>
       <Navbar />
       <Footer />
    </div>
  )
}

export default App
