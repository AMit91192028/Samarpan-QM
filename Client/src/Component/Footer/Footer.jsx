

const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white p-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Queue Management. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;