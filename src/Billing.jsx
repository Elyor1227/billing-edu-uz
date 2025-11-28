// import React, { useState, useEffect } from 'react';
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, Cell } from 'recharts';

// // Theme Context yaratamiz
// const ThemeContext = React.createContext();

// const StatsCard = ({ icon, label, value, change, changeType, iconBg, iconColor }) => {
//   const { isDarkMode } = React.useContext(ThemeContext);
//   const isPositive = changeType === 'positive';
//   const isNegative = changeType === 'negative';
  
//   return (
//     <div style={{
//       background: isDarkMode ? 'linear-gradient(145deg, #1E293B 0%, #334155 100%)' : 'white',
//       borderRadius: '16px',
//       padding: '24px 28px',
//       display: 'flex',
//       alignItems: 'center',
//       gap: '20px',
//       boxShadow: isDarkMode 
//         ? '0 4px 20px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2)' 
//         : '0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)',
//       border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.04)',
//       flex: 1,
//       minWidth: '140px',
//       transition: 'all 0.3s ease',
//       cursor: 'pointer',
//     }}
//     className="stats-card"
//     >
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
//         transition: 'all 0.3s ease',
//       }}
//       className="stats-icon"
//       >
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
//             color: isDarkMode ? '#94A3B8' : '#8B95A5',
//             letterSpacing: '0.02em',
//             textTransform: 'uppercase',
//           }}>
//             {label}
//           </span>
//         </div>
        
//         <div style={{
//           fontSize: '28px',
//           fontWeight: '700',
//           color: isDarkMode ? '#F1F5F9' : '#1a1f36',
//           letterSpacing: '-0.02em',
//           marginBottom: '6px',
//           fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
//         }}>
//           {value}
//         </div>
        
//         <div style={{
//           fontSize: '12px',
//           fontWeight: '500',
//           color: isPositive ? '#10B981' : isNegative ? '#EF4444' : isDarkMode ? '#64748B' : '#8B95A5',
//           display: 'flex',
//           alignItems: 'center',
//           gap: '4px',
//         }}>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function Billing() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const stats = [
//     {
//       icon: '🏢',
//       label: 'Organizations',
//       value: '1,456',

//       changeType: 'positive',
//       iconBg: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
//       iconColor: '#6366F1',
//     },
//     {
//       icon: '📄',
//       label: 'Shartnomalar',
//       value: '3,345',

//       changeType: 'negative',
//       iconBg: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
//       iconColor: '#F59E0B',
//     },
//     {
//       icon: '💳',
//       label: "To'lovlar soni",
//       value: '2,847',

//       changeType: 'negative',
//       iconBg: 'linear-gradient(135deg, #DCFCE7 0%, #BBF7D0 100%)',
//       iconColor: '#22C55E',
//     },
//     {
//       icon: '💰',
//       label: "To'langan summa",
//       value: '847,250',

//       changeType: 'positive',
//       iconBg: 'linear-gradient(135deg, #FCE7F3 0%, #FBCFE8 100%)',
//       iconColor: '#EC4899',
//     },
//     {
//       icon: '👥',
//       label: "Kirishlar soni",
//       value: '8,000',

//       changeType: 'positive',
//       iconBg: 'linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 100%)',
//       iconColor: '#4F46E5',
//     },
//   ];

//   useEffect(() => {
//     // CSS animatsiyalarni qo'shamiz
//     const style = document.createElement('style');
//     style.textContent = `
//       .stats-card:hover {
//         transform: translateY(-4px);
//         box-shadow: ${isDarkMode 
//           ? '0 8px 32px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)' 
//           : '0 8px 32px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.08)'} !important;
//       }
      
//       .stats-card:hover .stats-icon {
//         transform: scale(1.1);
//       }
      
//       .theme-toggle {
//         transition: all 0.3s ease;
//       }
      
//       .theme-toggle:hover {
//         transform: rotate(15deg);
//       }
//     `;
//     document.head.appendChild(style);
    
//     return () => {
//       document.head.removeChild(style);
//     };
//   }, [isDarkMode]);

//   return (
//     <ThemeContext.Provider value={{ isDarkMode }}>
//       <div style={{
//         fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
//         padding: '32px',
//         width: '80%',
//         margin: '0 auto',
//         background: isDarkMode 
//           ? 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' 
//           : 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
//         minHeight: '100vh',
//         transition: 'all 0.3s ease',
//       }}>
//         <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
//         {/* Header with Theme Toggle */}
//         <div style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '24px',
//         }}>
//           <h1 style={{
//             fontSize: '24px',
//             fontWeight: '700',
//             color: isDarkMode ? '#F1F5F9' : '#1a1f36',
//             margin: 0,
//             letterSpacing: '-0.01em',
//           }}>
//             📊 Dashboard
//           </h1>
          
//           {/* Theme Toggle Button */}
//           <button
//             onClick={toggleTheme}
//             style={{
//               background: isDarkMode 
//                 ? 'linear-gradient(135deg, #475569 0%, #334155 100%)' 
//                 : 'linear-gradient(135deg, #E2E8F0 0%, #CBD5E1 100%)',
//               border: 'none',
//               borderRadius: '12px',
//               padding: '12px 16px',
//               cursor: 'pointer',
//               boxShadow: isDarkMode 
//                 ? '0 4px 12px rgba(0,0,0,0.3)' 
//                 : '0 2px 8px rgba(0,0,0,0.1)',
//               color: isDarkMode ? '#E2E8F0' : '#475569',
//               fontSize: '14px',
//               fontWeight: '600',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '8px',
//               transition: 'all 0.3s ease',
//             }}
//             className="theme-toggle"
//           >
//             {isDarkMode ? '☀️ Kunduzgi' : '🌙 Tungi'}
//           </button>
//         </div>
        
//         <div style={{
//           display: 'flex',
//           gap: '20px',
//           flexWrap: 'wrap',
//         }}>
//           {stats.map((stat, index) => (
//             <StatsCard key={index} {...stat} />
//           ))}
//         </div>
//         <ContractsChart />
//         <ModulesStatistics />
//         <StipendiyaIjaraStats />
//         <TopUniversitiesCharts />
//         <BankLogosCarousel />
//       </div>
//     </ThemeContext.Provider>
//   );
// }

