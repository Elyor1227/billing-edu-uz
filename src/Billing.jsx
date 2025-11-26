// import React, { useState } from 'react';
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// const StatsCard = ({ icon, label, value, change, changeType, iconBg, iconColor }) => {
//   const isPositive = changeType === 'positive';
//   const isNegative = changeType === 'negative';
  
//   return (
//     <div style={{
//       background: 'white',
//       borderRadius: '16px',
//       padding: '24px 28px',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '20px',
//       boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
//       border: '1px solid rgba(0,0,0,0.04)',
//       flex: 1,
//       minWidth: '140px',
//       transition: 'all 0.3s ease',
//     }}>
//       {/* Icon Container */}
//       <div style={{
//         width: '52px',
//         height: '52px',
//         borderRadius: '14px',
//         background: iconBg,
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexShrink: 0,
//       }}>
//         <span style={{ fontSize: '24px' }}>{icon}</span>
//       </div>
      
//       {/* Content */}
//       <div style={{ flex: 1 }}>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px',
//           marginBottom: '4px',
//         }}>
//           <div style={{
//             width: '3px',
//             height: '14px',
//             borderRadius: '2px',
//             background: iconColor,
//           }} />
//           <span style={{
//             fontSize: '13px',
//             fontWeight: '500',
//             color: '#8B95A5',
//             letterSpacing: '0.02em',
//             textTransform: 'uppercase',
//           }}>
//             {label}
//           </span>
//         </div>
        
//         <div style={{
//           fontSize: '28px',
//           fontWeight: '700',
//           color: '#1a1f36',
//           letterSpacing: '-0.02em',
//           marginBottom: '6px',
//           fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
//         }}>
//           {value}
//         </div>
        
//         <div style={{
//           fontSize: '12px',
//           fontWeight: '500',
//           color: isPositive ? '#10B981' : isNegative ? '#EF4444' : '#8B95A5',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '4px',
//         }}>
//           <span style={{ fontSize: '14px' }}>
//             {isPositive ? '↑' : isNegative ? '↓' : ''}
//           </span>
//           {change} o'tgan haftadan beri
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function Billing() {
//   const stats = [
//     {
//       icon: '🏢',
//       label: 'Organizations',
//       value: '1,456',
//       change: '+6.5%',
//       changeType: 'positive',
//       iconBg: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
//       iconColor: '#6366F1',
//     },
//     {
//       icon: '📄',
//       label: 'Shartnomalar',
//       value: '3,345',
//       change: '-0.10%',
//       changeType: 'negative',
//       iconBg: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
//       iconColor: '#F59E0B',
//     },
//     {
//       icon: '💳',
//       label: "To'lovlar soni",
//       value: '2,847',
//       change: '-0.2%',
//       changeType: 'negative',
//       iconBg: 'linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%)',
//       iconColor: '#22C55E',
//     },
//     {
//       icon: '💰',
//       label: "To'langan summa",
//       value: '$847,250',
//       change: '+11.5%',
//       changeType: 'positive',
//       iconBg: 'linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)',
//       iconColor: '#EC4899',
//     },
//     {
//       icon: '💰',
//       label: "Kirishlar soni",
//       value: '8000',
//       change: '+11.5%',
//       changeType: 'positive',
//       iconBg: 'linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)',
//       iconColor: '#EC4899',
//     },
//   ];

//   return (
//     <div style={{
//       fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//       padding: '32px',
//       width: '80%',
//       margin: '0 auto',
//       background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
//       minHeight: '100vh',
//     }}>
//       <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
//       <h1 style={{
//         fontSize: '24px',
//         fontWeight: '700',
//         color: '#1a1f36',
//         marginBottom: '24px',
//         letterSpacing: '-0.01em',
//       }}>
//         📊 Dashboard
//       </h1>
      
//       <div style={{
//         display: 'flex',
//         gap: '20px',
//         flexWrap: 'wrap',
//       }}>
//         {stats.map((stat, index) => (
//           <StatsCard key={index} {...stat} />
//         ))}
//       </div>
//       <ContractsChart />
//       <ModulesStatistics />
//       <StipendiyaIjaraStats />
//       <TopUniversitiesCharts />
//       <BankLogosCarousel />
//     </div>
//   );
// }


// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div style={{
//         background: 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
//         padding: '12px 16px',
//         borderRadius: '12px',
//         boxShadow: '0 10px 40px rgba(124, 58, 237, 0.4)',
//         border: 'none',
//       }}>
//         <p style={{ 
//           color: 'rgba(255,255,255,0.8)', 
//           fontSize: '12px', 
//           margin: 0,
//           fontWeight: '500',
//         }}>
//           {label} 2024
//         </p>
//         <p style={{ 
//           color: 'white', 
//           fontSize: '11px', 
//           margin: '4px 0 0 0',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px',
//         }}>
//           <span style={{ opacity: 0.8 }}>Shartnomalar</span>
//           <span style={{ fontWeight: '700', fontSize: '16px' }}>{payload[0].value}</span>
//         </p>
//       </div>
//     );
//   }
//   return null;
// };

// const SemiCircleGauge = ({ percentage }) => {
//   const totalBars = 20;
//   const filledBars = Math.round((percentage / 100) * totalBars);
  
//   return (
//     <div style={{
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '20px',
//     }}>
//       <svg width="180" height="100" viewBox="0 0 180 100">
//         {Array.from({ length: totalBars }).map((_, index) => {
//           const angle = 180 - (index * (180 / (totalBars - 1)));
//           const radians = (angle * Math.PI) / 180;
//           const innerRadius = 55;
//           const outerRadius = 80;
          
//           const x1 = 90 + innerRadius * Math.cos(radians);
//           const y1 = 95 - innerRadius * Math.sin(radians);
//           const x2 = 90 + outerRadius * Math.cos(radians);
//           const y2 = 95 - outerRadius * Math.sin(radians);
          
//           const isFilled = index < filledBars;
          
//           return (
//             <line
//               key={index}
//               x1={x1}
//               y1={y1}
//               x2={x2}
//               y2={y2}
//               stroke={isFilled ? (index < filledBars * 0.6 ? '#4C1D95' : '#7C3AED') : '#E5E7EB'}
//               strokeWidth="8"
//               strokeLinecap="round"
//               style={{
//                 transition: 'all 0.3s ease',
//                 transitionDelay: `${index * 30}ms`,
//               }}
//             />
//           );
//         })}
//       </svg>
      
//       <div style={{ marginTop: '-10px', textAlign: 'center' }}>
//         <div style={{
//           fontSize: '36px',
//           fontWeight: '700',
//           color: '#1a1f36',
//           letterSpacing: '-0.02em',
//           fontFamily: "'DM Sans', sans-serif",
//         }}>
//           {percentage}%
//         </div>
//         <div style={{
//           fontSize: '13px',
//           color: '#8B95A5',
//           fontWeight: '500',
//           marginTop: '4px',
//         }}>
//           Shartnoma olganlar soni
//         </div>
//       </div>
//     </div>
//   );
// };
// function ContractsChart() {
//   const [period, setPeriod] = useState('Yillik');
  
//   const data = [
//     { month: 'Yan', value: 245 },
//     { month: 'Fev', value: 288 },
//     { month: 'Mar', value: 267 },
//     { month: 'Apr', value: 312 },
//     { month: 'May', value: 356 },
//     { month: 'Iyun', value: 329 },
//     { month: 'Iyul', value: 298 },
//     { month: 'Avg', value: 276 },
//     { month: 'Sen', value: 234 },
//     { month: 'Okt', value: 212 },
//     { month: 'Noy', value: 189 },
//     { month: 'Dek', value: 178 },
//   ];

//   return (
//     <div style={{
//       fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
//       padding: '32px',
//       background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
//     }}>
//       <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
//       <div style={{
//         display: 'flex',
//         gap: '24px',
//         flexWrap: 'wrap',
//       }}>
//         {/* Main Chart */}
//         <div style={{
//           flex: '2',
//           minWidth: '500px',
//           background: 'linear-gradient(145deg, #0F172A 0%, #1E293B 100%)',
//           borderRadius: '20px',
//           padding: '28px',
//           boxShadow: '0 20px 60px rgba(15, 23, 42, 0.3)',
//         }}>
//           {/* Header */}
//           <div style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginBottom: '32px',
//           }}>
//             <h2 style={{
//               color: 'white',
//               fontSize: '20px',
//               fontWeight: '600',
//               margin: 0,
//               letterSpacing: '-0.01em',
//             }}>
//               Tasdiqlangan Shartnomalar
//             </h2>
            
//             <div style={{
//               position: 'relative',
//             }}>
//               <select
//                 value={period}
//                 onChange={(e) => setPeriod(e.target.value)}
//                 style={{
//                   background: 'rgba(255,255,255,0.1)',
//                   border: '1px solid rgba(255,255,255,0.15)',
//                   borderRadius: '10px',
//                   padding: '10px 36px 10px 16px',
//                   color: 'white',
//                   fontSize: '13px',
//                   fontWeight: '500',
//                   cursor: 'pointer',
//                   appearance: 'none',
//                   outline: 'none',
//                 }}
//               >
//                 <option value="Yillik">Yillik</option>
//                 <option value="Oylik">Oylik</option>
//                 <option value="Haftalik">Haftalik</option>
//               </select>
//               <span style={{
//                 position: 'absolute',
//                 right: '12px',
//                 top: '50%',
//                 transform: 'translateY(-50%)',
//                 color: 'rgba(255,255,255,0.6)',
//                 pointerEvents: 'none',
//                 fontSize: '10px',
//               }}>
//                 ▼
//               </span>
//             </div>
//           </div>
          
//           {/* Chart */}
//           <div style={{ height: '280px' }}>
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={data} margin={{ top: 20, right: 20, left: -20, bottom: 0 }}>
//                 <defs>
//                   <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
//                     <stop offset="0%" stopColor="#8B5CF6" />
//                     <stop offset="50%" stopColor="#A78BFA" />
//                     <stop offset="100%" stopColor="#7C3AED" />
//                   </linearGradient>
//                   <filter id="glow">
//                     <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
//                     <feMerge>
//                       <feMergeNode in="coloredBlur"/>
//                       <feMergeNode in="SourceGraphic"/>
//                     </feMerge>
//                   </filter>
//                 </defs>
//                 <XAxis 
//                   dataKey="month" 
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 500 }}
//                   dy={10}
//                 />
//                 <YAxis 
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12 }}
//                   tickFormatter={(value) => `${value}`}
//                 />
//                 <Tooltip content={<CustomTooltip />} cursor={false} />
//                 <Line 
//                   type="monotone" 
//                   dataKey="value" 
//                   stroke="url(#lineGradient)"
//                   strokeWidth={3}
//                   dot={false}
//                   activeDot={{
//                     r: 8,
//                     fill: '#8B5CF6',
//                     stroke: 'white',
//                     strokeWidth: 3,
//                     filter: 'url(#glow)',
//                   }}
//                   filter="url(#glow)"
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
        
//         {/* Gauge Card */}
//         <div style={{
//           flex: '1',
//           minWidth: '220px',
//           background: 'white',
//           borderRadius: '20px',
//           padding: '24px',
//           boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
//           border: '1px solid rgba(0,0,0,0.04)',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}>
//           <SemiCircleGauge percentage={78} />
//         </div>
//       </div>
//     </div>
//   );
// }


// const ModuleRow = ({ icon, name, contracts, paidAmount, debt, isEven }) => {
//   const hasDebt = debt > 0;
  
//   return (
//     <div style={{
//       display: 'grid',
//       gridTemplateColumns: '2fr 1.5fr 1fr 1fr',
//       alignItems: 'center',
//       padding: '20px 28px',
//       background: isEven ? 'rgba(248, 250, 252, 0.6)' : 'white',
//       borderBottom: '1px solid rgba(0,0,0,0.04)',
//       transition: 'all 0.2s ease',
//     }}>
//       {/* Module Name */}
//       <div style={{
//         display: 'flex',
//         alignItems: 'center',
//         gap: '14px',
//       }}>
//         <div style={{
//           width: '42px',
//           height: '42px',
//           borderRadius: '12px',
//           background: icon.bg,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           fontSize: '18px',
//         }}>
//           {icon.emoji}
//         </div>
//         <span style={{
//           fontSize: '15px',
//           fontWeight: '600',
//           color: '#1a1f36',
//         }}>
//           {name}
//         </span>
//       </div>
      
//       {/* Contracts Count */}
//       <div style={{
//         fontSize: '15px',
//         fontWeight: '500',
//         color: '#374151',
//       }}>
//         {contracts.toLocaleString()} ta
//       </div>
      
//       {/* Paid Amount */}
//       <div style={{
//         fontSize: '15px',
//         fontWeight: '600',
//         color: '#10B981',
//       }}>
//         ${paidAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
//       </div>
      
//       {/* Debt */}
//       <div style={{
//         fontSize: '15px',
//         fontWeight: '600',
//         color: hasDebt ? '#EF4444' : '#6B7280',
//         textAlign: 'right',
//       }}>
//         {hasDebt ? `$${debt.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '—'}
//       </div>
//     </div>
//   );
// };
// function ModulesStatistics() {
//   const modules = [
//     {
//       icon: { emoji: '💳', bg: 'linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)' },
//       name: "To'lov kontrakt",
//       contracts: 789456,
//       paidAmount: 942.00,
//       debt: 942.00,
//     },
//     {
//       icon: { emoji: '🏦', bg: 'linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%)' },
//       name: "Kredit modul",
//       contracts: 588654,
//       paidAmount: 881.00,
//       debt: 0,
//     },
//     {
//       icon: { emoji: '🏠', bg: 'linear-gradient(135deg, #DBEAFE 0%, #BFDBFE 100%)' },
//       name: "Yotoqxona",
//       contracts: 98564,
//       paidAmount: 409.00,
//       debt: 409.00,
//     },
//   ];

//   return (
//     <div style={{
//       fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
//       padding: '32px',
//       background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
//     }}>
//       <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
//       <div style={{
//         background: 'white',
//         borderRadius: '20px',
//         overflow: 'hidden',
//         boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
//         border: '1px solid rgba(0,0,0,0.04)',
//       }}>
//         {/* Header */}
//         <div style={{
//           padding: '24px 28px',
//           borderBottom: '1px solid rgba(0,0,0,0.06)',
//         }}>
//           <h2 style={{
//             fontSize: '18px',
//             fontWeight: '700',
//             color: '#1a1f36',
//             margin: 0,
//             letterSpacing: '-0.01em',
//           }}>
//             Modullar statistikasi
//           </h2>
//         </div>
        
//         {/* Table Header */}
//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: '2fr 1.5fr 1fr 1fr',
//           padding: '16px 28px',
//           background: 'rgba(248, 250, 252, 0.8)',
//           borderBottom: '1px solid rgba(0,0,0,0.06)',
//         }}>
//           <span style={{
//             fontSize: '12px',
//             fontWeight: '600',
//             color: '#8B95A5',
//             textTransform: 'uppercase',
//             letterSpacing: '0.05em',
//           }}>
//             Modullar nomi
//           </span>
//           <span style={{
//             fontSize: '12px',
//             fontWeight: '600',
//             color: '#8B95A5',
//             textTransform: 'uppercase',
//             letterSpacing: '0.05em',
//           }}>
//             Shartnomalar soni
//           </span>
//           <span style={{
//             fontSize: '12px',
//             fontWeight: '600',
//             color: '#8B95A5',
//             textTransform: 'uppercase',
//             letterSpacing: '0.05em',
//           }}>
//             To'langan summa
//           </span>
//           <span style={{
//             fontSize: '12px',
//             fontWeight: '600',
//             color: '#8B95A5',
//             textTransform: 'uppercase',
//             letterSpacing: '0.05em',
//             textAlign: 'right',
//           }}>
//             Qarzdorlik
//           </span>
//         </div>
        
//         {/* Table Rows */}
//         {modules.map((module, index) => (
//           <ModuleRow 
//             key={index} 
//             {...module} 
//             isEven={index % 2 === 1}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }


// const MultiRingChart = ({ title, data, period, onPeriodChange }) => {
//   const totalValue = data.reduce((sum, item) => sum + item.value, 0);
  
