'use client';

import { useEffect } from 'react';

export function Signature() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const style1 = "color: #0ea5e9; font-size: 16px; font-weight: bold; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);";
      const style2 = "color: #10b981; font-size: 12px; font-style: italic;";
      const style3 = "color: #94a3b8; font-size: 12px;";
      
      const lines = [
        { text: "%c🚀 BLAIN TÜRKIYE WEBSITE", style: style1, delay: 0 },
        { text: "%c---------------------------------------------------", style: style3, delay: 500 },
        { text: "%cArchitecture & Development by Murat Kuşcu", style: style1, delay: 1000 },
        { text: "%c\"I sell elevators by day, write code by night.\"", style: style2, delay: 2000 },
        { text: "%c\"I'm actually a Mechanical Engineer, but please don't tell the IT department I built this.\"", style: style2, delay: 3500 },
        { text: "%c---------------------------------------------------", style: style3, delay: 4500 }
      ];

      lines.forEach(({ text, style, delay }) => {
        setTimeout(() => {
          console.log(text, style);
        }, delay);
      });
    }
  }, []);

  return null;
}
