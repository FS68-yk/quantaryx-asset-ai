import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, Activity, ChartBar, Database, Search, Briefcase, TrendingUp, BarChart3, ChartPie, Repeat, Watch, Clock } from 'lucide-react';
import { ChartContainer } from '@/components/ui/chart';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area, ScatterChart, Scatter, ZAxis } from 'recharts';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { advancedFeatures } from './hero/constants';

// Monthly asset data
const monthlyAssetData = [
  { month: '1月', value: 40 },
  { month: '2月', value: 60 },
  { month: '3月', value: 30 },
  { month: '4月', value: 70 },
  { month: '5月', value: 50 },
  { month: '6月', value: 80 },
  { month: '7月', value: 40 },
  { month: '8月', value: 90 },
  { month: '9月', value: 60 },
  { month: '10月', value: 70 },
  { month: '11月', value: 50 },
  { month: '12月', value: 60 }
];

// Risk-reward data for investment optimization
const riskRewardData = [
  { name: '保守型', risk: 20, return: 30, size: 100 },
  { name: '平衡型', risk: 45, return: 60, size: 150 },
  { name: '增長型', risk: 70, return: 85, size: 200 },
  { name: '激進型', risk: 95, return: 120, size: 120 }
];

// Asset allocation data
const assetAllocationData = [
  { name: '股票', value: 35 },
  { name: '債券', value: 20 },
  { name: '不動產', value: 25 },
  { name: '另類投資', value: 15 },
  { name: '現金', value: 5 }
];

// Data integration metrics
const dataIntegrationData = [
  { name: '銀行賬戶', count: 8, complete: 100 },
  { name: '證券賬戶', count: 3, complete: 95 },
  { name: '房地產', count: 4, complete: 80 },
  { name: '退休賬戶', count: 2, complete: 90 },
  { name: '私募投資', count: 5, complete: 65 },
  { name: '保險產品', count: 3, complete: 75 }
];

// Investment opportunity data
const opportunityData = [
  { month: '1月', historical: 40, predicted: 42 },
  { month: '2月', historical: 60, predicted: 63 },
  { month: '3月', historical: 30, predicted: 32 },
  { month: '4月', historical: 70, predicted: 75 },
  { month: '5月', historical: 50, predicted: 52 },
  { month: '6月', historical: 80, predicted: 86 },
  { month: '7月', historical: 40, predicted: 42 },
  { month: '8月', historical: 90, predicted: 94 },
  { month: '9月', historical: 60, predicted: 64 },
  { month: '10月', historical: 70, predicted: 74 },
  { month: '11月', historical: 50, predicted: 52 },
  { month: '12月', historical: 60, predicted: null }
];

// Portfolio performance data
const portfolioData = [
  { date: '1/1', value: 100 },
  { date: '2/1', value: 105 },
  { date: '3/1', value: 110 },
  { date: '4/1', value: 108 },
  { date: '5/1', value: 115 },
  { date: '6/1', value: 125 },
  { date: '7/1', value: 135 },
  { date: '8/1', value: 145 },
  { date: '9/1', value: 155 },
  { date: '10/1', value: 170 },
  { date: '11/1', value: 165 },
  { date: '12/1', value: 180 }
];

// Alternative assets data
const altAssetsData = [
  { name: '1M', value: 7800 },
  { name: '2M', value: 7950 },
  { name: '3M', value: 8100 },
  { name: '4M', value: 8200 }
];

const COLORS = ['#9b87f5', '#33C3F0', '#FF8042', '#7E69AB', '#1EAEDB'];

const AIFeatures = [
  {
    icon: <Brain className="h-5 w-5" />,
    title: "智慧資產分析",
    description: "AI強化的資產淨值趨勢預測與風險識別",
    insight: "分析顯示您的資產在8月達到高峰，建議關注流動性分配以優化年底稅務籌劃。",
    chartType: "bar"
  },
  {
    icon: <ChartBar className="h-5 w-5" />,
    title: "自動投資優化",
    description: "基於市場行為的AI驅動投資策略調整",
    insight: "根據您的風險偏好與市場波動，AI推薦增加10%的防禦性資產以平衡投資組合。",
    chartType: "scatter"
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "智能資料整合",
    description: "多源財務數據自動解析與關聯構建",
    insight: "系統已自動整合12個金融機構的資料，並識別出3個重複計算的資產項目。",
    chartType: "bar-progress"
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "投資機會識別",
    description: "AI篩選高價值投資標的與市場時機",
    insight: "AI檢測到5檔符合您投資風格的高潛力標的，點擊查看詳細分析報告。",
    chartType: "area"
  }
];

