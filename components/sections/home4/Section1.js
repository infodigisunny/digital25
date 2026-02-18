"use client"
import Link from 'next/link'
import { useState } from 'react';
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
const [loading, setLoading] = useState(false); // add loading state

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);          // Start loading
  setStatus('Submitting...'); // Optional: update status while loading

  try {
    const res = await axios.post('/api/sendEmail', form);
    if (res.status === 200) {
      setStatus('Form submitted successfully!');
      setForm({ name: '', email: '', mobile: '', website: '', message: '' });
    } else {
      setStatus('Failed to submit. Please try again.');
    }
  } catch (error) {
    setStatus('Failed to send message. Try again later.');
  } finally {
    setLoading(false); // stop loading
  }
};

    return (
        <>
margin-top: 30px5px;
            <section className="section-box" style={{ marginTop: "30px" }}>
  <div className="banner-hero hero-4">
    <div className="banner-inner">
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "40px",
        }}
      >
        {/* ✅ LEFT SIDE — Heading and Text */}
        <div style={{ flex: "1", minWidth: "320px", maxWidth: "700px" }}>
          <h1 className="display-2 mb-25">
            Grow Your Business with a <span className="text-bg-brand-4">Digital</span> Marketing Agency
          </h1>
          <p className="text-lg mb-25">
            Every business today needs a strong online presence. Our smartly applied and result-focused
strategies expands your brand’s reach, attract the right audience, and convert interest into real
business growth.
If you want to reach more customers and scale faster, we’re here to help you get there with
smart and practical strategies that deliver real results.
          </p>
        </div>

        {/* ✅ RIGHT SIDE — Form */}
        <div
          style={{
            flex: "1",
            minWidth: "320px",
            maxWidth: "650px",
            background: "#fff",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 0 20px rgba(0,0,0,0.08)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-4">
             
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="NAME*"
                className="form-control"
                style={{ width: "100%", padding: "10px", marginTop: "6px" }}
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="EMAIL*"
                className="form-control"
                style={{ width: "100%", padding: "10px", marginTop: "6px" }}
              />
            </div>
            <div className="form-group mb-4">
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                required
                placeholder="MOBILE*"
                className="form-control"
                style={{ width: "100%", padding: "10px", marginTop: "6px" }}
              />
              </div>
              <div className="form-group mb-4">
              <input
                type="website"
                name="website"
                value={form.website}
                onChange={handleChange}
                required
                placeholder="WEBSITE*"
                className="form-control"
                style={{ width: "100%", padding: "10px", marginTop: "6px" }}
              />
            </div>
            <div className="form-group mb-4">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="MESSAGE*"
                className="form-control"
                style={{ width: "100%", padding: "10px", marginTop: "6px" }}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-black btn-rounded"
              disabled={loading}
              style={{
                background: "#000",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "6px",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              {loading ? "Submitting..." : "SEND ME A PROPOSAL →"}
            </button>
            {status && (
              <p style={{ marginTop: "10px", color: "#555" }}>{status}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    )
}
