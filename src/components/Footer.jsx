import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { icon: "/images/footer/linkedin.svg", href: "#" },
    { icon: "/images/footer/facebook.svg", href: "#" },
    { icon: "/images/footer/instagram.svg", href: "#" },
    { icon: "/images/footer/medium.svg", href: "#" },
    { icon: "/images/footer/x.svg", href: "#" },
    { icon: "/images/footer/youtube.svg", href: "#" },
  ];

  return (
    <footer className="bg-[#111111] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left side - Logo */}
          <div>
            <Link to="/" className="text-white text-5xl font-medium">
              Journim
            </Link>
          </div>

          {/* Right side - Contact Info (left-aligned text) */}
          <div className="md:flex md:justify-end">
            <div className="text-left">
              <h2 className="text-white text-3xl mb-6">Contact Us</h2>
              <div className="space-y-2">
                <div className="text-white text-2xl font-light">
                  <span className="inline-block w-50">Aman Gupta</span>
                  <span>+91 8744899900</span>
                </div>
                <div className="text-white text-2xl font-light">
                  <span className="inline-block w-50">Sahil Birda</span>
                  <span>+91 99883 96729</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SVG Separator */}
        <div className="w-full my-8">
          <img 
            src="/images/footer/line_separator.svg" 
            alt="" 
            className="w-full"
            aria-hidden="true"
            loading="lazy"
          />
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          {socialLinks.map((social, index) => (
            <a 
              key={index} 
              href={social.href}
              className="text-white hover:text-[#00FFD1] transition-colors"
            >
              <img 
                src={social.icon} 
                alt="social media" 
                className="w-6 h-6"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 