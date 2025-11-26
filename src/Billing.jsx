import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const StatsCard = ({ icon, label, value, change, changeType, iconBg, iconColor }) => {
  const isPositive = changeType === 'positive';
  const isNegative = changeType === 'negative';
  
  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '24px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
      border: '1px solid rgba(0,0,0,0.04)',
      flex: 1,
      minWidth: '140px',
      transition: 'all 0.3s ease',
    }}>
      {/* Icon Container */}
      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: '14px',
        background: iconBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <span style={{ fontSize: '24px' }}>{icon}</span>
      </div>
      
      {/* Content */}
      <div style={{ flex: 1 }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '4px',
        }}>
          <div style={{
            width: '3px',
            height: '14px',
            borderRadius: '2px',
            background: iconColor,
          }} />
          <span style={{
            fontSize: '13px',
            fontWeight: '500',
            color: '#8B95A5',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
          }}>
            {label}
          </span>
        </div>
        
        <div style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#1a1f36',
          letterSpacing: '-0.02em',
          marginBottom: '6px',
          fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        }}>
          {value}
        </div>
        
        <div style={{
          fontSize: '12px',
          fontWeight: '500',
          color: isPositive ? '#10B981' : isNegative ? '#EF4444' : '#8B95A5',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          <span style={{ fontSize: '14px' }}>
            {isPositive ? '↑' : isNegative ? '↓' : ''}
          </span>
          {change} o'tgan haftadan beri
        </div>
      </div>
    </div>
  );
};

