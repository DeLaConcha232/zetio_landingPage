import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStats from './components/TrustStats'
import HowItWorks from './components/HowItWorks'
import ProblemSolution from './components/ProblemSolution'
import { PlayStory, CoachStory, TourStory } from './components/StorySections'
import { StoryDivider } from './components/StoryModule'
import ClubShowcase from './components/ClubShowcase'
import CreditSimulator from './components/CreditSimulator'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

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

function Home() {
  return (
    <div className="bg-bg text-white min-h-screen overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <TrustStats />
        <HowItWorks />
        <ProblemSolution />
        <StoryDivider />
        <PlayStory />
        <StoryDivider />
        <CoachStory />
        <StoryDivider />
        <TourStory />
        <ClubShowcase />
        <CreditSimulator />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="bg-bg min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Home />} />
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
