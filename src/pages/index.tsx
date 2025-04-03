import React, { useState } from 'react';
import Head from 'next/head';
import Clock from '@/components/Clock';
import TimezoneSelector from '@/components/TimezoneSelector';
import { Timezone } from '@/schemas/timezoneSchema';

const HomePage: React.FC = () => {
  // 日本時間は固定
  const japanTimezone: Timezone = 'Asia/Tokyo';
  
  // 初期値としてUTCを設定
  const [selectedTimezone, setSelectedTimezone] = useState<Timezone>('UTC');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-indigo-950 to-slate-950 py-16 px-4 relative overflow-hidden">
      {/* 装飾的な地球のグラフィック要素 */}
      <div className="absolute inset-0 bg-[url('/world-map.png')] opacity-5 bg-no-repeat bg-center bg-contain" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_100%)]" />
      
      <Head>
        <title>World Time Zone - グローバル時計</title>
        <meta name="description" content="世界各国の時間をリアルタイムで表示するグローバル時計アプリ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-6xl relative z-10">
        <h1 className="text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
          World Time Zone
        </h1>
        <p className="text-center text-blue-300/80 mb-12 text-lg">
          Connecting Time Across the Globe
        </p>
        
        <TimezoneSelector 
          selectedTimezone={selectedTimezone} 
          onTimezoneChange={setSelectedTimezone} 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Clock timezone={japanTimezone} label="JAPAN TIME" />
          <Clock timezone={selectedTimezone} label="WORLD TIME" />
        </div>
      </main>

      <footer className="mt-16 text-center text-blue-300/50 relative z-10">
        <p>© 2024 World Time Zone</p>
      </footer>
    </div>
  );
};

export default HomePage; 