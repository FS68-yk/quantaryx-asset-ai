import React from 'react';
import { Brain, ChartBar, Database, Search, Briefcase, Activity, Repeat, ChartPie } from 'lucide-react';
import { FeatureItem } from './types';

export const advancedFeatures: FeatureItem[] = [
  {
    id: "wealth-overview",
    title: "財富總覽",
    titleEn: "Wealth Dashboard",
    icon: <ChartPie className="h-6 w-6 text-quantaryx-purple" />,
    description: "AI驅動的全方位財富儀表板",
    descriptionEn: "AI-powered wealth dashboard",
    details: "我們的AI系統自動連接並分析您所有的資產數據，包括銀行賬戶、投資組合、房地產、私募股權和加密貨幣，以創建一個綜合性的財富儀表板。",
    detailsEn: "Our AI connects and analyzes all your assets - from bank accounts to real estate, private equity, and crypto - creating a comprehensive view of your wealth.",
    chartType: "pie",
    capabilities: [
      "資產類別自動分類與標記",
      "跨機構資產整合與同步",
      "AI異常檢測與風險警報",
      "預測性淨值變化趨勢分析"
    ],
    capabilitiesEn: [
      "Automatic asset classification",
      "Cross-institution integration",
      "AI anomaly detection",
      "Predictive net worth analysis"
    ],
    uniqueFeature: "我們與其他平台的最大區別是能夠自動處理非結構化金融文件 - 從銀行報表到投資備忘錄，AI系統都能提取關鍵數據並建立關聯。",
    uniqueFeatureEn: "Our AI extracts data from unstructured financial documents - from bank statements to investment memos - creating relationships between all your financial elements.",
    aiInsight: "我們的AI能根據您的資產配置，預測未來12個月的現金流與流動性需求，確保您在需要資金時無需急售資產。",
    aiInsightEn: "We predict your next 12 months of cash flow needs based on your assets, ensuring you never need forced liquidations when funds are required."
  },
  {
    id: "alternative-investments",
    title: "另類投資總覽",
    titleEn: "Alternative Assets",
    icon: <Briefcase className="h-6 w-6 text-quantaryx-purple" />,
    description: "私募、房地產、藝術品智能追蹤",
    descriptionEn: "Smart tracking for private equity & real estate",
    details: "QuantaryX的AI系統能夠追蹤、分析和評估傳統上難以量化的另類投資，包括私募股權、房地產、收藏品和藝術品。",
    detailsEn: "Track, analyze and value hard-to-quantify alternative investments including private equity, real estate, collectibles and artwork.",
    chartType: "pie",
    capabilities: [
      "非流動性資產估值AI模型",
      "私募投資表現追蹤引擎",
      "另類投資與公開市場相關性分析",
      "智能流動性預測與策略建議"
    ],
    capabilitiesEn: [
      "AI valuation for illiquid assets",
      "Private investment tracking",
      "Public-private market correlation",
      "Liquidity forecasting"
    ],
    uniqueFeature: "市場上唯一一個能夠為非上市資產建立動態估值模型的平台，整合多種估值方法並持續根據新信息更新估值。",
    uniqueFeatureEn: "The only platform with dynamic valuation models for unlisted assets, continuously updating based on new market information.",
    aiInsight: "系統發現您的另類投資組合與特定經濟指標有85%的正相關性，可能會在經濟下行時遭受較大衝擊，建議增加對沖策略。",
    aiInsightEn: "Your alternatives portfolio has 85% correlation with economic indicators. We recommend adding hedging strategies to protect against downturns."
  },
  {
    id: "real-time-tracking",
    title: "實時跟踪",
    titleEn: "Live Tracking",
    icon: <Activity className="h-6 w-6 text-quantaryx-purple" />,
    description: "市場波動即時更新與AI分析",
    descriptionEn: "Real-time market impact analysis",
    details: "我們的AI系統不僅能實時追踪您的投資組合表現，還能智能分析市場波動對您資產的影響，並提供即時的見解和建議。",
    detailsEn: "Track performance in real-time with instant analysis of market volatility impact on your specific assets.",
    chartType: "line",
    capabilities: [
      "實時市場數據與組合影響分析",
      "新聞事件與資產關聯性AI檢測",
      "投資組合實時風險評估",
      "情緒分析與市場趨勢預測"
    ],
    capabilitiesEn: [
      "Real-time impact analysis",
      "News-asset correlation detection",
      "Portfolio risk assessment",
      "Sentiment analysis & trends"
    ],
    uniqueFeature: "獨特的事件驅動監測系統，能夠識別新聞、社交媒體和市場數據中與您投資組合相關的信號，並計算可能的影響。",
    uniqueFeatureEn: "Event-driven monitoring that identifies portfolio-relevant signals in news, social media and market data with impact calculations.",
    aiInsight: "根據最新的市場數據和新聞分析，系統檢測到您持有的三檔科技股可能受到即將發布的監管政策影響，建議關注相關動態。",
    aiInsightEn: "Based on news analysis, three tech stocks in your portfolio may be affected by upcoming regulatory changes. Monitoring advised."
  },
  {
    id: "automated-trading",
    title: "自動化交易",
    titleEn: "Auto-Trading",
    icon: <Repeat className="h-6 w-6 text-quantaryx-purple" />,
    description: "AI策略驅動的智能交易系統",
    descriptionEn: "AI-driven intelligent trading system",
    details: "QuantaryX的AI交易系統能根據您的風險偏好和投資目標，自動執行交易策略，包括再平衡、止損和策略性進出場。",
    detailsEn: "Execute trades automatically based on your risk profile and goals, including rebalancing, stop-loss and strategic timing.",
    chartType: "bar",
    capabilities: [
      "智能再平衡與稅務優化交易",
      "動態止損/止盈策略執行",
      "多因子AI交易信號生成",
      "投資組合對沖自動調整"
    ],
    capabilitiesEn: [
      "Tax-smart rebalancing",
      "Dynamic stop-loss execution",
      "Multi-factor signal generation",
      "Automated hedge adjustments"
    ],
    uniqueFeature: "業界首創的稅務優化交易引擎，能夠在執行再平衡和調整時自動考慮稅務影響，最大化稅後收益。",
    uniqueFeatureEn: "Industry-first tax-optimization engine that considers tax implications during rebalancing to maximize after-tax returns.",
    aiInsight: "系統分析顯示，採用AI自動化交易策略後，您的投資組合年化波動率降低了15%，同時保持了相近的收益率。",
    aiInsightEn: "Our analysis shows AI trading strategies reduced your portfolio volatility by 15% while maintaining similar returns."
  },
  {
    id: "full-ai",
    title: "全AI體驗",
    titleEn: "AI Assistant",
    icon: <Brain className="h-6 w-6 text-quantaryx-purple" />,
    description: "全方位AI助手為您管理財富",
    descriptionEn: "Your personal wealth AI assistant",
    details: "我們的AI財富助手能夠理解您的長期財務目標，並主動提供見解、建議和決策支持，讓財富管理變得前所未有的簡單和智能。",
    detailsEn: "Our AI understands your financial goals and provides proactive insights, making wealth management simple and intelligent.",
    chartType: "advanced",
    capabilities: [
      "自然語言財務查詢系統",
      "智能決策推薦引擎",
      "跨資產類別關聯分析",
      "個性化財富目標追踪與調整"
    ],
    capabilitiesEn: [
      "Natural language queries",
      "Decision recommendations",
      "Cross-asset correlation analysis",
      "Personalized goal tracking"
    ],
    uniqueFeature: "突破性的AI財富助手能夠通過自然語言對話了解您的財務目標和喜好，並隨著時間推移學習您的決策模式，提供越來越個性化的建議。",
    uniqueFeatureEn: "Our AI assistant learns your financial preferences through natural language, becoming more personalized with each interaction.",
    aiInsight: "基於您過去6個月的財務決策和目標設定，AI系統已建立了您的財務偏好模型，現在可以預測您對各類投資建議的接受程度達85%準確率。",
    aiInsightEn: "Based on 6 months of decisions, our AI predicts your investment preferences with 85% accuracy, delivering highly targeted recommendations."
  }
];