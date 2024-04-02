"use client";
import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";
// components
import RegisterForm from "@/components/RegisterForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Admin = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[100px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <h1 className="text-black h1 max-w-md mb-8">Registration</h1>
          </div>
        </div>
        {/* info text & form */}
        <RegisterForm />
      </div>
    </section>
  );
};

export default Admin;