//   // Calculate stroke dasharray for each ring
//   const calculateStroke = (value, maxValue, radius) => {
//     const circumference = 2 * Math.PI * radius;
//     const percentage = value / maxValue;
//     const strokeLength = circumference * percentage;
//     return `${strokeLength} ${circumference - strokeLength}`;
//   };

//   return (
//     <div style={{
//       background: 'linear-gradient(145deg, #0F172A 0%, #1E293B 100%)',
//       borderRadius: '20px',
//       padding: '24px',
//       minWidth: '280px',
//       flex: 1,
//       boxShadow: '0 20px 60px rgba(15, 23, 42, 0.3)',
//     }}>
//       {/* Header */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '24px',
//       }}>
//         <h3 style={{
//           color: 'white',
//           fontSize: '16px',
//           fontWeight: '600',
//           margin: 0,
//         }}>
//           {title}
//         </h3>
        
//         <div style={{ position: 'relative' }}>
//           <select
//             value={period}
//             onChange={(e) => onPeriodChange(e.target.value)}
//             style={{
//               background: 'rgba(255,255,255,0.1)',
//               border: '1px solid rgba(255,255,255,0.15)',
//               borderRadius: '8px',
//               padding: '6px 28px 6px 12px',
//               color: 'white',
//               fontSize: '12px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               appearance: 'none',
//               outline: 'none',
//             }}
//           >
//             <option value="Haftalik">Haftalik</option>
//             <option value="Oylik">Oylik</option>
//             <option value="Yillik">Yillik</option>
//           </select>
//           <span style={{
//             position: 'absolute',
//             right: '10px',
//             top: '50%',
//             transform: 'translateY(-50%)',
//             color: 'rgba(255,255,255,0.6)',
//             pointerEvents: 'none',
//             fontSize: '8px',
//           }}>▼</span>
//         </div>
//       </div>
      
//       {/* Chart */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginBottom: '24px',
//       }}>
//         <div style={{ position: 'relative', width: '180px', height: '180px' }}>
//           <svg width="180" height="180" viewBox="0 0 180 180">
//             {/* Background rings */}
//             <circle cx="90" cy="90" r="75" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
//             <circle cx="90" cy="90" r="55" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
//             <circle cx="90" cy="90" r="35" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
            
//             {/* Data rings */}
//             <circle 
//               cx="90" cy="90" r="75" 
//               fill="none" 
//               stroke={data[0].color}
//               strokeWidth="12"
//               strokeLinecap="round"
//               strokeDasharray={calculateStroke(data[0].value, data[0].max, 75)}
//               transform="rotate(-90 90 90)"
//               style={{ filter: `drop-shadow(0 0 6px ${data[0].color}40)` }}
//             />
//             <circle 
//               cx="90" cy="90" r="55" 
//               fill="none" 
//               stroke={data[1].color}
//               strokeWidth="12"
//               strokeLinecap="round"
//               strokeDasharray={calculateStroke(data[1].value, data[1].max, 55)}
//               transform="rotate(-90 90 90)"
//               style={{ filter: `drop-shadow(0 0 6px ${data[1].color}40)` }}
//             />
//             <circle 
//               cx="90" cy="90" r="35" 
//               fill="none" 
//               stroke={data[2].color}
//               strokeWidth="12"
//               strokeLinecap="round"
//               strokeDasharray={calculateStroke(data[2].value, data[2].max, 35)}
//               transform="rotate(-90 90 90)"
//               style={{ filter: `drop-shadow(0 0 6px ${data[2].color}40)` }}
//             />
//           </svg>
          
//           {/* Center text */}
//           <div style={{
//             position: 'absolute',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%)',
//             textAlign: 'center',
//           }}>
//             <div style={{
//               fontSize: '28px',
//               fontWeight: '700',
//               color: 'white',
//               lineHeight: 1,
//             }}>
//               {totalValue.toLocaleString()}
//             </div>
//             <div style={{
//               fontSize: '10px',
//               color: 'rgba(255,255,255,0.5)',
//               marginTop: '4px',
//             }}>
//               Jami
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Legend */}
//       <div style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         gap: '12px',
//         justifyContent: 'center',
//       }}>
//         {data.map((item, index) => (
//           <div key={index} style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '6px',
//           }}>
//             <div style={{
//               width: '8px',
//               height: '8px',
//               borderRadius: '50%',
//               background: item.color,
//               boxShadow: `0 0 8px ${item.color}60`,
//             }} />
//             <span style={{
//               fontSize: '11px',
//               color: 'rgba(255,255,255,0.7)',
//               fontWeight: '500',
//             }}>
//               {item.label}
//             </span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// const OTMTable = () => {
//   const otmData = [
//     { name: 'TDIU', count: 789456 },
//     { name: 'BuxDU', count: 588654 },
//     { name: 'UzMU', count: 98564 },
//     { name: 'SamDU', count: 76432 },
//     { name: 'AnDU', count: 54321 },
//   ];

//   return (
//     <div style={{
//       background: 'white',
//       borderRadius: '20px',
//       overflow: 'hidden',
//       boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
//       border: '1px solid rgba(0,0,0,0.04)',
//       flex: 1,
//       minWidth: '320px',
//     }}>
//       {/* Header */}
//       <div style={{
//         padding: '20px 24px',
//         borderBottom: '2px solid #7C3AED',
//         background: 'linear-gradient(90deg, rgba(124, 58, 237, 0.05) 0%, transparent 100%)',
//       }}>
//         <h3 style={{
//           fontSize: '16px',
//           fontWeight: '700',
//           color: '#7C3AED',
//           margin: 0,
//         }}>
//           Arizalarni ko'rib chiqmagan OTMlar
//         </h3>
//       </div>
      
//       {/* Table Header */}
//       <div style={{
//         display: 'grid',
//         gridTemplateColumns: '1fr 1fr',
//         padding: '14px 24px',
//         background: 'rgba(248, 250, 252, 0.8)',
//         borderBottom: '1px solid rgba(0,0,0,0.06)',
//       }}>
//         <span style={{
//           fontSize: '11px',
//           fontWeight: '600',
//           color: '#8B95A5',
//           textTransform: 'uppercase',
//           letterSpacing: '0.05em',
//         }}>
//           OTM nomi
//         </span>
//         <span style={{
//           fontSize: '11px',
//           fontWeight: '600',
//           color: '#8B95A5',
//           textTransform: 'uppercase',
//           letterSpacing: '0.05em',
//           textAlign: 'right',
//         }}>
//           Arizalar soni
//         </span>
//       </div>
      
//       {/* Rows */}
//       {otmData.map((otm, index) => (
//         <div 
//           key={index}
//           style={{
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             padding: '16px 24px',
//             background: index % 2 === 0 ? 'white' : 'rgba(248, 250, 252, 0.5)',
//             borderBottom: '1px solid rgba(0,0,0,0.04)',
//             transition: 'all 0.2s ease',
//           }}
//         >
//           <span style={{
//             fontSize: '14px',
//             fontWeight: '600',
//             color: '#1a1f36',
//           }}>
//             {otm.name}
//           </span>
//           <span style={{
//             fontSize: '14px',
//             fontWeight: '500',
//             color: '#6B7280',
//             textAlign: 'right',
//           }}>
//             {otm.count.toLocaleString()} ta
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

// function StipendiyaIjaraStats() {
//   const [stipendiyaPeriod, setStipendiyaPeriod] = useState('Haftalik');
//   const [ijaraPeriod, setIjaraPeriod] = useState('Haftalik');

//   const stipendiyaData = [
//     { label: 'Talabalar soni', value: 720, max: 1000, color: '#EF4444' },
//     { label: 'Hisoblangan summa', value: 580, max: 1000, color: '#3B82F6' },
//     { label: "To'langan summa", value: 450, max: 1000, color: '#10B981' },
//   ];

//   const ijaraData = [
//     { label: 'Oluvchilar soni', value: 650, max: 1000, color: '#EF4444' },
//     { label: 'Hisoblangan summa', value: 520, max: 1000, color: '#3B82F6' },
//     { label: "To'langan summa", value: 380, max: 1000, color: '#10B981' },
//   ];

