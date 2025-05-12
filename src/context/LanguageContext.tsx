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
const translations: Record<Language, Record<string, string>> = {
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
    'hero.feature.details': '功能詳情',
    'hero.feature.advantage': '獲取優勢',
    'hero.feature.capabilities': 'AI 驅動能力',
    'hero.feature.close': '關閉',
    'hero.feature.learnMore': '了解更多',
    'hero.coreFeatures': 'QuantaryX 核心 AI 功能',
    'hero.coreFeatures.desc': '滑動卡片探索我們如何運用人工智能重新定義財富管理體驗',
    
    // Products
    'products.title': '四大產品矩陣',
    'products.subtitle': 'QuantaryX 為高資產個人與專業投資者打造的完整解決方案',
    'products.finora.subtitle': '讓你第一次完整掌握自己的財務人生。',
    'products.finora.feature1': 'AI 財務大腦：為每筆交易、每個資產建立關聯圖譜',
    'products.finora.feature2': '自動解析財務文件：報表、轉帳紀錄自動整合',
    'products.finora.feature3': '財務狀況即時可視化：多維度淨值走勢與分析',
    'products.finora.feature4': '資產變動 AI 預警系統：主動告知風險或錯誤配置',
    'products.wiselens.subtitle': '讓 AI 幫你組投資組合、幫你下單、還幫你換倉。',
    'products.wiselens.feature1': '即時投資儀表板：基金表現、NAV 一眼看清',
    'products.wiselens.feature2': 'AI ETF 組合推薦系統：根據畫像設計組合',
    'products.wiselens.feature3': '策略型自動交易引擎：支援訂投、止損、止盈',
    'products.wiselens.feature4': '一鍵下單 + API 串接券商/銀行：直接執行',
    'products.nurocrm.subtitle': '幫你記得每一個對話背後的意圖，預測下一步該說什麼。',
    'products.nurocrm.feature1': '語音/對話內容語意分析：識別情緒波動、偏好',
    'products.nurocrm.feature2': '智能行動建議與產品配對：生成潛在推薦',
    'products.nurocrm.feature3': '關係深度提醒系統：主動提醒適當跟進時機',
    'products.nurocrm.feature4': '會前摘要 & 客戶個性報告自動生成',
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
    'trillion': '兆美元',
    
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
    'nav.contact': 'Contact',
    'nav.requestDemo': 'Get Demo',
    
    // Hero
    'hero.badge': 'AI-Powered Wealth OS',
    'hero.title1': 'Command Your Assets',
    'hero.title2': 'with AI Precision',
    'hero.description': 'QuantaryX fuses AI with finance to give HNWIs and institutions complete visibility, control, and automation across all asset classes.',
    'hero.cta.start': 'Start Now',
    'hero.cta.learnMore': 'Learn More',
    'hero.designedFor': 'Built for wealth owners and professional investors',
    'hero.assetOverview': 'Asset Overview',
    'hero.aiInsight': 'AI Insight',
    'hero.aiFeature.analysis': 'Smart Asset Analysis',
    'hero.aiFeature.analysis.desc': 'Predictive net worth trends and risk detection',
    'hero.aiFeature.optimization': 'Portfolio Optimization',
    'hero.aiFeature.optimization.desc': 'Market-responsive investment strategy adjustments',
    'hero.aiFeature.integration': 'Data Integration',
    'hero.aiFeature.integration.desc': 'Auto-parse financial data across institutions',
    'hero.aiFeature.opportunity': 'Opportunity Finder',
    'hero.aiFeature.opportunity.desc': 'AI screening of high-value investment targets',
    'hero.aiInsight.analysis': 'Assets peaked in August. Adjust liquidity to optimize year-end tax planning.',
    'hero.aiInsight.optimization': 'Based on your risk profile, adding 10% defensive assets will balance your portfolio.',
    'hero.aiInsight.integration': 'System integrated 12 financial institutions and found 3 duplicated asset entries.',
    'hero.aiInsight.opportunity': '5 investment targets matching your style identified. View analysis.',
    'hero.feature.details': 'Details',
    'hero.feature.advantage': 'Benefits',
    'hero.feature.capabilities': 'AI Capabilities',
    'hero.feature.close': 'Close',
    'hero.feature.learnMore': 'View',
    'hero.coreFeatures': 'AI-Driven Wealth Management',
    'hero.coreFeatures.desc': 'Explore how our AI transforms wealth management',
    
    // Products
    'products.title': 'Product Suite',
    'products.subtitle': 'Complete solutions for wealth owners and professionals',
    'products.finora.subtitle': 'Full visibility of your financial universe.',
    'products.finora.feature1': 'AI Financial Brain maps every asset relationship',
    'products.finora.feature2': 'Auto-extract data from statements & transfers',
    'products.finora.feature3': 'Real-time multi-dimensional wealth tracking',
    'products.finora.feature4': 'Risk alerts and allocation optimization',
    'products.wiselens.subtitle': 'AI builds, trades and rebalances for you.',
    'products.wiselens.feature1': 'Live performance dashboard with instant NAV',
    'products.wiselens.feature2': 'Custom AI portfolio recommendations',
    'products.wiselens.feature3': 'Automated trading with stop-loss/take-profit',
    'products.wiselens.feature4': 'One-click order execution across institutions',
    'products.nurocrm.subtitle': 'Intelligent relationship management.',
    'products.nurocrm.feature1': 'Sentiment analysis from conversations',
    'products.nurocrm.feature2': 'Smart product matching & recommendations',
    'products.nurocrm.feature3': 'Relationship depth tracking & reminders',
    'products.nurocrm.feature4': 'Auto-generated client insights & summaries',
    'products.deallens.subtitle': 'AI deal analysis and opportunity finder.',
    'products.deallens.feature1': 'Multi-channel investment deal sourcing',
    'products.deallens.feature2': 'AI summary extraction and deal scoring',
    'products.deallens.feature3': 'Historical case comparison & pattern matching',
    'products.deallens.feature4': 'End-to-end investment tracking system',
    
    // Vision
    'vision.title': 'Our',
    'vision.title.colored': 'Vision',
    'vision.subtitle': 'QuantaryX is more than financial software. We're building the operating system that enables individuals and institutions to understand, control, and grow wealth with AI.',
    'vision.understand.title': 'Understand Assets',
    'vision.understand.desc': 'AI integrates scattered financial data into a complete asset view, revealing true cash flows and investment positions.',
    'vision.control.title': 'Control Wealth',
    'vision.control.desc': 'Automated execution and real-time monitoring give you active control in volatile markets.',
    'vision.expand.title': 'Grow Value',
    'vision.expand.desc': 'AI-powered decision support identifies opportunities precisely when you need them for long-term growth.',
    
    // Investor Section
    'investor.title': 'Investment Opportunity',
    'investor.subtitle': 'QuantaryX is raising capital to accelerate growth. Join visionary investors redefining wealth management.',
    'investor.benefit1': 'Revolutionary AI wealth management platform',
    'investor.benefit2': 'Large addressable HNWI and institutional market',
    'investor.benefit3': 'Complete product suite covering the full cycle',
    'investor.benefit4': 'Highly scalable SaaS business model',
    'investor.benefit5': 'Expert team blending AI, finance and product',
    'investor.button': 'Investor Package',
    'investor.market.title': 'Market Size',
    'investor.market.hnwi': 'Global HNWI Market',
    'investor.market.family': 'Family Office AUM',
    'investor.market.growth': 'Fintech Growth Rate',
    'investor.market.potential': 'AI Wealth Management',
    'trillion': 'trillion',
    
    // CTA
    'cta.title': 'Ready to',
    'cta.title2': 'transform',
    'cta.title3': 'your wealth management?',
    'cta.subtitle': 'Whether you manage personal, family, or institutional assets, QuantaryX delivers unprecedented control and insight.',
    'cta.demo': 'Request Demo',
    'cta.pricing': 'Pricing',
    'cta.contact': 'Contact Us',
    'cta.name': 'Name',
    'cta.name.placeholder': 'Your name',
    'cta.email': 'Email',
    'cta.email.placeholder': 'Your email',
    'cta.type': 'You are',
    'cta.type.individual': 'High-net-worth Individual',
    'cta.type.family': 'Family Office',
    'cta.type.professional': 'Asset Management Professional',
    'cta.type.investor': 'Investor',
    'cta.type.other': 'Other',
    'cta.message': 'Message',
    'cta.message.placeholder': 'Tell us about your needs',
    'cta.submit': 'Submit',
    'cta.submitting': 'Submitting...',
    'cta.success.title': 'Submitted Successfully',
    'cta.success.desc': 'We'll be in touch shortly',
    'cta.pricing.title': 'Pricing Information',
    'cta.pricing.desc': 'Preparing your custom pricing',
    
    // Footer
    'footer.description': 'AI-powered wealth operating system that transforms how you understand, control, and grow your assets.',
    'footer.products': 'Products',
    'footer.company': 'Company',
    'footer.about': 'About',
    'footer.team': 'Team',
    'footer.investors': 'Investors',
    'footer.news': 'News',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
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

  // Function to translate keys - fixed to be more robust with undefined handling
  const t = (key: string): string => {
    // First check if the language exists in the translations
    if (!translations[language]) {
      return key;
    }
    
    // Then check if the key exists in the language translations
    const translation = translations[language][key];
    
    // Return the translation if it's a string, otherwise return the key
    return typeof translation === 'string' ? translation : key;
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