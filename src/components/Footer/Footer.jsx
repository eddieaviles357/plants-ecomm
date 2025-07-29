import FooterMenu from './Menu/FooterMenu.jsx';

const Footer = () => {
  console.log("Footer component rendered");
  return (
    <footer className="absolute overflow-hidden border-t border-gray-3 mt-17.5 bg-[var(--white)] w-screen left-0">
      <FooterMenu />
    </footer>
  );
}

export default Footer;