//   return (
//     <div style={{
//       fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
//       padding: '32px',
//       background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
//     }}>
//       <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
//       <div style={{
//         display: 'flex',
//         gap: '24px',
//         flexWrap: 'wrap',
//       }}>
//         {/* Stipendiya Chart */}
//         <MultiRingChart 
//           title="Stipendiya oluvchilar"
//           data={stipendiyaData}
//           period={stipendiyaPeriod}
//           onPeriodChange={setStipendiyaPeriod}
//         />
        
//         {/* Ijara Chart */}
//         <MultiRingChart 
//           title="Ijara oluvchilar"
//           data={ijaraData}
//           period={ijaraPeriod}
//           onPeriodChange={setIjaraPeriod}
//         />
        
//         {/* OTM Table */}
//         <OTMTable />
//       </div>
//     </div>
//   );
// }


// const GradientBarChart = ({ title, data, color, icon }) => {
//   const maxValue = Math.max(...data.map(d => d.value));
  
//   const gradientColors = {
//     blue: {
//       start: '#3B82F6',
//       end: '#1D4ED8',
//       glow: 'rgba(59, 130, 246, 0.4)',
//     },
//     red: {
//       start: '#EF4444',
//       end: '#B91C1C',
//       glow: 'rgba(239, 68, 68, 0.4)',
//     },
//   };
  
//   const colors = gradientColors[color];

//   return (
//     <div style={{
//       background: 'linear-gradient(145deg, #E8ECF0 0%, #D1D5DB 100%)',
//       borderRadius: '24px',
//       padding: '24px',
//       minWidth: '300px',
//       flex: 1,
//       boxShadow: '8px 8px 20px rgba(0,0,0,0.1), -8px -8px 20px rgba(255,255,255,0.8)',
//     }}>
//       {/* Header */}
//       <div style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         marginBottom: '28px',
//       }}>
//         <h3 style={{
//           fontSize: '16px',
//           fontWeight: '600',
//           color: '#374151',
//           margin: 0,
//         }}>
//           {title}
//         </h3>
        
//         <div style={{
//           width: '36px',
//           height: '36px',
//           borderRadius: '10px',
//           background: 'linear-gradient(145deg, #F3F4F6 0%, #E5E7EB 100%)',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           boxShadow: '4px 4px 10px rgba(0,0,0,0.1), -2px -2px 8px rgba(255,255,255,0.9)',
//           fontSize: '16px',
//           color: '#6B7280',
//         }}>
//           {icon}
//         </div>
//       </div>
      
//       {/* Bars */}
//       <div style={{
//         display: 'flex',
//         alignItems: 'flex-end',
//         justifyContent: 'space-between',
//         gap: '16px',
//         height: '220px',
//         padding: '0 8px',
//       }}>
//         {data.map((item, index) => {
//           const heightPercent = (item.value / maxValue) * 100;
          
//           return (
//             <div key={index} style={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               gap: '12px',
//               flex: 1,
//             }}>
//               {/* Value label */}
//               <div style={{
//                 fontSize: '11px',
//                 fontWeight: '600',
//                 color: '#6B7280',
//                 textAlign: 'center',
//                 minHeight: '32px',
//               }}>
//                 <div style={{ color: colors.start, fontWeight: '700' }}>
//                   ${(item.value / 1000).toFixed(0)}K
//                 </div>
//                 <div style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '2px' }}>
//                   {item.name}
//                 </div>
//               </div>
              
//               {/* Bar container */}
//               <div style={{
//                 width: '100%',
//                 maxWidth: '44px',
//                 height: '160px',
//                 background: 'linear-gradient(180deg, rgba(156,163,175,0.3) 0%, rgba(156,163,175,0.15) 100%)',
//                 borderRadius: '22px',
//                 position: 'relative',
//                 overflow: 'hidden',
//                 boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.1), inset -2px -2px 6px rgba(255,255,255,0.5)',
//               }}>
//                 {/* Filled bar */}
//                 <div style={{
//                   position: 'absolute',
//                   bottom: 0,
//                   left: 0,
//                   right: 0,
//                   height: `${heightPercent}%`,
//                   background: `linear-gradient(180deg, ${colors.start}80 0%, ${colors.start} 50%, ${colors.end} 100%)`,
//                   borderRadius: '22px',
//                   boxShadow: `0 -4px 20px ${colors.glow}`,
//                   transition: 'height 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
//                 }}>
//                   {/* Glow effect at top */}
//                   <div style={{
//                     position: 'absolute',
//                     top: 0,
//                     left: '50%',
//                     transform: 'translateX(-50%)',
//                     width: '60%',
//                     height: '20px',
//                     background: `linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)`,
//                     borderRadius: '22px 22px 0 0',
//                   }} />
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// function TopUniversitiesCharts() {
//   const topIncomeData = [
//     { name: 'TDIU', value: 892000 },
//     { name: 'SamDU', value: 756000 },
//     { name: 'UzMU', value: 634000 },
//     { name: 'BuxDU', value: 521000 },
//     { name: 'AnDU', value: 445000 },
//   ];

//   const topDebtData = [
//     { name: 'TATU', value: 678000 },
//     { name: 'FarDU', value: 589000 },
//     { name: 'QarDU', value: 423000 },
//     { name: 'NamDU', value: 367000 },
//     { name: 'UrDU', value: 298000 },
//   ];

//   return (
//     <div style={{
//       fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
//       padding: '32px',
//       background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
//     }}>
//       <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
//       <div style={{
//         display: 'flex',
//         gap: '28px',
//         flexWrap: 'wrap',
//       }}>
//         {/* Top Income Universities */}
//         <GradientBarChart 
//           title="Eng ko'p daromadli universitetlar"
//           data={topIncomeData}
//           color="blue"
//           icon="⚡"
//         />
        
//         {/* Top Debt Universities */}
//         <GradientBarChart 
//           title="Eng ko'p qarzdor universitetlar"
//           data={topDebtData}
//           color="red"
//           icon="📈"
//         />
//       </div>
//     </div>
//   );
// }



//  function BankLogosCarousel() {
//   // Bank logos with SVG representations
//   const banks = [
//     { name: 'Kapitalbank', color: '#E31E24', bg: '#FEE2E2' },
//     { name: 'Ipak Yoli', color: '#F97316', bg: '#FFEDD5' },
//     { name: 'Asaka Bank', color: '#DC2626', bg: '#FEE2E2' },
//     { name: 'Hamkorbank', color: '#EF4444', bg: '#FEF2F2' },
//     { name: 'Aloqa Bank', color: '#0EA5E9', bg: '#E0F2FE' },
//     { name: 'NBU', color: '#0284C7', bg: '#E0F2FE' },
//     { name: 'Orient Finans', color: '#F59E0B', bg: '#FEF3C7' },
//     { name: 'Qishloq Qurilish', color: '#EF4444', bg: '#FEE2E2' },
//     { name: 'Nam A Bank', color: '#DC2626', bg: '#FEF2F2' },
//     { name: 'Davr Bank', color: '#1E40AF', bg: '#DBEAFE' },
//     { name: 'Uzum Bank', color: '#84CC16', bg: '#ECFCCB' },
//   ];

//   // Double the array for seamless loop
//   const allBanks = [...banks, ...banks];

