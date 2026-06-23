import React from 'react';

export default function InstagramFeedWidgetV2() {
  const posts = [
    { img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=300&q=80', likes: '234' },
    { img: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=300&q=80', likes: '189' },
    { img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&q=80', likes: '412' },
    { img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=300&q=80', likes: '98' },
    { img: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=300&q=80', likes: '356' },
    { img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&q=80', likes: '145' },
  ];

  return (
    <div className="bg-white rounded-[24px] p-8 border border-gray-200/60 shadow-[0_8px_30px_rgb(0,0,0,0.08)] h-full">
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-500 to-amber-400 flex items-center justify-center text-white text-lg">
            <i className="fab fa-instagram"></i>
          </div>
          <div>
            <span className="text-[#005FA3] font-bold tracking-widest text-[10px] uppercase block">Redes Sociais</span>
            <h3 className="text-lg font-black text-[#0A2540]">@prefeitura_oficial</h3>
          </div>
        </div>
        <a href="#" className="text-sm font-bold text-[#005FA3] hover:text-[#0A2540] transition-colors border border-gray-200 px-4 py-2 rounded-full hover:bg-gray-50">
          Seguir
        </a>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {posts.map((post, i) => (
          <a key={i} href="#" className="group relative aspect-square rounded-xl overflow-hidden">
            <img src={post.img} alt="Instagram" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">❤️ {post.likes}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
