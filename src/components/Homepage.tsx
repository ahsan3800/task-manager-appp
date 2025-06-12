"use client";
import React from "react";
import Link from "next/link";
import { Wrapper, Highlight, FeatureCard, Icon } from "./styles";

import Button from "./ui/Button";
const Homepage = () => {
  return (
    <Wrapper className="min-h-screen bg-gradient-to-br from-white to-indigo-50 text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 sm:px-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
          Organize Tasks <Highlight>Like a Pro</Highlight>
        </h1>
        <p className="text-lg sm:text-xl max-w-3xl text-gray-600 mb-10">
          Simplify your workflow with a sleek, responsive, and powerful task
          management experience.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/sign-up">
            <Button
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all duration-300"
              onClick={() => {}}
            >
              Get Started
            </Button>
          </Link>

          <Link href="/sign-in">
            <Button
              className="bg-white border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 rounded-xl shadow-md transition-all duration-300"
              onClick={() => {}}
            >
              Sign In
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 sm:px-12 bg-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-14">
          Why Choose Our Task Manager?
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <FeatureCard>
            <Icon>🎯</Icon>
            <h3>Intuitive Interface</h3>
            <p>
              A clean and minimal design that keeps you productive without
              distractions.
            </p>
          </FeatureCard>
          <FeatureCard>
            <Icon>🔄</Icon>
            <h3>Real-time Sync</h3>
            <p>Stay updated with instant syncing across all your devices.</p>
          </FeatureCard>
          <FeatureCard>
            <Icon>⏰</Icon>
            <h3>Smart Reminders</h3>
            <p>
              Get timely notifications to help you meet your deadlines with
              confidence.
            </p>
          </FeatureCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Task Manager. All rights reserved.
      </footer>
    </Wrapper>
  );
};

export default Homepage;
