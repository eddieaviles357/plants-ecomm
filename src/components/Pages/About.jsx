import BrowseCategory from "../BrowseCategory";

const About = () => {
  return (
    <section className="pb-20 mt-35 overflow-hidden bg-gray-2">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-8 xl:px-0 mb-30">
        <div className="max-w-[570px] w-full mx-auto rounded-2xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
          <div className="text-center mb-11">
            <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">About Us</h2>
            <p className="text-base text-dark-5">
              Welcome to our e-commerce platform dedicated to plants and gardening supplies! 
              We are passionate about helping you cultivate your green space, whether you're a seasoned gardener or just starting out. 
              Our mission is to provide high-quality products, expert advice, and exceptional customer service to make your gardening journey enjoyable and successful.
            </p>
          </div>
          <div>
          </div>
        </div>
      </div>
      <BrowseCategory />
    </section>
  )
}
export default About;