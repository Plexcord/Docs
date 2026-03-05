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

import { ReactNode } from 'react';

interface AnimatedBorderCardProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedBorderCard({ children, className = '' }: AnimatedBorderCardProps) {
  return (
    <div className={`relative p-[3px] rounded-2xl ${className}`}>
      {/* Rotating gradient background */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div 
          className="absolute inset-[-200%] animate-border-rotate"
          style={{
            background: `conic-gradient(
              from 0deg,
              transparent 0deg,
              transparent 60deg,
              rgba(139, 92, 246, 0.3) 90deg,
              rgba(139, 92, 246, 0.8) 120deg,
              rgb(168, 85, 247) 135deg,
              rgb(217, 70, 239) 150deg,
              rgb(168, 85, 247) 165deg,
              rgba(139, 92, 246, 0.8) 180deg,
              rgba(139, 92, 246, 0.3) 210deg,
              transparent 240deg,
              transparent 360deg
            )`
          }}
        />
      </div>
      
      {/* Content with background */}
      <div className="relative bg-fd-card rounded-2xl">
        {children}
      </div>
    </div>
  );
}
