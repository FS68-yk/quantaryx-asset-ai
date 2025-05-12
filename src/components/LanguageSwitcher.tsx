import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from "@/components/ui/button";
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'zh-TW' ? 'en' : 'zh-TW');
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleLanguage} 
      title={language === 'zh-TW' ? 'Switch to English' : '切換到中文'}
      className="text-gray-700 hover:text-quantaryx-purple dark:text-gray-300 dark:hover:text-quantaryx-purple"
    >
      <Globe className="h-5 w-5" />
      <span className="sr-only">{language === 'zh-TW' ? 'Switch to English' : '切換到中文'}</span>
    </Button>
  );
};

export default LanguageSwitcher;