// const CustomTooltip = ({ active, payload, label }) => {
//   const { isDarkMode } = React.useContext(ThemeContext);
  
//   if (active && payload && payload.length) {
//     return (
//       <div style={{
//         background: isDarkMode 
//           ? 'linear-gradient(135deg, #1E293B 0%, #334155 100%)' 
//           : 'linear-gradient(135deg, #7C3AED 0%, #8B5CF6 100%)',
//         padding: '12px 16px',
//         borderRadius: '12px',
//         boxShadow: isDarkMode 
//           ? '0 10px 40px rgba(0,0,0,0.5)' 
//           : '0 10px 40px rgba(124, 58, 237, 0.4)',
//         border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : 'none',
//       }}>
//         <p style={{ 
//           color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.8)', 
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
//   const { isDarkMode } = React.useContext(ThemeContext);
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
//               stroke={isFilled ? (index < filledBars * 0.6 ? '#4C1D95' : '#7C3AED') : isDarkMode ? '#374151' : '#E5E7EB'}
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
//           color: isDarkMode ? '#F1F5F9' : '#1a1f36',
//           letterSpacing: '-0.02em',
//           fontFamily: "'DM Sans', sans-serif",
//         }}>
//           {percentage}%
//         </div>
//         <div style={{
//           fontSize: '13px',
//           color: isDarkMode ? '#94A3B8' : '#8B95A5',
//           fontWeight: '500',
//           marginTop: '4px',
//         }}>
//           Shartnoma olganlar soni
//         </div>
//       </div>
//     </div>
//   );
// };

// // function CustomTooltip({ active, payload, label }) {
// //   if (active && payload && payload.length) {
// //     return (
// //       <div
// //         style={{
// //           background: "white",
// //           padding: "8px 12px",
// //           borderRadius: "8px",
// //           boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
// //         }}
// //       >
// //         <p style={{ margin: 0, color: "#0F172A", fontWeight: 600 }}>{label}</p>
// //         <p style={{ margin: 0, color: "#6366F1", fontWeight: 700 }}>{payload[0].value}</p>
// //       </div>
// //     );
// //   }
// //   return null;
// // }

//  function ContractsChart() {
//   const [period, setPeriod] = useState("Yillik");
//   const { isDarkMode } = React.useContext(ThemeContext);

//   const data = [
//     { month: "Yan", value: 245 },
//     { month: "Fev", value: 288 },
//     { month: "Mar", value: 267 },
//     { month: "Apr", value: 312 },
//     { month: "May", value: 356 },
//     { month: "Iyun", value: 329 },
//     { month: "Iyul", value: 298 },
//     { month: "Avg", value: 276 },
//     { month: "Sen", value: 234 },
//     { month: "Okt", value: 212 },
//     { month: "Noy", value: 189 },
//     { month: "Dek", value: 178 },
//   ];

//   return (
//     <div
//       style={{
//         padding: "32px",
//         fontFamily: "'DM Sans', sans-serif",
//         background: isDarkMode
//           ? "linear-gradient(180deg, #0F172A 0%, #1E293B 100%)"
//           : "#F5F7FA",
//       }}
//     >
//       <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        
//         {/* MAIN CHART */}
//         <div
//           style={{
//             flex: 2,
//             minWidth: "500px",
//             background: isDarkMode ? "#1E293B" : "white",
//             borderRadius: "20px",
//             padding: "28px",
//             boxShadow: isDarkMode
//               ? "0 20px 60px rgba(0,0,0,0.4)"
//               : "0 20px 60px rgba(0,0,0,0.08)",
//             border: isDarkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.05)",
//           }}
//         >
//           {/* HEADER */}
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               marginBottom: "28px",
//             }}
//           >
//             <h2
//               style={{
//                 margin: 0,
//                 color: isDarkMode ? "white" : "#0F172A",
//                 fontSize: "20px",
//                 fontWeight: "600",
//               }}
//             >
//               Tasdiqlangan Shartnomalar
//             </h2>

//             <select
//               value={period}
//               onChange={(e) => setPeriod(e.target.value)}
//               style={{
//                 padding: "10px 16px",
//                 borderRadius: "10px",
//                 fontSize: "14px",
//                 cursor: "pointer",
//                 background: isDarkMode ? "#334155" : "#F1F5F9",
//                 color: isDarkMode ? "#fff" : "#0F172A",
//                 border: "1px solid rgba(0,0,0,0.1)",
//               }}
//             >
//               <option value="Yillik">Yillik</option>
//               <option value="Oylik">Oylik</option>
//               <option value="Haftalik">Haftalik</option>
//             </select>
//           </div>

//           {/* CHART */}
//           <div style={{ height: "300px" }}>
//             <ResponsiveContainer width="100%" height="100%">
//               <AreaChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
//                 <defs>
//                   {/* Line color */}
//                   <linearGradient id="lineColor" x1="0" y1="0" x2="1" y2="0">
//                     <stop offset="0%" stopColor="#8B5CF6" />
//                     <stop offset="100%" stopColor="#6366F1" />
//                   </linearGradient>

//                   {/* Shadow fill */}
//                   <linearGradient id="shadowFill" x1="0" y1="0" x2="0" y2="1">
//                     <stop offset="0%" stopColor="#8B5CF6" stopOpacity={0.45} />
//                     <stop offset="100%" stopColor="#8B5CF6" stopOpacity={0} />
//                   </linearGradient>
//                 </defs>

