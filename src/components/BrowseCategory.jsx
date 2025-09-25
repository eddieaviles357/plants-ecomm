import CategoriesList from './MainCategoriesSection/CategoriesList.jsx';

const BrowseCategory = () => {
  
  return (
    <section className="relative overflow-hidden pt-17.5 bg-[var(--white)] w-full left-0 border-gray-2 rounded-2xl">
      <div className="w-full px-4 pb-16 mx-auto max-w-7xl sm:px-8 xl:px-0">
        <div className="swiper categories-carousel common-carousel">
          <div className="flex items-center justify-between mb-16 px-6 md:px-8 lg:px-12 xl:px-14">
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
                <CategoriesList />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrowseCategory;