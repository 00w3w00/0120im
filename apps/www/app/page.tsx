"use client"
import dynamic from 'next/dynamic';

const ThemeToggle = dynamic(() => import('@0120/ui').then(m => m.ThemeToggle), {
  ssr: true
});

export default function Home() {
  return (
    <div className="">
      <ThemeToggle />
      <span className="">Branch : WWW </span>
    </div>
  );
}
