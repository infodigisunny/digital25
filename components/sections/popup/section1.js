/** @format */
"use client"
import Link from "next/link";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Section1() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    website: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false); // ✅ Modal state

  // ✅ Header button ka event suno
  useEffect(() => {
    const handler = () => setShowModal(true);
    window.addEventListener("openProposalModal", handler);
    return () => window.removeEventListener("openProposalModal", handler);
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('Submitting...');

    try {
      const res = await axios.post('/api/sendEmail', form);
      if (res.status === 200) {
        setStatus('Form submitted successfully!');
        setForm({ name: '', email: '', mobile: '', website: '', message: '' });
        setTimeout(() => setShowModal(false), 2000); // ✅ 2 sec baad modal band
      } else {
        setStatus('Failed to submit. Please try again.');
      }
    } catch (error) {
      setStatus('Failed to send message. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>{/* ✅ MODAL POPUP */}
      {showModal && (
        <div
          onClick={() => setShowModal(false)}
          style={{
            position: "fixed", top: 0, left: 0,
            width: "100vw", height: "100vh",
            background: "rgba(0,0,0,0.6)",
            display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff",
              padding: "36px",
              borderRadius: "12px",
              width: "90%",
              maxWidth: "500px",
              boxShadow: "0 0 30px rgba(0,0,0,0.2)",
              position: "relative",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute", top: "12px", right: "16px",
                background: "none", border: "none",
                fontSize: "22px", cursor: "pointer",
              }}
            >
              ✕
            </button>

           <h3 style={{ marginBottom: "20px", fontWeight: "700", textAlign: "center" }}>Get a Free Proposal</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="NAME*" className="form-control" style={{ width: "100%", padding: "10px" }} />
              </div>
              <div className="form-group mb-3">
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="EMAIL*" className="form-control" style={{ width: "100%", padding: "10px" }} />
              </div>
              <div className="form-group mb-3">
                <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} required placeholder="MOBILE*" className="form-control" style={{ width: "100%", padding: "10px" }} />
              </div>
              <div className="form-group mb-3">
                <input type="text" name="website" value={form.website} onChange={handleChange} required placeholder="WEBSITE*" className="form-control" style={{ width: "100%", padding: "10px" }} />
              </div>
              <div className="form-group mb-3">
                <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="MESSAGE*" className="form-control" style={{ width: "100%", padding: "10px" }} />
              </div>
              <button
                type="submit"
                disabled={loading}
                style={{
                  background: "#000", color: "#fff",
                  padding: "10px 24px", borderRadius: "6px",
                  border: "none", cursor: "pointer",
                  width: "100%", marginTop: "6px",
                }}
              >
                {loading ? "Submitting..." : "SEND ME A PROPOSAL →"}
              </button>
              {status && <p style={{ marginTop: "10px", color: "#555" }}>{status}</p>}
            </form>
          </div>
        </div>
      )}
    </>
  );
}