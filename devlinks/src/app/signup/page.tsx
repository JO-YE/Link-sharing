"use client";

import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col w-[1440px] px-[482px] py-[206px] justify-center items-center">
      <div className="w-[476px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full mb-[51px]">
        <div className="w-48 flex flex-row items-start justify-start gap-2">
          <Image
            className="h-10 w-10 relative overflow-hidden shrink-0"
            loading="lazy"
            alt="App Logo"
            src="/solar_link-circle-bold.svg"
            width={40}
            height={40}
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
            <Image
              className="self-stretch h-6 relative max-w-full overflow-hidden shrink-0"
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
        onSubmit={handleSignup}
        className="self-stretch rounded-xl bg-white overflow-hidden flex flex-col items-start justify-start p-10 box-border gap-6 max-w-full"
      >
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-4 gap-2">
          <h1 className="self-stretch relative font-body-m text-[#333333] text-left font-instrument text-2xl font-bold leading-[150%]">
            Create account
          </h1>
          <p className="self-stretch relative text-base leading-[150%] font-body-m text-grey text-left">
            Let’s get you started sharing your links!
          </p>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-1 max-w-full">
          <h3 className="self-stretch relative text-xs leading-[150%] font-body-m text-dark-grey text-left">
            Email address
          </h3>
          <div className="self-stretch rounded-lg bg-white box-border overflow-hidden flex flex-row items-start justify-start py-2.5 px-4 gap-3 max-w-full border border-solid border-borders">
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
              className="w-full border-none outline-none font-body-m text-base bg-transparent h-6 flex-1 leading-[150%] text-darkslategray text-left p-0"
              placeholder="e.g. alex@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-1">
          <h3 className="self-stretch relative text-xs leading-[150%] font-body-m text-gray-800 text-left">
            Create password
          </h3>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-start justify-start py-2.5 px-4 gap-3 border border-solid border-borders">
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
              className="w-full border-none outline-none font-body-m text-base bg-transparent h-6 flex-1 leading-[150%] text-darkslategray text-left p-0"
              placeholder="At least 8 characters"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-1">
          <h3 className="self-stretch relative text-xs leading-[150%] font-body-m text-dark-grey text-left">
            Confirm Password
          </h3>
          <div className="self-stretch rounded-lg bg-white overflow-hidden flex flex-row items-start justify-start py-2.5 px-4 gap-3 border border-solid border-borders">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <Image
                className="w-4 h-4 relative overflow-hidden shrink-0"
                alt="Confirm Password Icon"
                src="/ph_lock-key-fill.svg"
                width={16}
                height={16}
              />
            </div>
            <input
              className="w-full border-none outline-none font-body-m text-base bg-transparent h-6 flex-1 leading-[150%] text-darkslategray text-left p-0"
              placeholder="At least 8 characters"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="self-stretch relative leading-[150%] text-gray-600">
          Password must contain at least 8 characters
        </div>
        <button
          type="submit"
          className="cursor-pointer border-none py-3 px-5 bg-[#633CFF] self-stretch rounded-lg flex flex-row items-center justify-center hover:bg-mediumslateblue"
        >
          <div className="relative text-base leading-[150%] font-semibold text-white text-left">
            Sign Up
          </div>
        </button>
        <div className="self-stretch relative text-base leading-[150%] font-body-m text-center">
          <span className="text-[#737373]">Already have an account? </span>
          <Link href="/login" className="text-[#633CFF]">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
