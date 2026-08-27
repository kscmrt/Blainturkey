import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  triggerOnce?: boolean;
  threshold?: number | number[];
  margin?: string;
}

export function useInView(options: UseInViewOptions = {}) {
  const { triggerOnce = false, threshold = 0.1, margin = '0px' } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      {
        threshold: typeof threshold === 'number' ? threshold : threshold,
        rootMargin: margin,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [triggerOnce, threshold, margin]);

  return { ref, inView };
}
