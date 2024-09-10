import NavbarComponent from "../components/NavbarComponent.jsx";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sm-logo.svg" />
      </head>
      <body
        className='antialised'
      >
          <NavbarComponent />
          <main>
            {children}
          </main>
      </body>
    </html>
  );
}
