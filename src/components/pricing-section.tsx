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
'use client';

import Link from 'next/link';
import { HeartIcon } from 'lucide-react';

export function PricingSection() {
  return (
    <section className="container mx-auto px-4 py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fd-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fd-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Plexcord is completely free and open source. Support the project to help us continue development.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Free Plan */}
        <div className="group relative bg-gradient-to-br from-fd-card/30 to-fd-card/10 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 hover:border-fd-primary/30 hover:shadow-xl hover:shadow-fd-primary/10 hover:scale-[1.01] transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h3 className="text-3xl font-bold mb-8 text-center relative">Free Forever</h3>
          <div className="space-y-4 mb-8 relative">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground">Complete access to Plexcord platform</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground">Plugin API with native capabilities</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground">TypeScript, JSX, and CSS support</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground">RegExp code patching system</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground">Comprehensive documentation</span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground">Community support on GitHub & Discord</span>
            </div>
          </div>
          <Link
            href="/docs/getting-started"
            className="block w-full text-center px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-fd-primary/30 hover:bg-white/10 rounded-xl font-semibold transition-all duration-300 relative"
          >
            Get started
          </Link>
        </div>

        {/* Sponsor Plan */}
        <div className="group relative bg-gradient-to-br from-fd-primary/15 to-fd-accent/15 backdrop-blur-2xl border border-fd-primary/20 rounded-3xl p-8 hover:border-fd-primary/40 hover:shadow-xl hover:shadow-fd-primary/20 hover:scale-[1.01] transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-fd-primary/10 to-fd-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h3 className="text-3xl font-bold mb-8 text-center relative">Support Development</h3>
          <div className="space-y-4 mb-8 relative">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground">Everything in Free</span>
            </div>
            <div className="flex items-start gap-3">
              <HeartIcon className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0 fill-current" />
              <span className="text-muted-foreground">Help fund ongoing development</span>
            </div>
            <div className="flex items-start gap-3">
              <HeartIcon className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0 fill-current" />
              <span className="text-muted-foreground">Support new features & improvements</span>
            </div>
            <div className="flex items-start gap-3">
              <HeartIcon className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0 fill-current" />
              <span className="text-muted-foreground">Enable faster bug fixes</span>
            </div>
            
            {/* Sponsors Progress */}
            <div className="pt-4 mt-4 border-t border-fd-border">
              <div className="text-center text-sm text-muted-foreground mb-2">
                Help us reach our funding goal
              </div>
              <div className="w-full bg-fd-muted rounded-full h-2.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-pink-500 to-pink-600 h-full rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: '15%' }} 
                />
              </div>
              <div className="text-center text-xs text-muted-foreground/70 mt-2">
                Every contribution helps maintain and improve Plexcord
              </div>
            </div>
          </div>
          <Link
            href="https://github.com/sponsors/MutanPlex"
            className="block w-full text-center px-6 py-3 bg-fd-primary/80 backdrop-blur-sm text-fd-primary-foreground rounded-xl font-semibold shadow-lg shadow-fd-primary/20 hover:bg-fd-primary hover:shadow-xl hover:shadow-fd-primary/30 hover:scale-105 transition-all duration-300 relative"
            target="_blank"
            rel="noopener noreferrer"
          >
            Become a sponsor
          </Link>
        </div>
      </div>
    </section>
  );
}
