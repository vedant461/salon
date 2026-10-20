# More Mud | Brutalist Salon Web Application

A structured full-stack brutalist salon web application.

## Project Structure

```text
salonv2/
├── docker-compose.yml            # Multi-container Docker deployment specification
├── frontend/                     # React + Vite application
│   ├── Dockerfile                # Multi-stage production build (Node + Nginx)
│   ├── nginx.conf                # Nginx SPA config + backend API reverse proxy
│   ├── .dockerignore
│   ├── public/                   # Public assets (favicons, icons)
│   ├── src/
│   │   ├── assets/               # Bundled images and media assets
│   │   │   ├── 9b705e8225fd4ecb8cc788ea819393ea.webp
│   │   │   ├── b5a45a6ffb25e4fa3a9b48ca94052876.jpg
│   │   │   ├── female-hairdresser-making-hairstyle-blonde-woman-beauty-salon_176420-4461.avif
│   │   │   └── hero.png
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
    ├── Dockerfile                # Production Node.js container
    ├── .dockerignore
    ├── src/
    │   └── server.js             # API endpoints (/api/services, /api/book, /api/health)
    └── package.json
```

---

## Seamless Deployment with Docker Compose

Ensure Docker Desktop is running on your machine, then run:

```bash
# Build and start all services in detached mode
docker compose up --build -d

# Check running container status
docker compose ps

# View real-time logs
docker compose logs -f

# Stop all services
docker compose down
```

- **Frontend Application**: [http://localhost:3000](http://localhost:3000) (Port 3000 mapped to Nginx reverse-proxying `/api` requests to backend).
- **Backend API**: [http://localhost:5000](http://localhost:5000)

---

## Local Development (Without Docker)

### 1. Run the Backend (Express API)
```bash
cd backend
npm install
npm run dev # or npm start
```
The server runs on [http://localhost:5000](http://localhost:5000).

### 2. Run the Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.
