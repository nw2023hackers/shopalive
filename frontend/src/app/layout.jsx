import "./globals.css";
import Nav
 from "./components/Nav";
import Category from "./components/home/Category";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Nav />
        {children}

        <Category />
        
      </body>
    </html>
  );
}
