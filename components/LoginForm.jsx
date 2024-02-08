'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, KeyIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const LoginForm = () => {
  return (
    <form className='flex flex-col gap-y-4'>
      {/* input */}
      <div className='relative flex items-center'>
        <Input type='email' id='email' placeholder='Email' />
        <MailIcon className='absolute right-6' size={20} />
      </div>
      {/* input */}
      <div className='relative flex items-center'>
        <Input type='password' id='password' placeholder='Password' />
        <KeyIcon className='absolute right-6' size={20} />
      </div>
      <Button className='bg-[#3F94E0]'>
        Login
        <ArrowRightIcon size={20} />
      </Button>
      <Button className='bg-[#3F94E0]'>
        Register
      </Button>
    </form>
  );
};

export default LoginForm;
