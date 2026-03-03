import { Sun, Moon } from "lucide-react";

function PageToggle({ isDarkMode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="relative rounded-full border-0 cursor-pointer"
      style={{
        width: "64px",
        height: "32px",
        backgroundColor: isDarkMode ? "#171717" : "#f3f4f6",
        transition: "background-color 0.3s ease",
        textDecoration: "none",
        display: "inline-flex",
        outline: "none",
      }}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
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
          transform: isDarkMode ? "translateX(36px)" : "translateX(4px)",
          transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Sun icon - visible in light mode */}
        <Sun
          className="absolute text-amber-500"
          size={16}
          style={{
            transform: isDarkMode
              ? "scale(0) rotate(180deg)"
              : "scale(1) rotate(0deg)",
            opacity: isDarkMode ? 0 : 1,
            transition: "transform 0.2s ease, opacity 0.2s ease",
          }}
        />

        {/* Moon icon - visible in dark mode */}
        <Moon
          className="absolute text-indigo-400"
          size={16}
          style={{
            transform: isDarkMode
              ? "scale(1) rotate(0deg)"
              : "scale(0) rotate(-180deg)",
            opacity: isDarkMode ? 1 : 0,
            transition: "transform 0.2s ease, opacity 0.2s ease",
          }}
        />
      </div>
    </button>
  );
}

export default PageToggle;
