import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  title: string;
  subtitle?: string;
  parent?: { label: string; url: string };
  bgImage?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  title,
  subtitle,
  parent,
  bgImage = '/img/breadcrumb_img.jpg',
}) => {
  return (
    <section
      className="relative bg-cover bg-center py-28 sm:py-36 text-white text-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-5xl mx-auto px-4">
        {subtitle && (
          <h5 className="font-['Rajdhani'] uppercase tracking-widest text-sm sm:text-base font-semibold text-[#82b29a] mb-2">
            {subtitle}
          </h5>
        )}
        <h1 className="font-['Rajdhani'] text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-wider text-white">
          {title}
        </h1>

        {parent && (
          <div className="flex justify-center items-center gap-2 mt-4 text-sm font-medium text-gray-300">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to={parent.url} className="hover:text-white transition-colors">
              {parent.label}
            </Link>
            <span>/</span>
            <span className="text-[#82b29a]">{title}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Breadcrumb;
