import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleLeave = () => {
      setVisible(false);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`pointer-events-none absolute h-80 w-80 rounded-full bg-red-500/25 blur-3xl transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0"
          }`}
        style={{
          transform: `translate(${pos.x - 160}px, ${pos.y - 160}px)`,
        }}
      />
    </div>
  );
}

