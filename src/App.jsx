import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketList from './components/TicketList';
import Footer from './components/Footer';
import ticketsData from './tickets.json';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [taskStatus, setTaskStatus] = useState([]); 
  const [resolvedTasks, setResolvedTasks] = useState([]); // Resolved কাজের জন্য স্টেট

  // ১. টিকেট সিলেক্ট করা (Customer Tickets -> Task Status)
  const handleSelectTicket = (ticket) => {
    setTaskStatus([...taskStatus, ticket]);
    setTickets(tickets.filter(t => t.id !== ticket.id));
    toast.info("Ticket added to Task Status!");
  };

  // ২. টাস্ক কমপ্লিট করা (Task Status -> Resolved Task)
  const handleCompleteTask = (ticket) => {
    // In-Progress থেকে সরানো
    setTaskStatus(taskStatus.filter(t => t.id !== ticket.id));
    // Resolved লিস্টে যোগ করা
    setResolvedTasks([...resolvedTasks, ticket]);
    toast.success("Task Resolved Successfully!");
  };

  return (
    <div className='min-h-screen bg-[#F5F5F5] font-sans'>
      <Navbar />
      
      {/* এখন ইন-প্রোগ্রেস এবং রিজলভড—দুটো কাউন্টই আপডেট হবে */}
      <Banner 
        inProgressCount={taskStatus.length} 
        resolvedCount={resolvedTasks.length} 
      />
      
      <TicketList 
  tickets={tickets} 
  onSelect={handleSelectTicket} 
  taskStatus={taskStatus}
  resolvedTasks={resolvedTasks}
  onComplete={handleCompleteTask} 
/>
      
      <Footer />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;