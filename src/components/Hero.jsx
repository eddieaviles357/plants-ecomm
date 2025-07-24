

const Hero = () => {
  return (
    <section className="overflow-hidden pb-12 pt-35">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        
          <div className="w-full xl:col-span-2">
            <div className="relative overflow-hidden bg-[var(--white)] z-1 border-gray-2 rounded-2xl">
              <div className="swiper swiper-initialized swiper-horizontal hero-carousel swiper-backface-hidden">

                <div className="swiper-wrapper">
                  <div className="swiper-slide swiper-slide-prev">
                    <div className="flex flex-col-reverse items-center pt-6 sm:pt-0 sm:flex-row">

                      <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
                        <div className="flex items-center gap-4 mb-5">
                          <span>30% off</span>
                        </div>
                        <h2 className="mb-3 text-xl font-semibold text-dark sm:text-3xl">
                          <a href="#" >Tomatoe seeds</a>
                        </h2>
                        <p className="text-base text-meta-3">
                          Bag of seeds 25 pack. Organic grown and non-GMO. Perfect for home gardening.
                        </p>
                        <a href="#" className="inline-flex py-3 mt-10 font-medium text-[var(--white)] duration-200 ease-out rounded-lg text-custom-sm bg-[var(--black)] px-9 hover:bg-darkLight">Shop now</a>
                      </div>

                      <div className="bg-[var(--black)]">
                        <img src="/plant-logo.jpg" alt="Hero" className="w-full h-auto object-cover rounded-2xl h-48 w-96" loading="eager"/>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide swiper-slide-active"></div>
                  <div className="swiper-slide swiper-slide-next"></div>
                </div>

              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between w-full gap-5 xl:col-span-1 sm:flex-row xl:flex-col">
            <div className="relative w-full px-6 bg-[var(--white)] rounded-2xl border-gray-2">
              <div className="flex items-center justify-between gap-5">
                <div className="w-1/2">
                  <div className="pt-5 mb-10">
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl hover:text-blue">
                      <a href="#">Shirt</a>
                    </h2>
                  </div>
                  <div className="pb-6">
                    <p className="font-medium text-dark-4 text-xs mb-1.5 uppercase">limited</p>
                    <span className="flex items-center gap-2.5">
                      <span className="font-bold text-heading-5 text-dark text-2xl">$29.99</span>
                      <span className="text-2xl font-medium line-through text-dark-4">$39.99</span>
                    </span>
                  </div>
                </div>
                <div className="w-1/2 bg-[var(--sunflower)] rounded-2xl">
                  <img alt="shirt image" loading="lazy" width="170" height="230" decoding="async" src="/shirt-image.jpg" className="" />
                </div>
              </div>
            </div>

            <div className="relative w-full px-6 bg-[var(--white)] rounded-2xl border-gray-2">
              <div className="flex items-center justify-between gap-5">
                <div className="w-1/2">
                  <div className="pt-5 mb-10">
                    <h2 className="max-w-[153px] font-semibold text-dark text-xl hover:text-blue">
                      <a href="#">Shirt</a>
                    </h2>
                  </div>
                  <div className="pb-6">
                    <p className="font-medium text-dark-4 text-xs mb-1.5 uppercase">limited</p>
                    <span className="flex items-center gap-2.5">
                      <span className="font-bold text-heading-5 text-dark text-2xl">$29.99</span>
                      <span className="text-2xl font-medium line-through text-dark-4">$39.99</span>
                    </span>
                  </div>
                </div>
                <div className="w-1/2 bg-[var(--sunflower)] rounded-2xl">
                  <img alt="shirt image" loading="lazy" width="170" height="230" decoding="async" src="/shirt-image.jpg" className="" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;