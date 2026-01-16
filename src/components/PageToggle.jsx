import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";

function PageToggle({ isWorkPage }) {
  const navigate = useNavigate();
  const targetPath = isWorkPage ? "/misc" : "/";
  const [isAnimating, setIsAnimating] = useState(false);
  const isDark = isAnimating ? isWorkPage : !isWorkPage; // Flip during animation

  const handleClick = () => {
    setIsAnimating(true);
    // Navigate after animation completes
    setTimeout(() => {
      navigate(targetPath);
    }, 400); // Slightly longer than animation duration
  };

  return (
    <button
      onClick={handleClick}
      className="relative rounded-full border-0 cursor-pointer"
      style={{
        width: "64px",
        height: "32px",
        backgroundColor: isDark ? "#171717" : "#f3f4f6",
        transition: "background-color 0.3s ease",
        textDecoration: "none",
        display: "inline-flex",
        outline: "none",
      }}
      aria-label={`Switch to ${isWorkPage ? "Misc" : "Work"} page`}
    >
      {/* Sliding knob */}
      <div
        className="absolute flex items-center justify-center rounded-full"
        style={{
          top: "4px",
          width: "24px",
          height: "24px",
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
          transform: isDark ? "translateX(36px)" : "translateX(4px)",
          transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Sun icon - visible on Work page */}
        <Sun
          className="absolute text-amber-500"
          size={16}
          style={{
            transform: isDark
              ? "scale(0) rotate(180deg)"
              : "scale(1) rotate(0deg)",
            opacity: isDark ? 0 : 1,
            transition: "transform 0.2s ease, opacity 0.2s ease",
          }}
        />

        {/* Moon icon - visible on Misc page */}
        <Moon
          className="absolute text-indigo-400"
          size={16}
          style={{
            transform: isDark
              ? "scale(1) rotate(0deg)"
              : "scale(0) rotate(-180deg)",
            opacity: isDark ? 1 : 0,
            transition: "transform 0.2s ease, opacity 0.2s ease",
          }}
        />
      </div>
    </button>
  );
}

export default PageToggle;
