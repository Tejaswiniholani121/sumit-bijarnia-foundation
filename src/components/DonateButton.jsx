import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { siteConfig } from "../config/site";

export default function DonateButton({
  children = "Donate Now",
  className = "btn btn-primary",
}) {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    // Razorpay/payment link mil gaya hai:
    // directly payment page open hone do.
    if (siteConfig.donationUrl) {
      return;
    }

    // Abhi link nahi hai, toh preview modal open hoga.
    e.preventDefault();
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  // Modal open ho toh background page scroll na ho.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const modal = open ? (
    <div
      className="donation-modal-backdrop"
      onMouseDown={closeModal}
      role="presentation"
    >
      <div
        className="donation-modal-box"
        role="dialog"
        aria-modal="true"
        aria-labelledby="donation-title"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="donation-modal-close"
          onClick={closeModal}
          aria-label="Close"
        >
          ×
        </button>

        <span className="donation-modal-eyebrow">
          Donate with purpose
        </span>

        <h2 id="donation-title">
          Support meaningful action.
        </h2>

        <p>
          Your contribution can help support the Foundation&apos;s work
          across skin health, healthcare, education and community support.
        </p>

      <a
  href="/contact"
  className="btn btn-primary donation-contact-btn"
>
  <span>Contact the Foundation</span>
  <span className="btn-arrow" aria-hidden="true">
    ↗
  </span>
</a>
      </div>
    </div>
  ) : null;

  return (
    <>
      <a
        className={className}
        href={siteConfig.donationUrl || "#donation"}
        onClick={handleClick}
        target={siteConfig.donationUrl ? "_blank" : undefined}
        rel={siteConfig.donationUrl ? "noopener noreferrer" : undefined}
      >
        <span>{children}</span>

        <span className="btn-arrow" aria-hidden="true">
          ↗
        </span>
      </a>

      {open &&
        typeof document !== "undefined" &&
        createPortal(modal, document.body)}
    </>
  );
}