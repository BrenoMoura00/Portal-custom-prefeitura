'use client';

export default function WhatsAppButton() {
  const whatsappNumber = "5511999999999"; 
  const defaultMessage = "Olá! Gostaria de mais informações pelo portal.";
  
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <div className="fixed bottom-[30px] right-[30px] z-[999] flex flex-col items-end group">
      <div className="absolute bottom-[100%] right-0 mb-[12px] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-[10px] group-hover:translate-y-0 w-max">
        <div className="bg-white text-[#0A2540] text-[0.85rem] font-bold py-[8px] px-[16px] rounded-[12px] shadow-[0_8px_20px_rgba(0,0,0,0.15)] border border-[#E2E8F0] relative">
          Fale Conosco
          <div className="absolute bottom-[-6px] right-[16px] w-[12px] h-[12px] bg-white border-b border-r border-[#E2E8F0] rotate-45"></div>
        </div>
      </div>

      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] text-white rounded-full shadow-[0_8px_25px_rgba(37,211,102,0.4)] hover:bg-[#1DA851] hover:scale-110 transition-all duration-300"
        aria-label="Entrar em contato pelo WhatsApp"
      >
        <span className="absolute inset-0 rounded-full border-[2px] border-[#25D366] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite] opacity-50"></span>
        <img 
          src="/assets/whatsapp-logo-white.png" 
          alt="WhatsApp" 
          className="w-[32px] h-[32px] object-contain z-10"
        />
      </a>
    </div>
  );
}