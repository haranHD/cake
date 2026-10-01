import React, { useState } from 'react';
import { Sparkles, Camera } from 'lucide-react';

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('all');

  const galleryItems = [
    {
      id: 1,
      category: 'cakes',
      categoryLabel: 'Celebration Cakes',
      title: 'Pink Petal Celebration Cake',
      desc: 'Layered vanilla sponge with soft pink buttercream and edible floral accents',
      image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80',
      span: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 2,
      category: 'brownies',
      categoryLabel: 'Brownies',
      title: 'Classic Fudgy Crinkle Brownies',
      desc: 'Decadent dark chocolate squares with glossy paper-thin crust',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 3,
      category: 'cookies',
      categoryLabel: 'Cookies',
      title: 'Gourmet Choco Chip Cookies',
      desc: 'Golden-brown with molten dark chocolate morsels & flaky sea salt',
      image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=700&q=80',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 4,
      category: 'cakes',
      categoryLabel: 'Celebration Cakes',
      title: 'Pastel Rose Macaron Cake',
      desc: 'Blush pink drip cake adorned with handcrafted macarons',
      image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&w=700&q=80',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 5,
      category: 'brownies',
      categoryLabel: 'Brownies',
      title: 'Cheesecake Swirl Brownie Bars',
      desc: 'Artisanal marbled cream cheese ribboned into rich cocoa batter',
      image: 'https://images.unsplash.com/photo-1515037893149-de7f840978e2?auto=format&fit=crop&w=700&q=80',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 6,
      category: 'cookies',
      categoryLabel: 'Cookies',
      title: 'Artisan Melt-in-Mouth Cookies',
      desc: 'Delicate buttery crumb with golden baked texture',
      image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=700&q=80',
      span: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 7,
      category: 'cakes',
      categoryLabel: 'Celebration Cakes',
      title: 'Floral Summer Berry Cake',
      desc: 'Fresh raspberries, fresh flowers, and smooth Swiss meringue buttercream',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80',
      span: 'md:col-span-1 md:row-span-1'
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#D81B60] bg-[#FFF0F5] border border-pink-100 mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Masterclass Creations</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#420C1C] tracking-tight">
            Baking Gallery
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            A glimpse into the celebration cakes, fudgy brownies, and cookies created with love and luxury.
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Creations' },
              { id: 'cakes', label: 'Celebration Cakes' },
              { id: 'brownies', label: 'Brownies' },
              { id: 'cookies', label: 'Cookies' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#5E1228] text-white shadow-md'
                    : 'bg-[#FFF0F5] text-[#5E1228] hover:bg-pink-100/70'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Editorial Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className={`group relative rounded-3xl overflow-hidden shadow-md border border-pink-100/80 bg-stone-100 ${
                activeTab === 'all' ? item.span : 'md:col-span-1 md:row-span-1'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              
              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              
              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform transition-transform">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#D81B60] text-white mb-1.5">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif font-bold text-lg sm:text-xl leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-pink-100/90 mt-1 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
