import React, { useState, useEffect } from 'react';

export default function useInView(refs) {
  const [elements, setElements] = useState({});

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const name = entry.target.getAttribute('nav-show');
        if (!name) {
          console.warn(
            'Encountered entry with no name. You should add nav-show to every element passed to the isInView hook.'
          );
        } else {
          if (entry.isIntersecting) {
            setElements((prev) => ({
              ...prev,
              [name]: {
                isInView: true,
              },
            }));
          } else {
            setElements((prev) => ({
              ...prev,
              [name]: {
                isInView: false,
              },
            }));
          }
        }
      });
    };
    let options = {
      rootMargin: "0px",
      threshold: 0.6,
    };

    const observer = new IntersectionObserver(observerCallback, options);

    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return elements;
}
