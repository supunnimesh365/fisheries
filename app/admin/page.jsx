import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
// components
import Form from '@/components/Form';

const Admin = () => {
  return (
    <section>
      <div className='container mx-auto'>
        {/* text & illustration */}
        <div className='grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24'>
          {/* text */}
          <div className='flex flex-col justify-center'>
            
            <h1 className='text-black h1 max-w-md mb-8'>Your Login</h1>
           
          </div>
          {/* illustration */}
          <div className='hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat'></div>
        </div>
        {/* info text & form */}
        
      </div>
    </section>
  );
};

export default Admin;