//   const BankLogo = ({ bank, index }) => {
//     const logos = {
//       'Kapitalbank': (
//         <svg viewBox="0 0 50 50" width="40" height="40">
//           <circle cx="25" cy="25" r="20" fill="none" stroke="#E31E24" strokeWidth="3"/>
//           <path d="M17 25 L25 17 L33 25 L25 33 Z" fill="none" stroke="#E31E24" strokeWidth="2.5"/>
//           <circle cx="25" cy="25" r="4" fill="#E31E24"/>
//         </svg>
//       ),
//       'Ipak Yoli': (
//         <svg viewBox="0 0 50 50" width="40" height="40">
//           <path d="M10 35 Q15 15 25 20 Q35 25 40 15" fill="none" stroke="#F97316" strokeWidth="4" strokeLinecap="round"/>
//           <path d="M10 40 Q15 20 25 25 Q35 30 40 20" fill="none" stroke="#FDBA74" strokeWidth="4" strokeLinecap="round"/>
//           <path d="M10 45 Q15 25 25 30 Q35 35 40 25" fill="none" stroke="#FED7AA" strokeWidth="4" strokeLinecap="round"/>
//         </svg>
//       ),
//       'Asaka Bank': (
//         <svg viewBox="0 0 50 50" width="40" height="40">
//           <ellipse cx="25" cy="20" rx="18" ry="8" fill="none" stroke="#DC2626" strokeWidth="2"/>
//           <ellipse cx="25" cy="30" rx="18" ry="8" fill="none" stroke="#1E40AF" strokeWidth="2"/>
//           <line x1="7" y1="20" x2="7" y2="30" stroke="#DC2626" strokeWidth="2"/>
//           <line x1="43" y1="20" x2="43" y2="30" stroke="#1E40AF" strokeWidth="2"/>
//         </svg>
//       ),
//       'Hamkorbank': (
//         <svg viewBox="0 0 50 50" width="40" height="40">
//           <polygon points="25,5 45,40 5,40" fill="none" stroke="#EF4444" strokeWidth="3"/>
//           <circle cx="25" cy="28" r="8" fill="#EF4444"/>
//         </svg>
//       ),
//       'Aloqa Bank': (
//         <svg viewBox="0 0 50 50" width="40" height="40">
//           <polygon points="25,8 42,22 36,42 14,42 8,22" fill="#0EA5E9"/>
//           <polygon points="25,15 35,25 31,38 19,38 15,25" fill="#FCD34D"/>
//         </svg>
//       ),
//       'NBU': (
//         <svg viewBox="0 0 50 50" width="40" height="40">
//           <circle cx="25" cy="25" r="20" fill="#0284C7"/>
//           <path d="M15 35 Q25 10 35 35" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round"/>
//           <circle cx="25" cy="18" r="4" fill="#EF4444"/>
//         </svg>
//       ),
//       'Orient Finans': (
//         <svg viewBox="0 0 50 50" width="40" height="40">
//           <circle cx="25" cy="25" r="18" fill="none" stroke="#F59E0B" strokeWidth="4"/>
//           <circle cx="25" cy="25" r="10" fill="none" stroke="#FB923C" strokeWidth="4"/>
//         </svg>
//       ),
//       'Qishloq Qurilish': (
//         <svg viewBox="0 0 50 50" width="40" height="40">
//           <circle cx="25" cy="25" r="18" fill="#F3F4F6"/>
//           <path d="M18 32 L25 15 L32 32" fill="#EF4444"/>
//           <circle cx="25" cy="20" r="5" fill="#3B82F6"/>
//         </svg>
//       ),
//       'Nam A Bank': (
//         <svg viewBox="0 0 50 50" width="40" height="40">
//           <rect x="8" y="15" width="34" height="20" rx="3" fill="#FEF2F2" stroke="#DC2626" strokeWidth="2"/>
//           <text x="25" y="29" textAnchor="middle" fontSize="8" fill="#DC2626" fontWeight="bold">NAM A</text>
//         </svg>
//       ),
//       'Davr Bank': (
//         <svg viewBox="0 0 50 50" width="40" height="40">
//           <circle cx="25" cy="25" r="18" fill="#1E40AF"/>
//           <path d="M15 25 Q25 10 35 25 Q25 40 15 25" fill="white"/>
//         </svg>
//       ),
//       'Uzum Bank': (
//         <svg viewBox="0 0 50 50" width="40" height="40">
//           <circle cx="20" cy="20" r="8" fill="#84CC16"/>
//           <circle cx="32" cy="20" r="6" fill="#A3E635"/>
//           <circle cx="25" cy="32" r="7" fill="#65A30D"/>
//         </svg>
//       ),
//     };

//     return (
//       <div style={{
//         width: '72px',
//         height: '72px',
//         background: 'white',
//         borderRadius: '16px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         boxShadow: '0 2px 8px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
//         flexShrink: 0,
//         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//         cursor: 'pointer',
//       }}>
//         {logos[bank.name] || (
//           <div style={{
//             width: '40px',
//             height: '40px',
//             borderRadius: '50%',
//             background: bank.bg,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             color: bank.color,
//             fontWeight: '700',
//             fontSize: '14px',
//           }}>
//             {bank.name.charAt(0)}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div style={{
//       fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
//       padding: '32px',
//       background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
//     }}>
//       <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
//       <style>
//         {`
//           @keyframes scroll {
//             0% {
//               transform: translateX(0);
//             }
//             100% {
//               transform: translateX(-50%);
//             }
//           }
          
//           .logo-track {
//             animation: scroll 20s linear infinite;
//           }
          
//           .logo-track:hover {
//             animation-play-state: paused;
//           }
          
//           .logo-item:hover {
//             transform: scale(1.1) translateY(-4px);
//             box-shadow: 0 8px 24px rgba(0,0,0,0.12) !important;
//           }
//         `}
//       </style>
      
//       {/* Container */}
//       <div style={{
//         background: 'white',
//         borderRadius: '20px',
//         padding: '24px 0',
//         boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
//         border: '1px solid rgba(0,0,0,0.04)',
//         borderBottom: '3px solid #F59E0B',
//         overflow: 'hidden',
//         position: 'relative',
//       }}>
//         {/* Gradient overlays for fade effect */}
//         <div style={{
//           position: 'absolute',
//           left: 0,
//           top: 0,
//           bottom: 0,
//           width: '80px',
//           background: 'linear-gradient(90deg, white 0%, transparent 100%)',
//           zIndex: 10,
//           pointerEvents: 'none',
//         }} />
//         <div style={{
//           position: 'absolute',
//           right: 0,
//           top: 0,
//           bottom: 0,
//           width: '80px',
//           background: 'linear-gradient(270deg, white 0%, transparent 100%)',
//           zIndex: 10,
//           pointerEvents: 'none',
//         }} />
        
//         {/* Scrolling track */}
//         <div 
//           className="logo-track"
//           style={{
//             display: 'flex',
//             gap: '20px',
//             width: 'fit-content',
//           }}
//         >
//           {allBanks.map((bank, index) => (
//             <div key={index} className="logo-item" style={{
//               width: '72px',
//               height: '72px',
//               background: 'white',
//               borderRadius: '16px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)',
//               flexShrink: 0,
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//               cursor: 'pointer',
//             }}>
//               <BankLogo bank={bank} index={index} />
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Title */}
//       <div style={{
//         textAlign: 'center',
//         marginTop: '16px',
//       }}>
//         <span style={{
//           fontSize: '13px',
//           color: '#8B95A5',
//           fontWeight: '500',
//         }}>
//           Hamkor tashkilotlar
//         </span>
//       </div>
//     </div>
//   );
// }

// =====================================================================================================
// =====================================================================================================
// =====================================================================================================
// =====================================================================================================
// =====================================================================================================
// =====================================================================================================
// =====================================================================================================


import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, Cell } from 'recharts';

// Theme Context yaratamiz
const ThemeContext = React.createContext();

const StatsCard = ({ icon, label, value, change, changeType, iconBg, iconColor }) => {
  const { isDarkMode } = React.useContext(ThemeContext);
  const isPositive = changeType === 'positive';
  const isNegative = changeType === 'negative';
  
  return (
    <div style={{
      background: isDarkMode ? 'linear-gradient(145deg, #1E293B 0%, #334155 100%)' : 'white',
      borderRadius: '16px',
      padding: '24px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
      boxShadow: isDarkMode 
        ? '0 4px 20px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)' 
        : '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
      border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.04)',
      flex: 1,
      minWidth: '140px',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    }}
    className="stats-card"
    >
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
        transition: 'all 0.3s ease',
      }}
      className="stats-icon"
      >
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
            color: isDarkMode ? '#94A3B8' : '#8B95A5',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
          }}>
            {label}
          </span>
        </div>
        
        <div style={{
          fontSize: '28px',
          fontWeight: '700',
          color: isDarkMode ? '#F1F5F9' : '#1a1f36',
          letterSpacing: '-0.02em',
          marginBottom: '6px',
          fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
        }}>
          {value}
        </div>
        
        <div style={{
          fontSize: '12px',
          fontWeight: '500',
          color: isPositive ? '#10B981' : isNegative ? '#EF4444' : isDarkMode ? '#64748B' : '#8B95A5',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
        </div>
      </div>
    </div>
  );
};

