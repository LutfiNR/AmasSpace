import Footer from "@/components/Footer.jsx";
import NavbarComponent from "../components/NavbarComponent.jsx";
import "./globals.css";
import {NextUIProvider} from "@nextui-org/react";

export const metadata = {
  title: "AmasSpace",
  description: "A Creatice Collaboration Workspace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/sm-logo.svg" />
      </head>
      <body
        className='antialised'
      >
        <NextUIProvider>
          <NavbarComponent />
          <main className="font-opensans">
            {children}
          </main>
          <Footer></Footer>
        </NextUIProvider>
      </body>
    </html>
  );
}
