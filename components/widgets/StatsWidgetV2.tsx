'use client';
import React from 'react';

export default function StatsWidgetV2() {
  const stats = [
    { value: 94, label: 'Obras Concluídas', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', color: '#005FA3', bg: 'from-blue-50 to-blue-100/50' },
    { value: 85, label: 'Metas Atingidas', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: '#059669', bg: 'from-emerald-50 to-emerald-100/50' },
    { value: 72, label: 'Orçamento Executado', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: '#D97706', bg: 'from-amber-50 to-amber-100/50' },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 h-full">
      {stats.map((stat, i) => {
        const circumference = 2 * Math.PI * 36;
        const offset = circumference - (stat.value / 100) * circumference;
        
        return (
          <div key={i} className={`bg-gradient-to-br ${stat.bg} rounded-[24px] p-6 border border-white/80 shadow-[0_6px_24px_rgb(0,0,0,0.08)] flex items-center gap-6 group hover:shadow-xl transition-all`}>
            <div className="relative w-20 h-20 shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="36" fill="none" stroke="#E5E7EB" strokeWidth="6" />
                <circle 
                  cx="40" cy="40" r="36" fill="none" 
                  stroke={stat.color} strokeWidth="6" strokeLinecap="round"
                  strokeDasharray={circumference} strokeDashoffset={offset}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-black text-[#0A2540]">{stat.value}%</span>
              </div>
            </div>

            <div className="flex-1">
              <div className="w-9 h-9 rounded-lg bg-white/60 flex items-center justify-center mb-2 shadow-sm">
                <svg className="w-5 h-5" style={{ color: stat.color }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={stat.icon} />
                </svg>
              </div>
              <h4 className="text-sm font-bold text-[#0A2540] uppercase tracking-wider">{stat.label}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
