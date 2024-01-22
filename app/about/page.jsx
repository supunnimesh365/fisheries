import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
// components
import Form from '@/components/Form';

const About = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {/* text & illustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            
            <h1 className='h1 text-black max-w-md mb-8'>About the Company</h1>
            <p className=' subtitle max-w-[400px]'>
              You are free to contact us through these methods to tell us what you experienced with our products
            </p>
          </div>
          {/* illustration */}
          <div className='hidden xl:flex w-full bg-about_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* info text & form */}
        
      </div>
    </section>
  );
};

export default About;
