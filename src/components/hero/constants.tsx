import React from 'react';
import { Brain, ChartBar, Database, Search, Briefcase, Activity, Repeat, ChartPie } from 'lucide-react';
import { FeatureItem } from './types';

export const advancedFeatures: FeatureItem[] = [
  {
    id: "wealth-overview",
    title: "財富總覽",
    titleEn: "Wealth Overview",
    icon: <ChartPie className="h-6 w-6 text-quantaryx-purple" />,
    description: "AI驅動的全方位財富儀表板",
    descriptionEn: "AI-driven comprehensive wealth dashboard",
    details: "我們的AI系統自動連接並分析您所有的資產數據，包括銀行賬戶、投資組合、房地產、私募股權和加密貨幣，以創建一個綜合性的財富儀表板。",
    detailsEn: "Our AI system automatically connects and analyzes all your asset data, including bank accounts, investment portfolios, real estate, private equity, and cryptocurrencies, to create a comprehensive wealth dashboard.",
    chartType: "pie",
    capabilities: [
      "資產類別自動分類與標記",
      "跨機構資產整合與同步",
      "AI異常檢測與風險警報",
      "預測性淨值變化趨勢分析"
    ],
    capabilitiesEn: [
      "Automatic asset class categorization and tagging",
      "Cross-institution asset integration and synchronization",
      "AI anomaly detection and risk alerts",
      "Predictive net worth change trend analysis"
    ],
    uniqueFeature: "我們與其他平台的最大區別是能夠自動處理非結構化金融文件 - 從銀行報表到投資備忘錄，AI系統都能提取關鍵數據並建立關聯。",
    uniqueFeatureEn: "Our major distinction from other platforms is the ability to automatically process unstructured financial documents - from bank statements to investment memoranda, our AI system extracts key data and establishes relationships.",
    aiInsight: "我們的AI能根據您的資產配置，預測未來12個月的現金流與流動性需求，確保您在需要資金時無需急售資產。",
    aiInsightEn: "Our AI can predict cash flow and liquidity requirements for the next 12 months based on your asset allocation, ensuring you won't need to liquidate assets urgently when funds are required."
  },
  {
    id: "alternative-investments",
    title: "另類投資總覽",
    titleEn: "Alternative Investment Overview",
    icon: <Briefcase className="h-6 w-6 text-quantaryx-purple" />,
    description: "私募、房地產、藝術品智能追蹤",
    descriptionEn: "Smart tracking of private equity, real estate, and art",
    details: "QuantaryX的AI系統能夠追蹤、分析和評估傳統上難以量化的另類投資，包括私募股權、房地產、收藏品和藝術品。",
    detailsEn: "QuantaryX's AI system can track, analyze, and evaluate alternative investments that are traditionally difficult to quantify, including private equity, real estate, collectibles, and artwork.",
    chartType: "pie",
    capabilities: [
      "非流動性資產估值AI模型",
      "私募投資表現追蹤引擎",
      "另類投資與公開市場相關性分析",
      "智能流動性預測與策略建議"
    ],
    capabilitiesEn: [
      "AI valuation models for illiquid assets",
      "Private investment performance tracking engine",
      "Alternative investment correlation analysis with public markets",
      "Intelligent liquidity prediction and strategy recommendations"
    ],
    uniqueFeature: "市場上唯一一個能夠為非上市資產建立動態估值模型的平台，整合多種估值方法並持續根據新信息更新估值。",
    uniqueFeatureEn: "The only platform in the market capable of creating dynamic valuation models for unlisted assets, integrating multiple valuation methodologies and continuously updating valuations based on new information.",
    aiInsight: "系統發現您的另類投資組合與特定經濟指標有85%的正相關性，可能會在經濟下行時遭受較大衝擊，建議增加對沖策略。",
    aiInsightEn: "The system has discovered that your alternative investment portfolio has an 85% positive correlation with specific economic indicators, potentially exposing it to significant impact during economic downturns. We recommend increasing hedging strategies."
  },
  {
    id: "real-time-tracking",
    title: "實時跟踪",
    titleEn: "Real-time Tracking",
    icon: <Activity className="h-6 w-6 text-quantaryx-purple" />,
    description: "市場波動即時更新與AI分析",
    descriptionEn: "Real-time updates on market volatility with AI analysis",
    details: "我們的AI系統不僅能實時追踪您的投資組合表現，還能智能分析市場波動對您資產的影響，並提供即時的見解和建議。",
    detailsEn: "Our AI system not only tracks your portfolio performance in real-time but also intelligently analyzes the impact of market fluctuations on your assets, providing immediate insights and recommendations.",
    chartType: "line",
    capabilities: [
      "實時市場數據與組合影響分析",
      "新聞事件與資產關聯性AI檢測",
      "投資組合實時風險評估",
      "情緒分析與市場趨勢預測"
    ],
    capabilitiesEn: [
      "Real-time market data and portfolio impact analysis",
      "AI detection of news events and asset correlations",
      "Real-time portfolio risk assessment",
      "Sentiment analysis and market trend prediction"
    ],
    uniqueFeature: "獨特的事件驅動監測系統，能夠識別新聞、社交媒體和市場數據中與您投資組合相關的信號，並計算可能的影響。",
    uniqueFeatureEn: "A unique event-driven monitoring system that can identify signals in news, social media, and market data related to your investment portfolio and calculate potential impacts.",
    aiInsight: "根據最新的市場數據和新聞分析，系統檢測到您持有的三檔科技股可能受到即將發布的監管政策影響，建議關注相關動態。",
    aiInsightEn: "Based on the latest market data and news analysis, the system has detected that three tech stocks in your portfolio may be affected by upcoming regulatory policies. We recommend monitoring these developments."
  },
  {
    id: "automated-trading",
    title: "自動化交易",
    titleEn: "Automated Trading",
    icon: <Repeat className="h-6 w-6 text-quantaryx-purple" />,
    description: "AI策略驅動的智能交易系統",
    descriptionEn: "AI strategy-driven intelligent trading system",
    details: "QuantaryX的AI交易系統能根據您的風險偏好和投資目標，自動執行交易策略，包括再平衡、止損和策略性進出場。",
    detailsEn: "QuantaryX's AI trading system can automatically execute trading strategies including rebalancing, stop-loss, and strategic entry/exit points based on your risk preferences and investment goals.",
    chartType: "bar",
    capabilities: [
      "智能再平衡與稅務優化交易",
      "動態止損/止盈策略執行",
      "多因子AI交易信號生成",
      "投資組合對沖自動調整"
    ],
    capabilitiesEn: [
      "Intelligent rebalancing and tax-optimized trading",
      "Dynamic stop-loss/take-profit strategy execution",
      "Multi-factor AI trading signal generation",
      "Automated portfolio hedge adjustments"
    ],
    uniqueFeature: "業界首創的稅務優化交易引擎，能夠在執行再平衡和調整時自動考慮稅務影響，最大化稅後收益。",
    uniqueFeatureEn: "Industry's first tax-optimization trading engine that automatically considers tax implications when executing rebalancing and adjustments, maximizing after-tax returns.",
    aiInsight: "系統分析顯示，採用AI自動化交易策略後，您的投資組合年化波動率降低了15%，同時保持了相近的收益率。",
    aiInsightEn: "System analysis shows that after adopting AI automated trading strategies, your portfolio's annualized volatility has decreased by 15% while maintaining similar returns."
  },
  {
    id: "full-ai",
    title: "全AI體驗",
    titleEn: "Full AI Experience",
    icon: <Brain className="h-6 w-6 text-quantaryx-purple" />,
    description: "全方位AI助手為您管理財富",
    descriptionEn: "Comprehensive AI assistant managing your wealth",
    details: "我們的AI財富助手能夠理解您的長期財務目標，並主動提供見解、建議和決策支持，讓財富管理變得前所未有的簡單和智能。",
    detailsEn: "Our AI wealth assistant can understand your long-term financial goals and proactively provide insights, recommendations, and decision support, making wealth management unprecedentedly simple and intelligent.",
    chartType: "advanced",
    capabilities: [
      "自然語言財務查詢系統",
      "智能決策推薦引擎",
      "跨資產類別關聯分析",
      "個性化財富目標追踪與調整"
    ],
    capabilitiesEn: [
      "Natural language financial query system",
      "Intelligent decision recommendation engine",
      "Cross-asset class correlation analysis",
      "Personalized wealth goal tracking and adjustment"
    ],
    uniqueFeature: "突破性的AI財富助手能夠通過自然語言對話了解您的財務目標和喜好，並隨著時間推移學習您的決策模式，提供越來越個性化的建議。",
    uniqueFeatureEn: "Breakthrough AI wealth assistant that understands your financial goals and preferences through natural language conversations, learning your decision patterns over time to provide increasingly personalized recommendations.",
    aiInsight: "基於您過去6個月的財務決策和目標設定，AI系統已建立了您的財務偏好模型，現在可以預測您對各類投資建議的接受程度達85%準確率。",
    aiInsightEn: "Based on your financial decisions and goal setting over the past 6 months, the AI system has built your financial preference model and can now predict your acceptance of various investment recommendations with 85% accuracy."
  }
];