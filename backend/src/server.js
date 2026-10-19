const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory appointments list
const appointments = [];

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', studio: 'More Mud Salon API' });
});

// Services list endpoint
app.get('/api/services', (req, res) => {
  res.json([
    { id: 'cut', name: 'Architectural Cut', price: 120 },
    { id: 'color', name: 'Tonal Calibration', price: 180 },
    { id: 'reset', name: 'Scalp Reset', price: 85 },
    { id: 'styling', name: 'Editorial Styling', price: 150 },
  ]);
});

// Booking inquiry endpoint
app.post('/api/book', (req, res) => {
  const { name, email, service, notes } = req.body;

  if (!name || !email || !service) {
    return res.status(400).json({
      error: 'Missing required fields: name, email, and service are mandatory.',
    });
  }

  const newBooking = {
    id: appointments.length + 1,
    name,
    email,
    service,
    notes: notes || '',
    createdAt: new Date().toISOString(),
  };

  appointments.push(newBooking);
  console.log('New booking session received:', newBooking);

  return res.status(201).json({
    message: 'Booking inquiry received successfully.',
    booking: newBooking,
  });
});

app.listen(PORT, () => {
  console.log(`More Mud Backend running on port ${PORT}`);
});
