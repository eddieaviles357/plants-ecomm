import AllRightsReserved from './AllRightReserved.jsx';
import HelpAndSupport from './HelpAndSupport.jsx';
import FooterAccountSection from './FooterAccountSection.jsx';
const FooterMenu = () => {
  return (
    <>
      <div className="px-4 mx-auto max-w-7xl sm:px-8 xl:px-0">
        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-19 xl:justify-between pt-17.5 xl:pt-22.5 pb-10 xl:pb-20">
          {/* Help and Support section */}
          <HelpAndSupport />
          {/* Acount section */}
          <FooterAccountSection />
        </div>
      </div>
      {/* All rights reserve section */}
      <AllRightsReserved />
    </>
  )
}

export default FooterMenu;