"use client"

export default function ModalBtn({ className, children }) {
  return (
    <a
      className={className}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent("openProposalModal"));
      }}
    >
      {children}
    </a>
  );
}