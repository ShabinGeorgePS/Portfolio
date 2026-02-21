import React from "react";

const IconLink = ({
  icon: Icon,
  href,
  label,
  variant = "icon",
  external = true,
}) => {
  const baseClasses =
    "transition-all hover:scale-110 hover:rotate-6 active:scale-95";
  const iconClasses = "w-6 h-6 hover:text-red-400";
  const buttonClasses =
    "px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold hover:scale-105";

  if (variant === "button") {
    return (
      <a
        href={href}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : ""}
        className={`${baseClasses} ${buttonClasses}`}
      >
        {Icon && <Icon className="mr-2 inline" />}
        {label}
      </a>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : ""}
      title={label}
      className={`${baseClasses} ${iconClasses}`}
    >
      <Icon />
    </a>
  );
};

export default IconLink;
