"use client";

import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-[1440px] px-[482px] py-[206px] justify-center items-center">
      <div className="w-[476px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full mb-[51px] ">
        <div className="w-[182.5px] flex flex-row items-start justify-start gap-[7.5px]">
          <Image
            className="h-10 w-10 relative overflow-hidden shrink-0"
            loading="lazy"
            alt="App Logo"
            src="/solar_link-circle-bold.svg"
            width={40}
            height={40}
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[6.3px] px-0 pb-0">
            <Image
              className="self-stretch h-[26.3px] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt="Devlinks"
              src="/devlinks.svg"
              width={135}
              height={26.25}
            />
          </div>
        </div>
      </div>
      <form
        onSubmit={handleLogin}
        className="m-0 self-stretch rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start p-10 box-border gap-[24px] max-w-full"
      >
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-[8px]">
          <h1 className="m-0 self-stretch relative text-3xl leading-[150%] font-bold text-dark-grey text-left">
            Login
          </h1>
          <p className="self-stretch relative text-base leading-[150%] text-grey text-left">
            Add your details below to get back into the app
          </p>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full">
          <h3 className="self-stretch relative text-xs leading-[150%] text-dark-grey text-left">
            Email address
          </h3>
          <div className="self-stretch rounded-lg bg-white box-border overflow-hidden flex flex-row items-start justify-start py-2.5 px-[15px] gap-[12px] max-w-full border-[1px] border-solid border-borders">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <Image
                className="w-4 h-4 relative overflow-hidden shrink-0"
                alt="Email Icon"
                src="/ph_envelope-simple-fill.svg"
                width={16}
                height={16}
              />
            </div>
            <input
              className="w-[calc(100%_-_46px)] border-none outline-none font-body-m text-base bg-transparent h-6 flex-1 relative leading-[150%] text-darkslategray text-left inline-block min-w-[218px] max-w-full p-0"
              placeholder="e.g. alex@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[4px]">
          <h3 className="self-stretch relative text-xs leading-[150%] text-dark-grey text-left">
            Password
          </h3>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-start justify-start py-2.5 px-4 gap-[12px] border-[1px] border-solid border-borders">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <Image
                className="w-4 h-4 relative overflow-hidden shrink-0"
                alt="Password Icon"
                src="/ph_lock-key-fill.svg"
                width={16}
                height={16}
              />
            </div>
            <input
              className="w-[calc(100%_-_46px)] border-none outline-none font-body-m text-base bg-transparent h-6 flex-1 relative leading-[150%] text-darkslategray text-left inline-block p-0"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="cursor-pointer border-none py-[11px] px-5 bg-[#633CFF] self-stretch rounded-lg flex flex-row items-center justify-center hover:bg-mediumslateblue"
        >
          <div className="relative text-base leading-[150%] font-semibold text-white text-left inline-block min-w-[43px]">
            Login
          </div>
        </button>
        <div className="self-stretch relative text-base leading-[150%] text-center">
          <span className="text-[#737373]">Don’t have an account? </span>
          <Link href="/signup" className="text-[#633CFF]">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
