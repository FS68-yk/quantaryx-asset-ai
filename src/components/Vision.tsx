import React from 'react';
import { Brain, Shield, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Vision = () => {
  const { t } = useLanguage();
  
  return (
    <div id="vision" className="py-20 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl opacity-0 animate-fade-in">
            {t('vision.title')} <span className="text-gradient">{t('vision.title.colored')}</span>
          </h2>
          <p className="mt-3 max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4 opacity-0 animate-fade-in animate-delay-100">
            {t('vision.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="opacity-0 animate-fade-in animate-delay-200 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-quantaryx-softblue/30 dark:bg-purple-900/30 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
              <Brain className="h-8 w-8 text-quantaryx-brightblue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-left dark:text-white">{t('vision.understand.title')}</h3>
            <p className="text-gray-500 dark:text-gray-300 text-left">
              {t('vision.understand.desc')}
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-300 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-quantaryx-softblue/30 dark:bg-purple-900/30 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-quantaryx-brightblue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-left dark:text-white">{t('vision.control.title')}</h3>
            <p className="text-gray-500 dark:text-gray-300 text-left">
              {t('vision.control.desc')}
            </p>
          </div>
          
          <div className="opacity-0 animate-fade-in animate-delay-400 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300">
            <div className="bg-quantaryx-softblue/30 dark:bg-purple-900/30 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
              <ArrowRight className="h-8 w-8 text-quantaryx-brightblue" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-left dark:text-white">{t('vision.expand.title')}</h3>
            <p className="text-gray-500 dark:text-gray-300 text-left">
              {t('vision.expand.desc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;