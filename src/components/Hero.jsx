

const Hero = () => {
  return (
    <section className="overflow-hidden pb-12 pt-40">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
          <div className="w-full xl:col-span-2">
            <div className="relative overflow-hidden bg-[var(--greentea)] border z-1 border-gray-2 rounded-2xl">
              <div className="swiper swiper-initialized swiper-horizontal hero-carousel swiper-backface-hidden">
                <div className="swiper-wrapper"> {/* Carousel items would go here */ }
                
                  <div className="swiper-slide swiper-slide-prev" style={{width: "845px", marginRight: "30px"}}>
                    <div className="flex flex-col-reverse items-center pt-6 sm:pt-0 sm:flex-row">
                      <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
                        <div className="flex items-center gap-4 mb-5">
                          <span>30% off</span>
                        </div>
                        <h2 className="mb-3 text-xl font-semibold text-dark sm:text-3xl"><a href="#">Item Desc skjdfks adj jsdkf jasjf kasjf s fkjskf </a></h2>
                        <p className="text-base text-meta-3">Lorem ipsum jdskfjasdj jdksf fdsa fsf sadjfkjasdkf jadskfj kasdjf kasdjf kjsak jfsadk fdskajf ksdjfk j ksdajf sdjafk jsdkfj ksaj sjf jsf kjj </p>
                        <a href="#" className="inline-flex py-3 mt-10 font-medium text-[var(--white)] duration-200 ease-out rounded-lg text-custom-sm bg-[var(--black)] px-9 hover:bg-darkLight">Shop now</a>
                      </div>
                      <div className="bg-black">
                        <img src="/hero-image.jpg" alt="Hero" className="w-full h-auto object-cover rounded-2xl" loading="eager" width="320" height="400"/>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide swiper-slide-active"></div>
                  <div className="swiper-slide swiper-slide-next"></div>
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
// style={"width: 845px; margin-right: 30px;"} this are children of the swiper-wrapper