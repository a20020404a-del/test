import React from 'react';

export const Booking: React.FC = () => {
  return (
    <section id="booking" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-gray-800 mb-4">Reservation</h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-500">
            ご予約はお電話、または下記のフォームより承っております。<br/>
            お急ぎの場合はお電話にてご連絡ください。
          </p>
          <div className="mt-6 text-2xl font-serif text-accent">
            TEL: 03-1234-5678
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
           <div className="md:w-1/3 bg-primary p-8 text-white flex flex-col justify-center items-start">
             <h3 className="text-xl font-serif mb-6">Business Hours</h3>
             <ul className="space-y-4 text-sm opacity-90">
               <li>
                 <span className="block text-xs uppercase opacity-75">Mon - Fri</span>
                 <span className="text-lg">10:00 - 20:00</span>
               </li>
               <li>
                 <span className="block text-xs uppercase opacity-75">Sat - Sun</span>
                 <span className="text-lg">09:00 - 19:00</span>
               </li>
               <li className="pt-4 border-t border-white/20">
                 <span className="block text-xs uppercase opacity-75">Close</span>
                 <span>Irregular Holidays</span>
               </li>
             </ul>
           </div>

           <div className="md:w-2/3 p-8 md:p-10">
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">お名前</label>
                   <input type="text" id="name" className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="山田 花子" />
                 </div>
                 <div>
                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">電話番号</label>
                   <input type="tel" id="phone" className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="090-1234-5678" />
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">希望日</label>
                    <input type="date" id="date" className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">希望時間</label>
                    <select id="time" className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors">
                      <option>10:00</option>
                      <option>12:00</option>
                      <option>14:00</option>
                      <option>16:00</option>
                      <option>18:00</option>
                    </select>
                  </div>
               </div>

               <div>
                 <label htmlFor="menu" className="block text-sm font-medium text-gray-700 mb-1">ご希望メニュー</label>
                 <select id="menu" className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors">
                   <option>Hand Gel: One Color</option>
                   <option>Hand Gel: Art Course</option>
                   <option>Foot Gel</option>
                   <option>Care / Off</option>
                 </select>
               </div>

               <div>
                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">ご要望・ご質問</label>
                 <textarea id="message" rows={3} className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="オフあり、長さ出し希望など"></textarea>
               </div>

               <div className="pt-2">
                 <button type="submit" className="w-full bg-accent text-white py-3 rounded-md hover:bg-gray-800 transition-colors uppercase tracking-widest text-sm font-medium shadow-md">
                   Send Request
                 </button>
                 <p className="text-xs text-gray-400 text-center mt-3">
                   ※フォーム送信時点では予約は確定しておりません。当店からの連絡をお待ちください。
                 </p>
               </div>
             </form>
           </div>
        </div>
      </div>
    </section>
  );
};
