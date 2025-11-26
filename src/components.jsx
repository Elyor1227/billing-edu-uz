import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
        padding: '12px 16px',
        borderRadius: '12px',
        boxShadow: '0 10px 40px rgba(124, 58, 237, 0.4)',
        border: 'none',
      }}>
        <p style={{ 
          color: 'rgba(255,255,255,0.8)', 
          fontSize: '12px', 
          margin: 0,
          fontWeight: '500',
        }}>
          {label} 2024
        </p>
        <p style={{ 
          color: 'white', 
          fontSize: '11px', 
          margin: '4px 0 0 0',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{ opacity: 0.8 }}>Shartnomalar</span>
          <span style={{ fontWeight: '700', fontSize: '16px' }}>{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

const SemiCircleGauge = ({ percentage }) => {
  const totalBars = 20;
  const filledBars = Math.round((percentage / 100) * totalBars);
  
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
    }}>
      <svg width="180" height="100" viewBox="0 0 180 100">
        {Array.from({ length: totalBars }).map((_, index) => {
          const angle = 180 - (index * (180 / (totalBars - 1)));
          const radians = (angle * Math.PI) / 180;
          const innerRadius = 55;
          const outerRadius = 80;
          
          const x1 = 90 + innerRadius * Math.cos(radians);
          const y1 = 95 - innerRadius * Math.sin(radians);
          const x2 = 90 + outerRadius * Math.cos(radians);
          const y2 = 95 - outerRadius * Math.sin(radians);
          
          const isFilled = index < filledBars;
          
          return (
            <line
              key={index}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={isFilled ? (index < filledBars * 0.6 ? '#4C1D95' : '#7C3AED') : '#E5E7EB'}
              strokeWidth="8"
              strokeLinecap="round"
              style={{
                transition: 'all 0.3s ease',
                transitionDelay: `${index * 30}ms`,
              }}
            />
          );
        })}
      </svg>
      
      <div style={{ marginTop: '-10px', textAlign: 'center' }}>
        <div style={{
          fontSize: '36px',
          fontWeight: '700',
          color: '#1a1f36',
          letterSpacing: '-0.02em',
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {percentage}%
        </div>
        <div style={{
          fontSize: '13px',
          color: '#8B95A5',
          fontWeight: '500',
          marginTop: '4px',
        }}>
          Shartnoma olganlar soni
        </div>
      </div>
    </div>
  );
};

export default function ContractsChart() {
  const [period, setPeriod] = useState('Yillik');
  
  const data = [
    { month: 'Yan', value: 245 },
    { month: 'Fev', value: 288 },
    { month: 'Mar', value: 267 },
    { month: 'Apr', value: 312 },
    { month: 'May', value: 356 },
    { month: 'Iyun', value: 329 },
    { month: 'Iyul', value: 298 },
    { month: 'Avg', value: 276 },
    { month: 'Sen', value: 234 },
    { month: 'Okt', value: 212 },
    { month: 'Noy', value: 189 },
    { month: 'Dek', value: 178 },
  ];

  return (
    <div style={{
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: '32px',
      background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
      minHeight: '100vh',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
      }}>
        {/* Main Chart */}
        <div style={{
          flex: '2',
          minWidth: '500px',
          background: 'linear-gradient(145deg, #0F172A 0%, #1E293B 100%)',
          borderRadius: '20px',
          padding: '28px',
          boxShadow: '0 20px 60px rgba(15, 23, 42, 0.3)',
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '32px',
          }}>
            <h2 style={{
              color: 'white',
              fontSize: '20px',
              fontWeight: '600',
              margin: 0,
              letterSpacing: '-0.01em',
            }}>
              Tasdiqlangan Shartnomalar
            </h2>
            
            <div style={{
              position: 'relative',
            }}>
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  borderRadius: '10px',
                  padding: '10px 36px 10px 16px',
                  color: 'white',
                  fontSize: '13px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  appearance: 'none',
                  outline: 'none',
                }}
              >
                <option value="Yillik">Yillik</option>
                <option value="Oylik">Oylik</option>
                <option value="Haftalik">Haftalik</option>
              </select>
              <span style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(255,255,255,0.6)',
                pointerEvents: 'none',
                fontSize: '10px',
              }}>
                ▼
              </span>
            </div>
          </div>
          
          {/* Chart */}
          <div style={{ height: '280px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="50%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 500 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip content={<CustomTooltip />} cursor={false} />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="url(#lineGradient)"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{
                    r: 8,
                    fill: '#8B5CF6',
                    stroke: 'white',
                    strokeWidth: 3,
                    filter: 'url(#glow)',
                  }}
                  filter="url(#glow)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Gauge Card */}
        <div style={{
          flex: '1',
          minWidth: '220px',
          background: 'white',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
          border: '1px solid rgba(0,0,0,0.04)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <SemiCircleGauge percentage={78} />
        </div>
      </div>
    </div>
  );
}