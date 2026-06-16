export default function SeloPrataBanner() {
  return (
    <div className="bg-gradient-to-br from-[#0A2540] to-[#0d2b4a] rounded-[24px] p-[28px_32px] flex items-center gap-[24px] relative overflow-hidden text-white shadow-[0_12px_30px_rgba(10,37,64,0.15)] border border-white/5">
      <div className="absolute w-[200px] h-[200px] bg-[#005FA3] blur-[80px] -top-[80px] -right-[50px] opacity-40 rounded-full pointer-events-none"></div>
      <div className="w-[65px] h-[65px] bg-white/10 border border-white/20 backdrop-blur-[10px] rounded-[20px] flex justify-center items-center text-[2.2rem] text-white z-[2] shrink-0">
        <i className="fas fa-medal"></i>
      </div>
      <div className="z-[2]">
        <h4 className="text-[1.35rem] font-extrabold mb-[4px]">Selo Prata ATRICON</h4>
        <p className="text-[0.9rem] opacity-85 m-0 font-medium">Transparência Pública 2025</p>
      </div>
      <div className="absolute bottom-0 left-0 h-[4px] w-full bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </div>
  );
}