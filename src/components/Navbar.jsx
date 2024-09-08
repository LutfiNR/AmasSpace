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
          <Link href="/feature.html">
            Feature
          </Link>
        </li>
        <li>
          <Link href="/download.html">
            Download
          </Link>
        </li>
        <li>
          <Link href="/pricing.html">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="/blog.html">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/community.html">
            Community
          </Link>
        </li>
        <li>
          <Link href="/help-center.html">
            Help Center
          </Link>
        </li>
      </ul>
    </nav>
  );
}