//                 <XAxis
//                   dataKey="month"
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{
//                     fill: isDarkMode ? "rgba(255,255,255,0.6)" : "#94A3B8",
//                     fontSize: 12,
//                   }}
//                   dy={10}
//                 />

//                 <YAxis
//                   axisLine={false}
//                   tickLine={false}
//                   tick={{
//                     fill: isDarkMode ? "rgba(255,255,255,0.6)" : "#94A3B8",
//                     fontSize: 12,
//                   }}
//                 />

//                 <Tooltip content={<CustomTooltip />} cursor={false} />

//                 {/* Shadow Area */}
//                 <Area
//                   type="monotone"
//                   dataKey="value"
//                   stroke="none"
//                   fill="url(#shadowFill)"
//                 />

//                 {/* Main Line */}
//                 <Line
//                   type="monotone"
//                   dataKey="value"
//                   stroke="url(#lineColor)"
//                   strokeWidth={3}
//                   dot={false}
//                   activeDot={{
//                     r: 8,
//                     stroke: "#fff",
//                     strokeWidth: 3,
//                     fill: "#8B5CF6",
//                   }}
//                 />
//               </AreaChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* GAUGE */}
//         <div
//           style={{
//             flex: 1,
//             minWidth: "250px",
//             background: isDarkMode ? "#1E293B" : "white",
//             borderRadius: "20px",
//             padding: "24px",
//             boxShadow: isDarkMode
//               ? "0 8px 32px rgba(0,0,0,0.3)"
//               : "0 4px 20px rgba(0,0,0,0.06)",
//             border: isDarkMode ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.05)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <SemiCircleGauge percentage={78} />
//         </div>
//       </div>
//     </div>
//   );
// }

// // Qolgan komponentlarni ham shu tarzda yangilaymiz...

// const ModuleRow = ({ icon, name, contracts, paidAmount, debt, isEven }) => {
//   const { isDarkMode } = React.useContext(ThemeContext);
//   const hasDebt = debt > 0;
  
//   return (
//     <div style={{
//       display: 'grid',
//       gridTemplateColumns: '2fr 1.5fr 1fr 1fr',
//       alignItems: 'center',
//       padding: '20px 28px',
//       background: isEven 
//         ? (isDarkMode ? 'rgba(30, 41, 59, 0.6)' : 'rgba(248, 250, 252, 0.6)') 
//         : (isDarkMode ? 'rgba(15, 23, 42, 0.8)' : 'white'),
//       borderBottom: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.04)',
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
//           color: isDarkMode ? '#F1F5F9' : '#1a1f36',
//         }}>
//           {name}
//         </span>
//       </div>
      
//       {/* Contracts Count */}
//       <div style={{
//         fontSize: '15px',
//         fontWeight: '500',
//         color: isDarkMode ? '#CBD5E1' : '#374151',
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
//         color: hasDebt ? '#EF4444' : (isDarkMode ? '#64748B' : '#6B7280'),
//         textAlign: 'right',
//       }}>
//         {hasDebt ? `$${debt.toLocaleString('en-US', { minimumFractionDigits: 2 })}` : '—'}
//       </div>
//     </div>
//   );
// };

// function ModulesStatistics() {
//   const { isDarkMode } = React.useContext(ThemeContext);
  
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
//       background: isDarkMode 
//         ? 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' 
//         : 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
//     }}>
//       <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
//       <div style={{
//         background: isDarkMode 
//           ? 'linear-gradient(145deg, #1E293B 0%, #334155 100%)' 
//           : 'white',
//         borderRadius: '20px',
//         overflow: 'hidden',
//         boxShadow: isDarkMode 
//           ? '0 8px 32px rgba(0,0,0,0.3)' 
//           : '0 4px 20px rgba(0,0,0,0.06)',
//         border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.04)',
//       }}>
//         {/* Header */}
//         <div style={{
//           padding: '24px 28px',
//           borderBottom: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.06)',
//         }}>
//           <h2 style={{
//             fontSize: '18px',
//             fontWeight: '700',
//             color: isDarkMode ? '#F1F5F9' : '#1a1f36',
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
//           background: isDarkMode ? 'rgba(30, 41, 59, 0.8)' : 'rgba(248, 250, 252, 0.8)',
//           borderBottom: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.06)',
//         }}>
//           <span style={{
//             fontSize: '12px',
//             fontWeight: '600',
//             color: isDarkMode ? '#94A3B8' : '#8B95A5',
//             textTransform: 'uppercase',
//             letterSpacing: '0.05em',
//           }}>
//             Modullar nomi
//           </span>
//           <span style={{
//             fontSize: '12px',
//             fontWeight: '600',
//             color: isDarkMode ? '#94A3B8' : '#8B95A5',
//             textTransform: 'uppercase',
//             letterSpacing: '0.05em',
//           }}>
//             Shartnomalar soni
//           </span>
//           <span style={{
//             fontSize: '12px',
//             fontWeight: '600',
//             color: isDarkMode ? '#94A3B8' : '#8B95A5',
//             textTransform: 'uppercase',
//             letterSpacing: '0.05em',
//           }}>
//             To'langan summa
//           </span>
//           <span style={{
//             fontSize: '12px',
//             fontWeight: '600',
//             color: isDarkMode ? '#94A3B8' : '#8B95A5',
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

// // Qolgan komponentlarni ham shu tartibda yangilash kerak...
// // Bu yerda faqat asosiy o'zgarishlarni ko'rsatdim

// // BankLogosCarousel komponentini yangilaymiz
// function BankLogosCarousel() {
//   const { isDarkMode } = React.useContext(ThemeContext);
  
//   // Local logolaringizni import qiling
//   const banks = [
//     { name: 'Kapitalbank', logo: '/logo-1.png' },
//     { name: 'Ipak Yoli', logo: '/logo-2.png' },
//     { name: 'Asaka Bank', logo: '/logo-3.png' },
//     { name: 'Hamkorbank', logo: '/logo-4.png' },
//     { name: 'Aloqa Bank', logo: '/logo-5.png' },
//     { name: 'NBU', logo: '/logo-6.png' },
//     { name: 'Orient Finans', logo: '/logo-7.png' },
//     { name: 'Qishloq Qurilish', logo: '/logo-8.png' },
//     { name: 'Nam A Bank', logo: '/logo-9.png' },
//   ];

//   const allBanks = [...banks, ...banks];

//   const BankLogo = ({ bank, index }) => {
//     return (
//       <div 
//         style={{
//           width: '140px',
//           height: '90px',
//           background: isDarkMode ? 'rgba(255, 255, 255, 1)' : 'white',
//           borderRadius: '16px',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           boxShadow: isDarkMode 
//             ? '0 4px 12px rgba(0,0,0,0.3)' 
//             : '0 4px 12px rgba(0,0,0,0.08)',
//           flexShrink: 0,
//           transition: 'all 0.3s ease',
//           cursor: 'pointer',
//           border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.04)',
//           padding: '16px',
//           overflow: 'hidden',
//         }}
//         className="logo-item"
//         title={bank.name}
//       >
//         <img 
//           src={bank.logo} 
//           alt={bank.name}
//           style={{
//             maxWidth: '100%',
//             maxHeight: '100%',
//             objectFit: 'contain',
//             filter: isDarkMode ? 'brightness(0.9) contrast(1.1)' : 'none',
//           }}
//           onError={(e) => {
//             // Agar rasm yuklanmasa
//             e.target.style.display = 'none';
//             const fallback = document.createElement('div');
//             fallback.style.cssText = `
//               display: flex;
//               align-items: center;
//               justify-content: center;
//               width: 100%;
//               height: 100%;
//               background: ${isDarkMode ? 'rgba(255,255,255,0.1)' : '#f8fafc'};
//               border-radius: 8px;
//               color: ${isDarkMode ? '#cbd5e1' : '#64748b'};
//               font-size: 12px;
//               font-weight: 600;
//               text-align: center;
//               padding: 8px;
//             `;
//             fallback.textContent = bank.name;
//             e.target.parentNode.appendChild(fallback);
//           }}
//         />
//       </div>
//     );
//   };

//   return (
//     <div style={{
//       fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
//       padding: '32px',
//       background: isDarkMode 
//         ? 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' 
//         : 'linear-gradient(180deg, #F8FAFC 0%, #F1F5F9 100%)',
//     }}>
      
//       <style>
//         {`
//           @keyframes scroll {
//             0% { transform: translateX(0); }
//             100% { transform: translateX(-50%); }
//           }
          
//           .logo-track {
//             animation: scroll 40s linear infinite;
//           }
          
//           .logo-track:hover {
//             animation-play-state: paused;
//           }
          
//           .logo-item:hover {
//             transform: scale(1.08) translateY(-4px);
//             box-shadow: ${isDarkMode 
//               ? '0 12px 40px rgba(0,0,0,0.5) !important' 
//               : '0 12px 40px rgba(0,0,0,0.2) !important'};
//           }
//         `}
//       </style>
      
//       <div style={{
//         background: isDarkMode 
//           ? 'linear-gradient(145deg, #1E293B 0%, #334155 100%)' 
//           : 'white',
//         borderRadius: '20px',
//         padding: '40px 0',
//         boxShadow: isDarkMode 
//           ? '0 8px 32px rgba(0,0,0,0.3)' 
//           : '0 4px 20px rgba(0,0,0,0.06)',
//         border: isDarkMode ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.04)',
//         overflow: 'hidden',
//         position: 'relative',
//       }}>
        
//         <div style={{
//           position: 'absolute',
//           left: 0,
//           top: 0,
//           bottom: 0,
//           width: '120px',
//           background: isDarkMode 
//             ? 'linear-gradient(90deg, #1E293B 0%, transparent 100%)' 
//             : 'linear-gradient(90deg, white 0%, transparent 100%)',
//           zIndex: 10,
//           pointerEvents: 'none',
//         }} />
//         <div style={{
//           position: 'absolute',
//           right: 0,
//           top: 0,
//           bottom: 0,
//           width: '120px',
//           background: isDarkMode 
//             ? 'linear-gradient(270deg, #1E293B 0%, transparent 100%)' 
//             : 'linear-gradient(270deg, white 0%, transparent 100%)',
//           zIndex: 10,
//           pointerEvents: 'none',
//         }} />
        
//         <div 
//           className="logo-track"
//           style={{
//             display: 'flex',
//             gap: '28px',
//             width: 'fit-content',
//             alignItems: 'center',
//           }}
//         >
//           {allBanks.map((bank, index) => (
//             <BankLogo key={index} bank={bank} index={index} />
//           ))}
//         </div>
//       </div>
      
//       <div style={{
//         textAlign: 'center',
//         marginTop: '24px',
//       }}>
//         <span style={{
//           fontSize: '15px',
//           color: isDarkMode ? '#94A3B8' : '#8B95A5',
//           fontWeight: '600',
//           letterSpacing: '0.05em',
//         }}>
//           HAMKOR TASHKILOTLAR
//         </span>
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


// const CustomTooltip1 = ({ active, payload, label, type }) => {
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
//       minWidth: '420px',
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
//               width={180}
//             />
//             <Tooltip 
//               content={<CustomTooltip1 type={color === 'blue' ? 'income' : 'debt'} />}
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

// function TopUniversitiesCharts() {
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
//     }}>
//       <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      
//       <div style={{
//         display: 'flex',
//         flexDirection: 'row',
//         gap: '24px',
//         flexWrap: 'wrap',
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



// ===============================================================================================================
// ===============================================================================================================
// ===============================================================================================================
// ===============================================================================================================
// ===============================================================================================================
// ===============================================================================================================

import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, RadialBarChart, RadialBar, ComposedChart, Line } from 'recharts';

