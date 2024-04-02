'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const productData = [
  {
    image: '/work/fish (5).jpeg',
    category: 'fish',
    name: 'Fish',
    github: '/',
  },
  {
    image: '/work/fish (1).jpeg',
    category: 'fish',
    name: 'Solstice Website',
    github: '/',
  },
  {
    image: '/work/fish (2).jpeg',
    category: 'fish',
    name: 'Lumina Website',
    link: '/',
    github: '/',
  },
  {
    image: '/work/fish (3).jpeg',
    category: 'fish',
    name: 'Evolve Website',
    link: '/',
    github: '/',
  },
  {
    image: '/work/fish (4).jpeg',
    category: 'fish',
    name: 'Ignite Website',
    link: '/',
    github: '/',
  },
  {
    image: '/work/fish (6).jpeg',
    category: 'fish',
    name: 'Envision Website',
    link: '/',
    github: '/',
  },
  {
    image: '/work/fish (9).jpeg',
    category: 'fish',
    name: 'Serenity Website',
  },
  {
    image: '/work/fish (7).jpeg',
    category: 'other',
    name: 'Nova Website',
    github: '/',
  },
  {
    image: '/work/fish (8).jpeg',
    category: 'other',
    name: 'Zenith Website',
    github: '/',
  },
];

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Our Products</h2>
          <p className='subtitle mb-8'>
            These are the some of our sea foods that crave all the world
          </p>
          <Link href='/products'>
            <Button>All products</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {productData.slice(0, 8).map((product, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={product} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
