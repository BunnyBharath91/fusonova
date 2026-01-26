# Fusonova

Fusonova is an AI-powered creative platform that fuses **product images** with **human model images** to generate realistic composite visuals. It also converts the generated image into a **short downloadable video**, making it ideal for marketing, e-commerce, and creative workflows.

## 🚀 Features

### Core Functionality
- **Smart Image Fusion**: Upload a product image and a model image to generate realistic composite visuals using Google Gemini AI
- **Video Generation**: Convert generated images into short-form videos (5+ seconds) optimized for social media using Google Veo
- **Aspect Ratio Selection**: Choose between 9:16 (vertical) and 16:9 (horizontal) formats
- **Custom Prompts**: Add optional product descriptions and user prompts to guide the AI generation
- **Credit System**: Pay-as-you-go credit system (5 credits per image, 10 credits per video)
- **Project Management**: Create, view, and delete your generations
- **Community Gallery**: Publish your projects to share with the community
- **User Dashboard**: Track your credits and manage all your generations in one place

### User Experience
- Clean, modern, media-focused UI built with React and TailwindCSS
- Smooth animations powered by Framer Motion
- Responsive design for desktop and mobile
- Real-time generation status updates
- Toast notifications for user feedback

## 🧠 Use Cases

- **E-commerce product showcases**: Create professional lifestyle imagery for product listings
- **Fashion and lifestyle marketing**: Generate on-brand visual content quickly
- **Social media content creation**: Produce Instagram Reels, TikTok videos, and other short-form content
- **Brand promotions and ad creatives**: Generate marketing materials without expensive photoshoots
- **Rapid visual prototyping**: Test product concepts and visual ideas quickly

## 🛠️ Tech Stack

### Frontend
- **React 19** with TypeScript
- **Vite** - Build tool and dev server
- **TailwindCSS 4** - Styling
- **Framer Motion** - Animations
- **React Router DOM** - Client-side routing
- **Clerk** - Authentication and user management
- **Axios** - HTTP client
- **React Hot Toast** - Notifications
- **Lenis** - Smooth scrolling

### Backend
- **Express.js 5** with TypeScript
- **Prisma** - ORM and database management
- **PostgreSQL** - Database
- **Clerk Express** - Authentication middleware
- **Multer** - File upload handling
- **Cloudinary** - Image and video storage
- **Google GenAI SDK** - AI image and video generation
  - `gemini-3-pro-image-preview` - Image generation
  - `veo-3.1-generate-preview` - Video generation
- **Sentry** - Error monitoring and tracking
- **CORS** - Cross-origin resource sharing

### Infrastructure
- **Vercel** - Deployment platform (configured)
- **PostgreSQL** - Database (via Prisma)

## 📂 Project Structure

```
fusonova/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Buttons.tsx
│   │   │   ├── CTA.tsx
│   │   │   ├── Faq.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── SoftBackdrop.tsx
│   │   │   ├── Title.tsx
│   │   │   └── UploadZone.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Genetator.tsx
│   │   │   ├── Result.tsx
│   │   │   ├── MyGenerations.tsx
│   │   │   ├── Community.tsx
│   │   │   ├── Plans.tsx
│   │   │   └── Loading.tsx
│   │   ├── configs/        # Configuration files
│   │   │   └── axios.ts
│   │   ├── types/          # TypeScript type definitions
│   │   │   └── index.ts
│   │   ├── assets/         # Static assets and data
│   │   ├── App.tsx          # Main app component
│   │   └── main.tsx         # Entry point
│   ├── public/             # Static public assets
│   └── package.json
│
├── server/                 # Backend Express application
│   ├── configs/            # Configuration files
│   │   ├── ai.ts           # Google GenAI setup
│   │   ├── multer.ts       # File upload config
│   │   ├── prisma.ts       # Prisma client
│   │   └── instrument.mjs  # Sentry instrumentation
│   ├── controllers/        # Route controllers
│   │   ├── clerk.ts        # Clerk webhook handler
│   │   ├── projectController.ts
│   │   └── userController.ts
│   ├── middlewares/        # Express middlewares
│   │   └── auth.ts         # Authentication middleware
│   ├── routes/             # API routes
│   │   ├── projectRoutes.ts
│   │   └── userRoutes.ts
│   ├── utils/              # Utility functions
│   │   └── userSync.ts     # Clerk user synchronization
│   ├── prisma/             # Prisma schema and migrations
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── videos/             # Temporary video storage
│   ├── generated/          # Generated Prisma client
│   ├── server.ts           # Express server entry point
│   ├── vercel.json         # Vercel deployment config
│   └── package.json
│
└── README.md
```

## 🗄️ Database Schema

### User Model
- `id` (String) - Clerk user ID
- `email` (String)
- `name` (String)
- `image` (String) - Profile image URL
- `credits` (Int) - Default: 20 credits
- `createdAt`, `updatedAt` (DateTime)

