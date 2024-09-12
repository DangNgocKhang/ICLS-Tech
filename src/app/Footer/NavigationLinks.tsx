import React from 'react';

const NavigationLinks: React.FC = () => {
  const links = [
    "Trang Chủ",
    "Các khoá học",
    "Blog Post",
    "Về ICLS Tech"
  ];

  return (
    <nav className="flex lg:flex-col lg:items-start lg:gap-8 self-stretch justify-start text-2xl font-semibold text-right text-white">
      {links.map((link, index) => (
        <a href="#" key={index} className={index > 0 ? "text-center" : ""}>
          {link}
        </a>
      ))}
    </nav>
  );
};

export default NavigationLinks;