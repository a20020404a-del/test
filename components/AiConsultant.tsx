import React, { useState } from 'react';
import { Sparkles, Loader2, Palette } from 'lucide-react';
import { getNailDesignSuggestion } from '../services/geminiService';
import { LoadingState, AiResponse } from '../types';

export const AiConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const [result, setResult] = useState<AiResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setStatus(LoadingState.LOADING);
    setResult(null);

    try {
      const data = await getNailDesignSuggestion(input);
      setResult(data);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  return (
    <section id="ai-consultant" className="py-24 bg-gradient-to-br from-secondary to-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-md mb-6 text-primary">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-4xl text-gray-800 mb-4">AI Nail Consultant</h2>
          <p className="text-gray-600 leading-relaxed">
            次のネイルデザインに迷っていませんか？<br/>
            今の気分や予定（デート、オフィス、結婚式など）を教えてください。<br/>
            AIがあなたにぴったりのデザインとカラーをご提案します。
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-10 border border-white">
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="例：週末の京都旅行に着物に合う大人っぽいデザイン"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-white/50"
                disabled={status === LoadingState.LOADING}
              />
              <button
                type="submit"
                disabled={status === LoadingState.LOADING || !input.trim()}
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2 min-w-[140px]"
              >
                {status === LoadingState.LOADING ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Thinking...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    相談する
                  </>
                )}
              </button>
            </div>
          </form>

          {status === LoadingState.ERROR && (
             <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm text-center animate-fade-in">
               エラーが発生しました。しばらくしてからもう一度お試しください。
             </div>
          )}

          {status === LoadingState.SUCCESS && result && (
            <div className="animate-fade-in-up">
              <div className="bg-gradient-to-r from-rose-50 to-orange-50 p-6 rounded-xl border border-rose-100">
                <h3 className="font-serif text-xl text-accent mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> Suggestion
                </h3>
                <p className="text-gray-700 leading-7 mb-6 whitespace-pre-wrap">
                  {result.suggestion}
                </p>
                
                {result.colorPalette.length > 0 && (
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                      <Palette className="w-4 h-4" /> Recommended Colors
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {result.colorPalette.map((color, idx) => (
                        <div key={idx} className="group flex flex-col items-center gap-1">
                          <div 
                            className="w-12 h-12 rounded-full shadow-sm border border-gray-100 ring-2 ring-white"
                            style={{ backgroundColor: color }}
                          ></div>
                          <span className="text-[10px] text-gray-400 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                            {color}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <p className="text-center text-xs text-gray-400 mt-4">
                ※ 生成されたデザインはイメージです。ネイリストと相談して調整可能です。
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
