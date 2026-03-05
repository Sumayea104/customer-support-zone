import React from 'react';
import ticketsData from '../tickets.json'; // আপনার পাথ অনুযায়ী ইমপোর্ট করুন

const TicketList = ({tickets, onSelect, taskStatus, resolvedTasks}) => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen px-4 md:px-16 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Customer Tickets (2/3 width) */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-[#001931] mb-6">Customer Tickets</h2>
          
          {/* ২-কলামের গ্রিড */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ticketsData.map((ticket) => (
              <div 
                key={ticket.id} 
                className="bg-white p-6 rounded-[16px] shadow-sm border border-gray-50 flex flex-col justify-between"
              >
                {/* Header: Title and Status Badge */}
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h3 className="font-bold text-[#001931] text-[17px] leading-tight flex-1">
                    {ticket.title}
                  </h3>
                  <span 
                    className={`flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${
                      ticket.status === 'Open' 
                        ? 'text-[#02A53B] bg-[#E6F6EC]' 
                        : 'text-[#FEBB0C] bg-[#FFF8E6]'
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${
                      ticket.status === 'Open' ? 'bg-[#02A53B]' : 'bg-[#FEBB0C]'
                    }`}></span>
                    {ticket.status}
                  </span>
                </div>

                {/* Description */}
                <p className="text-[#627382] text-[13px] mb-5 line-clamp-2 leading-relaxed">
                  {ticket.description}
                </p>

                {/* Footer: ID, Priority, Name, Date */}
                <div className="flex justify-between items-center text-[10px] font-bold tracking-tight">
                  <div className="flex items-center gap-3">
                    <span className="text-[#627382] opacity-50">#{ticket.id}</span>
                    <span className={`${
                      ticket.priority === 'HIGH PRIORITY' ? 'text-[#F83044]' : 
                      ticket.priority === 'MEDIUM PRIORITY' ? 'text-[#9C7700]' : 'text-[#34485A]'
                    }`}>
                      {ticket.priority}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[#627382]">
                    <span>{ticket.customerName}</span>
                    <span className="opacity-70">📅 {ticket.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Task Status Panels (1/3 width) */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-bold text-[#001931] mb-4">Task Status</h2>
            <div className="text-[#627382] text-sm italic py-10 border-2 border-dashed border-gray-200 rounded-xl text-center">
              Select a ticket to add to Task Status
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#001931] mb-4">Resolved Task</h2>
            <div className="text-[#627382] text-sm italic py-10 border-2 border-dashed border-gray-200 rounded-xl text-center">
              No resolved tasks yet.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TicketList;