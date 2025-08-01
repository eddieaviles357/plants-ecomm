import { NavLink } from 'react-router-dom';
import logoImg from '/plant-logo.jpg';
import { useState, useEffect } from 'react';


const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // if scroll is beyond 15px scroll is set to true and we will apply styles based on that
    // if scroll is less than 15px scroll is set to false and we will apply default styles
    // this will be used to change the header styles when the user scrolls down
    const handleScroll = (e) => {
      if (window.scrollY > 15) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // We must clean up the event listener to avoid memory leaks
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <header className={`fixed left-0 bg-[var(--white)] top-0 w-full z-50 transition-all  ease-in-out duration-300 ${isScrolled && 'shadow-lg'}`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 xl:px-0 b">
        <div className="flex flex-row items-center justify-between py-4 xl:py-0 h-24 min-h-24 max-h-24">
          <div> {/* Logo or Brand Name */ }
            <a><img src={logoImg} alt="Logo" className="h-8 w-auto" /></a>
          </div>

          <div className="hidden xl:block"> {/* Navigation Links */ }
            <nav>
              <ul className="flex items-center gap-6">
                <li className="relative group">
                  <NavLink 
                    to="/" 
                    style={ ({ isActive }) => ({ ":hover": { color: "green"},color: isActive ? "blue" : "black" }) }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="relative group">
                  <NavLink 
                    to="/products"
                    style={ ({ isActive }) => ({ ":hover": { color: "green"},color: isActive ? "blue" : "black" }) }
                  >
                    Products
                  </NavLink>
                </li>
                <li className="relative group">
                  <NavLink 
                    to="/login"
                    style={ ({ isActive }) => ({ ":hover": { color: "green"},color: isActive ? "blue" : "black" }) }
                  >
                    Login
                  </NavLink>
                </li>
                <li className="relative group">
                  <NavLink 
                    to="/signup"
                    style={ ({ isActive }) => ({ ":hover": { color: "green"},color: isActive ? "blue" : "black" }) }
                  >
                    Signup
                  </NavLink>
                </li>
                <li className="relative group">
                  <NavLink 
                    to="/about"
                    style={ ({ isActive }) => ({ ":hover": { color: "green"},color: isActive ? "blue" : "black" }) }
                  >
                    about
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-row items-center gap-3">
            <button className="transition hover:text-blue focus:outline-none" aria-label="Search">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.834 4.92566C15.6448 4.92584 18.7334 8.0146 18.7334 11.8241C18.7333 15.6335 15.6447 18.7223 11.834 18.7225C8.0231 18.7225 4.93371 15.6336 4.93359 11.8241C4.93359 8.01448 8.02302 4.92566 11.834 4.92566ZM18.2788 17.21C19.4989 15.752 20.2333 13.8738 20.2334 11.8241C20.2334 7.18583 16.4729 3.42584 11.834 3.42566C7.19493 3.42566 3.43359 7.18572 3.43359 11.8241C3.43371 16.4624 7.19501 20.2225 11.834 20.2225C13.8827 20.2225 15.7601 19.489 17.218 18.2704L20.3018 21.3551L20.3594 21.4068C20.654 21.6468 21.0888 21.6296 21.3633 21.3551C21.6378 21.0804 21.6545 20.6457 21.4141 20.3512L21.3633 20.2945L18.2788 17.21Z" fill="currentColor"></path>
              </svg>
            </button>
            <a className="transition hover:text-blue focus:outline-none" aria-label="Account" href="/signin">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.9022 5.00012C14.5116 5.00012 15.8162 6.30478 15.8162 7.91418C15.8162 9.52362 14.5116 10.8282 12.9022 10.8282C11.2928 10.8282 9.9881 9.52359 9.9881 7.91418C9.98814 6.30481 11.2928 5.00017 12.9022 5.00012ZM12.9022 12.3282C15.34 12.3282 17.3162 10.352 17.3162 7.91418C17.3162 5.47636 15.34 3.50012 12.9022 3.50012C10.4644 3.50017 8.48814 5.47638 8.4881 7.91418C8.4881 10.352 10.4643 12.3282 12.9022 12.3282ZM19.7979 20.5932V20.9399C19.7979 21.354 20.1337 21.6898 20.5479 21.6899C20.9621 21.6899 21.2979 21.3541 21.2979 20.9399V20.5932C21.2977 16.889 18.295 13.8862 14.5908 13.8862H11.2148C7.5107 13.8863 4.50792 16.8891 4.50781 20.5932V20.9399C4.50781 21.3541 4.8436 21.6899 5.25781 21.6899C5.67203 21.6899 6.00781 21.3541 6.00781 20.9399V20.5932C6.00792 17.7175 8.33913 15.3863 11.2148 15.3862H14.5908C17.4666 15.3862 19.7977 17.7174 19.7979 20.5932Z" fill="currentColor"></path>
              </svg>
            </a>
            <a className="relative hidden text-gray-700 transition sm:block hover:text-blue focus:outline-none" aria-label="Wishlist" href="/wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M4.72345 5.8023C2.76927 7.75648 2.76927 10.9248 4.72345 12.879L11.4471 19.6028C12.0329 20.1886 12.9827 20.1886 13.5685 19.6028L20.2922 12.8791C22.2463 10.9249 22.2463 7.75659 20.2922 5.80241C18.338 3.84823 15.1696 3.84823 13.2155 5.80241L12.5079 6.51001L11.8002 5.8023C9.84597 3.84813 6.67762 3.84813 4.72345 5.8023Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] text-white bg-red-600 text-[10px] font-normal rounded-full inline-flex items-center justify-center">0</span>
            </a>
            <button className="relative text-gray-700 transition hover:text-blue focus:outline-none" aria-label="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path d="M15.5078 7.50012V8.50012C15.5078 10.157 14.1647 11.5001 12.5078 11.5001C10.851 11.5001 9.50781 10.157 9.50781 8.50012V7.50012M6.00781 20.5001H19.0078C19.8362 20.5001 20.5078 19.8285 20.5078 19.0001V6.00012C20.5078 5.17169 19.8362 4.50012 19.0078 4.50012H6.00781C5.17939 4.50012 4.50781 5.17169 4.50781 6.00012V19.0001C4.50781 19.8285 5.17939 20.5001 6.00781 20.5001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span className="absolute -top-1.5 -right-1.5 w-[18px] h-[18px] text-white bg-red-600 text-[10px] font-normal rounded-full inline-flex items-center justify-center">0</span>
            </button>
          </div>
            
        </div>
      </div>
    </header>
  );
};

export default Navigation;