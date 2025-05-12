import React, { createContext, useContext, useState, useEffect } from 'react';

// Define available languages
type Language = 'zh-TW' | 'en';

// Context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
};

// Create the context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object
const translations = {
  'zh-TW': {
    // Navbar
    'nav.products': '產品',
    'nav.vision': '願景',
    'nav.investors': '投資者',
    'nav.contact': '聯繫我們',
    'nav.requestDemo': '請求演示',
    
    // Hero
    'hero.badge': '新一代AI財富管理系統',
    'hero.title1': '用人工智能',
    'hero.title2': '重新定義資產掌控',
    'hero.description': 'QuantaryX 整合AI深度學習、知識圖譜與自然語言處理技術，為高資產個人與專業投資者提供全方位的資產可視化、智能決策與自動化執行平台。',
    'hero.cta.start': '開始使用',
    'hero.cta.learnMore': '了解更多',
    'hero.designedFor': '專為高資產個人與專業投資者設計',
    'hero.assetOverview': '資產總覽',
    'hero.aiInsight': 'AI 智能洞察',
    'hero.aiFeature.analysis': '智慧資產分析',
    'hero.aiFeature.analysis.desc': 'AI強化的資產淨值趨勢預測與風險識別',
    'hero.aiFeature.optimization': '自動投資優化',
    'hero.aiFeature.optimization.desc': '基於市場行為的AI驅動投資策略調整',
    'hero.aiFeature.integration': '智能資料整合',
    'hero.aiFeature.integration.desc': '多源財務數據自動解析與關聯構建',
    'hero.aiFeature.opportunity': '投資機會識別',
    'hero.aiFeature.opportunity.desc': 'AI篩選高價值投資標的與市場時機',
    'hero.aiInsight.analysis': '分析顯示您的資產在8月達到高峰，建議關注流動性分配以優化年底稅務籌劃。',
    'hero.aiInsight.optimization': '根據您的風險偏好與市場波動，AI推薦增加10%的防禦性資產以平衡投資組合。',
    'hero.aiInsight.integration': '系統已自動整合12個金融機構的資料，並識別出3個重複計算的資產項目。',
    'hero.aiInsight.opportunity': 'AI檢測到5檔符合您投資風格的高潛力標的，點擊查看詳細分析報告。',
    'hero.detailedView.title': '詳細分析',
    'hero.detailedView.back': '返回',
    'hero.altAssets.title': '另類資產追蹤',
    'hero.altAssets.back': '返回',
    'hero.altAssets.description': '追蹤您的高價值收藏品、古董、藝術品和其他非傳統投資的估值和表現。AI定期從市場數據更新估值。',
    'hero.coreFeatures': 'QuantaryX 核心 AI 功能',
    'hero.coreFeatures.desc': '滑動卡片探索我們如何運用人工智能重新定義財富管理體驗',
    'hero.detailInfo.analysis': 'AI分析顯示您的資產淨值在第三季度呈現成長趨勢，但有季節性波動。系統檢測到年底前可能需要調整流動性以應對稅務需求。',
    'hero.detailInfo.optimization': '根據當前市場情況和您的風險容忍度(中等)，AI系統建議將投資組合從「增長型」調整為更趋「平衡型」，增加防禦性資產比例10%。',
    'hero.detailInfo.integration': '資料整合引擎已成功連接12個金融機構的API，處理超過1,500份報表和交易記錄。AI已建立超過320個資產關聯和86個交易模式。',
    'hero.detailInfo.opportunity': '基於您過去交易模式和投資偏好，AI從超過5,000個投資標的中篩選出5檔高潛力標的。這些推薦結合了基本面分析、技術指標和情緒指標。',
    'hero.feature.details': '功能詳情',
    'hero.feature.advantage': '獲取優勢',
    'hero.feature.capabilities': 'AI 驅動能力',
    'hero.feature.close': '關閉',
    'hero.feature.learnMore': '了解更多',

    // Products
    'products.title': '四大產品矩陣',
    'products.subtitle': 'QuantaryX 為高資產個人與專業投資者打造的完整解決方案',
    'products.finora.title': 'Finora',
    'products.finora.subtitle': '讓你第一次完整掌握自己的財務人生。',
    'products.finora.feature1': 'AI 財務大腦：為每筆交易、每個資產建立關聯圖譜',
    'products.finora.feature2': '自動解析財務文件：報表、轉帳紀錄自動整合',
    'products.finora.feature3': '財務狀況即時可視化：多維度淨值走勢與分析',
    'products.finora.feature4': '資產變動 AI 預警系統：主動告知風險或錯誤配置',
    'products.wiselens.title': 'Wiselens',
    'products.wiselens.subtitle': '讓 AI 幫你組投資組合、幫你下單、還幫你換倉。',
    'products.wiselens.feature1': '即時投資儀表板：基金表現、NAV 一眼看清',
    'products.wiselens.feature2': 'AI ETF 組合推薦系統：根據畫像設計組合',
    'products.wiselens.feature3': '策略型自動交易引擎：支援訂投、止損、止盈',
    'products.wiselens.feature4': '一鍵下單 + API 串接券商/銀行：直接執行',
    'products.nurocrm.title': 'NuroCRM',
    'products.nurocrm.subtitle': '幫你記得每一個對話背後的意圖，預測下一步該說什麼。',
    'products.nurocrm.feature1': '語音/對話內容語意分析：識別情緒波動、偏好',
    'products.nurocrm.feature2': '智能行動建議與產品配對：生成潛在推薦',
    'products.nurocrm.feature3': '關係深度提醒系統：主動提醒適當跟進時機',
    'products.nurocrm.feature4': '會前摘要 & 客戶個性報告自動生成',
    'products.deallens.title': 'DealLens',
    'products.deallens.subtitle': '你不需要再 manually 看 50 份 pitch deck，AI 幫你挑出值得關注的。',
    'products.deallens.feature1': '自動抓取投資案源：從多渠道同步 PDF、Deck',
    'products.deallens.feature2': 'AI 摘要提煉與評級建議：提取關鍵資訊',
    'products.deallens.feature3': '自動比對歷史案例：找出相似投資案例',
    'products.deallens.feature4': '可操作的投資紀錄系統：完整節點管理',
    
    // Vision
    'vision.title': '我們的',
    'vision.title.colored': '願景',
    'vision.subtitle': 'QuantaryX 要做的，不是做一個好用的財務工具。我們要做的是一個讓未來的個人與機構能夠用 AI 認知資產、掌控財富、並擴張價值的操作平台。',
    'vision.understand.title': '認知資產',
    'vision.understand.desc': '運用 AI 深度學習技術，將分散的財務數據整合為完整的資產全景，讓您真正理解資金流向與投資狀況。',
    'vision.control.title': '掌控財富',
    'vision.control.desc': '透過自動化策略執行與智能風險監控，讓您在複雜多變的市場中始終保持主動掌控，而非被動應對。',
    'vision.expand.title': '擴張價值',
    'vision.expand.desc': '藉由 AI 驅動的投資決策支持與市場機會識別，協助您在適當時機擴展投資組合，實現長期價值增長。',
    
    // Investor Section
    'investor.title': '投資機會',
    'investor.subtitle': 'QuantaryX 正在尋求下一輪融資以加速產品開發與市場擴張。我們邀請有遠見的投資者成為重新定義資產管理未來的一部分。',
    'investor.benefit1': '革命性 AI 資產管理技術，重新定義財富管理市場',
    'investor.benefit2': '龐大高凈值個人與機構投資者客戶群體',
    'investor.benefit3': '全面產品矩陣，完整覆蓋資產管理全流程',
    'investor.benefit4': '高度可擴展的 SaaS 商業模式',
    'investor.benefit5': '專業團隊融合 AI、金融與產品開發經驗',
    'investor.button': '投資者資料包',
    'investor.market.title': '市場機會',
    'investor.market.hnwi': '全球高凈值個人市場',
    'investor.market.family': '家族辦公室管理資產',
    'investor.market.growth': '金融科技年增長率',
    'investor.market.potential': 'AI 財富管理市場潛力',
    
    // CTA
    'cta.title': '準備好',
    'cta.title2': '重新定義',
    'cta.title3': '你的資產管理方式了嗎？',
    'cta.subtitle': '無論您是高資產個人、家族辦公室、還是專業投資機構，QuantaryX 都能為您提供前所未有的資產掌控體驗。',
    'cta.demo': '請求產品演示',
    'cta.pricing': '了解定價',
    'cta.contact': '聯繫我們',
    'cta.name': '姓名',
    'cta.name.placeholder': '您的姓名',
    'cta.email': '電子郵件',
    'cta.email.placeholder': '您的電子郵件',
    'cta.type': '您是',
    'cta.type.individual': '高淨值個人',
    'cta.type.family': '家族辦公室',
    'cta.type.professional': '資產管理專業人士',
    'cta.type.investor': '投資者',
    'cta.type.other': '其他',
    'cta.message': '訊息',
    'cta.message.placeholder': '請告訴我們您的需求',
    'cta.submit': '提交',
    'cta.submitting': '提交中...',
    'cta.success.title': '表單提交成功',
    'cta.success.desc': '我們已收到您的信息，將盡快與您聯系',
    'cta.pricing.title': '定價資訊',
    'cta.pricing.desc': '正在為您準備最新的定價方案',
    
    // Footer
    'footer.description': 'AI驅動的個人與機構資產作業系統，重新定義資產理解與財富掌控方式。',
    'footer.products': '產品',
    'footer.company': '公司',
    'footer.about': '關於我們',
    'footer.team': '團隊',
    'footer.investors': '投資者關係',
    'footer.news': '新聞',
    'footer.contact': '聯繫我們',
    'footer.rights': '版權所有。',
    'footer.privacy': '隱私政策',
    'footer.terms': '服務條款',
    'footer.security': '安全性'
  },
  'en': {
    // Navbar
    'nav.products': 'Products',
    'nav.vision': 'Vision',
    'nav.investors': 'Investors',
    'nav.contact': 'Contact Us',
    'nav.requestDemo': 'Request Demo',
    
    // Hero
    'hero.badge': 'Next-Gen AI Wealth Management System',
    'hero.title1': 'Redefine Asset Control',
    'hero.title2': 'with Artificial Intelligence',
    'hero.description': 'QuantaryX integrates AI deep learning, knowledge graphs, and natural language processing to provide high-net-worth individuals and professional investors with comprehensive asset visualization, intelligent decision-making, and automated execution.',
    'hero.cta.start': 'Get Started',
    'hero.cta.learnMore': 'Learn More',
    'hero.designedFor': 'Designed for high-net-worth individuals and professional investors',
    'hero.assetOverview': 'Asset Overview',
    'hero.aiInsight': 'AI Insights',
    'hero.aiFeature.analysis': 'Smart Asset Analysis',
    'hero.aiFeature.analysis.desc': 'AI-enhanced net worth trend prediction and risk identification',
    'hero.aiFeature.optimization': 'Automated Investment Optimization',
    'hero.aiFeature.optimization.desc': 'AI-driven investment strategy adjustments based on market behaviors',
    'hero.aiFeature.integration': 'Intelligent Data Integration',
    'hero.aiFeature.integration.desc': 'Multi-source financial data parsing and relationship building',
    'hero.aiFeature.opportunity': 'Investment Opportunity Identification',
    'hero.aiFeature.opportunity.desc': 'AI screening of high-value investment targets and market timing',
    'hero.aiInsight.analysis': 'Analysis shows your assets peaked in August; consider adjusting liquidity allocation to optimize year-end tax planning.',
    'hero.aiInsight.optimization': 'Based on your risk preference and market volatility, AI recommends increasing defensive assets by 10% to balance your portfolio.',
    'hero.aiInsight.integration': 'The system has automatically integrated data from 12 financial institutions and identified 3 duplicated asset items.',
    'hero.aiInsight.opportunity': 'AI has detected 5 high-potential targets matching your investment style. Click to view detailed analysis reports.',
    'hero.detailedView.title': 'Detailed Analysis',
    'hero.detailedView.back': 'Back',
    'hero.altAssets.title': 'Alternative Assets Tracking',
    'hero.altAssets.back': 'Back',
    'hero.altAssets.description': 'Track the valuation and performance of your high-value collectibles, antiques, art, and other non-traditional investments. AI regularly updates valuations from market data.',
    'hero.coreFeatures': 'QuantaryX Core AI Features',
    'hero.coreFeatures.desc': 'Swipe cards to explore how we use artificial intelligence to redefine wealth management',
    'hero.detailInfo.analysis': 'AI analysis shows your net worth has a growth trend in Q3 but with seasonal fluctuations. The system detects potential need for liquidity adjustments for year-end tax requirements.',
    'hero.detailInfo.optimization': 'Based on current market conditions and your risk tolerance (medium), the AI system recommends adjusting your portfolio from "Growth" to more "Balanced," increasing defensive assets by 10%.',
    'hero.detailInfo.integration': 'The data integration engine has successfully connected to APIs from 12 financial institutions, processing over 1,500 statements and transaction records. AI has established over 320 asset relationships and 86 transaction patterns.',
    'hero.detailInfo.opportunity': 'Based on your past trading patterns and investment preferences, AI has filtered out 5 high-potential targets from over 5,000 investment options. These recommendations combine fundamental analysis, technical indicators, and sentiment indicators.',
    'hero.feature.details': 'Feature Details',
    'hero.feature.advantage': 'Advantages',
    'hero.feature.capabilities': 'AI-Driven Capabilities',
    'hero.feature.close': 'Close',
    'hero.feature.learnMore': 'Learn More',
    
    // Products
    'products.title': 'Four Product Suites',
    'products.subtitle': 'Complete solutions for high-net-worth individuals and professional investors',
    'products.finora.title': 'Finora',
    'products.finora.subtitle': 'Complete control over your financial life for the first time.',
    'products.finora.feature1': 'AI Financial Brain: Build relationship graphs for every transaction and asset',
    'products.finora.feature2': 'Automatic document parsing: Seamlessly integrate statements and transfers',
    'products.finora.feature3': 'Real-time financial visualization: Multi-dimensional net worth trends and analysis',
    'products.finora.feature4': 'Asset change AI alert system: Proactive risk and misallocation notifications',
    'products.wiselens.title': 'Wiselens',
    'products.wiselens.subtitle': 'Let AI build your portfolio, place orders, and rebalance your investments.',
    'products.wiselens.feature1': 'Real-time investment dashboard: Clear view of fund performance and NAV',
    'products.wiselens.feature2': 'AI ETF portfolio recommendation system: Custom portfolios based on profiles',
    'products.wiselens.feature3': 'Strategic automated trading engine: Support for subscriptions, stop-loss, take-profit',
    'products.wiselens.feature4': 'One-click orders + API integration with brokers/banks: Direct execution',
    'products.nurocrm.title': 'NuroCRM',
    'products.nurocrm.subtitle': 'Remembers the intent behind every conversation and predicts what to say next.',
    'products.nurocrm.feature1': 'Voice/conversation semantic analysis: Identify emotional shifts and preferences',
    'products.nurocrm.feature2': 'Intelligent action suggestions and product matching: Generate potential recommendations',
    'products.nurocrm.feature3': 'Relationship depth reminder system: Proactive reminders for timely follow-ups',
    'products.nurocrm.feature4': 'Auto-generation of pre-meeting summaries & client personality reports',
    'products.deallens.title': 'DealLens',
    'products.deallens.subtitle': 'No need to manually review 50 pitch decks, AI helps identify the ones worth attention.',
    'products.deallens.feature1': 'Automatic investment source tracking: Sync PDFs and decks from multiple channels',
    'products.deallens.feature2': 'AI summary extraction and rating recommendations: Extract key information',
    'products.deallens.feature3': 'Automatic historical case comparison: Find similar investment cases',
    'products.deallens.feature4': 'Actionable investment record system: Complete node management',
    
    // Vision
    'vision.title': 'Our',
    'vision.title.colored': 'Vision',
    'vision.subtitle': 'QuantaryX isn\'t just building a useful financial tool. We\'re creating an operating platform that enables individuals and institutions to perceive assets, control wealth, and expand value through AI.',
    'vision.understand.title': 'Perceive Assets',
    'vision.understand.desc': 'Using AI deep learning technologies to integrate scattered financial data into a complete asset panorama, enabling you to truly understand cash flows and investment conditions.',
    'vision.control.title': 'Control Wealth',
    'vision.control.desc': 'Through automated strategy execution and intelligent risk monitoring, maintain active control in complex and changing markets, rather than passive response.',
    'vision.expand.title': 'Expand Value',
    'vision.expand.desc': 'With AI-driven investment decision support and market opportunity identification, help you expand your portfolio at the right time to achieve long-term value growth.',
    
    // Investor Section
    'investor.title': 'Investment Opportunity',
    'investor.subtitle': 'QuantaryX is seeking the next round of funding to accelerate product development and market expansion. We invite visionary investors to become part of redefining the future of asset management.',
    'investor.benefit1': 'Revolutionary AI asset management technology redefining the wealth management market',
    'investor.benefit2': 'Vast client base of high-net-worth individuals and institutional investors',
    'investor.benefit3': 'Comprehensive product matrix covering the entire asset management process',
    'investor.benefit4': 'Highly scalable SaaS business model',
    'investor.benefit5': 'Professional team combining AI, finance, and product development experience',
    'investor.button': 'Investor Information Package',
    'investor.market.title': 'Market Opportunity',
    'investor.market.hnwi': 'Global HNWI Market',
    'investor.market.family': 'Family Office AUM',
    'investor.market.growth': 'Fintech Annual Growth',
    'investor.market.potential': 'AI Wealth Management Market',
    
    // CTA
    'cta.title': 'Ready to',
    'cta.title2': 'redefine',
    'cta.title3': 'your approach to asset management?',
    'cta.subtitle': 'Whether you\'re a high-net-worth individual, family office, or professional investment institution, QuantaryX can provide you with an unprecedented asset control experience.',
    'cta.demo': 'Request Product Demo',
    'cta.pricing': 'Pricing Information',
    'cta.contact': 'Contact Us',
    'cta.name': 'Name',
    'cta.name.placeholder': 'Your name',
    'cta.email': 'Email',
    'cta.email.placeholder': 'Your email',
    'cta.type': 'You are a',
    'cta.type.individual': 'High-net-worth Individual',
    'cta.type.family': 'Family Office',
    'cta.type.professional': 'Asset Management Professional',
    'cta.type.investor': 'Investor',
    'cta.type.other': 'Other',
    'cta.message': 'Message',
    'cta.message.placeholder': 'Please tell us about your needs',
    'cta.submit': 'Submit',
    'cta.submitting': 'Submitting...',
    'cta.success.title': 'Form Submitted Successfully',
    'cta.success.desc': 'We have received your message and will contact you soon',
    'cta.pricing.title': 'Pricing Information',
    'cta.pricing.desc': 'Preparing the latest pricing plans for you',
    
    // Footer
    'footer.description': 'AI-driven personal and institutional asset operating system, redefining how you understand assets and control wealth.',
    'footer.products': 'Products',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.team': 'Team',
    'footer.investors': 'Investor Relations',
    'footer.news': 'News',
    'footer.contact': 'Contact Us',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.security': 'Security'
  }
};

// Language provider component
export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Try to get saved language preference or default to Chinese
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'zh-TW';
  });

  // Function to translate keys
  const t = (key: string) => {
    return translations[language][key] || key;
  };

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    
    // Also update html lang attribute
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context;
};