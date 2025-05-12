import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, Activity, ChartBar, Database, Search, Briefcase, TrendingUp, BarChart3, ChartPie, Repeat } from 'lucide-react';
import { ChartContainer } from '@/components/ui/chart';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
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

const mockData = [
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
  { month: '12月', value: 60 },
];

const englishMockData = [
  { month: 'Jan', value: 40 },
  { month: 'Feb', value: 60 },
  { month: 'Mar', value: 30 },
  { month: 'Apr', value: 70 },
  { month: 'May', value: 50 },
  { month: 'Jun', value: 80 },
  { month: 'Jul', value: 40 },
  { month: 'Aug', value: 90 },
  { month: 'Sep', value: 60 },
  { month: 'Oct', value: 70 },
  { month: 'Nov', value: 50 },
  { month: 'Dec', value: 60 },
];

const pieData = [
  { name: '股票', value: 35 },
  { name: '債券', value: 20 },
  { name: '不動產', value: 25 },
  { name: '另類投資', value: 15 },
  { name: '現金', value: 5 },
];

const englishPieData = [
  { name: 'Stocks', value: 35 },
  { name: 'Bonds', value: 20 },
  { name: 'Real Estate', value: 25 },
  { name: 'Alt. Investments', value: 15 },
  { name: 'Cash', value: 5 },
];

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
  { date: '12/1', value: 180 },
];

const COLORS = ['#9b87f5', '#33C3F0', '#FF8042', '#7E69AB', '#1EAEDB'];

