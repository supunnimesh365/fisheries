"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useRouter } from "next/navigation";
import {
  User,
  MailIcon,
  KeyIcon,
  ArrowRightIcon,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";
const RegisterForm = () => {
  const router = useRouter();
  const [info, setInfo] = useState({
    username: "",
    email: "",
    password: "",
    activation: "none",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [pending, setPending] = useState(false);
  function handleInput(e) {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!info.username || !info.email || !info.password) {
      setError("Must provide all the credentials.");
    }
    try {
      setPending(true);
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });
      if (res.ok) {
        setPending(false);
        const form = e.target;
        const successData = await res.json();
        setSuccess(successData.message);
        form.reset();
        router.push("/login");
        console.log(
          "user registered, It will take some time to gain access to this user, please contact system admin for the more details"
        );
      } else {
        const errorData = await res.json();
        setError(errorData.message);
        console.log("something went wrong");
        setPending(false);
      }
    } catch (error) {
      setPending(false);
      setError("something went wrong.");
    }
  }

  // console.log({ info });
  // console.log({ error });
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="name"
          name="username"
          id="username"
          placeholder="Name"
          onChange={(e) => handleInput(e)}
        />
        <User className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => handleInput(e)}
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      {/* input */}
      <div className="relative flex items-center">
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => handleInput(e)}
        />
        <KeyIcon className="absolute right-6" size={20} />
      </div>
      <span className="flex items-center text-sm font-bold text-red-700">
        {error}
      </span>
      <span className="flex items-center text-sm font-bold text-green-700">
        {success}
      </span>
      <Button className="primary-btn">
        Register
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default RegisterForm;
