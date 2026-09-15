import { Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { SOCIAL_LINKS, SOCIAL_PILL_CLASS } from "../../../data/socialLinks";

const FOOTER_LINKS = SOCIAL_LINKS.filter(
  (item) => item.label !== "Resume" && item.label !== "GitHub",
);

function CaseStudyFooter() {
  return (
    <footer className="case-study-footer" aria-label="Site footer">
      <div className="case-study-footer-name">
        <p className="m-0 text-xl font-semibold tracking-tight leading-tight text-text">
          Jiin Park
        </p>
      </div>

      <div className="case-study-footer-links">
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-wrap justify-start gap-2">
            {FOOTER_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={SOCIAL_PILL_CLASS}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.kind === "mail" && (
                  <Mail size={16} className="shrink-0 text-current" />
                )}
                {item.kind === "image" && (
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-4 w-4 shrink-0 object-contain"
                  />
                )}
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:jiinpark.work@gmail.com"
            className="w-full text-center text-sm text-text-muted no-underline transition-colors hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-neutral-600 rounded-sm"
          >
            jiinpark.work@gmail.com
          </a>
        </div>
      </div>

      <div className="case-study-footer-home">
        <Link
          to="/"
          className="text-sm font-medium text-text-muted no-underline transition-colors hover:text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-neutral-600 rounded-sm"
        >
          Home
        </Link>
      </div>
    </footer>
  );
}

export default CaseStudyFooter;
