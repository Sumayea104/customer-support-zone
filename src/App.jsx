import React, {useState} from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketList from './components/TicketList';

import ticketsData from './tickets.json';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [taskStatus, setTaskStatus] = useState(null);
  const [resolvedTask, setResolvedTasks] = useState([]);
  const handleSelectTicket = (ticket) =>{
    setTaskStatus(ticket);
  }
  const inProgressCount = taskStatus?1:0;
  const resolvedCount = setResolvedTasks.length;

  return (
    <>
    <div className='min-h-screen bg-[#F5F5F5] font-sans'>      
      <Navbar/>
      <Banner inProgressCount={0} resolvedCount={0} />
      <TicketList/>
    </div>
    </>
  )
}

export default App
