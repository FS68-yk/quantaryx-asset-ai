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
import { useLanguage } from '@/context/LanguageContext';

// Monthly asset data
const monthlyAssetData = [
  { month: '1', value: 40 },
  { month: '2', value: 60 },
  { month: '3', value: 30 },
  { month: '4', value: 70 },
  { month: '5', value: 50 },
  { month: '6', value: 80 },
  { month: '7', value: 40 },
  { month: '8', value: 90 },
  { month: '9', value: 60 },
  { month: '10', value: 70 },
  { month: '11', value: 50 },
  { month: '12', value: 60 }
];

// Risk-reward data for investment optimization
const riskRewardData = [
  { name: 'Conservative', risk: 20, return: 30, size: 100 },
  { name: 'Balanced', risk: 45, return: 60, size: 150 },
  { name: 'Growth', risk: 70, return: 85, size: 200 },
  { name: 'Aggressive', risk: 95, return: 120, size: 120 }
];

// Asset allocation data
const assetAllocationData = [
  { name: 'Stocks', value: 35 },
  { name: 'Bonds', value: 20 },
  { name: 'Real Estate', value: 25 },
  { name: 'Alternative', value: 15 },
  { name: 'Cash', value: 5 }
];

// Data integration metrics
const dataIntegrationData = [
  { name: 'Bank Accounts', count: 8, complete: 100 },
  { name: 'Securities', count: 3, complete: 95 },
  { name: 'Real Estate', count: 4, complete: 80 },
  { name: 'Retirement', count: 2, complete: 90 },
  { name: 'Private Invest', count: 5, complete: 65 },
  { name: 'Insurance', count: 3, complete: 75 }
];