// Data
const genderData = [
  { name: 'Erkak', value: 7234, color: '#3b82f6' },
  { name: 'Ayol', value: 5613, color: '#ec4899' }
];

const educationFormData = [
  { name: 'Kunduzgi', value: 8234, color: '#3b82f6' },
  { name: 'Sirtqi', value: 4613, color: '#8b5cf6' }
];

const courseData = [
  { name: '1-kurs', students: 3456, fill: '#3b82f6' },
  { name: '2-kurs', students: 3234, fill: '#06b6d4' },
  { name: '3-kurs', students: 3012, fill: '#8b5cf6' },
  { name: '4-kurs', students: 3145, fill: '#10b981' }
];

const regionData = [
  { name: 'Toshkent', value: 2845 },
  { name: 'Samarqand', value: 1923 },
  { name: "Farg'ona", value: 1756 },
  { name: 'Andijon', value: 1634 },
  { name: 'Namangan', value: 1423 },
  { name: 'Buxoro', value: 1234 },
  { name: 'Qashqadaryo', value: 1032 },
  { name: 'Xorazm', value: 1000 }
];

const districtData = [
  { name: 'Chilonzor', value: 2134 },
  { name: 'Yunusobod', value: 1876 },
  { name: 'M.Ulug\'bek', value: 1654 },
  { name: 'Sergeli', value: 1432 },
  { name: 'Yakkasaroy', value: 1234 },
  { name: 'Shayxontohur', value: 987 }
];

