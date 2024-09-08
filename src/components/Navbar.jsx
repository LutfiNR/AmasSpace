import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/feature">
            Feature
          </Link>
        </li>
        <li>
          <Link href="/download">
            Download
          </Link>
        </li>
        <li>
          <Link href="/pricing">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/community">
            Community
          </Link>
        </li>
        <li>
          <Link href="/help-center">
            Help Center
          </Link>
        </li>
      </ul>
    </nav>
  );
}
