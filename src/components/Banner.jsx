import vector1 from '../assets/vector1.png'; 
import vector2 from '../assets/vector2.png'; 

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 px-4 md:px-16 overflow-hidden">
      <div 
        className="h-52 relative flex flex-col justify-center items-center text-white rounded-[10px] overflow-hidden"
        style={{ background: 'linear-gradient(107deg, #1E4ED8 0%, #7C3AED 100%)' }}
      >
        <img 
          src={vector1} 
          alt="" 
          className="absolute left-10-top-10 w-[150%] h-[150%] object-content-opacity-80 mix-blend-overlay " 
        />
        
        <div className="relative z-10 text-center">
          <h3 className="text-xl font-medium mb-1 opacity-90 tracking-wide">In-Progress</h3>
          <p className="text-7xl font-bold tracking-tighter">{inProgressCount}</p>
        </div>
      </div>
      {/* resolved */}
      <div 
        className="h-52 relative flex flex-col justify-center items-center text-white rounded-[10px] overflow-hidden"
        style={{ background: 'linear-gradient(107deg, #54CF68 0%, #00827A 100%)' }} 
      >
        <img 
          src={vector2} 
          alt="" 
          className="absolute right-[-5%] top-[-5%] w-[110%] h-[110%] object-cover opacity-25 mix-blend-overlay pointer-events-none"
        />
        <div className="relative z-10 text-center">
          <h3 className="text-xl font-medium mb-1 opacity-90 tracking-wide">Resolved</h3>
          <p className="text-7xl font-bold tracking-tighter">{resolvedCount}</p>
        </div>
      </div>

    </div>
  );
};

export default Banner;