const Hero = () => {
  const { t, language } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(0);
  const [showAIInsight, setShowAIInsight] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const AIFeatures = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: t('hero.aiFeature.analysis'),
      description: t('hero.aiFeature.analysis.desc'),
      insight: "分析顯示您的資產分配過度集中在科技股(38%)，遠高於建議的20%上限。同時，您的緊急基金只有1.2個月支出，低於建議的6個月水平。AI建議立即優化這兩個區域以降低風險。",
      insightEn: "Analysis shows your asset allocation is overly concentrated in technology stocks (38%), far exceeding the recommended 20% maximum. Additionally, your emergency fund only covers 1.2 months of expenses, well below the recommended 6-month level. AI recommends immediate optimization in these two areas to reduce risk."
    },
    {
      icon: <ChartBar className="h-5 w-5" />,
      title: t('hero.aiFeature.optimization'),
      description: t('hero.aiFeature.optimization.desc'),
      insight: "根據您的退休目標和當前市場條件，AI預測您目前的儲蓄率每月需額外增加¥15,000才能實現目標。系統已為您設計了三種方案來彌補這個差距，包括資產重新配置、開源和節流策略。",
      insightEn: "Based on your retirement goals and current market conditions, AI predicts you need to increase your monthly savings by $2,100 to reach your target. The system has designed three plans to bridge this gap, including asset reallocation, income enhancement, and expense reduction strategies."
    },
    {
      icon: <Database className="h-5 w-5" />,
      title: t('hero.aiFeature.integration'),
      description: t('hero.aiFeature.integration.desc'),
      insight: "AI發現您的跨機構資產中有三張保單存在重複保障，每年多支出¥28,500。此外，您的兩個閒置銀行賬戶每年產生¥3,600的不必要管理費。系統建議合併這些賬戶並優化保險組合。",
      insightEn: "AI has identified three insurance policies with duplicate coverage across your institutional assets, resulting in an unnecessary annual expense of $4,000. Additionally, two idle bank accounts are generating $500 in unnecessary annual management fees. The system recommends consolidating these accounts and optimizing your insurance portfolio."
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: t('hero.aiFeature.opportunity'),
      description: t('hero.aiFeature.opportunity.desc'),
      insight: "基於您的投資偏好與風險承受度，AI已識別出三個特定領域的高潛力投資機會：1)低波動高收益債券基金 2)非美元計價的新興市場ETF 3)具有穩定股息增長的公用事業股。詳情請查看完整分析。",
      insightEn: "Based on your investment preferences and risk tolerance, AI has identified high-potential investment opportunities in three specific areas: 1) Low-volatility high-yield bond funds 2) Non-USD denominated emerging market ETFs 3) Utility stocks with stable dividend growth. See the full analysis for details."
    }
  ];

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    setShowAIInsight(true);
  };

  const handleAdvancedFeatureClick = (feature: any) => {
    setSelectedFeature(feature);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const renderChart = (chartType: string) => {
    if (chartType === 'pie') {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={language === 'en' ? englishPieData : pieData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}%`, language === 'en' ? 'Allocation' : '占比']}
            />
          </PieChart>
        </ResponsiveContainer>
      );
    } else if (chartType === 'line') {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={portfolioData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
            <XAxis dataKey="date" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis hide />
            <Tooltip 
              formatter={(value) => [`$${Number(value).toLocaleString()}`, language === 'en' ? 'Performance' : '表現']}
              cursor={{fill: 'rgba(155, 135, 245, 0.1)'}}
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
    } else if (chartType === 'advanced') {
      return (
        <div className="p-2 bg-quantaryx-softblue/20 dark:bg-purple-900/20 rounded-lg h-full flex flex-col justify-center items-center">
          <Brain className="h-12 w-12 text-quantaryx-purple mb-2 animate-pulse" />
          <div className="text-center">
            <p className="font-medium text-quantaryx-darkblue dark:text-gray-200">{language === 'en' ? 'AI is analyzing your portfolio' : 'AI 正在分析您的投資組合'}</p>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{language === 'en' ? 'Discovering potential opportunities and risks...' : '發現潛在機會與風險...'}</p>
          </div>
        </div>
      );
    } else {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={language === 'en' ? englishMockData : mockData} barSize={20}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
            <XAxis dataKey="month" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis hide />
            <Tooltip 
              formatter={(value) => [`$${Number(value).toLocaleString()}`, language === 'en' ? 'Net Worth' : '淨值']}
              cursor={{fill: 'rgba(155, 135, 245, 0.1)'}}
            />
            <Bar 
              dataKey="value" 
              fill="url(#colorGradient)" 
              radius={[4, 4, 0, 0]}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9b87f5" />
                <stop offset="100%" stopColor="#c2b5fa" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
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
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-quantaryx-softblue dark:bg-purple-900/50 text-quantaryx-darkblue dark:text-gray-200 mb-6">
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
                  className="border-quantaryx-purple text-quantaryx-purple hover:bg-quantaryx-purple/10 dark:border-purple-500 dark:text-purple-400 px-8 py-6 text-lg">
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

                    <div className="h-60 w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={language === 'en' ? englishMockData : mockData} barSize={20}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} opacity={0.2} />
                          <XAxis dataKey="month" fontSize={10} tickLine={false} axisLine={false} />
                          <YAxis hide />
                          <Tooltip 
                            formatter={(value) => [`$${Number(value).toLocaleString()}`, language === 'en' ? 'Net Worth' : '淨值']}
                            cursor={{fill: 'rgba(155, 135, 245, 0.1)'}}
                          />
                          <Bar 
                            dataKey="value" 
                            fill="url(#colorGradient)" 
                            radius={[4, 4, 0, 0]}
                          />
                          <defs>
                            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="#9b87f5" />
                              <stop offset="100%" stopColor="#c2b5fa" />
                            </linearGradient>
                          </defs>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    
                    {showAIInsight && (
                      <div className="mt-3 p-3 bg-quantaryx-softblue/20 dark:bg-purple-900/20 rounded-lg border border-quantaryx-softblue/30 dark:border-purple-700/30 animate-fade-in text-left">
                        <div className="flex items-center mb-2">
                          <Brain className="h-5 w-5 text-quantaryx-purple mr-2" />
                          <span className="text-sm font-medium text-quantaryx-darkblue dark:text-gray-200">{t('hero.aiInsight')}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {language === 'en' 
                            ? AIFeatures[activeFeature].insightEn 
                            : AIFeatures[activeFeature].insight
                          }
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
      <div className="bg-gray-50 dark:bg-gray-900 py-12">
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
                          ? 'border-quantaryx-purple scale-[1.02] dark:border-purple-500' 
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
                          className="text-quantaryx-purple dark:text-purple-400 mt-2 px-0"
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
                  {t('hero.feature.close')}
                </Button>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 dark:text-white">{t('hero.feature.details')}</h4>
                    <p className="text-gray-700 dark:text-gray-300">{selectedFeature.details}</p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 flex items-center dark:text-white">
                      <span className="inline-block w-2 h-2 bg-quantaryx-purple rounded-full mr-2"></span>
                      {t('hero.feature.advantage')}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm border-l-2 border-quantaryx-purple/30 pl-3 py-1">
                      {selectedFeature.uniqueFeature}
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
                          <span className="h-5 w-5 rounded-full flex items-center justify-center mt-0.5 mr-2 bg-quantaryx-purple/10 dark:bg-purple-700/30 text-quantaryx-purple dark:text-purple-400">
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
                  <div className="h-64 bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
                    {renderChart(selectedFeature.chartType)}
                  </div>
                  
                  <div className="mt-3 p-4 bg-quantaryx-softblue/20 dark:bg-purple-900/20 rounded-lg border border-quantaryx-softblue/30 dark:border-purple-700/30 animate-fade-in">
                    <div className="flex items-center mb-2">
                      <Brain className="h-4 w-4 text-quantaryx-purple mr-2" />
                      <span className="text-sm font-medium text-quantaryx-darkblue dark:text-gray-200">{t('hero.aiInsight')}</span>
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