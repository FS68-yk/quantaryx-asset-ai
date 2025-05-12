import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, Activity, ChartBar, Database, Search, Briefcase, TrendingUp, BarChart3, ChartPie, Repeat, Watch, Clock } from 'lucide-react';
import { ChartContainer } from '@/components/ui/chart';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
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
    description: "AI強化的資產淨值趨勢預測與風險識別"
  },
  {
    icon: <ChartBar className="h-5 w-5" />,
    title: "自動投資優化",
    description: "基於市場行為的AI驅動投資策略調整"
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "智能資料整合",
    description: "多源財務數據自動解析與關聯構建"
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "投資機會識別",
    description: "AI篩選高價值投資標的與市場時機"
  }
];

const Hero = () => {
  // ... rest of the component code ...
}

export default Hero;