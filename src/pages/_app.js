import '../styles/globals.css';
import '../styles/blog.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    // Track page views on route change
    const handleRouteChange = (url) => {
      trackPageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp; 