"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function ProposalModal() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    website: "",
    message: "",
  });

  // ✅ Global listener
  useEffect(() => {
    const handler = () => setShowModal(true);
    window.addEventListener("openProposalModal", handler);
    return () => window.removeEventListener("openProposalModal", handler);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Submitting...");

    try {
      const res = await axios.post("/api/sendEmail", form);
      if (res.status === 200) {
        setStatus("Submitted!");
        setForm({
          name: "",
          email: "",
          mobile: "",
          website: "",
          message: "",
        });
        setTimeout(() => setShowModal(false), 2000);
      }
    } catch {
      setStatus("Error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!showModal) return null;

  return (
    <div
      onClick={() => setShowModal(false)}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          width: "90%",
          maxWidth: "500px",
        }}
      >
        <button onClick={() => setShowModal(false)}>✕</button>

        <h3>Get a Free Proposal</h3>

        <form onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
          <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile" required />
          <input name="website" value={form.website} onChange={handleChange} placeholder="Website" required />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit"}
          </button>

          {status && <p>{status}</p>}
        </form>
      </div>
    </div>
  );
}