"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "@/firebaseConfig";
import Link from "next/link";
import Image from "next/image";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex flex-col w-full max-w-[1440px] px-8 py-16 justify-center items-center">
      <div className="w-full max-w-[476px] flex flex-row items-start justify-center mb-12">
        <div className="w-48 flex flex-row items-start justify-start gap-2">
          <Image
            className="h-10 w-10"
            loading="lazy"
            alt="App Logo"
            src="/solar_link-circle-bold.svg"
            width={40}
            height={40}
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-1">
            <Image
              className="self-stretch h-6"
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
        className="w-full max-w-[476px] rounded-xl bg-white flex flex-col items-start justify-start p-10 gap-6"
      >
        <div className="w-full flex flex-col items-start justify-start pb-4 gap-2">
          <h1 className="w-full font-bold text-2xl text-[#333333] leading-[150%]">
            Create account
          </h1>
          <p className="w-full text-base text-grey leading-[150%]">
            Let’s get you started sharing your links!
          </p>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <h3 className="w-full text-xs text-dark-grey leading-[150%]">
            Email address
          </h3>
          <div className="w-full rounded-lg bg-white flex flex-row items-start justify-start py-2.5 px-4 gap-3 border border-solid border-borders">
            <div className="flex flex-col items-start justify-start pt-1">
              <Image
                className="w-4 h-4"
                alt="Email Icon"
                src="/ph_envelope-simple-fill.svg"
                width={16}
                height={16}
              />
            </div>
            <input
              className="w-full border-none outline-none text-base bg-transparent h-6 flex-1 leading-[150%] text-darkslategray"
              placeholder="e.g. alex@email.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <h3 className="w-full text-xs text-gray-800 leading-[150%]">
            Create password
          </h3>
          <div className="w-full rounded-lg bg-white flex flex-row items-start justify-start py-2.5 px-4 gap-3 border border-solid border-borders">
            <div className="flex flex-col items-start justify-start pt-1">
              <Image
                className="w-4 h-4"
                alt="Password Icon"
                src="/ph_lock-key-fill.svg"
                width={16}
                height={16}
              />
            </div>
            <input
              className="w-full border-none outline-none text-base bg-transparent h-6 flex-1 leading-[150%] text-darkslategray"
              placeholder="At least 8 characters"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-1">
          <h3 className="w-full text-xs text-dark-grey leading-[150%]">
            Confirm Password
          </h3>
          <div className="w-full rounded-lg bg-white flex flex-row items-start justify-start py-2.5 px-4 gap-3 border border-solid border-borders">
            <div className="flex flex-col items-start justify-start pt-1">
              <Image
                className="w-4 h-4"
                alt="Confirm Password Icon"
                src="/ph_lock-key-fill.svg"
                width={16}
                height={16}
              />
            </div>
            <input
              className="w-full border-none outline-none text-base bg-transparent h-6 flex-1 leading-[150%] text-darkslategray"
              placeholder="At least 8 characters"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
        </div>
        {error && (
          <div className="w-full text-red-500 text-sm">
            {error}
          </div>
        )}
        <div className="w-full text-gray-600 leading-[150%]">
          Password must contain at least 8 characters
        </div>
        <button
          type="submit"
          className="w-full py-3 px-5 bg-[#633CFF] rounded-lg flex items-center justify-center hover:bg-mediumslateblue"
        >
          <div className="text-base font-semibold text-white">
            Sign Up
          </div>
        </button>
        <div className="w-full text-base text-center leading-[150%]">
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
