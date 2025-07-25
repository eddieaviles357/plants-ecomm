import { useEffect, useRef, useState } from 'react';

const BackToTopButton = () => {
  const [isHidden, setIsHidden] = useState(true);
  const btnRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        // button.classList.remove('hidden');
        setIsHidden(false);
      } else {
        // button.classList.add('hidden');
        setIsHidden(true);
      }
      console.log("isHidden:", isHidden);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[])
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      onClick={scrollToTop} 
      className={`${(isHidden ? "" : "hidden")}${"fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"}`}
      aria-label="Back to top"
      ref={btnRef}
    >
      <svg viewBox="0 0 512 512" className="fill-white size-5">
        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
      </svg>
    </button>
  );
}

export default BackToTopButton;