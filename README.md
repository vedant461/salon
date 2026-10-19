# More Mud | Brutalist Salon Web Application

A structured full-stack conversion of the brutalist salon concept.

## Project Structure

```text
salonv2/
├── frontend/                     # React + Vite application
│   ├── public/                   # Static assets (images, icons)
│   │   ├── 9b705e8225fd4ecb8cc788ea819393ea.webp
│   │   ├── b5a45a6ffb25e4fa3a9b48ca94052876.jpg
│   │   └── female-hairdresser-making-hairstyle-blonde-woman-beauty-salon_176420-4461.avif
│   ├── src/
│   │   ├── components/           # Modular section components
│   │   │   ├── CustomCursor.jsx  # Interactive inverted cursor follower
│   │   │   ├── Header.jsx        # Glassmorphic top navigation bar
│   │   │   ├── Hero.jsx          # Hero section with large brutalist typography
│   │   │   ├── About.jsx         # Studio manifesto & philosophy
│   │   │   ├── Portfolio.jsx     # Editorial work & projects grid
│   │   │   ├── Services.jsx      # Dark mode brutalist service menu
│   │   │   ├── Booking.jsx       # Interactive appointment inquiry form
│   │   │   └── Footer.jsx        # Minimalist footer with studio info
│   │   ├── App.jsx               # Root component with scroll & parallax hooks
│   │   ├── index.css             # Preserved brutalist CSS variables & animations
│   │   └── main.jsx              # Application entry point
│   ├── index.html                # Google Fonts & Tailwind CDN configuration
│   ├── vite.config.js            # Vite config with backend proxy
│   └── package.json
│
└── backend/                      # Node.js + Express backend server
    ├── src/
    │   └── server.js             # API endpoints (/api/services, /api/book, /api/health)
    └── package.json
```

## Running the Project

### 1. Run the Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Run the Backend (Express API)
```bash
cd backend
npm install
npm run dev # or npm start
```
The server will run on [http://localhost:5000](http://localhost:5000).
