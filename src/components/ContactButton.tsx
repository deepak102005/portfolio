import React from 'react';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'Hire Me',
  onClick,
  href,
  className = '',
}) => {
  const buttonStyle: React.CSSProperties = {
    background: 'linear-gradient(123deg, #001a2e 7%, #007aad 37%, #0046a8 72%, #00d4d8 100%)',
    boxShadow: '0px 4px 4px rgba(0,180,216,0.25), inset 4px 4px 12px rgba(0,212,216,0.3)',
    outline: '2px solid #4dd8e0',
    outlineOffset: '-3px',
  };

  const baseClasses = `
    inline-flex items-center justify-center rounded-full
    text-white font-medium uppercase tracking-widest text-xs sm:text-sm
    px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4
    transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95
    ${className}
  `.trim();

  if (href) {
    return (
      <a href={href} style={buttonStyle} className={baseClasses}>
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={buttonStyle} className={baseClasses}>
      {label}
    </button>
  );
};

export default ContactButton;
