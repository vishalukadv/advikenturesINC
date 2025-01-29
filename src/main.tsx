import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Prefetch critical chunks
const prefetchLinks = [
  '/src/components/Hero.tsx',
  '/src/components/Features.tsx',
  '/src/components/Navbar.tsx',
  '/src/components/Footer.tsx'
];

prefetchLinks.forEach(link => {
  const prefetchLink = document.createElement('link');
  prefetchLink.rel = 'prefetch';
  prefetchLink.href = link;
  document.head.appendChild(prefetchLink);
});

// Lazy load the App component
const App = lazy(() => import('./App'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div className="min-h-screen bg-orange-50 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-600"></div>
    </div>}>
      <App />
    </Suspense>
  </StrictMode>
);