export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import "./globals.css"
import SideBar from "./components/LeftSideBar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>

    </html>
  )
}
