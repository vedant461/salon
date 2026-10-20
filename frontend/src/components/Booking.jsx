import React, { useState } from 'react';

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Optional backend API ping if server is running
      const apiUrl = import.meta.env.VITE_API_URL || '';
      await fetch(`${apiUrl}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      }).catch(() => {});
    } catch {
      // ignore network errors if backend is not started
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        service: '',
        notes: '',
      });
    }, 3000);
  };

  return (
    <section id="book" className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div className="grid-border-r p-6 md:p-12 flex flex-col justify-center">
        <h2 className="text-h1 uppercase leading-none mb-4 reveal-up">
          Secure<br />Space
        </h2>
        <p className="font-mono text-sm opacity-60 mb-12 reveal-up delay-100">
          Submit an inquiry. We review all requests to ensure alignment with our studio's ethos.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8 reveal-up delay-200">
          <div className="flex flex-col">
            <label className="mono-label mb-2">Identification</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
              className="w-full"
            />
          </div>
          <div className="flex flex-col">
            <label className="mono-label mb-2">Comms</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full"
            />
          </div>
          <div className="flex flex-col">
            <label className="mono-label mb-2">Service Required</label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full cursor-hover"
            >
              <option value="">Select Treatment...</option>
              <option value="cut">Architectural Cut</option>
              <option value="color">Tonal Calibration</option>
              <option value="reset">Scalp Reset</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="mono-label mb-2">Notes / Vision</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Briefly describe your current state and desired outcome."
              rows={3}
              className="w-full resize-none"
            />
          </div>
          <button
            type="submit"
            style={
              submitted
                ? {
                    backgroundColor: '#4CAF50',
                    color: '#fff',
                    borderColor: '#4CAF50',
                  }
                : undefined
            }
            className="btn-brutal px-8 py-4 mt-4 mono-label w-full md:w-auto self-start cursor-hover bg-textPrimary text-bgPrimary hover:bg-bgPrimary hover:text-textPrimary"
          >
            {submitted ? 'Request Received' : 'Submit Request ->'}
          </button>
        </form>
      </div>
      <div className="bg-[url('https://placehold.co/1000x1200/e5e5e5/a3a3a3?text=Studio+Atmosphere')] bg-cover bg-center hidden md:block">
        {/* Right side empty for large image */}
      </div>
    </section>
  );
}