const Hero = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [showAIInsight, setShowAIInsight] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [showAlternativeAssets, setShowAlternativeAssets] = useState(false);

  const handleFeatureClick = (index) => {
    setActiveFeature(index);
    setShowAIInsight(true);
    setShowDetailedView(false);
    setShowAlternativeAssets(false);
  };

  const handleAdvancedFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const toggleDetailedView = () => {
    setShowDetailedView(!showDetailedView);
    setShowAlternativeAssets(false);
  };

  const toggleAlternativeAssets = () => {
    setShowAlternativeAssets(!showAlternativeAssets);
    setShowDetailedView(false);
  };

  const renderChart = (chartType) => {
    if (chartType === "bar") {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthlyAssetData} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} stroke="var(--grid-color, rgba(155, 155, 155, 0.3))" />
            <XAxis 
              dataKey="month" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              tick={{ fill: 'var(--tick-color, #666)' }}
            />
            <YAxis hide />
            <Tooltip 
              formatter={(value) => [`$${Number(value).toLocaleString()}`, '淨值']}
              cursor={{fill: 'rgba(155, 135, 245, 0.1)'}}
              contentStyle={{
                backgroundColor: 'var(--tooltip-bg, rgba(255, 255, 255, 0.95))',
                borderColor: 'var(--tooltip-border, #ddd)',
                color: 'var(--tooltip-text, #333)'
              }}
            />
            <Bar 
              dataKey="value" 
              fill="url(#colorGradient)" 
              radius={[4, 4, 0, 0]}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--bar-top-color, #9b87f5)" />
                <stop offset="100%" stopColor="var(--bar-bottom-color, #c2b5fa)" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      );
    } else if (chartType === "scatter") {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={true} 
              horizontal={true} 
              opacity={0.2} 
              stroke="var(--grid-color, rgba(155, 155, 155, 0.3))" 
            />
            <XAxis 
              type="number" 
              dataKey="risk" 
              name="風險" 
              domain={[0, 100]}
              tick={{ fill: 'var(--tick-color, #666)' }}
              label={{ value: '風險', position: 'bottom', fill: 'var(--axis-label, #666)' }}
            />
            <YAxis 
              type="number" 
              dataKey="return" 
              name="報酬" 
              domain={[0, 130]}
              tick={{ fill: 'var(--tick-color, #666)' }}
              label={{ value: '報酬', angle: -90, position: 'left', fill: 'var(--axis-label, #666)' }}
            />
            <ZAxis type="number" dataKey="size" range={[50, 300]} />
            <Tooltip 
              formatter={(value, name) => {
                if (name === 'risk') return [`${value}%`, '風險'];
                if (name === 'return') return [`${value}%`, '預期報酬'];
                return [value, name];
              }}
              cursor={{ strokeDasharray: '3 3' }}
              contentStyle={{
                backgroundColor: 'var(--tooltip-bg, rgba(255, 255, 255, 0.95))',
                borderColor: 'var(--tooltip-border, #ddd)',
                color: 'var(--tooltip-text, #333)'
              }}
            />
            <Scatter 
              name="投資組合" 
              data={riskRewardData} 
              fill="#9b87f5"
              strokeWidth={2}
            />
          </ScatterChart>
        </ResponsiveContainer>
      );
    } else if (chartType === "pie") {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={assetAllocationData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              labelLine={false}
              label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {assetAllocationData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}%`, '占比']}
              contentStyle={{
                backgroundColor: 'var(--tooltip-bg, rgba(255, 255, 255, 0.95))',
                borderColor: 'var(--tooltip-border, #ddd)',
                color: 'var(--tooltip-text, #333)'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      );
    } else if (chartType === "bar-progress") {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            layout="vertical"
            data={dataIntegrationData}
            margin={{ top: 5, right: 30, left: 90, bottom: 5 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              horizontal={true} 
              opacity={0.2} 
              stroke="var(--grid-color, rgba(155, 155, 155, 0.3))" 
            />
            <XAxis 
              type="number" 
              domain={[0, 100]}
              tick={{ fill: 'var(--tick-color, #666)' }}
            />
            <YAxis 
              type="category" 
              dataKey="name" 
              width={80}
              tick={{ fill: 'var(--tick-color, #666)' }}
            />
            <Tooltip 
              formatter={(value) => [`${value}%`, '完成度']}
              labelFormatter={(label) => `${label} (${dataIntegrationData.find(item => item.name === label).count}個)`}
              contentStyle={{
                backgroundColor: 'var(--tooltip-bg, rgba(255, 255, 255, 0.95))',
                borderColor: 'var(--tooltip-border, #ddd)',
                color: 'var(--tooltip-text, #333)'
              }}
            />
            <Bar 
              dataKey="complete" 
              fill="#9b87f5" 
              radius={[0, 4, 4, 0]}
              minPointSize={2}
            />
          </BarChart>
        </ResponsiveContainer>
      );
    } else if (chartType === "area") {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={opportunityData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              opacity={0.2} 
              stroke="var(--grid-color, rgba(155, 155, 155, 0.3))" 
            />
            <XAxis 
              dataKey="month" 
              tick={{ fill: 'var(--tick-color, #666)' }}
            />
            <YAxis hide />
            <Tooltip 
              formatter={(value) => [`$${Number(value).toLocaleString()}`, '表現']}
              contentStyle={{
                backgroundColor: 'var(--tooltip-bg, rgba(255, 255, 255, 0.95))',
                borderColor: 'var(--tooltip-border, #ddd)',
                color: 'var(--tooltip-text, #333)'
              }}
            />
            <Area 
              type="monotone" 
              dataKey="historical" 
              stroke="#8884d8" 
              fillOpacity={0.3}
              fill="url(#colorHistorical)" 
              name="歷史表現"
            />
            <Area 
              type="monotone" 
              dataKey="predicted" 
              stroke="#82ca9d" 
              fillOpacity={0.3}
              fill="url(#colorPredicted)" 
              name="AI預測"
              strokeDasharray="5 5"
            />
            <defs>
              <linearGradient id="colorHistorical" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      );
    } else if (chartType === "line") {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={portfolioData}>
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              opacity={0.2} 
              stroke="var(--grid-color, rgba(155, 155, 155, 0.3))" 
            />
            <XAxis 
              dataKey="date" 
              fontSize={10} 
              tickLine={false} 
              axisLine={false}
              tick={{ fill: 'var(--tick-color, #666)' }}
            />
            <YAxis hide />
            <Tooltip 
              formatter={(value) => [`$${Number(value).toLocaleString()}`, '表現']}
              cursor={{fill: 'rgba(155, 135, 245, 0.1)'}}
              contentStyle={{
                backgroundColor: 'var(--tooltip-bg, rgba(255, 255, 255, 0.95))',
                borderColor: 'var(--tooltip-border, #ddd)',
                color: 'var(--tooltip-text, #333)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#9b87f5" 
              dot={false}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      );
    } else if (chartType === "alt-assets") {
      return (
        <div className="flex flex-col items-center">
          <div className="w-full h-60 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Watch className="h-5 w-5 mr-2 text-blue-500" />
                <h3 className="font-bold text-lg dark:text-white">Tracking Alternative Assets</h3>
              </div>
              <div className="font-bold text-2xl dark:text-white">$8,200</div>
            </div>
            <div className="relative h-[140px]">
              {/* 3D-style Bar Chart */}
              <div className="flex items-end h-full relative pt-4">
                <div className="relative flex items-end">
                  <div className="mx-4 w-16 bg-blue-400 dark:bg-blue-500 rounded-t-lg h-[80px] z-10 shadow-lg transform transition-all relative">
                    <div className="absolute -top-6 text-xs font-semibold text-gray-600 dark:text-gray-300 w-full text-center">1M</div>
                    <div className="absolute -bottom-6 text-xs font-semibold text-gray-600 dark:text-gray-300 w-full text-center">$7,800</div>
                  </div>
                  <div className="absolute w-16 h-[20px] bg-blue-400/40 dark:bg-blue-500/40 transform skew-x-[30deg] origin-top-left left-[72px] bottom-0"></div>
                </div>
                
                <div className="relative flex items-end ml-8">
                  <div className="mx-4 w-16 bg-blue-400 dark:bg-blue-500 rounded-t-lg h-[100px] z-10 shadow-lg transform transition-all relative">
                    <div className="absolute -top-6 text-xs font-semibold text-gray-600 dark:text-gray-300 w-full text-center">2M</div>
                    <div className="absolute -bottom-6 text-xs font-semibold text-gray-600 dark:text-gray-300 w-full text-center">$7,950</div>
                  </div>
                  <div className="absolute w-16 h-[20px] bg-blue-400/40 dark:bg-blue-500/40 transform skew-x-[30deg] origin-top-left left-[72px] bottom-0"></div>
                </div>
                
                <div className="relative flex items-end ml-8">
                  <div className="mx-4 w-16 bg-blue-400 dark:bg-blue-500 rounded-t-lg h-[120px] z-10 shadow-lg transform transition-all relative">
                    <div className="absolute -top-6 text-xs font-semibold text-gray-600 dark:text-gray-300 w-full text-center">3M</div>
                    <div className="absolute -bottom-6 text-xs font-semibold text-gray-600 dark:text-gray-300 w-full text-center">$8,100</div>
                  </div>
                  <div className="absolute w-16 h-[20px] bg-blue-400/40 dark:bg-blue-500/40 transform skew-x-[30deg] origin-top-left left-[72px] bottom-0"></div>
                </div>
                
                <div className="relative flex items-end ml-8">
                  <div className="mx-4 w-16 bg-blue-400 dark:bg-blue-500 rounded-t-lg h-[140px] z-10 shadow-lg transform transition-all relative">
                    <div className="absolute -top-6 text-xs font-semibold text-gray-600 dark:text-gray-300 w-full text-center">4M</div>
                    <div className="absolute -bottom-6 text-xs font-semibold text-gray-600 dark:text-gray-300 w-full text-center">$8,200</div>
                  </div>
                  <div className="absolute w-16 h-[20px] bg-blue-400/40 dark:bg-blue-500/40 transform skew-x-[30deg] origin-top-left left-[72px] bottom-0"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl p-4 text-left">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mr-4">
              <Watch className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h4 className="font-medium dark:text-white">Watch</h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">Track the price of your watch and other assets</p>
            </div>
          </div>
        </div>
      );
    } else {
      // Advanced AI visualization
      return (
        <div className="p-2 bg-quantaryx-softblue/20 dark:bg-purple-900/20 rounded-lg h-full flex flex-col justify-center items-center">
          <Brain className="h-12 w-12 text-quantaryx-purple mb-2 animate-pulse" />
          <div className="text-center">
            <p className="font-medium text-quantaryx-darkblue dark:text-gray-200">AI 正在分析您的投資組合</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">發現潛在機會與風險...</p>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="bg-grid absolute inset-0 opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left flex flex-col justify-center">
            <div className="opacity-0 animate-fade-in">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-quantaryx-softblue dark:bg-purple-900/40 text-quantaryx-darkblue dark:text-gray-200 mb-6">
                <Brain className="h-4 w-4 mr-1.5" />
                <span>新一代AI財富管理系統</span>
              </div>
            </div>
            
            <h1 className="opacity-0 animate-fade-in animate-delay-200 text-4xl tracking-tight font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">用人工智能</span>
              <span className="block text-gradient">重新定義資產掌控</span>
            </h1>
            
            <p className="opacity-0 animate-fade-in animate-delay-300 mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              QuantaryX 整合AI深度學習、知識圖譜與自然語言處理技術，為高資產個人與專業投資者提供全方位的資產可視化、智能決策與自動化執行平台。
            </p>
            
            <div className="opacity-0 animate-fade-in animate-delay-400 mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-quantaryx-purple hover:bg-quantaryx-purple/90 text-white px-8 py-6 text-lg">
                  開始使用
                </Button>
                <Button 
                  onClick={() => scrollToSection('products')}
                  variant="outline" 
                  className="border-quantaryx-purple text-quantaryx-purple dark:text-quantaryx-purple dark:border-quantaryx-purple hover:bg-quantaryx-purple/10 px-8 py-6 text-lg">
                  了解更多
                </Button>
              </div>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                專為高資產個人與專業投資者設計
              </p>
            </div>

            <div className="opacity-0 animate-fade-in animate-delay-500 mt-6 grid grid-cols-2 gap-4">
              {AIFeatures.map((feature, index) => (
                <button 
                  key={index}
                  className={`p-3 rounded-lg text-left transition-all ${
                    activeFeature === index 
                      ? "bg-quantaryx-purple/10 dark:bg-purple-700/30 border border-quantaryx-purple/30 dark:border-purple-500/50" 
                      : "hover:bg-gray-50 dark:hover:bg-gray-800 border border-transparent"
                  }`}
                  onClick={() => handleFeatureClick(index)}
                >
                  <div className="flex items-start">
                    <div className={`p-2 rounded-md ${
                      activeFeature === index ? "bg-quantaryx-purple text-white" : "bg-gray-100 dark:bg-gray-700"
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium dark:text-white">{feature.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{feature.description}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-700 mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
                <div className="w-full h-auto bg-gradient-to-br from-quantaryx-purple/50 to-quantaryx-brightblue/30 dark:from-purple-900/50 dark:to-blue-900/30 rounded-lg p-6">
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-xl animate-float p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-quantaryx-green rounded-full"></div>
                        <span className="text-sm font-medium dark:text-white">資產總覽</span>
                      </div>
                      <span className="text-2xl font-bold dark:text-white">$5.43M</span>
                    </div>

                    {showDetailedView && (
                      <div className="h-[360px] w-full">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium dark:text-white">
                            {AIFeatures[activeFeature].title} - 詳細分析
                          </h4>
                          <button 
                            onClick={toggleDetailedView}
                            className="text-xs text-gray-500 dark:text-gray-400 hover:text-quantaryx-purple dark:hover:text-quantaryx-purple"
                          >
                            返回
                          </button>
                        </div>
                        {renderChart(
                          activeFeature === 0 ? "bar" : 
                          activeFeature === 1 ? "scatter" : 
                          activeFeature === 2 ? "bar-progress" : 
                          "area"
                        )}
                      </div>
                    )}

                    {showAlternativeAssets && (
                      <div className="h-[360px] w-full">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium dark:text-white">
                            另類資產追蹤
                          </h4>
                          <button 
                            onClick={toggleAlternativeAssets}
                            className="text-xs text-gray-500 dark:text-gray-400 hover:text-quantaryx-purple dark:hover:text-quantaryx-purple"
                          >
                            返回
                          </button>
                        </div>
                        {renderChart("alt-assets")}
                      </div>
                    )}

                    {!showDetailedView && !showAlternativeAssets && (
                      <div className="h-60 w-full">
                        <style jsx>{`
                          :root {
                            --grid-color: rgba(155, 155, 155, 0.3);
                            --tick-color: #666;
                            --tooltip-bg: rgba(255, 255, 255, 0.95);
                            --tooltip-border: #ddd;
                            --tooltip-text: #333;
                            --bar-top-color: #9b87f5;
                            --bar-bottom-color: #c2b5fa;
                          }
                          .dark {
                            --grid-color: rgba(155, 155, 155, 0.2);
                            --tick-color: #ddd;
                            --tooltip-bg: rgba(32, 32, 40, 0.95);
                            --tooltip-border: #555;
                            --tooltip-text: #fff;
                            --bar-top-color: #9b87f5;
                            --bar-bottom-color: #856df2;
                          }
                        `}</style>
                        {renderChart(AIFeatures[activeFeature].chartType)}
                      </div>
                    )}
                    
                    {showAIInsight && !showDetailedView && !showAlternativeAssets && (
                      <div className="mt-3 p-3 bg-quantaryx-softblue/20 dark:bg-purple-900/20 rounded-lg border border-quantaryx-softblue/30 dark:border-purple-700/30 animate-fade-in text-left">
                        <div className="flex items-center mb-1">
                          <Brain className="h-4 w-4 text-quantaryx-purple mr-2" />
                          <span className="text-sm font-medium text-quantaryx-darkblue dark:text-gray-200">AI 智能洞察</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {AIFeatures[activeFeature].insight}
                        </p>
                      </div>
                    )}

                    {!showDetailedView && !showAlternativeAssets && (
                      <div className="flex items-center justify-between mt-4">
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          onClick={toggleDetailedView}
                        >
                          查看詳細分析
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-xs"
                          onClick={toggleAlternativeAssets}
                        >
                          查看另類資產
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Advanced AI Features Section - Updated with Carousel */}
      <div className="bg-gray-50 dark:bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gradient mb-4">
              QuantaryX 核心 AI 功能
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              滑動卡片探索我們如何運用人工智能重新定義財富管理體驗
            </p>
          </div>
          
          {/* Feature Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {advancedFeatures.map((feature) => (
                <CarouselItem key={feature.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card 
                      className={`bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer border h-full ${
                        selectedFeature?.id === feature.id 
                          ? 'border-quantaryx-purple dark:border-purple-500 scale-[1.02]' 
                          : 'border-gray-100 dark:border-gray-700'
                      }`}
                      onClick={() => handleAdvancedFeatureClick(feature)}
                    >
                      <CardHeader>
                        <div className="flex items-center mb-2">
                          {feature.icon}
                          <CardTitle className="ml-3 text-lg dark:text-white">{feature.title}</CardTitle>
                        </div>
                        <CardDescription className="dark:text-gray-400">{feature.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{feature.details}</p>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-quantaryx-purple mt-2 px-0"
                          onClick={() => handleAdvancedFeatureClick(feature)}
                        >
                          了解更多 <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
              <CarouselNext className="relative static right-0 translate-y-0 ml-2" />
            </div>
          </Carousel>
          
          {/* Selected Feature Detail */}
          {selectedFeature && (
            <div className="mt-10 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  {selectedFeature.icon}
                  <h3 className="ml-3 font-bold text-xl dark:text-white">{selectedFeature.title}</h3>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedFeature(null)}
                  className="text-gray-500 dark:text-gray-400"
                >
                  關閉
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 dark:text-white">功能詳情</h4>
                    <p className="text-gray-700 dark:text-gray-300">{selectedFeature.details}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 flex items-center dark:text-white">
                      <span className="inline-block w-2 h-2 bg-quantaryx-purple rounded-full mr-2"></span>
                      獲取優勢
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm border-l-2 border-quantaryx-purple/30 dark:border-purple-500/30 pl-3 py-1">
                      {selectedFeature.uniqueFeature}
                    </p>
                  </div>
                  
                  <h4 className="font-medium mb-3 flex items-center dark:text-white">
                    <Brain className="h-4 w-4 mr-2 text-quantaryx-purple" />
                    AI 驅動能力
                  </h4>
                  
                  <ScrollArea className="h-[180px] border rounded p-2 dark:border-gray-700">
                    <ul className="space-y-2">
                      {selectedFeature.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="h-5 w-5 rounded-full flex items-center justify-center mt-0.5 mr-2 bg-quantaryx-purple/10 dark:bg-purple-700/30 text-quantaryx-purple">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-3 w-3">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span className="text-sm dark:text-gray-300">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
                
                <div>
                  <div className="h-64 bg-gray-50 dark:bg-gray-900 rounded-lg p-4 mb-4">
                    <style jsx>{`
                      :root {
                        --grid-color: rgba(155, 155, 155, 0.3);
                        --tick-color: #666;
                        --tooltip-bg: rgba(255, 255, 255, 0.95);
                        --tooltip-border: #ddd;
                        --tooltip-text: #333;
                        --bar-top-color: #9b87f5;
                        --bar-bottom-color: #c2b5fa;
                      }
                      .dark {
                        --grid-color: rgba(155, 155, 155, 0.2);
                        --tick-color: #ddd;
                        --tooltip-bg: rgba(32, 32, 40, 0.95);
                        --tooltip-border: #555;
                        --tooltip-text: #fff;
                        --bar-top-color: #9b87f5;
                        --bar-bottom-color: #856df2;
                      }
                    `}</style>
                    {renderChart(selectedFeature.chartType)}
                  </div>
                  
                  <div className="mt-3 p-4 bg-quantaryx-softblue/20 dark:bg-purple-900/20 rounded-lg border border-quantaryx-softblue/30 dark:border-purple-700/30 animate-fade-in">
                    <div className="flex items-center mb-2">
                      <Brain className="h-4 w-4 text-quantaryx-purple mr-2" />
                      <span className="text-sm font-medium text-quantaryx-darkblue dark:text-gray-200">AI 智能洞察</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {selectedFeature.aiInsight}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;