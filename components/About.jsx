import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Nishantha Rathnayake',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+012 345 6789',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'youremail@email.com',
  },
  {
    icon: <HomeIcon size={20} />,
    text: '123/4, Ela kata Road, Wattala',
  },
];

const qualificationData = [
  {
    title: 'about exporting',
    data: [
      {
        university: 'China',
        qualification: '',
        years: '2015',
      },
      {
        university: 'Hong-Kong',
        qualification: '',
        years: '2019',
      },
      {
        university: 'Thailand',
        qualification: '',
        years: '2021',
      },
    ],
  },
  {
    title: 'about company',
    data: [
      {
        company: 'Started as .',
        role: '',
        years: '2018',
      },
      {
        company: 'Joined with',
        role: '',
        years: '2020',
      },
      {
        company: 'Started to Export in',
        role: '',
        years: '2022',
      },
    ],
  },
];

const ProductData = [
  {
    title: 'Products',
    data: [
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
      {
        imgPath: '/about/wordpress.svg',
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About Our Company
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          {/* <div className='hidden xl:flex flex-1 relative'>
            <DevImg
              containerStyles='dark:bg-about_shape_dark w-[600px] h-[500px] bg-no-repeat relative'
              imgSrc='/logo.png'
            />
          </div> */}
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='mx-auto w-full grid items-center xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Company Info
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto' 
                  value='qualifications'
                >
                  Our Jounery
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Products
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='flex justify-center text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='mx-auto text-center xl:text-left'>
                    <h3 className='mx-auto h3 mb-4'>
                      Unmatched Service Quality for Over 20 Years
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                      We are specialize in sea food exports. Our unmatched product quality is the reason we have this much of recognition for sea food
                    </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                   
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                     Our awesome journey
                    </h3>
                    {/* about company & education wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* about company */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'about company').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'about company').data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'about exporting').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'about exporting').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>Our Products</h3>
                    {/* skills */}
                    <div className='mb-16'>
                      {/* <h4 className='text-xl font-semibold mb-2'>Products</h4> */}
                      <div className='border-b border-border mb-4'></div>
                      {/* skill list */}
                      <div>
                        {getData(ProductData, 'Products').data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className='w-2/4 text-center xl:text-left mx-auto xl:mx-0'
                                key={index}
                              >
                                <div className='font-medium'>{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    {/* <div>
                      <h4 className='text-xl font-semibold mb-2 xl:text-left'>
                        Tools
                      </h4>
                      <div className='border-b border-border mb-4'></div> */}
                      {/* tool list */}
                      {/* <div className='flex gap-x-8 justify-center xl:justify-start'>
                        {getData(ProductData, 'tools').data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=''
                                priority
                              />
                            </div>
                          );
                        })}
                      </div> */}
                    {/* </div> */}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
