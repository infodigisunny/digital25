"use client"
import Link from 'next/link'
import { useState } from 'react';
import axios from 'axios';



export default function Section1() {
   const [form, setForm] = useState({
  name: '',
  email: '',
  mobile: '',
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
      setForm({ name: '', email: '', mobile: '', message: '' });
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

            <section className="section-box">
                <div className="banner-hero hero-6">
                    <div className="container">
                        <div className="banner-inner">
                            <div className="box-banner-left">
                                <h1 className="display-2 mb-30 mt-25">Grow your Business with our <span className="text-96">Expert 
Marketing Strategies
</span></h1>
                                <p className="text-lg neutral-500 mb-55">As businesses of every kind need an online presence in today's ever-evolving digital environment, digital marketing services provide essential tools for increasing visibility, strengthening customer relations, and driving organisational growth. 

If your goal is to take your business to new heights, then our digital marketing services may help you get there quicker than you expected.
</p>
                                <div className="d-flex mb-60"><Link className="btn btn-brand-4-border" href="#">
                                    <svg width={41} height={41} viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.5 1.28125C16.6989 1.28125 12.9832 2.40841 9.82264 4.52019C6.66214 6.63198 4.19882 9.63354 2.7442 13.1453C1.28958 16.6571 0.908982 20.5213 1.65054 24.2494C2.3921 27.9775 4.22251 31.4019 6.9103 34.0897C9.59809 36.7775 13.0225 38.6079 16.7506 39.3495C20.4787 40.091 24.3429 39.7104 27.8547 38.2558C31.3665 36.8012 34.368 34.3379 36.4798 31.1774C38.5916 28.0169 39.7188 24.3011 39.7188 20.5C39.7188 15.4029 37.6939 10.5145 34.0897 6.91029C30.4855 3.30608 25.5971 1.28125 20.5 1.28125ZM21.3239 13.0867C23.0709 13.0887 24.7457 13.7836 25.9811 15.0189C27.2164 16.2543 27.9113 17.9291 27.9133 19.6762H26.2656C26.2643 18.3659 25.7432 17.1098 24.8167 16.1833C23.8903 15.2568 22.6341 14.7357 21.3239 14.7344V13.0867ZM26.6603 32.0312C26.6103 32.0312 21.6634 31.9467 15.302 25.698C9.05332 19.3392 8.96876 14.3897 8.96876 14.3398C8.96876 13.7235 12.8125 8.96875 13.662 8.96875C13.9567 8.96875 14.186 9.16862 14.4371 9.46844C15.0419 10.1885 17.7159 14.4089 17.5929 15.1123C17.5339 15.4429 17.2533 15.694 16.4487 16.3693C16.0522 16.6809 15.6812 17.0237 15.3391 17.3943C15.503 18.0723 15.7464 18.7286 16.0643 19.3494C17.2489 21.785 19.217 23.7522 21.6531 24.9357C22.274 25.2536 22.9303 25.4971 23.6083 25.6609C23.9789 25.3188 24.3216 24.9478 24.6333 24.5513C25.3085 23.7467 25.5597 23.4661 25.8902 23.4072C26.5936 23.279 30.8141 25.9581 31.5341 26.5629C31.8339 26.8191 32.0338 27.0433 32.0338 27.338C32.0313 28.1875 27.2765 32.0312 26.6603 32.0312ZM30.3836 19.6762C30.3809 17.2742 29.4255 14.9714 27.727 13.273C26.0286 11.5745 23.7258 10.6192 21.3239 10.6164V8.96875C24.1626 8.97214 26.8841 10.1013 28.8914 12.1086C30.8987 14.1159 32.0279 16.8374 32.0313 19.6762H30.3836Z" fill="#191919" />
                                    </svg>Call Us for More Infomation
                                    <svg width={22} height={9} viewBox="0 0 22 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 4.50032L18.4791 0.979492V3.8074H0V5.19333H18.4791V8.02129L22 4.50032Z" fill="#191919" />
                                    </svg></Link></div>
                            </div>
                           <div className="box-banner-right">
  <div className="box-images-banner-6">
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white rounded-xl shadow-md w-full max-w-md mx-auto"
    >
      <div className="form-group mb-4">
        <label htmlFor="name" className="form-label">Your Name *</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="John Doe"
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="email" className="form-label">Your Email *</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="email@example.com"
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="mobile" className="form-label">Mobile *</label>
        <input
          type="tel"
          className="form-control"
          id="mobile"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          required
          placeholder="+91 9876543210"
        />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="message" className="form-label">Message *</label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Type your message here..."
        ></textarea>
      </div>
      <button
  type="submit"
  className="btn btn-black btn-rounded"
  disabled={loading}
>
  {loading ? 'Submitting...' : 'Send Message'}
  {!loading && (
    <svg
      width={22}
      height={8}
      viewBox="0 0 22 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
    </svg>
  )}
</button>

{/* ✅ Show the status message below the button */}
{status && (
  <p className="text-sm text-gray-600 mt-3">
    {status}
  </p>
)}

    </form>
  </div>
</div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
