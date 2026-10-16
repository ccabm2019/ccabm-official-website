import React from 'react'
import { ThemeLanguageProvider } from './contexts/ThemeLanguageContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import Committee from './pages/Committee'
import Membership from './pages/Membership'
import MemberPortal from './pages/MemberPortal'
import Support from './pages/Support'
import Contact from './pages/Contact'

export default function App() {
  // Very small router replacement to keep dependencies minimal and accessible
  const [route, setRoute] = React.useState<string>(window.location.pathname || '/')

  React.useEffect(() => {
    const onPop = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = (to: string) => {
    window.history.pushState({}, '', to)
    setRoute(to)
  }

  const renderRoute = () => {
    switch (route) {
      case '/about':
        return <About />
      case '/activities':
        return <Activities />
      case '/committee':
        return <Committee />
      case '/membership':
        return <Membership />
      case '/member-portal':
        return <MemberPortal />
      case '/support-us':
        return <Support />
      case '/contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <ThemeLanguageProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <a href="#main" className="skip-link">跳到主要内容 / Skip to main content</a>
        <Header navigate={navigate} />
        <main id="main" className="flex-1 container mx-auto px-4 py-8">
          {renderRoute()}
        </main>
        <Footer />
      </div>
    </ThemeLanguageProvider>
  )
}
