'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Button from '@/components/Button';
import Image from 'next/image';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { useState } from 'react';

export default function NavbarComponent() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    {
      label: 'Feature',
      href: '/feature.html',
      pathname:'/feature'
    },
    {
      label: 'Download',
      href: '/download.html',
      pathname:'/download'
    },
    {
      label: 'Pricing',
      href: '/pricing.html',
      pathname:'/pricing'
    },
    {
      label: 'Blog',
      href: '/blog.html',
      pathname:'/blog'
    },
    {
      label: 'Help Center',
      href: '/help-center.html',
      pathname:'/help-center'
    }
  ];

  return (
    <Navbar
      shouldHideOnScroll
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <Link
            href='/'
            className={
              pathname === '/' ? 'text-primary font-bold' : 'text-black-light'
            }>
            <Image
              src='/sm-logo-typography.svg'
              alt='Amasspace Logo'
              className='h-10 w-auto'
              width={100}
              height={100}
              priority
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className='hidden lg:flex gap-4'
        justify='center'>
          <NavbarItem>
          <Link
            href='/'
            className={
              pathname === '/'
                ? 'text-primary font-bold'
                : 'text-black-light'
            }>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href='/feature.html'
            className={
              pathname === '/feature'
                ? 'text-primary font-bold'
                : 'text-black-light'
            }>
            Feature
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href='/download.html'
            className={
              pathname === '/download'
                ? 'text-primary font-bold'
                : 'text-black-light'
            }>
            Download
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href='/pricing.html'
            className={
              pathname === '/pricing'
                ? 'text-primary font-bold'
                : 'text-black-light'
            }>
            Pricing
          </Link>
        </NavbarItem>
        <NavbarItem className='hidden lg:flex'>
          <Link
            href='/blog.html'
            className={
              pathname === '/blog'
                ? 'text-primary font-bold'
                : 'text-black-light'
            }>
            Blog
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href='/help-center.html'
            className={
              pathname === '/help-center'
                ? 'text-primary font-bold'
                : 'text-black-light'
            }>
            Help Center
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end' className='hidden lg:flex'>
        <NavbarItem className='hidden lg:flex'>
          <Button
          href='/download.html'
            variant='primary'
            size='px-3 py-2 md:px-4 md:py-2 text-sm'>
            Get Started
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end' className='flex lg:hidden'>
      <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='lg:hidden '
        />
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
            href={item.href}
            className={
              pathname === item.pathname
                ? 'text-primary font-bold'
                : 'text-black-light'
            }>
            {item.label}
          </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