const housingTypeData = [
  { name: 'Yotoqxona', value: 3421, color: '#3b82f6' },
  { name: 'Ijara', value: 4256, color: '#10b981' },
  { name: 'Ota-ona', value: 3876, color: '#f59e0b' },
  { name: 'Qarindosh', value: 1294, color: '#ef4444' }
];

const housingStatusData = [
  { name: '1-kurs', taminlangan: 2845, navbatda: 432, taminlanmagan: 179 },
  { name: '2-kurs', taminlangan: 2654, navbatda: 389, taminlanmagan: 191 },
  { name: '3-kurs', taminlangan: 2512, navbatda: 312, taminlanmagan: 188 },
  { name: '4-kurs', taminlangan: 2634, navbatda: 298, taminlanmagan: 213 }
];

const attendanceData = [
  { name: '30-40', range: '30-40 soat', count: 234, fill: '#3b82f6' },
  { name: '40-50', range: '40-50 soat', count: 156, fill: '#f59e0b' },
  { name: '50-70', range: '50-70 soat', count: 89, fill: '#f97316' },
  { name: '70+', range: '70+ soat', count: 47, fill: '#ef4444' }
];

const topStudents = [
  { id: 1, name: 'Karimov Jasur', idNum: '2021-1234', faculty: 'IT fakulteti', course: 3, hours: 98, housing: 'Ijara', lat: 41.3111, lng: 69.2797, color: '#10b981' },
  { id: 2, name: 'Ahmadova Dilnoza', idNum: '2022-5678', faculty: 'Iqtisodiyot', course: 2, hours: 87, housing: 'Yotoqxona', lat: 41.3275, lng: 69.2145, color: '#3b82f6' },
  { id: 3, name: 'Toshmatov Bekzod', idNum: '2021-9012', faculty: 'Huquq', course: 3, hours: 82, housing: 'Qarindosh', lat: 41.2995, lng: 69.2401, color: '#ef4444' },
  { id: 4, name: 'Rustamova Nilufar', idNum: '2023-3456', faculty: 'IT fakulteti', course: 1, hours: 79, housing: 'Ijara', lat: 41.3156, lng: 69.2934, color: '#10b981' },
  { id: 5, name: 'Normurodov Shoxrux', idNum: '2022-7890', faculty: 'Tibbiyot', course: 2, hours: 76, housing: 'Ota-ona', lat: 41.3411, lng: 69.1876, color: '#f59e0b' },
  { id: 6, name: 'Qodirova Madina', idNum: '2021-2345', faculty: 'Filologiya', course: 3, hours: 74, housing: 'Yotoqxona', lat: 41.3089, lng: 69.2567, color: '#3b82f6' },
  { id: 7, name: 'Ismoilov Sardor', idNum: '2023-6789', faculty: 'Arxitektura', course: 1, hours: 71, housing: 'Ijara', lat: 41.2876, lng: 69.2234, color: '#10b981' },
  { id: 8, name: 'Yusupova Zarina', idNum: '2022-0123', faculty: 'Iqtisodiyot', course: 2, hours: 68, housing: 'Qarindosh', lat: 41.3234, lng: 69.2678, color: '#ef4444' },
  { id: 9, name: 'Xolmatov Davron', idNum: '2021-4567', faculty: 'IT fakulteti', course: 4, hours: 65, housing: 'Yotoqxona', lat: 41.3312, lng: 69.2089, color: '#3b82f6' },
  { id: 10, name: 'Salimova Kamola', idNum: '2023-8901', faculty: 'Jurnalistika', course: 1, hours: 62, housing: 'Ota-ona', lat: 41.2945, lng: 69.2789, color: '#f59e0b' }
];

// Icons
const DashboardIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <rect x="3" y="3" width="7" height="7" rx="1"/>
    <rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/>
    <rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
);

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
  </svg>
);

const MapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

const TrendUpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
  </svg>
);

const TrendDownIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
  </svg>
);

// Theme Context
const ThemeContext = React.createContext();

const useTheme = () => React.useContext(ThemeContext);

// Animated Counter Component
const AnimatedCounter = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    const incrementTime = duration / end;
    const timer = setInterval(() => {
      start += Math.ceil(end / 100);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value, duration]);
  
  return <span>{count.toLocaleString()}</span>;
};

// Stat Card Component
const StatCard = ({ label, value, change, positive, gradient, icon }) => {
  const { isDark } = useTheme();
  
  return (
    <div className={`relative overflow-hidden rounded-2xl p-5 md:p-6 border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
      isDark 
        ? `border-slate-800 bg-gradient-to-br ${gradient}` 
        : 'border-slate-200 bg-white shadow-sm hover:shadow-lg'
    }`}>
      <div className="relative z-10">
        <p className={`text-xs md:text-sm uppercase tracking-wide mb-2 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {label}
        </p>
        <p className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 font-mono ${isDark ? 'text-white' : 'text-slate-800'}`}>
          <AnimatedCounter value={value} />
        </p>
        <div className={`flex items-center gap-1 text-xs md:text-sm ${positive ? 'text-emerald-500' : 'text-red-500'}`}>
          {positive ? <TrendUpIcon /> : <TrendDownIcon />}
          <span>{change}</span>
        </div>
      </div>
      {isDark && <div className="absolute -right-4 -bottom-4 w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/5 blur-2xl"></div>}
      {!isDark && <div className="absolute -right-4 -bottom-4 w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-500/5 blur-2xl"></div>}
    </div>
  );
};

