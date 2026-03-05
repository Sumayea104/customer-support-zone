
import './App.css'
import Navbar from './components/Navbar';
import Banner from './components/Banner';

import ticketData from './tickets.json';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
    <>
    <div className='min-h-screen bg-[#F5F5F5] font-sans'>      
      <Navbar></Navbar>
      <Banner inProgressCount={0} resolvedCount={0} />
    </div>
    </>
  )
}

export default App
