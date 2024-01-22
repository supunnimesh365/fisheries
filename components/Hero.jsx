import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';
import Video from 'next-video';


import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';
import Carousel from './Carousel';

const Hero = () => {
  return (
    <section className=' py-12 xl:py-24 h-[84vh] xl:pt-28 dark:bg-none'>
      <video
          muted
          loop
          autoPlay
          className="fixed -top-2 left-0 min-w-full min-h-full -z-50 object-cover brightness-50 "
        >
          <source src= '/bg.mp4'type="video/mp4" />
          {/* <source src='@/assets/video/videoBg.mp4' type="video/ogg" /> */}
          Your browser does not support the video tag.
        </video>
      <div className=' container mx-auto'>
        
        <div>
          {/* text */}
          <div className='flex max-w flex-col items-center justify-center mx-auto my-20 text-center'>
            <div className='uppercase font-bold mb-4 text-primary tracking-[4px]'>
              World Class Fish Exporter
            </div>
            <h1 className='h1 mb-4 text-white text-foreground'>Rathnayake Enterprises</h1>
            <p className='subtitle mx-auto xl:mx-0'>
              We are the world class sea food exporter in the whole island. We deliver best sea food to the whole world.
            </p>
            {/* buttons */}
            <div className='flex flex-col gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2'>
                  Contact Us <Send size={18} />
                </Button>
              </Link>
            </div>
            {/* socials */}
            <Socials
              containerStyles='flex gap-x-6 mx-auto'
              iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>
          {/* image */}
          {/* <div className='hidden xl:flex relative'>
           
            <Badge
              containerStyles='absolute top-[24%] -left-[5rem]'
              icon={<RiBriefcase4Fill />}
              endCountNum={20}
              badgeText='Years Of Experience'
            />
           
            <Badge
              containerStyles='absolute top-[80%] -left-[1rem]'
              icon={<RiTodoFill />}
              endCountNum={12}
              endCountText=''
              badgeText='Sea food Products'
            />
          
            <Badge
              containerStyles='absolute top-[55%] -right-8'
              icon={<RiTeamFill />}
              endCountNum={4}
              endCountText=''
              badgeText='Happy Clients'
            />
            <div className='dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
            <DevImg
              containerStyles='w-[820px] h-[562px] bg-no-repeat relative bg-bottom'
              imgSrc='/hero/fish1.jpg'
            >
              <div className='max-w-lg'>
                
              </div>
            </DevImg>
          </div> */}
        </div>
        {/* icon */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