// Chart Card Component
const ChartCard = ({ title, subtitle, children, className = '' }) => {
  const { isDark } = useTheme();
  
  return (
    <div className={`rounded-2xl p-4 md:p-6 transition-all duration-300 ${
      isDark 
        ? 'bg-slate-900/50 backdrop-blur border border-slate-800 hover:border-slate-700' 
        : 'bg-white border border-slate-200 shadow-sm hover:shadow-md'
    } ${className}`}>
      <div className="mb-4 md:mb-6">
        <h3 className={`text-base md:text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{title}</h3>
        {subtitle && <p className={`text-xs md:text-sm mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{subtitle}</p>}
      </div>
      {children}
    </div>
  );
};

// Custom Tooltip
const CustomTooltip = ({ active, payload, label }) => {
  const { isDark } = useTheme();
  
  if (active && payload && payload.length) {
    return (
      <div className={`rounded-lg p-3 shadow-xl border ${
        isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'
      }`}>
        <p className={`text-sm font-medium mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} className="text-sm" style={{ color: entry.color || entry.fill }}>
            {entry.name}: <span className="font-bold">{entry.value?.toLocaleString()}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

// Animated Donut Chart
const AnimatedDonutChart = ({ data, innerRadius = 60, outerRadius = 100 }) => {
  const { isDark } = useTheme();
  const [animationComplete, setAnimationComplete] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimationComplete(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="relative">
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            paddingAngle={3}
            dataKey="value"
            animationBegin={0}
            animationDuration={1500}
            animationEasing="ease-out"
          >
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={entry.color} 
                stroke="transparent"
                className="transition-all duration-300 hover:opacity-80"
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      {animationComplete && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <p className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>{total.toLocaleString()}</p>
            <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Jami</p>
          </div>
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
            <span className={`text-xs md:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Radial Progress Chart
const RadialProgressChart = ({ data }) => {
  const { isDark } = useTheme();
  
  const chartData = data.map((item, index) => ({
    ...item,
    fill: ['#3b82f6', '#06b6d4', '#8b5cf6', '#10b981'][index % 4]
  }));

  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadialBarChart 
        cx="50%" 
        cy="50%" 
        innerRadius="20%" 
        outerRadius="90%" 
        data={chartData} 
        startAngle={180} 
        endAngle={-180}
      >
        <RadialBar
          minAngle={15}
          background={{ fill: isDark ? '#1e293b' : '#f1f5f9' }}
          clockWise
          dataKey="students"
          animationBegin={0}
          animationDuration={1500}
          animationEasing="ease-out"
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend 
          iconSize={10}
          layout="horizontal"
          verticalAlign="bottom"
          wrapperStyle={{ paddingTop: 20 }}
          formatter={(value) => <span className={`text-xs md:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{value}</span>}
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

// Interactive Map Component
const InteractiveMap = ({ students }) => {
  const { isDark } = useTheme();
  const [selectedStudent, setSelectedStudent] = useState(null);
  
  const mapWidth = 100;
  const mapHeight = 60;
  
  const normalizeCoords = (lat, lng) => {
    const minLat = 41.25, maxLat = 41.40;
    const minLng = 69.15, maxLng = 69.35;
    const x = ((lng - minLng) / (maxLng - minLng)) * mapWidth;
    const y = ((maxLat - lat) / (maxLat - minLat)) * mapHeight;
    return { x, y };
  };

  return (
    <div className={`relative rounded-xl p-4 overflow-hidden ${isDark ? 'bg-slate-900/80' : 'bg-gradient-to-br from-slate-100 to-blue-50'}`}>
      <svg viewBox={`0 0 ${mapWidth} ${mapHeight}`} className="w-full h-64 md:h-80">
        <defs>
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke={isDark ? '#1e293b' : '#cbd5e1'} strokeWidth="0.5"/>
          </pattern>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="shadow">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        <rect width="100%" height="100%" fill="url(#grid)"/>
        
        <text x="50" y="5" textAnchor="middle" fill={isDark ? '#334155' : '#64748b'} fontSize="3" fontWeight="600">TOSHKENT SHAHRI</text>
        
        {students.map((student, index) => {
          const { x, y } = normalizeCoords(student.lat, student.lng);
          return (
            <g key={student.id} className="cursor-pointer" onClick={() => setSelectedStudent(student)}>
              <circle
                cx={x}
                cy={y}
                r="2.5"
                fill={student.color}
                filter={isDark ? "url(#glow)" : "url(#shadow)"}
                className="transition-all duration-300"
              >
                <animate
                  attributeName="opacity"
                  values="0.6;1;0.6"
                  dur={`${2 + index * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx={x}
                cy={y}
                r="4"
                fill="transparent"
                stroke={student.color}
                strokeWidth="0.3"
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  values="2.5;5;2.5"
                  dur={`${2 + index * 0.2}s`}
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  values="0.5;0;0.5"
                  dur={`${2 + index * 0.2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}
      </svg>
      
      {selectedStudent && (
        <div className={`absolute bottom-4 left-4 right-4 backdrop-blur rounded-lg p-4 border animate-slideUp ${
          isDark ? 'bg-slate-800/95 border-slate-700' : 'bg-white/95 border-slate-200 shadow-lg'
        }`}>
          <div className="flex justify-between items-start">
            <div>
              <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-slate-800'}`}>{selectedStudent.name}</h4>
              <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{selectedStudent.faculty} • {selectedStudent.course}-kurs</p>
              <p className="text-sm mt-1">
                <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>Turar joy: </span>
                <span style={{ color: selectedStudent.color }} className="font-medium">{selectedStudent.housing}</span>
              </p>
              <p className="text-sm">
                <span className={isDark ? 'text-slate-500' : 'text-slate-500'}>Qoldirilgan: </span>
                <span className="text-red-500 font-bold">{selectedStudent.hours} soat</span>
              </p>
            </div>
            <button 
              onClick={() => setSelectedStudent(null)}
              className={`transition-colors ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-800'}`}
            >
              <CloseIcon />
            </button>
          </div>
        </div>
      )}
      
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4">
        {[
          { name: 'Yotoqxona', color: '#3b82f6' },
          { name: 'Ijara', color: '#10b981' },
          { name: 'Ota-ona', color: '#f59e0b' },
          { name: 'Qarindosh', color: '#ef4444' }
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: item.color }}></div>
            <span className={`text-xs md:text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Attendance Card Component
const AttendanceCard = ({ range, count, color, delay }) => {
  const { isDark } = useTheme();
  
  return (
    <div 
      className={`rounded-xl p-4 md:p-5 text-center border transition-all duration-300 hover:scale-105 ${
        isDark ? 'bg-slate-800/50 border-slate-700/50 hover:border-slate-600' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <p className={`text-xs md:text-sm mb-2 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>{range}</p>
      <p className="text-2xl md:text-3xl font-bold font-mono" style={{ color }}>
        <AnimatedCounter value={count} duration={1500} />
      </p>
      <p className={`text-xs mt-1 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>talaba</p>
    </div>
  );
};

// Main Dashboard Component
export default function Billing() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('dashboard');
  const [isDark, setIsDark] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
    { id: 'students', label: 'Talabalar', icon: <UsersIcon /> },
    { id: 'statistics', label: 'Statistika', icon: <ChartIcon /> },
    { id: 'map', label: 'Xarita', icon: <MapIcon /> }
  ];

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark }}>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-slate-950 text-white' : 'bg-slate-50 text-slate-900'}`}>
        {/* Mobile Header */}
        <div className={`lg:hidden fixed top-0 left-0 right-0 h-16 backdrop-blur border-b z-50 flex items-center justify-between px-4 ${
          isDark ? 'bg-slate-900/95 border-slate-800' : 'bg-white/95 border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-slate-800' : 'hover:bg-slate-100'}`}
            >
              {sidebarOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              HEMIS
            </h1>
          </div>
          <button
            onClick={toggleTheme}
            className={`p-2.5 rounded-xl transition-all duration-300 ${
              isDark 
                ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* Sidebar Overlay */}
        {sidebarOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside className={`fixed lg:fixed top-0 left-0 h-full w-64 border-r z-50 transform transition-all duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          <div className={`p-6 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              HEMIS
            </h1>
            <p className={`text-xs uppercase tracking-widest mt-1 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Admin Dashboard</p>
          </div>
          
          <nav className="p-4">
            <p className={`text-xs uppercase tracking-wider mb-3 px-3 ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>Asosiy</p>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveNav(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all duration-200 ${
                  activeNav === item.id 
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20' 
                    : isDark 
                      ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Theme Toggle in Sidebar (Desktop) */}
          <div className={`hidden lg:block absolute bottom-0 left-0 right-0 p-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <button
              onClick={toggleTheme}
              className={`w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                isDark 
                  ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
              <span className="font-medium">{isDark ? 'Kunduzgi rejim' : 'Tungi rejim'}</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:ml-64 pt-16 lg:pt-0 min-h-screen">
          <div className="p-4 md:p-6 lg:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 md:mb-8">
              <div>
                <h2 className={`text-2xl md:text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-800'}`}>Dashboard</h2>
                <p className={`text-sm mt-1 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>2024-2025 o'quv yili statistikasi</p>
              </div>
              <div className="flex gap-3">
                <button className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-2 border ${
                  isDark 
                    ? 'bg-slate-800 hover:bg-slate-700 border-slate-700'
                    : 'bg-white hover:bg-slate-50 border-slate-200 shadow-sm'
                }`}>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Export
                </button>
                <button className="px-4 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 rounded-xl text-sm font-medium text-white transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="23 4 23 10 17 10"/>
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
                  </svg>
                  Yangilash
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
              <StatCard 
                label="Jami talabalar" 
                value={12847} 
                change="+5.2% o'tgan yilga" 
                positive={true}
                gradient="from-slate-900 to-blue-900/20"
              />
              <StatCard 
                label="Kunduzgi ta'lim" 
                value={8234} 
                change="64% jami talabalar" 
                positive={true}
                gradient="from-slate-900 to-purple-900/20"
              />
              <StatCard 
                label="Sirtqi ta'lim" 
                value={4613} 
                change="36% jami talabalar" 
                positive={true}
                gradient="from-slate-900 to-cyan-900/20"
              />
              <StatCard 
                label="Yotoqxonada" 
                value={3421} 
                change="-2.1% joy yetishmovchi" 
                positive={false}
                gradient="from-slate-900 to-orange-900/20"
              />
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
              <ChartCard title="Jins kesimida" subtitle="Talabalar taqsimoti">
                <AnimatedDonutChart data={genderData} />
              </ChartCard>

              <ChartCard title="Ta'lim shakli" subtitle="Kunduzgi va sirtqi">
                <ResponsiveContainer width="100%" height={280}>
                  <BarChart data={educationFormData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#1e293b' : '#e2e8f0'} horizontal={false} />
                    <XAxis type="number" stroke={isDark ? '#64748b' : '#94a3b8'} fontSize={12} />
                    <YAxis type="category" dataKey="name" stroke={isDark ? '#64748b' : '#94a3b8'} fontSize={12} width={80} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar 
                      dataKey="value" 
                      radius={[0, 8, 8, 0]}
                      animationBegin={0}
                      animationDuration={1500}
                    >
                      {educationFormData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard title="Kurslar kesimida" subtitle="1-4 kurs talabalari">
                <RadialProgressChart data={courseData} />
              </ChartCard>

              <ChartCard title="Doimiy yashash viloyati" subtitle="Talabalar kelib chiqqan viloyatlar">
                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={regionData}>
                    <defs>
                      <linearGradient id="colorRegion" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#1e293b' : '#e2e8f0'} />
                    <XAxis dataKey="name" stroke={isDark ? '#64748b' : '#94a3b8'} fontSize={10} angle={-45} textAnchor="end" height={60} />
                    <YAxis stroke={isDark ? '#64748b' : '#94a3b8'} fontSize={12} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#3b82f6" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorRegion)"
                      animationBegin={0}
                      animationDuration={1500}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard title="Joriy yashash tumani" subtitle="Hozirgi yashash joyi">
                <ResponsiveContainer width="100%" height={280}>
                  <ComposedChart data={districtData}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#1e293b' : '#e2e8f0'} />
                    <XAxis dataKey="name" stroke={isDark ? '#64748b' : '#94a3b8'} fontSize={10} />
                    <YAxis stroke={isDark ? '#64748b' : '#94a3b8'} fontSize={12} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar 
                      dataKey="value" 
                      fill="#8b5cf6" 
                      radius={[4, 4, 0, 0]}
                      animationBegin={0}
                      animationDuration={1500}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#06b6d4" 
                      strokeWidth={2}
                      dot={{ fill: '#06b6d4', strokeWidth: 2, r: 4 }}
                      animationBegin={500}
                      animationDuration={1500}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </ChartCard>

              <ChartCard title="Turar joy turi" subtitle="Yashash sharoitlari">
                <AnimatedDonutChart data={housingTypeData} innerRadius={50} outerRadius={90} />
              </ChartCard>
            </div>

            {/* Housing Status - Full Width */}
            <ChartCard title="Yashash joyi statusi" subtitle="Kurslar bo'yicha turar joy holati" className="mb-6 md:mb-8">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={housingStatusData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#1e293b' : '#e2e8f0'} />
                  <XAxis dataKey="name" stroke={isDark ? '#64748b' : '#94a3b8'} fontSize={12} />
                  <YAxis stroke={isDark ? '#64748b' : '#94a3b8'} fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend 
                    wrapperStyle={{ paddingTop: 20 }}
                    formatter={(value) => <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{value}</span>}
                  />
                  <Bar 
                    dataKey="taminlangan" 
                    name="Ta'minlangan" 
                    stackId="a" 
                    fill="#10b981" 
                    radius={[0, 0, 0, 0]}
                    animationBegin={0}
                    animationDuration={1500}
                  />
                  <Bar 
                    dataKey="navbatda" 
                    name="Navbatda" 
                    stackId="a" 
                    fill="#f59e0b"
                    animationBegin={300}
                    animationDuration={1500}
                  />
                  <Bar 
                    dataKey="taminlanmagan" 
                    name="Ta'minlanmagan" 
                    stackId="a" 
                    fill="#ef4444" 
                    radius={[4, 4, 0, 0]}
                    animationBegin={600}
                    animationDuration={1500}
                  />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Attendance Stats */}
            <ChartCard title="Dars qoldirish statistikasi" subtitle="Soatlar bo'yicha taqsimot" className="mb-6 md:mb-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-6">
                <AttendanceCard range="30-40 soat" count={234} color="#3b82f6" delay={0} />
                <AttendanceCard range="40-50 soat" count={156} color="#f59e0b" delay={100} />
                <AttendanceCard range="50-70 soat" count={89} color="#f97316" delay={200} />
                <AttendanceCard range="70+ soat" count={47} color="#ef4444" delay={300} />
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={attendanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#1e293b' : '#e2e8f0'} />
                  <XAxis dataKey="range" stroke={isDark ? '#64748b' : '#94a3b8'} fontSize={11} />
                  <YAxis stroke={isDark ? '#64748b' : '#94a3b8'} fontSize={12} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="count" 
                    radius={[8, 8, 0, 0]}
                    animationBegin={0}
                    animationDuration={1500}
                  >
                    {attendanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>

            {/* Top 10 Students Table */}
            <ChartCard title="Eng ko'p dars qoldirgan TOP 10 talaba" subtitle="Joriy semestr davomida" className="mb-6 md:mb-8">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px]">
                  <thead>
                    <tr className={isDark ? 'bg-slate-800/50' : 'bg-slate-100'}>
                      <th className={`text-left text-xs uppercase tracking-wider font-semibold p-4 rounded-l-lg ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>#</th>
                      <th className={`text-left text-xs uppercase tracking-wider font-semibold p-4 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Talaba</th>
                      <th className={`text-left text-xs uppercase tracking-wider font-semibold p-4 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Fakultet</th>
                      <th className={`text-left text-xs uppercase tracking-wider font-semibold p-4 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Kurs</th>
                      <th className={`text-left text-xs uppercase tracking-wider font-semibold p-4 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Soat</th>
                      <th className={`text-left text-xs uppercase tracking-wider font-semibold p-4 ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Turar joy</th>
                      <th className={`text-left text-xs uppercase tracking-wider font-semibold p-4 rounded-r-lg ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Holat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topStudents.map((student, index) => (
                      <tr key={student.id} className={`border-b transition-colors ${
                        isDark ? 'border-slate-800/50 hover:bg-slate-800/30' : 'border-slate-100 hover:bg-slate-50'
                      }`}>
                        <td className={`p-4 font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{index + 1}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-sm font-bold text-white shadow-md">
                              {student.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div>
                              <p className={`font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>{student.name}</p>
                              <p className={`text-xs font-mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{student.idNum}</p>
                            </div>
                          </div>
                        </td>
                        <td className={`p-4 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{student.faculty}</td>
                        <td className={`p-4 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{student.course}-kurs</td>
                        <td className="p-4">
                          <span className={`font-mono font-bold ${student.hours >= 70 ? 'text-red-500' : student.hours >= 50 ? 'text-orange-500' : 'text-blue-500'}`}>
                            {student.hours}
                          </span>
                        </td>
                        <td className={`p-4 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{student.housing}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            student.hours >= 70 
                              ? 'bg-red-500/20 text-red-500' 
                              : student.hours >= 50 
                                ? 'bg-orange-500/20 text-orange-500' 
                                : 'bg-blue-500/20 text-blue-500'
                          }`}>
                            {student.hours >= 70 ? 'Kritik' : student.hours >= 50 ? 'Ogohlantirish' : "E'tibor"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ChartCard>

            {/* Map Section */}
            <ChartCard title="Talabalar joylashuvi xaritasi" subtitle="Turar joylar geografik ko'rinishi">
              <InteractiveMap students={topStudents} />
            </ChartCard>
          </div>
        </main>

        <style>{`
          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-slideUp {
            animation: slideUp 0.3s ease-out;
          }
        `}</style>
      </div>
    </ThemeContext.Provider>
  );
}