// Investment opportunity data
const opportunityData = [
  { month: '1', historical: 40, predicted: 42 },
  { month: '2', historical: 60, predicted: 63 },
  { month: '3', historical: 30, predicted: 32 },
  { month: '4', historical: 70, predicted: 75 },
  { month: '5', historical: 50, predicted: 52 },
  { month: '6', historical: 80, predicted: 86 },
  { month: '7', historical: 40, predicted: 42 },
  { month: '8', historical: 90, predicted: 94 },
  { month: '9', historical: 60, predicted: 64 },
  { month: '10', historical: 70, predicted: 74 },
  { month: '11', historical: 50, predicted: 52 },
  { month: '12', historical: 60, predicted: null }
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

// Alternative asset types for detail view
const altAssetTypes = [
  { name: "Watches", value: 28500, change: "+5.2%" },
  { name: "Art", value: 124000, change: "+2.8%" },
  { name: "Jewelry", value: 45200, change: "+1.7%" },
  { name: "Collectibles", value: 18600, change: "+8.3%" }
];

const COLORS = ['#9b87f5', '#33C3F0', '#FF8042', '#7E69AB', '#1EAEDB'];

const Hero = () => {
  const { t, language } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);
  const [showAIInsight, setShowAIInsight] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [showDetailedView, setShowDetailedView] = useState(false);
  const [showAlternativeAssets, setShowAlternativeAssets] = useState(false);

  // Localized AI Features
  const AIFeatures = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: t('hero.aiFeature.analysis'),
      description: t('hero.aiFeature.analysis.desc'),
      insight: t('hero.aiInsight.analysis'),
      chartType: "bar",
      detailInfo: t('hero.detailInfo.analysis')
    },
    {
      icon: <ChartBar className="h-5 w-5" />,
      title: t('hero.aiFeature.optimization'),
      description: t('hero.aiFeature.optimization.desc'),
      insight: t('hero.aiInsight.optimization'),
      chartType: "scatter",
      detailInfo: t('hero.detailInfo.optimization')
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: t('hero.aiFeature.integration'),
      description: t('hero.aiFeature.integration.desc'),
      insight: t('hero.aiInsight.integration'),
      chartType: "bar-progress",
      detailInfo: t('hero.detailInfo.integration')
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: t('hero.aiFeature.opportunity'),
      description: t('hero.aiFeature.opportunity.desc'),
      insight: t('hero.aiInsight.opportunity'),
      chartType: "area",
      detailInfo: t('hero.detailInfo.opportunity')
    }
  ];

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

  // Get the correct data based on the current language
  const getLocalizedData = (dataArray, keyField) => {
    if (language === 'en') {
      return dataArray;
    }
    
    // For Chinese, we need month names with 月 suffix
    if (keyField === 'month') {
      return dataArray.map(item => ({
        ...item,
        month: `${item.month}月`
      }));
    }
    
    return dataArray;
  };

  const renderChart = (chartType) => {
    if (chartType === "bar") {
      const data = getLocalizedData(monthlyAssetData, 'month');
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={20}>
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
              formatter={(value) => [`$${Number(value).toLocaleString()}`, language === 'en' ? 'Net Worth' : '淨值']}
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
      const data = riskRewardData.map(item => ({
        ...item,
        name: language === 'zh-TW' ? 
          (item.name === 'Conservative' ? '保守型' : 
           item.name === 'Balanced' ? '平衡型' : 
           item.name === 'Growth' ? '增長型' : 
           item.name === 'Aggressive' ? '激進型' : item.name) : item.name
      }));

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
              name={language === 'en' ? "Risk" : "風險"} 
              domain={[0, 100]}
              tick={{ fill: 'var(--tick-color, #666)' }}
              label={{ value: language === 'en' ? "Risk" : "風險", position: 'bottom', fill: 'var(--axis-label, #666)' }}
            />
            <YAxis 
              type="number" 
              dataKey="return" 
              name={language === 'en' ? "Return" : "報酬"} 
              domain={[0, 130]}
              tick={{ fill: 'var(--tick-color, #666)' }}
              label={{ value: language === 'en' ? "Return" : "報酬", angle: -90, position: 'left', fill: 'var(--axis-label, #666)' }}
            />
            <ZAxis type="number" dataKey="size" range={[50, 300]} />
            <Tooltip 
              formatter={(value, name) => {
                if (name === 'risk') return [`${value}%`, language === 'en' ? 'Risk' : '風險'];
                if (name === 'return') return [`${value}%`, language === 'en' ? 'Expected Return' : '預期報酬'];
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
              name={language === 'en' ? "Portfolio" : "投資組合"} 
              data={data} 
              fill="#9b87f5"
              strokeWidth={2}
            />
          </ScatterChart>
        </ResponsiveContainer>
      );
    } else if (chartType === "pie") {
      const data = assetAllocationData.map(item => ({
        ...item,
        name: language === 'zh-TW' ? 
          (item.name === 'Stocks' ? '股票' : 
           item.name === 'Bonds' ? '債券' : 
           item.name === 'Real Estate' ? '不動產' : 
           item.name === 'Alternative' ? '另類投資' : 
           item.name === 'Cash' ? '現金' : item.name) : item.name
      }));

      return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
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
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={COLORS[index % COLORS.length]} 
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}%`, language === 'en' ? 'Percentage' : '占比']}
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
      const data = dataIntegrationData.map(item => ({
        ...item,
        name: language === 'zh-TW' ? 
          (item.name === 'Bank Accounts' ? '銀行賬戶' : 
           item.name === 'Securities' ? '證券賬戶' : 
           item.name === 'Real Estate' ? '房地產' : 
           item.name === 'Retirement' ? '退休賬戶' : 
           item.name === 'Private Invest' ? '私募投資' : 
           item.name === 'Insurance' ? '保險產品' : item.name) : item.name
      }));

      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            layout="vertical"
            data={data}
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
              formatter={(value) => [`${value}%`, language === 'en' ? 'Completion' : '完成度']}
              labelFormatter={(label) => `${label} (${dataIntegrationData.find(item => item.name === label).count}${language === 'en' ? '' : '個'})`}
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
      const data = getLocalizedData(opportunityData, 'month');
      
      return (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
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
              formatter={(value) => [`$${Number(value).toLocaleString()}`, language === 'en' ? 'Performance' : '表現']}
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
              name={language === 'en' ? "Historical" : "歷史表現"}
            />
            <Area 
              type="monotone" 
              dataKey="predicted" 
              stroke="#82ca9d" 
              fillOpacity={0.3}
              fill="url(#colorPredicted)" 
              name={language === 'en' ? "AI Prediction" : "AI預測"}
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
              formatter={(value) => [`$${Number(value).toLocaleString()}`, language === 'en' ? 'Performance' : '表現']}
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
      const assets = altAssetTypes.map(item => ({
        ...item,
        name: language === 'zh-TW' ? 
          (item.name === 'Watches' ? '名表' : 
           item.name === 'Art' ? '藝術品' : 
           item.name === 'Jewelry' ? '珠寶' : 
           item.name === 'Collectibles' ? '收藏品' : item.name) : item.name
      }));

      return (
        <div className="flex flex-col space-y-4">
          <div className="w-full h-40 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg mb-2">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <Watch className="h-5 w-5 mr-2 text-blue-500" />
                <h3 className="font-bold text-lg dark:text-white">{t('hero.altAssets.title')}</h3>
              </div>
              <div className="font-bold text-2xl dark:text-white">$216,300</div>
            </div>
            <div className="relative h-[100px]">
              {/* 3D-style Bar Chart */}
              <div className="flex items-end h-full justify-center space-x-10">
                {altAssetsData.map((asset, index) => (
                  <div key={index} className="relative flex flex-col items-center">
                    <div className="mx-1 w-14 bg-blue-400 dark:bg-blue-500 rounded-t-lg shadow-lg transform transition-all" 
                         style={{height: `${asset.value / 100}px`}}>
                      <div className="absolute -bottom-6 text-xs font-semibold text-gray-600 dark:text-gray-300 w-full text-center">{asset.name}</div>
                      <div className="absolute -top-6 text-xs font-semibold text-gray-600 dark:text-gray-300 w-full text-center">${asset.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            {assets.map((asset, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-3 shadow flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  {index === 0 ? <Watch className="h-4 w-4 text-blue-500" /> : 
                   index === 1 ? <Activity className="h-4 w-4 text-purple-500" /> :
                   index === 2 ? <ChartPie className="h-4 w-4 text-green-500" /> : 
                   <Briefcase className="h-4 w-4 text-orange-500" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium dark:text-white">{asset.name}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">${asset.value.toLocaleString()}</span>
                    <span className="text-xs text-green-500">{asset.change}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      // Advanced AI visualization
      return (
        <div className="p-2 bg-quantaryx-softblue/20 dark:bg-purple-900/20 rounded-lg h-full flex flex-col justify-center items-center">
          <Brain className="h-12 w-12 text-quantaryx-purple mb-2 animate-pulse" />
          <div className="text-center">
            <p className="font-medium text-quantaryx-darkblue dark:text-gray-200">
              {language === 'en' ? 'AI is analyzing your portfolio' : 'AI 正在分析您的投資組合'}
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
              {language === 'en' ? 'Discovering potential opportunities and risks...' : '發現潛在機會與風險...'}
            </p>
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
                <span>{t('hero.badge')}</span>
              </div>
            </div>
            
            <h1 className="opacity-0 animate-fade-in animate-delay-200 text-4xl tracking-tight font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">{t('hero.title1')}</span>
              <span className="block text-gradient">{t('hero.title2')}</span>
            </h1>
            
            <p className="opacity-0 animate-fade-in animate-delay-300 mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              {t('hero.description')}
            </p>
            
            <div className="opacity-0 animate-fade-in animate-delay-400 mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-quantaryx-purple hover:bg-quantaryx-purple/90 text-white px-8 py-6 text-lg">
                  {t('hero.cta.start')}
                </Button>
                <Button 
                  onClick={() => scrollToSection('products')}
                  variant="outline" 
                  className="border-quantaryx-purple text-quantaryx-purple dark:text-quantaryx-purple dark:border-quantaryx-purple hover:bg-quantaryx-purple/10 px-8 py-6 text-lg">
                  {t('hero.cta.learnMore')}
                </Button>
              </div>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                {t('hero.designedFor')}
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
                        <span className="text-sm font-medium dark:text-white">{t('hero.assetOverview')}</span>
                      </div>
                      <span className="text-2xl font-bold dark:text-white">$5.43M</span>
                    </div>

                    {showDetailedView && (
                      <div className="h-[360px] w-full">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-sm font-medium dark:text-white">
                            {AIFeatures[activeFeature].title} - {t('hero.detailedView.title')}
                          </h4>
                          <button 
                            onClick={toggleDetailedView}
                            className="text-xs text-gray-500 dark:text-gray-400 hover:text-quantaryx-purple dark:hover:text-quantaryx-purple"
                          >
                            {t('hero.detailedView.back')}
                          </button>
                        </div>
                        <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-left mb-4">
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {AIFeatures[activeFeature].detailInfo}
                          </p>
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
                            {t('hero.altAssets.title')}
                          </h4>
                          <button 
                            onClick={toggleAlternativeAssets}
                            className="text-xs text-gray-500 dark:text-gray-400 hover:text-quantaryx-purple dark:hover:text-quantaryx-purple"
                          >
                            {t('hero.altAssets.back')}
                          </button>
                        </div>
                        <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-left mb-4">
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            {t('hero.altAssets.description')}
                          </p>
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
                          <span className="text-sm font-medium text-quantaryx-darkblue dark:text-gray-200">{t('hero.aiInsight')}</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {AIFeatures[activeFeature].insight}
                        </p>
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
              {t('hero.coreFeatures')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('hero.coreFeatures.desc')}
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
                          <CardTitle className="ml-3 text-lg dark:text-white">
                            {language === 'en' ? 
                              (feature.id === 'wealth-overview' ? 'Wealth Overview' :
                               feature.id === 'alternative-investments' ? 'Alternative Investments' :
                               feature.id === 'real-time-tracking' ? 'Real-time Tracking' :
                               feature.id === 'automated-trading' ? 'Automated Trading' :
                               feature.id === 'full-ai' ? 'Full AI Experience' :
                               feature.title) : 
                              feature.title
                            }
                          </CardTitle>
                        </div>
                        <CardDescription className="dark:text-gray-400">
                          {language === 'en' ? 
                            (feature.id === 'wealth-overview' ? 'AI-driven comprehensive wealth dashboard' :
                             feature.id === 'alternative-investments' ? 'Smart tracking of private equity, real estate, and art' :
                             feature.id === 'real-time-tracking' ? 'Instant market volatility updates with AI analysis' :
                             feature.id === 'automated-trading' ? 'AI strategy-driven intelligent trading system' :
                             feature.id === 'full-ai' ? 'Complete AI assistant for wealth management' :
                             feature.description) : 
                            feature.description
                          }
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                          {language === 'en' ? 
                            (feature.id === 'wealth-overview' ? 'Our AI system automatically connects and analyzes all your asset data to create a comprehensive wealth dashboard.' :
                             feature.id === 'alternative-investments' ? 'QuantaryX\'s AI system can track, analyze, and evaluate alternative investments that are traditionally difficult to quantify.' :
                             feature.id === 'real-time-tracking' ? 'Our AI system tracks your portfolio performance in real-time and provides instant insights and recommendations.' :
                             feature.id === 'automated-trading' ? 'QuantaryX\'s AI trading system can execute trading strategies automatically based on your risk preferences and investment goals.' :
                             feature.id === 'full-ai' ? 'Our AI wealth assistant understands your long-term financial goals and proactively provides insights, suggestions, and decision support.' :
                             feature.details) : 
                            feature.details
                          }
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-quantaryx-purple dark:text-purple-400 dark:hover:text-purple-300 mt-2 px-0"
                          onClick={() => handleAdvancedFeatureClick(feature)}
                        >
                          {t('hero.feature.learnMore')} <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="relative static left-0 translate-y-0 mr-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
              <CarouselNext className="relative static right-0 translate-y-0 ml-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
            </div>
          </Carousel>
          
          {/* Selected Feature Detail */}
          {selectedFeature && (
            <div className="mt-10 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 animate-fade-in">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  {selectedFeature.icon}
                  <h3 className="ml-3 font-bold text-xl dark:text-white">
                    {language === 'en' ? 
                      (selectedFeature.id === 'wealth-overview' ? 'Wealth Overview' :
                       selectedFeature.id === 'alternative-investments' ? 'Alternative Investments' :
                       selectedFeature.id === 'real-time-tracking' ? 'Real-time Tracking' :
                       selectedFeature.id === 'automated-trading' ? 'Automated Trading' :
                       selectedFeature.id === 'full-ai' ? 'Full AI Experience' :
                       selectedFeature.title) : 
                      selectedFeature.title
                    }
                  </h3>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedFeature(null)}
                  className="text-gray-500 dark:text-gray-400"
                >
                  {t('hero.feature.close')}
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 dark:text-white">{t('hero.feature.details')}</h4>
                    <p className="text-gray-700 dark:text-gray-300">
                      {language === 'en' ? 
                        (selectedFeature.id === 'wealth-overview' ? 'Our AI system automatically connects and analyzes all your asset data, including bank accounts, investment portfolios, real estate, private equity, and cryptocurrencies, to create a comprehensive wealth dashboard.' :
                         selectedFeature.id === 'alternative-investments' ? 'QuantaryX\'s AI system can track, analyze, and evaluate alternative investments that are traditionally difficult to quantify, including private equity, real estate, collectibles, and art.' :
                         selectedFeature.id === 'real-time-tracking' ? 'Our AI system not only tracks your portfolio performance in real-time but also intelligently analyzes how market volatility affects your assets, providing instant insights and recommendations.' :
                         selectedFeature.id === 'automated-trading' ? 'QuantaryX\'s AI trading system can automatically execute trading strategies based on your risk preferences and investment goals, including rebalancing, stop-loss, and strategic entry/exit.' :
                         selectedFeature.id === 'full-ai' ? 'Our AI wealth assistant understands your long-term financial goals and proactively provides insights, suggestions, and decision support, making wealth management unprecedentedly simple and intelligent.' :
                         selectedFeature.details) : 
                        selectedFeature.details
                      }
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 flex items-center dark:text-white">
                      <span className="inline-block w-2 h-2 bg-quantaryx-purple rounded-full mr-2"></span>
                      {t('hero.feature.advantage')}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm border-l-2 border-quantaryx-purple/30 dark:border-purple-500/30 pl-3 py-1">
                      {language === 'en' ? 
                        (selectedFeature.id === 'wealth-overview' ? 'Our biggest differentiator is the ability to automatically process unstructured financial documents - from bank statements to investment memoranda, the AI system can extract key data and establish relationships.' :
                         selectedFeature.id === 'alternative-investments' ? 'The only platform on the market that can build dynamic valuation models for unlisted assets, integrating multiple valuation methods and continuously updating valuations based on new information.' :
                         selectedFeature.id === 'real-time-tracking' ? 'Unique event-driven monitoring system that can identify signals in news, social media, and market data related to your portfolio and calculate potential impacts.' :
                         selectedFeature.id === 'automated-trading' ? 'Industry-first tax-optimized trading engine that automatically considers tax implications when executing rebalancing and adjustments to maximize after-tax returns.' :
                         selectedFeature.id === 'full-ai' ? 'Breakthrough AI wealth assistant that can understand your financial goals and preferences through natural language conversations and learn your decision patterns over time to provide increasingly personalized recommendations.' :
                         selectedFeature.uniqueFeature) : 
                        selectedFeature.uniqueFeature
                      }
                    </p>
                  </div>
                  
                  <h4 className="font-medium mb-3 flex items-center dark:text-white">
                    <Brain className="h-4 w-4 mr-2 text-quantaryx-purple" />
                    {t('hero.feature.capabilities')}
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
                          <span className="text-sm dark:text-gray-300">
                            {language === 'en' ? 
                              (selectedFeature.id === 'wealth-overview' && idx === 0 ? 'Automatic asset classification and tagging' :
                               selectedFeature.id === 'wealth-overview' && idx === 1 ? 'Cross-institution asset integration and synchronization' :
                               selectedFeature.id === 'wealth-overview' && idx === 2 ? 'AI anomaly detection and risk alerts' :
                               selectedFeature.id === 'wealth-overview' && idx === 3 ? 'Predictive net worth change trend analysis' :
                               
                               selectedFeature.id === 'alternative-investments' && idx === 0 ? 'Illiquid asset valuation AI models' :
                               selectedFeature.id === 'alternative-investments' && idx === 1 ? 'Private investment performance tracking engine' :
                               selectedFeature.id === 'alternative-investments' && idx === 2 ? 'Alternative investments and public market correlation analysis' :
                               selectedFeature.id === 'alternative-investments' && idx === 3 ? 'Intelligent liquidity forecasting and strategy recommendations' :
                               
                               selectedFeature.id === 'real-time-tracking' && idx === 0 ? 'Real-time market data and portfolio impact analysis' :
                               selectedFeature.id === 'real-time-tracking' && idx === 1 ? 'News events and asset correlation AI detection' :
                               selectedFeature.id === 'real-time-tracking' && idx === 2 ? 'Portfolio real-time risk assessment' :
                               selectedFeature.id === 'real-time-tracking' && idx === 3 ? 'Sentiment analysis and market trend prediction' :
                               
                               selectedFeature.id === 'automated-trading' && idx === 0 ? 'Smart rebalancing and tax-optimized trading' :
                               selectedFeature.id === 'automated-trading' && idx === 1 ? 'Dynamic stop-loss/take-profit strategy execution' :
                               selectedFeature.id === 'automated-trading' && idx === 2 ? 'Multi-factor AI trading signal generation' :
                               selectedFeature.id === 'automated-trading' && idx === 3 ? 'Portfolio hedging automatic adjustment' :
                               
                               selectedFeature.id === 'full-ai' && idx === 0 ? 'Natural language financial query system' :
                               selectedFeature.id === 'full-ai' && idx === 1 ? 'Intelligent decision recommendation engine' :
                               selectedFeature.id === 'full-ai' && idx === 2 ? 'Cross-asset class correlation analysis' :
                               selectedFeature.id === 'full-ai' && idx === 3 ? 'Personalized wealth goal tracking and adjustment' :
                               
                               capability) : 
                              capability
                            }
                          </span>
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
                      <span className="text-sm font-medium text-quantaryx-darkblue dark:text-gray-200">{t('hero.aiInsight')}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {language === 'en' ? 
                        (selectedFeature.id === 'wealth-overview' ? 'Our AI can predict your cash flow and liquidity needs for the next 12 months based on your asset allocation, ensuring you don\'t need to sell assets urgently when funds are needed.' :
                         selectedFeature.id === 'alternative-investments' ? 'The system has discovered that your alternative investment portfolio has an 85% positive correlation with specific economic indicators, which may cause a significant impact during economic downturns. Consider adding hedging strategies.' :
                         selectedFeature.id === 'real-time-tracking' ? 'Based on the latest market data and news analysis, the system has detected that three tech stocks you hold may be affected by upcoming regulatory policies. Recommend paying attention to related developments.' :
                         selectedFeature.id === 'automated-trading' ? 'Analysis shows that after adopting the AI automated trading strategy, your portfolio\'s annualized volatility has decreased by 15% while maintaining similar returns.' :
                         selectedFeature.id === 'full-ai' ? 'Based on your financial decisions and goal setting over the past 6 months, the AI system has built your financial preference model and can now predict your acceptance level for various investment suggestions with 85% accuracy.' :
                         selectedFeature.aiInsight) : 
                        selectedFeature.aiInsight
                      }
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