### Project Model
- `id` (String, UUID) - Project identifier
- `name` (String) - Project name
- `userId` (String) - Foreign key to User
- `productName` (String) - Name of the product
- `productDescription` (String) - Optional product description
- `userPrompt` (String) - Optional custom prompt
- `aspectRatio` (String) - Default: "9:16"
- `targetLength` (Int) - Video length in seconds, default: 5
- `uploadedImages` (String[]) - Array of Cloudinary URLs
- `generatedImage` (String) - Generated image URL
- `generatedVideo` (String) - Generated video URL
- `isGenerating` (Boolean) - Generation status
- `isPublished` (Boolean) - Community visibility
- `error` (String) - Error message if generation fails
- `createdAt`, `updatedAt` (DateTime)

## 🚦 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **PostgreSQL** database
- **Clerk** account for authentication
- **Google Cloud** account with GenAI API access
- **Cloudinary** account for media storage
- **Sentry** account (optional, for error tracking)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fusonova
   ```

2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies**
   ```bash
   cd ../server
   npm install
   ```

4. **Set up environment variables**

   Create a `.env` file in the `server/` directory:
   ```env
   # Database
   DATABASE_URL="postgresql://user:password@localhost:5432/fusonova?schema=public"

   # Clerk Authentication
   CLERK_SECRET_KEY="sk_test_..."

   # Google Cloud AI
   GOOGLE_CLOUD_API_KEY="your-google-cloud-api-key"

   # Cloudinary
   CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"

   # Server Configuration
   PORT=3000
   TRUSTED_ORIGINS="http://localhost:5173,http://localhost:3000"

   # Sentry (optional)
   SENTRY_DSN="your-sentry-dsn"
   ```

   Create a `.env` file in the `client/` directory:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY="pk_test_..."
   VITE_API_URL="http://localhost:3000"
   ```

5. **Set up the database**
   ```bash
   cd server
   npx prisma generate
   npx prisma migrate dev
   ```

6. **Run the development servers**

   Terminal 1 - Start the backend server:
   ```bash
   cd server
   npm run server
   ```

   Terminal 2 - Start the frontend dev server:
   ```bash
   cd client
   npm run dev
   ```

7. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3000

## 📸 Workflow

1. **User Registration/Login**: Sign up or log in using Clerk authentication
2. **Create Project**: Navigate to `/generate` and fill in project details
3. **Upload Images**: Upload a product image and a model image
4. **Configure Settings**: 
   - Set project name and product name
   - (Optional) Add product description and custom prompt
   - Select aspect ratio (9:16 or 16:9)
5. **Generate Image**: Click "Generate Image" (costs 5 credits)
   - AI processes the images and creates a fused composite
   - Generated image is stored in Cloudinary
6. **View Result**: Review the generated image on the result page
7. **Generate Video** (Optional): Create a video from the image (costs 10 credits)
   - AI generates a short video showcasing the product
   - Video is stored in Cloudinary
8. **Download**: Download the generated image and/or video
9. **Publish** (Optional): Share your project to the community gallery
10. **Manage**: View all your generations in "My Generations"

## 🔌 API Endpoints

### User Routes (`/api/user`)
- `GET /api/user/credits` - Get user's credit balance
- `GET /api/user/projects` - Get all user's projects
- `GET /api/user/projects/:projectId` - Get specific project
- `GET /api/user/publish/:projectId` - Toggle project publish status

### Project Routes (`/api/project`)
- `POST /api/project/create` - Create a new project and generate image
  - Requires: `multipart/form-data` with 2 images
  - Body: `name`, `productName`, `productDescription`, `userPrompt`, `aspectRatio`, `images[]`
- `POST /api/project/video` - Generate video from project image
  - Body: `projectId`
- `GET /api/project/published` - Get all published projects (community gallery)
- `DELETE /api/project/:projectId` - Delete a project

### Authentication
- All protected routes require a Bearer token from Clerk
- Clerk webhook endpoint: `POST /api/clerk`

## 🎨 Features in Detail

### Smart Upload
- Drag & drop interface for easy file uploads
- Automatic format optimization
- Support for JPG, PNG, and WEBP formats

### Instant Generation
- Optimized AI models for fast generation
- Real-time status updates during processing
- High-quality output with professional fidelity

### Video Synthesis
- Transform static images into dynamic videos
- Social media optimized formats
- Customizable video length (default 5 seconds)

## 🚢 Deployment

### Vercel Deployment

The server is configured for Vercel deployment with `vercel.json`. To deploy:

1. **Deploy the server**
   ```bash
   cd server
   vercel
   ```

2. **Deploy the client**
   ```bash
   cd client
   vercel
   ```

3. **Set environment variables** in Vercel dashboard for both projects

4. **Update CORS settings** in server `.env` with production URLs

### Database Migration
```bash
cd server
npx prisma migrate deploy
```

## 🔒 Security

- Authentication handled by Clerk
- Protected API routes with middleware
- CORS configured for trusted origins
- Environment variables for sensitive data
- Error tracking with Sentry

## 📝 Scripts

### Client
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Server
- `npm start` - Start production server
- `npm run server` - Start development server with nodemon
- `npm run build` - Compile TypeScript

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 🙏 Acknowledgments

- Google Gemini and Veo for AI capabilities
- Clerk for authentication
- Cloudinary for media storage
- The open-source community

---

**Note**: This project uses preview/beta AI models. API availability and pricing may change. Make sure to check Google Cloud documentation for the latest information.