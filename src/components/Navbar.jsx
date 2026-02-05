import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed w-full bg-black/30 backdrop-blur-md z-50 shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-red-400">
        Shabin George
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">
        {links.map((l) => (
          <li key={l.name}>
            <a
              href={l.link}
              className="hover:text-red-400 duration-200 text-white"
            >
              {l.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-2xl text-white" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-black/90 flex flex-col items-center py-6 gap-6 md:hidden text-white">
          {links.map((l) => (
            <li key={l.name}>
              <a href={l.link} onClick={() => setOpen(false)}>
                {l.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
