'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const productData = [
  {
    image: '/work/fish (5).jpeg',
    category: 'fish',
    name: 'Fish',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/fish (1).jpeg',
    category: 'fish',
    name: 'Solstice Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/fish (2).jpeg',
    category: 'fish',
    name: 'Lumina Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/fish (3).jpeg',
    category: 'fish',
    name: 'Evolve Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/fish (4).jpeg',
    category: 'fish',
    name: 'Ignite Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/fish (6).jpeg',
    category: 'fish',
    name: 'Envision Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/fish (9).jpeg',
    category: 'fish',
    name: 'Serenity Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/fish (7).jpeg',
    category: 'other',
    name: 'Nova Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/fish (8).jpeg',
    category: 'other',
    name: 'Zenith Website',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
    link: '/',
    github: '/',
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
