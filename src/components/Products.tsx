import React from 'react';
import ProductCard from './ProductCard';
import { Brain, BarChart, Users, Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Products = () => {
  const { t } = useLanguage();
  
  const products = [
    {
      title: "Finora",
      subtitle: t('products.finora.subtitle'),
      icon: <Brain className="h-6 w-6 text-white" />,
      features: [
        t('products.finora.feature1'),
        t('products.finora.feature2'),
        t('products.finora.feature3'),
        t('products.finora.feature4')
      ],
      color: "bg-blue-500",
    },
    {
      title: "Wiselens",
      subtitle: t('products.wiselens.subtitle'),
      icon: <BarChart className="h-6 w-6 text-white" />,
      features: [
        t('products.wiselens.feature1'),
        t('products.wiselens.feature2'),
        t('products.wiselens.feature3'),
        t('products.wiselens.feature4')
      ],
      color: "bg-purple-500",
    },
    {
      title: "NuroCRM",
      subtitle: t('products.nurocrm.subtitle'),
      icon: <Users className="h-6 w-6 text-white" />,
      features: [
        t('products.nurocrm.feature1'),
        t('products.nurocrm.feature2'),
        t('products.nurocrm.feature3'),
        t('products.nurocrm.feature4')
      ],
      color: "bg-green-500",
    },
    {
      title: "DealLens",
      subtitle: t('products.deallens.subtitle'),
      icon: <Search className="h-6 w-6 text-white" />,
      features: [
        t('products.deallens.feature1'),
        t('products.deallens.feature2'),
        t('products.deallens.feature3'),
        t('products.deallens.feature4')
      ],
      color: "bg-orange-500",
    }
  ];

  return (
    <div id="products" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl opacity-0 animate-fade-in">
            <span className="text-gradient">{t('products.title')}</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 sm:mt-4 opacity-0 animate-fade-in animate-delay-100">
            {t('products.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              subtitle={product.subtitle}
              icon={product.icon}
              features={product.features}
              color={product.color}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;