export default function Billing() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const stats = [
    {
      icon: '🏢',
      label: 'Organizations',
      value: '1,456',

      changeType: 'positive',
      iconBg: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
      iconColor: '#6366F1',
    },
    {
      icon: '📄',
      label: 'Shartnomalar',
      value: '3,345',

      changeType: 'negative',
      iconBg: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
      iconColor: '#F59E0B',
    },
    {
      icon: '💳',
      label: "To'lovlar soni",
      value: '2,847',

      changeType: 'negative',
      iconBg: 'linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%)',
      iconColor: '#22C55E',
    },
    {
      icon: '💰',
      label: "To'langan summa",
      value: '847,250',

      changeType: 'positive',
      iconBg: 'linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)',
      iconColor: '#EC4899',
    },
    {
      icon: '👥',
      label: "Kirishlar soni",
      value: '8,000',

      changeType: 'positive',
      iconBg: 'linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%)',
      iconColor: '#4F46E5',
    },
  ];

  useEffect(() => {
    // CSS animatsiyalarni qo'shamiz
    const style = document.createElement('style');
    style.textContent = `
      .stats-card:hover {
        transform: translateY(-4px);
        box-shadow: ${isDarkMode 
          ? '0 8px 32px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)' 
          : '0 8px 32px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.08)'} !important;
      }
      
      .stats-card:hover .stats-icon {
        transform: scale(1.1);
      }
      
      .theme-toggle {
        transition: all 0.3s ease;
      }
      
      .theme-toggle:hover {
        transform: rotate(15deg);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      <div style={{
        fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        padding: '32px',
        width: '80%',
        margin: '0 auto',
        background: isDarkMode 
          ? 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' 
          : 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
        minHeight: '100vh',
        transition: 'all 0.3s ease',
      }}>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Header with Theme Toggle */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
        }}>
          <h1 style={{
            fontSize: '24px',
            fontWeight: '700',
            color: isDarkMode ? '#F1F5F9' : '#1a1f36',
            margin: 0,
            letterSpacing: '-0.01em',
          }}>
            📊 Dashboard
          </h1>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            style={{
              background: isDarkMode 
                ? 'linear-gradient(135deg, #475569 0%, #334155 100%)' 
                : 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 100%)',
              border: 'none',
              borderRadius: '12px',
              padding: '12px 16px',
              cursor: 'pointer',
              boxShadow: isDarkMode 
                ? '0 4px 12px rgba(0,0,0,0.3)' 
                : '0 2px 8px rgba(0,0,0,0.1)',
              color: isDarkMode ? '#E2E8F0' : '#475569',
              fontSize: '14px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s ease',
            }}
            className="theme-toggle"
          >
            {isDarkMode ? '☀️ Kunduzgi' : '🌙 Tungi'}
          </button>
        </div>
        
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
    </ThemeContext.Provider>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  const { isDarkMode } = React.useContext(ThemeContext);
  
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: isDarkMode 
          ? 'linear-gradient(135deg, #1E293B 0%, #334155 100%)' 
          : 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
        padding: '12px 16px',
        borderRadius: '12px',
        boxShadow: isDarkMode 
          ? '0 10px 40px rgba(0,0,0,0.5)' 
          : '0 10px 40px rgba(124, 58, 237, 0.4)',
        border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : 'none',
      }}>
        <p style={{ 
          color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.8)', 
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
  const { isDarkMode } = React.useContext(ThemeContext);
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
              stroke={isFilled ? (index < filledBars * 0.6 ? '#4C1D95' : '#7C3AED') : isDarkMode ? '#374151' : '#E5E7EB'}
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
          color: isDarkMode ? '#F1F5F9' : '#1a1f36',
          letterSpacing: '-0.02em',
          fontFamily: "'DM Sans', sans-serif",
        }}>
          {percentage}%
        </div>
        <div style={{
          fontSize: '13px',
          color: isDarkMode ? '#94A3B8' : '#8B95A5',
          fontWeight: '500',
          marginTop: '4px',
        }}>
          Shartnoma olganlar soni
        </div>
      </div>
    </div>
  );
};

// function CustomTooltip({ active, payload, label }) {
//   if (active && payload && payload.length) {
//     return (
//       <div
//         style={{
//           background: "white",
//           padding: "8px 12px",
//           borderRadius: "8px",
//           boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
//         }}
//       >
//         <p style={{ margin: 0, color: "#0F172A", fontWeight: 600 }}>{label}</p>
//         <p style={{ margin: 0, color: "#6366F1", fontWeight: 700 }}>{payload[0].value}</p>
//       </div>
//     );
//   }
//   return null;
// }

 function ContractsChart() {
  const [period, setPeriod] = useState("Yillik");
  const { isDarkMode } = React.useContext(ThemeContext);

  const data = [
    { month: "Yan", value: 245 },
    { month: "Fev", value: 288 },
    { month: "Mar", value: 267 },
    { month: "Apr", value: 312 },
    { month: "May", value: 356 },
    { month: "Iyun", value: 329 },
    { month: "Iyul", value: 298 },
    { month: "Avg", value: 276 },
    { month: "Sen", value: 234 },
    { month: "Okt", value: 212 },
    { month: "Noy", value: 189 },
    { month: "Dek", value: 178 },
  ];

  return (
    <div
      style={{
        padding: "32px",
        fontFamily: "'DM Sans', sans-serif",
        background: isDarkMode
          ? "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)"
          : "#F5F7FA",
      }}
    >
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        
        {/* MAIN CHART */}
        <div
          style={{
            flex: 2,
            minWidth: "500px",
            background: isDarkMode ? "#1E293B" : "white",
            borderRadius: "20px",
            padding: "28px",
            boxShadow: isDarkMode
              ? "0 20px 60px rgba(0,0,0,0.4)"
              : "0 20px 60px rgba(0,0,0,0.08)",
            border: isDarkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.05)",
          }}
        >
          {/* HEADER */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "28px",
            }}
          >
            <h2
              style={{
                margin: 0,
                color: isDarkMode ? "white" : "#0F172A",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Tasdiqlangan Shartnomalar
            </h2>

            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              style={{
                padding: "10px 16px",
                borderRadius: "10px",
                fontSize: "14px",
                cursor: "pointer",
                background: isDarkMode ? "#334155" : "#F1F5F9",
                color: isDarkMode ? "#fff" : "#0F172A",
                border: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <option value="Yillik">Yillik</option>
              <option value="Oylik">Oylik</option>
              <option value="Haftalik">Haftalik</option>
            </select>
          </div>

          {/* CHART */}
          <div style={{ height: "300px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                <defs>
                  {/* Line color */}
                  <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#6366F1" />
                  </linearGradient>

                  {/* Shadow fill */}
                  <linearGradient id="shadowFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: isDarkMode ? "rgba(255,255,255,0.6)" : "#94A3B8",
                    fontSize: 12,
                  }}
                  dy={10}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: isDarkMode ? "rgba(255,255,255,0.6)" : "#94A3B8",
                    fontSize: 12,
                  }}
                />

                <Tooltip content={<CustomTooltip />} cursor={false} />

                {/* Shadow Area */}
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="none"
                  fill="url(#shadowFill)"
                />

                {/* Main Line */}
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="url(#lineColor)"
                  strokeWidth={3}
                  dot={false}
                  activeDot={{
                    r: 8,
                    stroke: "#fff",
                    strokeWidth: 3,
                    fill: "#8B5CF6",
                  }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* GAUGE */}
        <div
          style={{
            flex: 1,
            minWidth: "250px",
            background: isDarkMode ? "#1E293B" : "white",
            borderRadius: "20px",
            padding: "24px",
            boxShadow: isDarkMode
              ? "0 8px 32px rgba(0,0,0,0.3)"
              : "0 4px 20px rgba(0,0,0,0.06)",
            border: isDarkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SemiCircleGauge percentage={78} />
        </div>
      </div>
    </div>
  );
}

// Qolgan komponentlarni ham shu tarzda yangilaymiz...

const ModuleRow = ({ icon, name, contracts, paidAmount, debt, isEven }) => {
  const { isDarkMode } = React.useContext(ThemeContext);
  const hasDebt = debt > 0;
  
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '2fr 1.5fr 1fr 1fr',
      alignItems: 'center',
      padding: '20px 28px',
      background: isEven 
        ? (isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(248, 250, 252, 0.6)') 
        : (isDarkMode ? 'rgba(15, 23, 42, 0.8)' : 'white'),
      borderBottom: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.04)',
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
          color: isDarkMode ? '#F1F5F9' : '#1a1f36',
        }}>
          {name}
        </span>
      </div>
      
      {/* Contracts Count */}
      <div style={{
        fontSize: '15px',
        fontWeight: '500',
        color: isDarkMode ? '#CBD5E1' : '#374151',
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
        color: hasDebt ? '#EF4444' : (isDarkMode ? '#64748B' : '#6B7280'),
        textAlign: 'right',
      }}>
        {hasDebt ? `$${debt.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '—'}
      </div>
    </div>
  );
};

function ModulesStatistics() {
  const { isDarkMode } = React.useContext(ThemeContext);
  
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
      background: isDarkMode 
        ? 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' 
        : 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
    }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
      <div style={{
        background: isDarkMode 
          ? 'linear-gradient(145deg, #1E293B 0%, #334155 100%)' 
          : 'white',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: isDarkMode 
          ? '0 8px 32px rgba(0,0,0,0.3)' 
          : '0 4px 20px rgba(0,0,0,0.06)',
        border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.04)',
      }}>
        {/* Header */}
        <div style={{
          padding: '24px 28px',
          borderBottom: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.06)',
        }}>
          <h2 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: isDarkMode ? '#F1F5F9' : '#1a1f36',
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
          background: isDarkMode ? 'rgba(30, 41, 59, 0.8)' : 'rgba(248, 250, 252, 0.8)',
          borderBottom: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.06)',
        }}>
          <span style={{
            fontSize: '12px',
            fontWeight: '600',
            color: isDarkMode ? '#94A3B8' : '#8B95A5',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Modullar nomi
          </span>
          <span style={{
            fontSize: '12px',
            fontWeight: '600',
            color: isDarkMode ? '#94A3B8' : '#8B95A5',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Shartnomalar soni
          </span>
          <span style={{
            fontSize: '12px',
            fontWeight: '600',
            color: isDarkMode ? '#94A3B8' : '#8B95A5',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            To'langan summa
          </span>
          <span style={{
            fontSize: '12px',
            fontWeight: '600',
            color: isDarkMode ? '#94A3B8' : '#8B95A5',
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

// Qolgan komponentlarni ham shu tartibda yangilash kerak...
// Bu yerda faqat asosiy o'zgarishlarni ko'rsatdim

// BankLogosCarousel komponentini yangilaymiz
function BankLogosCarousel() {
  const { isDarkMode } = React.useContext(ThemeContext);
  
  // Local logolaringizni import qiling
  const banks = [
    { name: 'Kapitalbank', logo: '/logo-1.png' },
    { name: 'Ipak Yoli', logo: '/logo-2.png' },
    { name: 'Asaka Bank', logo: '/logo-3.png' },
    { name: 'Hamkorbank', logo: '/logo-4.png' },
    { name: 'Aloqa Bank', logo: '/logo-5.png' },
    { name: 'NBU', logo: '/logo-6.png' },
    { name: 'Orient Finans', logo: '/logo-7.png' },
    { name: 'Qishloq Qurilish', logo: '/logo-8.png' },
    { name: 'Nam A Bank', logo: '/logo-9.png' },
  ];

  const allBanks = [...banks, ...banks];

  const BankLogo = ({ bank, index }) => {
    return (
      <div 
        style={{
          width: '140px',
          height: '90px',
          background: isDarkMode ? 'rgba(255, 255, 255, 1)' : 'white',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isDarkMode 
            ? '0 4px 12px rgba(0,0,0,0.3)' 
            : '0 4px 12px rgba(0,0,0,0.08)',
          flexShrink: 0,
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.04)',
          padding: '16px',
          overflow: 'hidden',
        }}
        className="logo-item"
        title={bank.name}
      >
        <img 
          src={bank.logo} 
          alt={bank.name}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            filter: isDarkMode ? 'brightness(0.9) contrast(1.1)' : 'none',
          }}
          onError={(e) => {
            // Agar rasm yuklanmasa
            e.target.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.style.cssText = `
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 100%;
              background: ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#f8fafc'};
              border-radius: 8px;
              color: ${isDarkMode ? '#cbd5e1' : '#64748b'};
              font-size: 12px;
              font-weight: 600;
              text-align: center;
              padding: 8px;
            `;
            fallback.textContent = bank.name;
            e.target.parentNode.appendChild(fallback);
          }}
        />
      </div>
    );
  };

  return (
    <div style={{
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      padding: '32px',
      background: isDarkMode 
        ? 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' 
        : 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
    }}>
      
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .logo-track {
            animation: scroll 40s linear infinite;
          }
          
          .logo-track:hover {
            animation-play-state: paused;
          }
          
          .logo-item:hover {
            transform: scale(1.08) translateY(-4px);
            box-shadow: ${isDarkMode 
              ? '0 12px 40px rgba(0,0,0,0.5) !important' 
              : '0 12px 40px rgba(0,0,0,0.2) !important'};
          }
        `}
      </style>
      
      <div style={{
        background: isDarkMode 
          ? 'linear-gradient(145deg, #1E293B 0%, #334155 100%)' 
          : 'white',
        borderRadius: '20px',
        padding: '40px 0',
        boxShadow: isDarkMode 
          ? '0 8px 32px rgba(0,0,0,0.3)' 
          : '0 4px 20px rgba(0,0,0,0.06)',
        border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.04)',
        overflow: 'hidden',
        position: 'relative',
      }}>
        
        <div style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: isDarkMode 
            ? 'linear-gradient(90deg, #1E293B 0%, transparent 100%)' 
            : 'linear-gradient(90deg, white 0%, transparent 100%)',
          zIndex: 10,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          right: 0,
          top: 0,
          bottom: 0,
          width: '120px',
          background: isDarkMode 
            ? 'linear-gradient(270deg, #1E293B 0%, transparent 100%)' 
            : 'linear-gradient(270deg, white 0%, transparent 100%)',
          zIndex: 10,
          pointerEvents: 'none',
        }} />
        
        <div 
          className="logo-track"
          style={{
            display: 'flex',
            gap: '28px',
            width: 'fit-content',
            alignItems: 'center',
          }}
        >
          {allBanks.map((bank, index) => (
            <BankLogo key={index} bank={bank} index={index} />
          ))}
        </div>
      </div>
      
      <div style={{
        textAlign: 'center',
        marginTop: '24px',
      }}>
        <span style={{
          fontSize: '15px',
          color: isDarkMode ? '#94A3B8' : '#8B95A5',
          fontWeight: '600',
          letterSpacing: '0.05em',
        }}>
          HAMKOR TASHKILOTLAR
        </span>
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


const CustomTooltip1 = ({ active, payload, label, type }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'white',
        padding: '12px 16px',
        borderRadius: '10px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
        border: '1px solid rgba(0,0,0,0.08)',
      }}>
        <p style={{ 
          color: '#1a1f36', 
          fontSize: '13px', 
          margin: 0,
          fontWeight: '600',
          marginBottom: '8px',
        }}>
          {payload[0].payload.name}
        </p>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: type === 'income' ? '#3B82F6' : '#EF4444',
          }} />
          <span style={{ 
            color: '#6B7280', 
            fontSize: '12px',
          }}>
            {type === 'income' ? 'Daromad' : 'Qarzdorlik'}
          </span>
          <span style={{ 
            color: '#1a1f36', 
            fontSize: '14px',
            fontWeight: '700',
            marginLeft: '8px',
          }}>
            {payload[0].value.toLocaleString()}
          </span>
        </div>
      </div>
    );
  }
  return null;
};

const HorizontalBarChart = ({ title, data, color, gradientId }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const colors = {
    blue: {
      main: '#3B82F6',
      light: '#60A5FA',
      gradient: ['#3B82F6', '#60A5FA'],
    },
    red: {
      main: '#EF4444',
      light: '#F87171',
      gradient: ['#EF4444', '#F87171'],
    },
  };

  const colorSet = colors[color];

  return (
    <div style={{
      background: 'white',
      borderRadius: '20px',
      padding: '28px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      border: '1px solid rgba(0,0,0,0.04)',
      flex: 1,
      minWidth: '420px',
    }}>
      {/* Header */}
      <h3 style={{
        fontSize: '16px',
        fontWeight: '700',
        color: '#1a1f36',
        margin: '0 0 24px 0',
      }}>
        {title}
      </h3>
      
      {/* Chart */}
      <div style={{ height: '320px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
            barCategoryGap="20%"
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor={colorSet.gradient[0]} />
                <stop offset="100%" stopColor={colorSet.gradient[1]} />
              </linearGradient>
            </defs>
            <XAxis 
              type="number" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              tickFormatter={(value) => value.toLocaleString()}
              domain={[0, 'dataMax + 5000']}
            />
            <YAxis 
              type="category" 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#374151', fontSize: 13, fontWeight: 500 }}
              width={180}
            />
            <Tooltip 
              content={<CustomTooltip1 type={color === 'blue' ? 'income' : 'debt'} />}
              cursor={{ fill: 'rgba(0,0,0,0.02)' }}
            />
            <Bar 
              dataKey="value" 
              radius={[0, 6, 6, 0]}
              onMouseEnter={(_, index) => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`}
                  fill={`url(#${gradientId})`}
                  style={{
                    filter: hoveredIndex === index ? 'brightness(1.1)' : 'none',
                    transition: 'filter 0.2s ease',
                  }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

function TopUniversitiesCharts() {
  const incomeData = [
    { name: 'Toshkent davlat iqtisodiyot universiteti', value: 49401 },
    { name: 'Toshkent Kimyo xalqaro universiteti', value: 42350 },
    { name: 'ISFT instituti', value: 39800 },
    { name: 'University of Business and Science', value: 35200 },
    { name: "O'zbekiston Milliy universiteti", value: 34100 },
  ];

  const debtData = [
    { name: 'Samarqand davlat universiteti', value: 38500 },
    { name: 'Farg\'ona davlat universiteti', value: 32100 },
    { name: 'Buxoro davlat universiteti', value: 28700 },
    { name: 'Andijon davlat universiteti', value: 25400 },
    { name: 'Namangan davlat universiteti', value: 22800 },
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
        flexDirection: 'row',
        gap: '24px',
        flexWrap: 'wrap',
      }}>
        {/* Top Income Universities */}
        <HorizontalBarChart 
          title="Eng ko'p daromadga ega top 5 ta OTM"
          data={incomeData}
          color="blue"
          gradientId="blueGradient"
        />
        
        {/* Top Debt Universities */}
        <HorizontalBarChart 
          title="Eng ko'p qarzdorlikka ega top 5 ta OTM"
          data={debtData}
          color="red"
          gradientId="redGradient"
        />
      </div>
    </div>
  );
}



// ===============================================================================================================
// ===============================================================================================================
// ===============================================================================================================
// ===============================================================================================================
// ===============================================================================================================
// ===============================================================================================================



// import React, { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

// const CustomTooltip = ({ active, payload, label, type }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div style={{
//         background: 'white',
//         padding: '12px 16px',
//         borderRadius: '10px',
//         boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
//         border: '1px solid rgba(0,0,0,0.08)',
//       }}>
//         <p style={{ 
//           color: '#1a1f36', 
//           fontSize: '13px', 
//           margin: 0,
//           fontWeight: '600',
//           marginBottom: '8px',
//         }}>
//           {payload[0].payload.name}
//         </p>
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '8px',
//         }}>
//           <div style={{
//             width: '8px',
//             height: '8px',
//             borderRadius: '50%',
//             background: type === 'income' ? '#3B82F6' : '#EF4444',
//           }} />
//           <span style={{ 
//             color: '#6B7280', 
//             fontSize: '12px',
//           }}>
//             {type === 'income' ? 'Daromad' : 'Qarzdorlik'}
//           </span>
//           <span style={{ 
//             color: '#1a1f36', 
//             fontSize: '14px',
//             fontWeight: '700',
//             marginLeft: '8px',
//           }}>
//             {payload[0].value.toLocaleString()}
//           </span>
//         </div>
//       </div>
//     );
//   }
//   return null;
// };

// const HorizontalBarChart = ({ title, data, color, gradientId }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);
  
//   const colors = {
//     blue: {
//       main: '#3B82F6',
//       light: '#60A5FA',
//       gradient: ['#3B82F6', '#60A5FA'],
//     },
//     red: {
//       main: '#EF4444',
//       light: '#F87171',
//       gradient: ['#EF4444', '#F87171'],
//     },
//   };

//   const colorSet = colors[color];

//   return (
//     <div style={{
//       background: 'white',
//       borderRadius: '20px',
//       padding: '28px',
//       boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
//       border: '1px solid rgba(0,0,0,0.04)',
//       flex: 1,
//       minWidth: '500px',
//     }}>
//       {/* Header */}
//       <h3 style={{
//         fontSize: '16px',
//         fontWeight: '700',
//         color: '#1a1f36',
//         margin: '0 0 24px 0',
//       }}>
//         {title}
//       </h3>
      
//       {/* Chart */}
//       <div style={{ height: '320px' }}>
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart
//             data={data}
//             layout="vertical"
//             margin={{ top: 0, right: 30, left: 10, bottom: 0 }}
//             barCategoryGap="20%"
//           >
//             <defs>
//               <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="0">
//                 <stop offset="0%" stopColor={colorSet.gradient[0]} />
//                 <stop offset="100%" stopColor={colorSet.gradient[1]} />
//               </linearGradient>
//             </defs>
//             <XAxis 
//               type="number" 
//               axisLine={false}
//               tickLine={false}
//               tick={{ fill: '#9CA3AF', fontSize: 12 }}
//               tickFormatter={(value) => value.toLocaleString()}
//               domain={[0, 'dataMax + 5000']}
//             />
//             <YAxis 
//               type="category" 
//               dataKey="name" 
//               axisLine={false}
//               tickLine={false}
//               tick={{ fill: '#374151', fontSize: 13, fontWeight: 500 }}
//               width={220}
//             />
//             <Tooltip 
//               content={<CustomTooltip type={color === 'blue' ? 'income' : 'debt'} />}
//               cursor={{ fill: 'rgba(0,0,0,0.02)' }}
//             />
//             <Bar 
//               dataKey="value" 
//               radius={[0, 6, 6, 0]}
//               onMouseEnter={(_, index) => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {data.map((entry, index) => (
//                 <Cell 
//                   key={`cell-${index}`}
//                   fill={`url(#${gradientId})`}
//                   style={{
//                     filter: hoveredIndex === index ? 'brightness(1.1)' : 'none',
//                     transition: 'filter 0.2s ease',
//                   }}
//                 />
//               ))}
//             </Bar>
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// export default function TopUniversitiesHorizontalCharts() {
//   const incomeData = [
//     { name: 'Toshkent davlat iqtisodiyot universiteti', value: 49401 },
//     { name: 'Toshkent Kimyo xalqaro universiteti', value: 42350 },
//     { name: 'ISFT instituti', value: 39800 },
//     { name: 'University of Business and Science', value: 35200 },
//     { name: "O'zbekiston Milliy universiteti", value: 34100 },
//   ];

//   const debtData = [
//     { name: 'Samarqand davlat universiteti', value: 38500 },
//     { name: 'Farg\'ona davlat universiteti', value: 32100 },
//     { name: 'Buxoro davlat universiteti', value: 28700 },
//     { name: 'Andijon davlat universiteti', value: 25400 },
//     { name: 'Namangan davlat universiteti', value: 22800 },
//   ];

//   return (
//     <div style={{
//       fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
//       padding: '32px',
//       background: 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
//       minHeight: '100vh',
//     }}>
//       <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
//       <div style={{
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '28px',
//       }}>
//         {/* Top Income Universities */}
//         <HorizontalBarChart 
//           title="Eng ko'p daromadga ega top 5 ta OTM"
//           data={incomeData}
//           color="blue"
//           gradientId="blueGradient"
//         />
        
//         {/* Top Debt Universities */}
//         <HorizontalBarChart 
//           title="Eng ko'p qarzdorlikka ega top 5 ta OTM"
//           data={debtData}
//           color="red"
//           gradientId="redGradient"
//         />
//       </div>
//     </div>
//   );
// }
