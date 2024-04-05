'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const productData = [
  {
    image: '/work/black-pomfret.jpg',
    category: 'Fish',
    name: 'Black Pomfret',
  },
  {
    image: '/work/chinesePomfret.jpg',
    category: 'Fish',
    name: 'Chinese Pomfret',
  },
  {
    image: '/work/chromidegreen.webp',
    category: 'Fish',
    name: 'Green Chromide',
  },
  {
    image: '/work/emperor-fish.jpg',
    category: 'Fish',
    name: 'Emperor Fish',
  },
  {
    image: '/work/emperorrs.jpg',
    category: 'Fish',
    name: 'Emperor Fish',
  },
  {
    image: '/work/fresh-tiger-prawns.jpg',
    category: 'Prawns',
    name: 'Tiger Prawns',
  },
  {
    image: '/work/Kalanda.jpg',
    category: 'Fish',
    name: 'Kalanda',
  },
  {
    image: '/work/kossaBlack.jpg',
    category: 'Fish',
    name: 'Kossa (Black)',
  },
  {
    image: '/work/kossaRed.jpg',
    category: 'Fish',
    name: 'Kossa (Red)',
  },
  {
    image: '/work/loligo-squid-whole.png',
    category: 'other',
    name: 'Loligo Squid',
  },
  {
    image: '/work/cuttlefish.jpg',
    category: 'other',
    name: 'Cuttlefish',
  },
  {
    image: '/work/moodhaa.jpg',
    category: 'Fish',
    name: 'Modha',
  },
  {
    image: '/work/pannaawa.jpg',
    category: 'Fish',
    name: 'Pannawa',
  },
  {
    image: '/work/parrotFish.webp',
    category: 'Fish',
    name: 'Girawa',
  },
  {
    image: '/work/Prawns.jpg',
    category: 'Prawns',
    name: 'Prawns',
  },
  {
    image: '/work/pulunna.jpg',
    category: 'Fish',
    name: 'Pulunna',
  },
  {
    image: '/work/saawalaya.jpg',
    category: 'Fish',
    name: 'Sawalaya',
  },
  {
    image: '/work/seaCrab.jpg',
    category: 'other',
    name: 'Sea Crab',
  },
  {
    image: '/work/seerFish.jpeg',
    category: 'Fish',
    name: 'Seer Fish',
  },
  {
    image: '/work/silver-pomfret.jpg',
    category: 'Fish',
    name: 'Silver Pomfret',
  },
  {
    image: '/work/spotedKingFish.webp',
    category: 'Fish',
    name: 'Spoted King Fish',
  },
  {
    image: '/work/tilapiuya.jpg',
    category: 'Fish',
    name: 'Tilapiya',
  },
  {
    image: '/work/whiteFish.jpg',
    category: 'Fish',
    name: 'White Fish',
  },
  {
    image: '/work/whole-squid.jpg',
    category: 'other',
    name: 'Squid',
  },
];

// remove category duplicates
const uniqueCategories = [
  'all products',
  ...new Set(productData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all products');

  const filteredProjects = productData.filter((product) => {
    // if category is 'all products' return all products, else filter by category
    return category === 'all products'
      ? product
      : product.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title text-black mb-8 xl:mb-16 text-center mx-auto'>
          Our Products
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((product, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={product} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
