
const BrowseCategory = () => {
  return (
    <section className="overflow-hidden pt-17.5 bg-[var(--white)] w-screen absolute left-0">
      <div className="w-full px-4 pb-16 mx-auto border-b max-w-7xl sm:px-8 xl:px-0 border-gray-3">
        <div className="swiper categories-carousel common-carousel">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="text-xl font-semibold xl:text-heading-5 text-dark">
                Browser By Category
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button className="swiper-button-prev opacity-50 pointer-events-none" aria-label="previous button" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M15.1289 5.94519L8.87891 12.1952L15.1289 18.4452" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
              <button className="swiper-button-next" aria-label="next button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                  <path d="M8.87891 18.4452L15.1289 12.1952L8.87891 5.94519" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="swiper swiper-initialized swiper-horizontal">
            <div className="swiper-wrapper flex flex-column" style={{transform: "translate3d(0px, 0px, 0px)", transitionDuration: "0ms"}}>
              <div className="swiper-slide swiper-slide-active" style={{width: "213.33px"}}>
                <a className="flex flex-col items-center group" href="/categories/laptop">
                  <div className="w-[130px] h-[130px] bg-[var(--sunflower)] rounded-full flex items-center justify-center mb-4">
                    <img alt="Category" loading="lazy" width="80" height="80" decoding="async"  style={{color: "transparent"}} src="image" />
                  </div>
                  <div className="flex justify-center">
                    <h3 className="inline-block text-base font-medium text-center duration-500 text-dark group-hover:text-blue">Nutrients &amp; Concentrates</h3>
                  </div>
                </a>
              </div>
              <div className="swiper-slide swiper-slide-next" style={{width: "213.33px"}}>
                <a className="flex flex-col items-center group" href="/categories/watches">
                  <div className="w-[130px] h-[130px] bg-[var(--sunflower)]  rounded-full flex items-center justify-center mb-4">
                    <img alt="Category" loading="lazy" width="80" height="80" decoding="async" style={{color: "transparent"}} src="image" />
                  </div>
                  <div className="flex justify-center">
                    <h3 className="inline-block text-base font-medium text-center duration-500 text-dark group-hover:text-blue">Lights</h3>
                  </div>
                </a>
              </div>
              <div className="swiper-slide" style={{width: "213.33px"}}>
                <a className="flex flex-col items-center group" href="/categories/watches">
                  <div className="w-[130px] h-[130px] bg-[var(--sunflower)]  rounded-full flex items-center justify-center mb-4">
                    <img alt="Category" loading="lazy" width="80" height="80" decoding="async" style={{color: "transparent"}} src="image" />
                  </div>
                  <div className="flex justify-center">
                    <h3 className="inline-block text-base font-medium text-center duration-500 text-dark group-hover:text-blue">Containers</h3>
                  </div>
                </a>
              </div>
              <div className="swiper-slide" style={{width: "213.33px"}}>
                <a className="flex flex-col items-center group" href="/categories/watches">
                  <div className="w-[130px] h-[130px] bg-[var(--sunflower)]  rounded-full flex items-center justify-center mb-4">
                    <img alt="Category" loading="lazy" width="80" height="80" decoding="async" style={{color: "transparent"}} src="image" />
                  </div>
                  <div className="flex justify-center">
                    <h3 className="inline-block text-base font-medium text-center duration-500 text-dark group-hover:text-blue">Soil</h3>
                  </div>
                </a>
              </div>
              <div className="swiper-slide" style={{width: "213.33px"}}>
                <a className="flex flex-col items-center group" href="/categories/watches">
                  <div className="w-[130px] h-[130px] bg-[var(--sunflower)]  rounded-full flex items-center justify-center mb-4">
                    <img alt="Category" loading="lazy" width="80" height="80" decoding="async" style={{color: "transparent"}} src="image" />
                  </div>
                  <div className="flex justify-center">
                    <h3 className="inline-block text-base font-medium text-center duration-500 text-dark group-hover:text-blue">Seeds</h3>
                  </div>
                </a>
              </div>
              <div className="swiper-slide" style={{width: "213.33px"}}>
                <a className="flex flex-col items-center group" href="/categories/watches">
                  <div className="w-[130px] h-[130px] bg-[var(--sunflower)]  rounded-full flex items-center justify-center mb-4">
                    <img alt="Category" loading="lazy" width="80" height="80" decoding="async" style={{color: "transparent"}} src="image" />
                  </div>
                  <div className="flex justify-center">
                    <h3 className="inline-block text-base font-medium text-center duration-500 text-dark group-hover:text-blue">Organic</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrowseCategory;