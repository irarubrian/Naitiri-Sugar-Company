import { lazy, Suspense, Component } from 'react';
import type { ReactNode, ReactElement } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// ============================================
// ERROR BOUNDARY
// ============================================
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class RouteErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Route Error:', error, errorInfo);
    // You could send this to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex min-h-[60vh] flex-col items-center justify-center p-8 text-center">
            <div className="text-6xl text-green-700 mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
            <p className="text-gray-600 mb-6 max-w-md">
              We're having trouble loading this page. Please try again.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center rounded-lg bg-green-800 px-6 py-3 text-white hover:bg-green-900 transition-colors"
            >
              Refresh Page
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

// ============================================
// LAZY LOAD PAGES
// ============================================
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Products = lazy(() => import('../pages/Products'));
const Farmers = lazy(() => import('../pages/Farmers'));
const Sustainability = lazy(() => import('../pages/Sustainability'));
const News = lazy(() => import('../pages/News'));
const Careers = lazy(() => import('../pages/Careers'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

// ============================================
// LOADING COMPONENT
// ============================================
const PageLoader = () => (
  <div className="flex min-h-[60vh] items-center justify-center">
    <div className="text-center">
      <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-green-700 border-t-transparent"></div>
      <p className="mt-4 text-sm text-gray-600">Loading page...</p>
    </div>
  </div>
);

// ============================================
// ROUTE CONFIGURATION
// ============================================
interface RouteConfig {
  path: string;
  element: ReactElement;
  name: string;
  exact?: boolean;
}

const routeConfig: RouteConfig[] = [
  { path: '/', element: <Home />, name: 'Home', exact: true },
  { path: '/about', element: <About />, name: 'About' },
  { path: '/products', element: <Products />, name: 'Products' },
  { path: '/farmers', element: <Farmers />, name: 'Farmers' },
  { path: '/sustainability', element: <Sustainability />, name: 'Sustainability' },
  { path: '/news', element: <News />, name: 'News' },
  { path: '/careers', element: <Careers />, name: 'Careers' },
  { path: '/contact', element: <Contact />, name: 'Contact' },
];

// ============================================
// REDIRECT RULES
// ============================================
interface RedirectRule {
  from: string;
  to: string;
}

const redirects: RedirectRule[] = [
  { from: '/home', to: '/' },
  { from: '/product', to: '/products' },
  { from: '/career', to: '/careers' },
  { from: '/sustainable', to: '/sustainability' },
  { from: '/naitiri', to: '/' },
  { from: '/sugar', to: '/products' },
  { from: '/about-us', to: '/about' },
  { from: '/careers/jobs', to: '/careers' },
  { from: '/news/blog', to: '/news' },
];

// ============================================
// MAIN ROUTES COMPONENT
// ============================================
const AppRoutes = () => {
  return (
    <RouteErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Main Routes */}
          {routeConfig.map((route) => (
            <Route 
              key={route.path} 
              path={route.path} 
              element={route.element} 
            />
          ))}

          {/* Redirects */}
          {redirects.map((redirect) => (
            <Route
              key={redirect.from}
              path={redirect.from}
              element={<Navigate to={redirect.to} replace />}
            />
          ))}

          {/* 404 - Not Found Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </RouteErrorBoundary>
  );
};

export default AppRoutes;