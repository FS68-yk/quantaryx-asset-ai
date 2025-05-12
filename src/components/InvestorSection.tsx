import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const InvestorSection = () => {
  const { t } = useLanguage();
  
  const investorBenefits = [
    t('investor.benefit1'),
    t('investor.benefit2'),
    t('investor.benefit3'),
    t('investor.benefit4'),
    t('investor.benefit5')
  ];

  return (
    <div id="investors" className="py-20 bg-gradient-to-br from-quantaryx-darkblue to-quantaryx-purple/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-left opacity-0 animate-fade-in">
              {t('investor.title')}
            </h2>
            <p className="text-xl mb-8 text-white/80 text-left opacity-0 animate-fade-in animate-delay-100">
              {t('investor.subtitle')}
            </p>
            
            <div className="opacity-0 animate-fade-in animate-delay-200">
              <ul className="space-y-4 text-left mb-8">
                {investorBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="h-5 w-5 rounded-full flex items-center justify-center mt-0.5 mr-3 bg-white text-quantaryx-purple">
                      <Check className="h-3 w-3" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="opacity-0 animate-fade-in animate-delay-300">
              <Button className="bg-white text-quantaryx-purple hover:bg-white/90">
                {t('investor.button')}
              </Button>
            </div>
          </div>
          
          <div className="lg:pl-10 opacity-0 animate-fade-in animate-delay-400">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-left">{t('investor.market.title')}</h3>
              
              <div className="space-y-6 text-left">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{t('investor.market.hnwi')}</span>
                    <span className="font-bold">$80+ {t('trillion')}</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{t('investor.market.family')}</span>
                    <span className="font-bold">$5.9+ {t('trillion')}</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: "65%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{t('investor.market.growth')}</span>
                    <span className="font-bold">23.4%</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{t('investor.market.potential')}</span>
                    <span className="font-bold">$4.2+ {t('trillion')}</span>
                  </div>
                  <div className="w-full h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-white rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvestorSection;