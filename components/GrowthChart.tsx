import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Mês 1', followers: 120 },
  { name: 'Mês 2', followers: 350 },
  { name: 'Mês 3', followers: 900 },
  { name: 'Mês 4', followers: 1500 },
  { name: 'Mês 5', followers: 4000 },
  { name: 'Mês 6', followers: 10000 },
];

const GrowthChart: React.FC = () => {
  return (
    <div className="w-full h-64 bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/10 mt-6">
      <h4 className="text-center text-sm text-gray-300 mb-4">Poder da Constância (Exemplo Real)</h4>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis 
            dataKey="name" 
            stroke="#666" 
            fontSize={10} 
            tickLine={false}
            axisLine={false}
          />
          <YAxis 
            hide 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', borderRadius: '8px' }}
            itemStyle={{ color: '#FCAF45' }}
          />
          <Line 
            type="monotone" 
            dataKey="followers" 
            stroke="#FD1D1D" 
            strokeWidth={3} 
            dot={{ r: 4, fill: '#F77737' }} 
            activeDot={{ r: 6 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GrowthChart;