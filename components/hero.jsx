"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  return <div className="pb-20 px-4">
      <div>
        <h1>
            Financial literacy is the <br /> ultimate form of self-defense
        </h1>
        <p>An AI-powered financial management platforms that help you track,
            analyze, and optimize your spending with real-time insights.
        </p>
        <div>
            <Link href="/dashboard">
            <Button size="lg" className="px-8">
                Get Started
            </Button>
            </Link>
            <Link href="https://www.youtube.com/">
            <Button size="lg" variant='outline' className="px-8">
                Watch Demo
            </Button>
            </Link>
        </div>
        <div>
            <div>
                <Image src='/banner.jpg' width={1280} height={720} alt="Dashboard Preview" className="rounded-lg shadow 2x1 border mx-auto" priority/>
            </div>
        </div>
      </div>
    </div>;
}

export default HeroSection
