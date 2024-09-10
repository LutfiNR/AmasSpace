'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import Image from 'next/image';

export default function NavbarComponent() {
  const pathname = usePathname();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShowNavbar(false); // Hide navbar on scroll down
      } else {
        setShowNavbar(true); // Show navbar on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white shadow-sm fixed w-full z-10 transition-transform duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-24 py-4">
        <Link href="/">
          <Image
            src="/sm-logo-typography.svg"
            alt="Amasspace Logo"
            className="h-10 w-auto"
          />
        </Link>
        <div className="flex gap-6">
          <Link
            href="/feature.html"
            className={
              pathname === '/feature.html'
                ? 'text-primary font-bold'
                : 'text-black-light'
            }
          >
            Feature
          </Link>
          <Link
            href="/download.html"
            className={
              pathname === '/download.html'
                ? 'text-primary font-bold'
                : 'text-black-light'
            }
          >
            Download
          </Link>
          <Link
            href="/pricing.html"
            className={
              pathname === '/pricing.html'
                ? 'text-primary font-bold'
                : 'text-black-light'
            }
          >
            Pricing
          </Link>
          <Link
            href="/blog.html"
            className={
              pathname === '/blog.html'
                ? 'text-primary font-bold'
                : 'text-black-light'
            }
          >
            Blog
          </Link>
          <Link
            href="/help-center.html"
            className={
              pathname === '/help-center.html'
                ? 'text-primary font-bold'
                : 'text-black-light'
            }
          >
            Help Center
          </Link>
        </div>
        <div>
        <Button size="px-4 py-2 text-sm" variant="primary">
          Get Started
        </Button>
        </div>
      </div>
    </nav>
  );
}
