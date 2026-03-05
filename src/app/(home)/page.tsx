/*
 * This file is part of docs.plexcord.club.
 * Copyright (c) 2026 Plexcord.
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */
import Link from 'next/link';
import { RocketIcon, FileCode2Icon, WrenchIcon, ZapIcon, GithubIcon, BookOpenIcon } from 'lucide-react';
import { ParticleBackground } from '@/components/particle-background';
import { AnimatedBorderCard } from '@/components/animated-border-card';
import { PricingSection } from '@/components/pricing-section';

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/10 via-transparent to-fd-accent/10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,hsl(var(--color-fd-primary)/0.15),transparent_50%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Hero Content */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-fd-primary/10 border border-fd-primary/20 mb-6">
                <ZapIcon className="w-4 h-4 text-fd-primary" />
                <span className="text-sm font-medium">The most powerful Discord mod platform</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
                Taking Discord to the Next Level!
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                <span className="font-semibold text-foreground">Powerful plugin development</span>, <span className="font-semibold text-foreground">modern tooling</span>, and <span className="font-semibold text-foreground">native capabilities</span>. Plexcord gives you full control over Discord&apos;s behavior.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/docs/getting-started"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-fd-primary text-fd-primary-foreground rounded-xl font-semibold text-lg shadow-lg shadow-fd-primary/25 hover:shadow-xl hover:shadow-fd-primary/40 hover:scale-105 transition-all duration-200"
                >
                  <RocketIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Get Started
                </Link>
                <Link
                  href="https://github.com/MutanPlex/Plexcord"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-fd-border hover:border-fd-primary/50 rounded-xl font-semibold text-lg hover:bg-fd-accent/10 transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="w-5 h-5" />
                  GitHub
                </Link>
              </div>
            </div>
            
            {/* Hero Visual */}
            <div className="flex-1 max-w-md lg:max-w-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-fd-primary to-fd-accent rounded-2xl blur-3xl opacity-20 animate-pulse" />
                <AnimatedBorderCard>
                  <div className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="font-mono text-sm space-y-2">
                        <div className="text-fd-primary">import</div>
                        <div className="text-muted-foreground">{'{'} definePlugin {'}'} from</div>
                        <div className="text-fd-accent">&apos;@utils/types&apos;;</div>
                        <div className="mt-4 text-fd-primary">export default</div>
                        <div className="text-muted-foreground">definePlugin({'{'}</div>
                        <div className="ml-4 text-muted-foreground">name: <span className="text-fd-accent">&apos;MyPlugin&apos;</span>,</div>
                        <div className="ml-4 text-muted-foreground">description: <span className="text-fd-accent">&apos;My first plugin&apos;</span></div>
                        <div className="text-muted-foreground">{'}'});</div>
                      </div>
                    </div>
                  </div>
                </AnimatedBorderCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tagline */}
      <section className="border-y border-fd-border bg-fd-muted/30">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-lg">
            <span className="font-bold text-fd-primary">Easy to use</span>, <span className="font-bold text-fd-primary">powerful API</span>, <span className="font-bold text-fd-primary">open source</span>, and <span className="font-bold text-fd-primary">free forever</span>. Plexcord is the ultimate Discord modding platform.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-1/3 w-64 h-64 bg-fd-accent/12 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-fd-primary/12 rounded-full blur-[100px]" />
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build powerful Discord plugins.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto auto-rows-auto">
          <div className="group relative bg-fd-card dark:bg-gradient-to-br dark:from-fd-card/30 dark:to-fd-card/10 backdrop-blur-2xl border border-fd-border dark:border-white/5 rounded-3xl p-8 hover:border-fd-primary/50 hover:shadow-xl hover:shadow-fd-primary/10 hover:scale-[1.01] transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex flex-col">
              <RocketIcon className="w-10 h-10 text-fd-primary dark:text-white mb-4" />
              <h3 className="text-2xl font-bold mb-3">Powerful Plugin API</h3>
              <p className="text-muted-foreground leading-relaxed">
                Quickly add context menus, slash commands, message action buttons, and message accessories.
              </p>
            </div>
          </div>

          <div className="group relative bg-fd-card dark:bg-gradient-to-br dark:from-fd-card/30 dark:to-fd-card/10 backdrop-blur-2xl border border-fd-border dark:border-white/5 rounded-3xl p-8 hover:border-fd-accent/50 hover:shadow-xl hover:shadow-fd-accent/10 hover:scale-[1.01] transition-all duration-500 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-fd-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex flex-col">
              <ZapIcon className="w-10 h-10 text-fd-primary dark:text-white mb-4" />
              <h3 className="text-2xl font-bold mb-3">TypeScript, JSX, CSS</h3>
              <p className="text-muted-foreground leading-relaxed">
                Plugins support TypeScript, JSX syntax, CSS imports and modular code.
              </p>
            </div>
          </div>

          <div className="group relative bg-fd-card dark:bg-gradient-to-br dark:from-fd-card/30 dark:to-fd-card/10 backdrop-blur-2xl border border-fd-border dark:border-white/5 rounded-3xl p-8 hover:border-fd-accent/50 hover:shadow-xl hover:shadow-fd-accent/10 hover:scale-[1.01] transition-all duration-500 overflow-hidden md:row-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-fd-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex flex-col h-full">
              <WrenchIcon className="w-10 h-10 text-fd-primary dark:text-white mb-4" />
              <h3 className="text-2xl font-bold mb-3">RegExp Code Patches</h3>
              <p className="text-muted-foreground leading-relaxed">
                Rewrite Discord&apos;s code in place using RegExp replacements. This powerful feature lets you modify Discord&apos;s behavior at a fundamental level.
              </p>
            </div>
          </div>

          <div className="group relative bg-fd-card dark:bg-gradient-to-br dark:from-fd-card/30 dark:to-fd-card/10 backdrop-blur-2xl border border-fd-border dark:border-white/5 rounded-3xl p-8 hover:border-fd-primary/50 hover:shadow-xl hover:shadow-fd-primary/10 hover:scale-[1.01] transition-all duration-500 overflow-hidden md:row-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />
            <div className="relative flex flex-col h-full">
              <FileCode2Icon className="w-10 h-10 text-fd-primary dark:text-white mb-4" />
              <h3 className="text-2xl font-bold mb-3">Native Capabilities</h3>
              <p className="text-muted-foreground leading-relaxed">
                Plugins can define native functions that have full access to Node.js APIs. Build desktop-class features with file system access and networking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-black border border-white/10 p-12 md:p-16 text-center">
          {/* 3D Perspective Grid Background */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 perspective-container">
              <div className="grid-layer" style={{
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(168, 85, 247, 0.4) 79px, rgba(168, 85, 247, 0.4) 81px),
                  repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(168, 85, 247, 0.4) 79px, rgba(168, 85, 247, 0.4) 81px)
                `,
                animation: 'grid-perspective 15s linear infinite',
                transformStyle: 'preserve-3d',
                width: '200%',
                height: '200%',
                position: 'absolute',
                left: '-50%',
                top: '-50%'
              }} />
            </div>
          </div>

          {/* Diagonal Lines Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <div style={{
              backgroundImage: `
                repeating-linear-gradient(45deg, transparent 0px, transparent 40px, rgba(168, 85, 247, 0.6) 40px, rgba(168, 85, 247, 0.6) 41px),
                repeating-linear-gradient(-45deg, transparent 0px, transparent 40px, rgba(139, 92, 246, 0.6) 40px, rgba(139, 92, 246, 0.6) 41px)
              `,
              animation: 'diagonal-move 25s linear infinite',
              width: '200%',
              height: '200%',
              position: 'absolute',
              left: '-50%',
              top: '-50%'
            }} />
          </div>
          
          {/* Purple Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-purple-800/20 pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(168,85,247,0.2),transparent_50%)] pointer-events-none" />
          
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Create your first Plexcord plugin in just 30 minutes with our comprehensive documentation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/docs/getting-started/quick-start"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              >
                <BookOpenIcon className="w-5 h-5" />
                Quick Start Guide
              </Link>
              <Link
                href="/docs/api-reference"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              >
                API Reference
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

