import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Fish Supply',
    description:
      'We deliver fresh, sustainably sourced fish to markets worldwide, ensuring top quality and timely distribution.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Sea Food Collection',
    description:
      'Our meticulous seafood collection includes a diverse array of ocean treasueres and handles with utmost care.',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Value addition',
    description:
      'We enhance the quality and appeal of our seafood products through different processes ensuring that every catch becomes a valuable culinary delight.',
  },
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          Our Services
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[424px] bg-white bg-opacity-5 h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[60px]'>
                  <div className='w-[140px] h-[80px] bg-white bg-opacity-0 dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center bg-white bg-opacity-0'>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg text-gray-200'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
