import AgendamentoCard from '../ui/AgendamentoCard';
import AlertaCard from '../ui/AlertaCard';
import AgendaCard from '../ui/AgendaCard';

export default function CentralCidadaoWidget() {
  return (
    <section className="max-w-[1400px] mx-auto px-[5%] mb-[60px]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-[30px] gap-[10px]">
        <div className="flex items-center gap-[12px]">
          <span className="w-[10px] h-[10px] bg-[#008A3E] rounded-full"></span>
          <h3 className="text-[1.6rem] font-extrabold text-[#0A2540] tracking-[-0.5px] m-0">
            Central do Cidadão
          </h3>
        </div>
        <span className="text-[0.75rem] text-[#64748B] font-bold uppercase tracking-[0.5px]">
          Atualizado em tempo real
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        <AgendamentoCard />
        <AlertaCard />
        <AgendaCard />
      </div>
    </section>
  );
}