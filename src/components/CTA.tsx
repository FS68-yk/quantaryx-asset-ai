import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from '@/context/LanguageContext';

const CTA = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: language === 'en' ? 'High-net-worth Individual' : '高淨值個人',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: t('cta.success.title'),
        description: t('cta.success.desc'),
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        type: language === 'en' ? 'High-net-worth Individual' : '高淨值個人',
        message: ''
      });
    }, 1000);
  };

  // Get the appropriate options for the dropdown based on language
  const getTypeOptions = () => {
    return language === 'en' ? 
      [t('cta.type.individual'), t('cta.type.family'), t('cta.type.professional'), t('cta.type.investor'), t('cta.type.other')] : 
      ['高淨值個人', '家族辦公室', '資產管理專業人士', '投資者', '其他'];
  };

  return (
    <div id="contact" className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl font-bold mb-6 text-left">
              {t('cta.title')} <span className="text-gradient">{t('cta.title2')}</span> {t('cta.title3')}
            </h2>
            <p className="text-xl mb-8 text-gray-500 dark:text-gray-300 text-left">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => {
                  const contactForm = document.getElementById('contact-form');
                  contactForm?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-quantaryx-purple hover:bg-quantaryx-purple/90 text-white flex items-center gap-2"
              >
                {t('cta.demo')}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button 
                onClick={() => {
                  window.open('/pricing', '_blank');
                  toast({
                    title: t('cta.pricing.title'),
                    description: t('cta.pricing.desc'),
                  });
                }}
                variant="outline" 
                className="border-quantaryx-darkblue text-quantaryx-darkblue hover:bg-quantaryx-darkblue/10 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-white/10"
              >
                {t('cta.pricing')}
              </Button>
            </div>
          </div>
          
          <div className="lg:pl-10">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 text-left dark:text-white">{t('cta.contact')}</h3>
              
              <form id="contact-form" className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-1">{t('cta.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-quantaryx-purple focus:ring focus:ring-quantaryx-purple/20 transition-colors p-2 border dark:bg-gray-700 dark:text-white"
                    placeholder={t('cta.name.placeholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-1">{t('cta.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-quantaryx-purple focus:ring focus:ring-quantaryx-purple/20 transition-colors p-2 border dark:bg-gray-700 dark:text-white"
                    placeholder={t('cta.email.placeholder')}
                  />
                </div>
                
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-1">{t('cta.type')}</label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-quantaryx-purple focus:ring focus:ring-quantaryx-purple/20 transition-colors p-2 border dark:bg-gray-700 dark:text-white"
                  >
                    {getTypeOptions().map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 text-left mb-1">{t('cta.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 dark:border-gray-700 shadow-sm focus:border-quantaryx-purple focus:ring focus:ring-quantaryx-purple/20 transition-colors p-2 border dark:bg-gray-700 dark:text-white"
                    placeholder={t('cta.message.placeholder')}
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-quantaryx-darkblue hover:bg-quantaryx-darkblue/90 dark:bg-quantaryx-purple dark:hover:bg-quantaryx-purple/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('cta.submitting') : t('cta.submit')}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;