export default function Billing() {
  const stats = [
    {
      icon: '🏢',
      label: 'Organizations',
      value: '1,456',
      change: '+6.5%',
      changeType: 'positive',
      iconBg: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
      iconColor: '#6366F1',
    },
    {
      icon: '📄',
      label: 'Shartnomalar',
      value: '3,345',
      change: '-0.10%',
      changeType: 'negative',
      iconBg: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
      iconColor: '#F59E0B',
    },
    {
      icon: '💳',
      label: "To'lovlar soni",
      value: '2,847',
      change: '-0.2%',
      changeType: 'negative',
      iconBg: 'linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%)',
      iconColor: '#22C55E',
    },
    {
      icon: '💰',
      label: "To'langan summa",
      value: '$847,250',
      change: '+11.5%',
      changeType: 'positive',
      iconBg: 'linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)',
      iconColor: '#EC4899',
    },
    {
      icon: '💰',
      label: "Kirishlar soni",
      value: '8000',
      change: '+11.5%',
      changeType: 'positive',
      iconBg: 'linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)',
      iconColor: '#EC4899',
    },
  ];

  return (
    <div style={{
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      padding: '32px',
      width: '80%',
      margin: '0 auto',
      background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
      minHeight: '100vh',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <h1 style={{
        fontSize: '24px',
        fontWeight: '700',
        color: '#1a1f36',
        marginBottom: '24px',
        letterSpacing: '-0.01em',
      }}>
        📊 Dashboard
      </h1>
      
      <div style={{
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
      }}>
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
      <ContractsChart />
      <ModulesStatistics />
      <StipendiyaIjaraStats />
      <TopUniversitiesCharts />
      <BankLogosCarousel />
    </div>
  );
}


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
function ContractsChart() {
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


const ModuleRow = ({ icon, name, contracts, paidAmount, debt, isEven }) => {
  const hasDebt = debt > 0;
  
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '2fr 1.5fr 1fr 1fr',
      alignItems: 'center',
      padding: '20px 28px',
      background: isEven ? 'rgba(248, 250, 252, 0.6)' : 'white',
      borderBottom: '1px solid rgba(0,0,0,0.04)',
      transition: 'all 0.2s ease',
    }}>
      {/* Module Name */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
      }}>
        <div style={{
          width: '42px',
          height: '42px',
          borderRadius: '12px',
          background: icon.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '18px',
        }}>
          {icon.emoji}
        </div>
        <span style={{
          fontSize: '15px',
          fontWeight: '600',
          color: '#1a1f36',
        }}>
          {name}
        </span>
      </div>
      
      {/* Contracts Count */}
      <div style={{
        fontSize: '15px',
        fontWeight: '500',
        color: '#374151',
      }}>
        {contracts.toLocaleString()} ta
      </div>
      
      {/* Paid Amount */}
      <div style={{
        fontSize: '15px',
        fontWeight: '600',
        color: '#10B981',
      }}>
        ${paidAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
      </div>
      
      {/* Debt */}
      <div style={{
        fontSize: '15px',
        fontWeight: '600',
        color: hasDebt ? '#EF4444' : '#6B7280',
        textAlign: 'right',
      }}>
        {hasDebt ? `$${debt.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '—'}
      </div>
    </div>
  );
};
function ModulesStatistics() {
  const modules = [
    {
      icon: { emoji: '💳', bg: 'linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)' },
      name: "To'lov kontrakt",
      contracts: 789456,
      paidAmount: 942.00,
      debt: 942.00,
    },
    {
      icon: { emoji: '🏦', bg: 'linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%)' },
      name: "Kredit modul",
      contracts: 588654,
      paidAmount: 881.00,
      debt: 0,
    },
    {
      icon: { emoji: '🏠', bg: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)' },
      name: "Yotoqxona",
      contracts: 98564,
      paidAmount: 409.00,
      debt: 409.00,
    },
  ];

  return (
    <div style={{
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: '32px',
      background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div style={{
        background: 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        border: '1px solid rgba(0,0,0,0.04)',
      }}>
        {/* Header */}
        <div style={{
          padding: '24px 28px',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#1a1f36',
            margin: 0,
            letterSpacing: '-0.01em',
          }}>
            Modullar statistikasi
          </h2>
        </div>
        
        {/* Table Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1.5fr 1fr 1fr',
          padding: '16px 28px',
          background: 'rgba(248, 250, 252, 0.8)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}>
          <span style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#8B95A5',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Modullar nomi
          </span>
          <span style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#8B95A5',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Shartnomalar soni
          </span>
          <span style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#8B95A5',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            To'langan summa
          </span>
          <span style={{
            fontSize: '12px',
            fontWeight: '600',
            color: '#8B95A5',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            textAlign: 'right',
          }}>
            Qarzdorlik
          </span>
        </div>
        
        {/* Table Rows */}
        {modules.map((module, index) => (
          <ModuleRow 
            key={index} 
            {...module} 
            isEven={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}


const MultiRingChart = ({ title, data, period, onPeriodChange }) => {
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  
  // Calculate stroke dasharray for each ring
  const calculateStroke = (value, maxValue, radius) => {
    const circumference = 2 * Math.PI * radius;
    const percentage = value / maxValue;
    const strokeLength = circumference * percentage;
    return `${strokeLength} ${circumference - strokeLength}`;
  };

  return (
    <div style={{
      background: 'linear-gradient(145deg, #0F172A 0%, #1E293B 100%)',
      borderRadius: '20px',
      padding: '24px',
      minWidth: '280px',
      flex: 1,
      boxShadow: '0 20px 60px rgba(15, 23, 42, 0.3)',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
      }}>
        <h3 style={{
          color: 'white',
          fontSize: '16px',
          fontWeight: '600',
          margin: 0,
        }}>
          {title}
        </h3>
        
        <div style={{ position: 'relative' }}>
          <select
            value={period}
            onChange={(e) => onPeriodChange(e.target.value)}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '8px',
              padding: '6px 28px 6px 12px',
              color: 'white',
              fontSize: '12px',
              fontWeight: '500',
              cursor: 'pointer',
              appearance: 'none',
              outline: 'none',
            }}
          >
            <option value="Haftalik">Haftalik</option>
            <option value="Oylik">Oylik</option>
            <option value="Yillik">Yillik</option>
          </select>
          <span style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'rgba(255,255,255,0.6)',
            pointerEvents: 'none',
            fontSize: '8px',
          }}>▼</span>
        </div>
      </div>
      
      {/* Chart */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '24px',
      }}>
        <div style={{ position: 'relative', width: '180px', height: '180px' }}>
          <svg width="180" height="180" viewBox="0 0 180 180">
            {/* Background rings */}
            <circle cx="90" cy="90" r="75" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
            <circle cx="90" cy="90" r="55" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
            <circle cx="90" cy="90" r="35" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
            
            {/* Data rings */}
            <circle 
              cx="90" cy="90" r="75" 
              fill="none" 
              stroke={data[0].color}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={calculateStroke(data[0].value, data[0].max, 75)}
              transform="rotate(-90 90 90)"
              style={{ filter: `drop-shadow(0 0 6px ${data[0].color}40)` }}
            />
            <circle 
              cx="90" cy="90" r="55" 
              fill="none" 
              stroke={data[1].color}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={calculateStroke(data[1].value, data[1].max, 55)}
              transform="rotate(-90 90 90)"
              style={{ filter: `drop-shadow(0 0 6px ${data[1].color}40)` }}
            />
            <circle 
              cx="90" cy="90" r="35" 
              fill="none" 
              stroke={data[2].color}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={calculateStroke(data[2].value, data[2].max, 35)}
              transform="rotate(-90 90 90)"
              style={{ filter: `drop-shadow(0 0 6px ${data[2].color}40)` }}
            />
          </svg>
          
          {/* Center text */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}>
            <div style={{
              fontSize: '28px',
              fontWeight: '700',
              color: 'white',
              lineHeight: 1,
            }}>
              {totalValue.toLocaleString()}
            </div>
            <div style={{
              fontSize: '10px',
              color: 'rgba(255,255,255,0.5)',
              marginTop: '4px',
            }}>
              Jami
            </div>
          </div>
        </div>
      </div>
      
      {/* Legend */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        justifyContent: 'center',
      }}>
        {data.map((item, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <div style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: item.color,
              boxShadow: `0 0 8px ${item.color}60`,
            }} />
            <span style={{
              fontSize: '11px',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: '500',
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const OTMTable = () => {
  const otmData = [
    { name: 'TDIU', count: 789456 },
    { name: 'BuxDU', count: 588654 },
    { name: 'UzMU', count: 98564 },
    { name: 'SamDU', count: 76432 },
    { name: 'AnDU', count: 54321 },
  ];

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      border: '1px solid rgba(0,0,0,0.04)',
      flex: 1,
      minWidth: '320px',
    }}>
      {/* Header */}
      <div style={{
        padding: '20px 24px',
        borderBottom: '2px solid #7C3AED',
        background: 'linear-gradient(90deg, rgba(124, 58, 237, 0.05) 0%, transparent 100%)',
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '700',
          color: '#7C3AED',
          margin: 0,
        }}>
          Arizalarni ko'rib chiqmagan OTMlar
        </h3>
      </div>
      
      {/* Table Header */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        padding: '14px 24px',
        background: 'rgba(248, 250, 252, 0.8)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}>
        <span style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#8B95A5',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          OTM nomi
        </span>
        <span style={{
          fontSize: '11px',
          fontWeight: '600',
          color: '#8B95A5',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          textAlign: 'right',
        }}>
          Arizalar soni
        </span>
      </div>
      
      {/* Rows */}
      {otmData.map((otm, index) => (
        <div 
          key={index}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            padding: '16px 24px',
            background: index % 2 === 0 ? 'white' : 'rgba(248, 250, 252, 0.5)',
            borderBottom: '1px solid rgba(0,0,0,0.04)',
            transition: 'all 0.2s ease',
          }}
        >
          <span style={{
            fontSize: '14px',
            fontWeight: '600',
            color: '#1a1f36',
          }}>
            {otm.name}
          </span>
          <span style={{
            fontSize: '14px',
            fontWeight: '500',
            color: '#6B7280',
            textAlign: 'right',
          }}>
            {otm.count.toLocaleString()} ta
          </span>
        </div>
      ))}
    </div>
  );
};

function StipendiyaIjaraStats() {
  const [stipendiyaPeriod, setStipendiyaPeriod] = useState('Haftalik');
  const [ijaraPeriod, setIjaraPeriod] = useState('Haftalik');

  const stipendiyaData = [
    { label: 'Talabalar soni', value: 720, max: 1000, color: '#EF4444' },
    { label: 'Hisoblangan summa', value: 580, max: 1000, color: '#3B82F6' },
    { label: "To'langan summa", value: 450, max: 1000, color: '#10B981' },
  ];

  const ijaraData = [
    { label: 'Oluvchilar soni', value: 650, max: 1000, color: '#EF4444' },
    { label: 'Hisoblangan summa', value: 520, max: 1000, color: '#3B82F6' },
    { label: "To'langan summa", value: 380, max: 1000, color: '#10B981' },
  ];

  return (
    <div style={{
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: '32px',
      background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div style={{
        display: 'flex',
        gap: '24px',
        flexWrap: 'wrap',
      }}>
        {/* Stipendiya Chart */}
        <MultiRingChart 
          title="Stipendiya oluvchilar"
          data={stipendiyaData}
          period={stipendiyaPeriod}
          onPeriodChange={setStipendiyaPeriod}
        />
        
        {/* Ijara Chart */}
        <MultiRingChart 
          title="Ijara oluvchilar"
          data={ijaraData}
          period={ijaraPeriod}
          onPeriodChange={setIjaraPeriod}
        />
        
        {/* OTM Table */}
        <OTMTable />
      </div>
    </div>
  );
}


const GradientBarChart = ({ title, data, color, icon }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  const gradientColors = {
    blue: {
      start: '#3B82F6',
      end: '#1D4ED8',
      glow: 'rgba(59, 130, 246, 0.4)',
    },
    red: {
      start: '#EF4444',
      end: '#B91C1C',
      glow: 'rgba(239, 68, 68, 0.4)',
    },
  };
  
  const colors = gradientColors[color];

  return (
    <div style={{
      background: 'linear-gradient(145deg, #E8ECF0 0%, #D1D5DB 100%)',
      borderRadius: '24px',
      padding: '24px',
      minWidth: '300px',
      flex: 1,
      boxShadow: '8px 8px 20px rgba(0,0,0,0.1), -8px -8px 20px rgba(255,255,255,0.8)',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '28px',
      }}>
        <h3 style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#374151',
          margin: 0,
        }}>
          {title}
        </h3>
        
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          background: 'linear-gradient(145deg, #F3F4F6 0%, #E5E7EB 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '4px 4px 10px rgba(0,0,0,0.1), -2px -2px 8px rgba(255,255,255,0.9)',
          fontSize: '16px',
          color: '#6B7280',
        }}>
          {icon}
        </div>
      </div>
      
      {/* Bars */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: '16px',
        height: '220px',
        padding: '0 8px',
      }}>
        {data.map((item, index) => {
          const heightPercent = (item.value / maxValue) * 100;
          
          return (
            <div key={index} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px',
              flex: 1,
            }}>
              {/* Value label */}
              <div style={{
                fontSize: '11px',
                fontWeight: '600',
                color: '#6B7280',
                textAlign: 'center',
                minHeight: '32px',
              }}>
                <div style={{ color: colors.start, fontWeight: '700' }}>
                  ${(item.value / 1000).toFixed(0)}K
                </div>
                <div style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '2px' }}>
                  {item.name}
                </div>
              </div>
              
              {/* Bar container */}
              <div style={{
                width: '100%',
                maxWidth: '44px',
                height: '160px',
                background: 'linear-gradient(180deg, rgba(156,163,175,0.3) 0%, rgba(156,163,175,0.15) 100%)',
                borderRadius: '22px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.1), inset -2px -2px 6px rgba(255,255,255,0.5)',
              }}>
                {/* Filled bar */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: `${heightPercent}%`,
                  background: `linear-gradient(180deg, ${colors.start}80 0%, ${colors.start} 50%, ${colors.end} 100%)`,
                  borderRadius: '22px',
                  boxShadow: `0 -4px 20px ${colors.glow}`,
                  transition: 'height 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                }}>
                  {/* Glow effect at top */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60%',
                    height: '20px',
                    background: `linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)`,
                    borderRadius: '22px 22px 0 0',
                  }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

function TopUniversitiesCharts() {
  const topIncomeData = [
    { name: 'TDIU', value: 892000 },
    { name: 'SamDU', value: 756000 },
    { name: 'UzMU', value: 634000 },
    { name: 'BuxDU', value: 521000 },
    { name: 'AnDU', value: 445000 },
  ];

  const topDebtData = [
    { name: 'TATU', value: 678000 },
    { name: 'FarDU', value: 589000 },
    { name: 'QarDU', value: 423000 },
    { name: 'NamDU', value: 367000 },
    { name: 'UrDU', value: 298000 },
  ];

  return (
    <div style={{
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: '32px',
      background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div style={{
        display: 'flex',
        gap: '28px',
        flexWrap: 'wrap',
      }}>
        {/* Top Income Universities */}
        <GradientBarChart 
          title="Eng ko'p daromadli universitetlar"
          data={topIncomeData}
          color="blue"
          icon="⚡"
        />
        
        {/* Top Debt Universities */}
        <GradientBarChart 
          title="Eng ko'p qarzdor universitetlar"
          data={topDebtData}
          color="red"
          icon="📈"
        />
      </div>
    </div>
  );
}



 function BankLogosCarousel() {
  // Bank logos with SVG representations
  const banks = [
    { name: 'Kapitalbank', color: '#E31E24', bg: '#FEE2E2' },
    { name: 'Ipak Yoli', color: '#F97316', bg: '#FFEDD5' },
    { name: 'Asaka Bank', color: '#DC2626', bg: '#FEE2E2' },
    { name: 'Hamkorbank', color: '#EF4444', bg: '#FEF2F2' },
    { name: 'Aloqa Bank', color: '#0EA5E9', bg: '#E0F2FE' },
    { name: 'NBU', color: '#0284C7', bg: '#E0F2FE' },
    { name: 'Orient Finans', color: '#F59E0B', bg: '#FEF3C7' },
    { name: 'Qishloq Qurilish', color: '#EF4444', bg: '#FEE2E2' },
    { name: 'Nam A Bank', color: '#DC2626', bg: '#FEF2F2' },
    { name: 'Davr Bank', color: '#1E40AF', bg: '#DBEAFE' },
    { name: 'Uzum Bank', color: '#84CC16', bg: '#ECFCCB' },
  ];

  // Double the array for seamless loop
  const allBanks = [...banks, ...banks];

  const BankLogo = ({ bank, index }) => {
    const logos = {
      'Kapitalbank': (
        <svg viewBox="0 0 50 50" width="40" height="40">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#E31E24" strokeWidth="3"/>
          <path d="M17 25 L25 17 L33 25 L25 33 Z" fill="none" stroke="#E31E24" strokeWidth="2.5"/>
          <circle cx="25" cy="25" r="4" fill="#E31E24"/>
        </svg>
      ),
      'Ipak Yoli': (
        <svg viewBox="0 0 50 50" width="40" height="40">
          <path d="M10 35 Q15 15 25 20 Q35 25 40 15" fill="none" stroke="#F97316" strokeWidth="4" strokeLinecap="round"/>
          <path d="M10 40 Q15 20 25 25 Q35 30 40 20" fill="none" stroke="#FDBA74" strokeWidth="4" strokeLinecap="round"/>
          <path d="M10 45 Q15 25 25 30 Q35 35 40 25" fill="none" stroke="#FED7AA" strokeWidth="4" strokeLinecap="round"/>
        </svg>
      ),
      'Asaka Bank': (
        <svg viewBox="0 0 50 50" width="40" height="40">
          <ellipse cx="25" cy="20" rx="18" ry="8" fill="none" stroke="#DC2626" strokeWidth="2"/>
          <ellipse cx="25" cy="30" rx="18" ry="8" fill="none" stroke="#1E40AF" strokeWidth="2"/>
          <line x1="7" y1="20" x2="7" y2="30" stroke="#DC2626" strokeWidth="2"/>
          <line x1="43" y1="20" x2="43" y2="30" stroke="#1E40AF" strokeWidth="2"/>
        </svg>
      ),
      'Hamkorbank': (
        <svg viewBox="0 0 50 50" width="40" height="40">
          <polygon points="25,5 45,40 5,40" fill="none" stroke="#EF4444" strokeWidth="3"/>
          <circle cx="25" cy="28" r="8" fill="#EF4444"/>
        </svg>
      ),
      'Aloqa Bank': (
        <svg viewBox="0 0 50 50" width="40" height="40">
          <polygon points="25,8 42,22 36,42 14,42 8,22" fill="#0EA5E9"/>
          <polygon points="25,15 35,25 31,38 19,38 15,25" fill="#FCD34D"/>
        </svg>
      ),
      'NBU': (
        <svg viewBox="0 0 50 50" width="40" height="40">
          <circle cx="25" cy="25" r="20" fill="#0284C7"/>
          <path d="M15 35 Q25 10 35 35" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round"/>
          <circle cx="25" cy="18" r="4" fill="#EF4444"/>
        </svg>
      ),
      'Orient Finans': (
        <svg viewBox="0 0 50 50" width="40" height="40">
          <circle cx="25" cy="25" r="18" fill="none" stroke="#F59E0B" strokeWidth="4"/>
          <circle cx="25" cy="25" r="10" fill="none" stroke="#FB923C" strokeWidth="4"/>
        </svg>
      ),
      'Qishloq Qurilish': (
        <svg viewBox="0 0 50 50" width="40" height="40">
          <circle cx="25" cy="25" r="18" fill="#F3F4F6"/>
          <path d="M18 32 L25 15 L32 32" fill="#EF4444"/>
          <circle cx="25" cy="20" r="5" fill="#3B82F6"/>
        </svg>
      ),
      'Nam A Bank': (
        <svg viewBox="0 0 50 50" width="40" height="40">
          <rect x="8" y="15" width="34" height="20" rx="3" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2"/>
          <text x="25" y="29" textAnchor="middle" fontSize="8" fill="#DC2626" fontWeight="bold">NAM A</text>
        </svg>
      ),
      'Davr Bank': (
        <svg viewBox="0 0 50 50" width="40" height="40">
          <circle cx="25" cy="25" r="18" fill="#1E40AF"/>
          <path d="M15 25 Q25 10 35 25 Q25 40 15 25" fill="white"/>
        </svg>
      ),
      'Uzum Bank': (
        <svg viewBox="0 0 50 50" width="40" height="40">
          <circle cx="20" cy="20" r="8" fill="#84CC16"/>
          <circle cx="32" cy="20" r="6" fill="#A3E635"/>
          <circle cx="25" cy="32" r="7" fill="#65A30D"/>
        </svg>
      ),
    };

    return (
      <div style={{
        width: '72px',
        height: '72px',
        background: 'white',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
        flexShrink: 0,
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}>
        {logos[bank.name] || (
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: bank.bg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: bank.color,
            fontWeight: '700',
            fontSize: '14px',
          }}>
            {bank.name.charAt(0)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: '32px',
      background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .logo-track {
            animation: scroll 20s linear infinite;
          }
          
          .logo-track:hover {
            animation-play-state: paused;
          }
          
          .logo-item:hover {
            transform: scale(1.1) translateY(-4px);
            box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
          }
        `}
      </style>
      
      {/* Container */}
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '24px 0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        border: '1px solid rgba(0,0,0,0.04)',
        borderBottom: '3px solid #F59E0B',
        overflow: 'hidden',
        position: 'relative',
      }}>
        {/* Gradient overlays for fade effect */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '80px',
          background: 'linear-gradient(90deg, white 0%, transparent 100%)',
          zIndex: 10,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '80px',
          background: 'linear-gradient(270deg, white 0%, transparent 100%)',
          zIndex: 10,
          pointerEvents: 'none',
        }} />
        
        {/* Scrolling track */}
        <div 
          className="logo-track"
          style={{
            display: 'flex',
            gap: '20px',
            width: 'fit-content',
          }}
        >
          {allBanks.map((bank, index) => (
            <div key={index} className="logo-item" style={{
              width: '72px',
              height: '72px',
              background: 'white',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
              flexShrink: 0,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}>
              <BankLogo bank={bank} index={index} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Title */}
      <div style={{
        textAlign: 'center',
        marginTop: '16px',
      }}>
        <span style={{
          fontSize: '13px',
          color: '#8B95A5',
          fontWeight: '500',
        }}>
          Hamkor tashkilotlar
        </span>
      </div>
    </div>
  );
}