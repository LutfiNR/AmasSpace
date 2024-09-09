import "./globals.css";
import Navbar from "../components/Navbar.jsx";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sm-logo.svg" />
      </head>
      <body
        className='antialised'
      >
        <Navbar/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
