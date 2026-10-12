import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
// Legal pages and Shop are not on the critical path — load them only when navigated to
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const PrivacyClubs = lazy(() => import('./pages/PrivacyClubs'))
const TermsClubs = lazy(() => import('./pages/TermsClubs'))
const Shop = lazy(() => import('./pages/Shop'))
const Links = lazy(() => import('./pages/Links'))

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// La home es HTML estático (public/index.html). Si un <Link to="/"> trae aquí, se carga esa página.
function StaticHome() {
  useEffect(() => { window.location.replace('/') }, [])
  return <div className="bg-bg min-h-screen" />
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="bg-bg min-h-screen" />}>
        <Routes>
          <Route path="/" element={<StaticHome />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacyclubs" element={<PrivacyClubs />} />
          <Route path="/termsclubs" element={<TermsClubs />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
