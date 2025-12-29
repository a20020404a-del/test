import React from 'react';
import { ServiceCategory } from '../types';

const categories: ServiceCategory[] = [
  {
    title: "Hand Gel",
    items: [
      { name: "Clear Gel", price: "¥6,000", description: "クリアジェルのみ、艶出しや爪の補強に。", duration: "60min" },
      { name: "One Color", price: "¥7,500", description: "お好きなカラーを1色お選びいただけます。", duration: "90min" },
      { name: "French / Gradation", price: "¥8,500", description: "定番のフレンチ、またはグラデーション。", duration: "100min" },
      { name: "Art Course (Simple)", price: "¥9,500", description: "2〜4本のアート。", duration: "120min" },
      { name: "Art Course (Full)", price: "¥11,500", description: "持ち込みデザイン可。10本アート。", duration: "150min" },
    ]
  },
  {
    title: "Foot Gel",
    items: [
      { name: "One Color", price: "¥8,500", description: "フットバス付き。", duration: "90min" },
      { name: "Art Course", price: "¥10,500", description: "親指アートなど、お好きなデザイン。", duration: "120min" },
    ]
  },
  {
    title: "Care & Off",
    items: [
      { name: "Hand Care", price: "¥4,000", description: "整爪、甘皮処理、表面磨き、マッサージ。", duration: "50min" },
      { name: "Gel Off (Return)", price: "¥1,000", description: "当店付け替えオフ。", duration: "30min" },
      { name: "Gel Off (Other)", price: "¥2,000", description: "他店付け替えオフ。", duration: "40min" },
    ]
  }
];

export const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-gray-800 mb-4">Menu</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-500">
            お客様の爪の状態に合わせた丁寧な施術を心がけております。<br/>
            表示価格はすべて税込です。
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-serif text-2xl text-accent mb-8 pb-2 border-b border-gray-100">
                {category.title}
              </h3>
              <ul className="space-y-6">
                {category.items.map((item, i) => (
                  <li key={i} className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-1">
                        <h4 className="font-medium text-gray-800 text-lg">{item.name}</h4>
                        <span className="md:hidden font-medium text-accent">{item.price}</span>
                      </div>
                      {item.description && (
                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                      )}
                      {item.duration && (
                         <p className="text-gray-400 text-xs mt-1">目安時間: {item.duration}</p>
                      )}
                    </div>
                    <span className="hidden md:block font-medium text-accent text-lg min-w-[80px] text-right">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
