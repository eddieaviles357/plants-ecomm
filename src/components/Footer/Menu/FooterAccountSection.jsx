
const FooterAccountSection = () => {
  return (
    <div className="w-full sm:w-auto">
      <h2 className="mb-7.5 text-xl font-semibold text-dark">Account</h2>
      <ul className="flex flex-col gap-3.5">
        <li><a class="text-base duration-200 ease-out hover:text-blue" href="/signin">Login / Register</a></li>
        <li><a class="text-base duration-200 ease-out hover:text-blue" href="/cart">Cart</a></li>
        <li><a class="text-base duration-200 ease-out hover:text-blue" href="/wishlist">Wishlist</a></li>
        <li><a class="text-base duration-200 ease-out hover:text-blue" href="/products">Shop</a></li>
      </ul>
    </div>
  )
};

export default FooterAccountSection;