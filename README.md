# LuxTrip – Next.js Travel & Vehicle Listing App

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit-blue?style=for-the-badge&logo=netlify)](https://lux-trip-nextjs-client.vercel.app/)


## 📝 Project Description  
Lux Trip is a modern travel and vehicle management web application built with Next.js. It allows users to browse, add, and manage vehicles with detailed information including images, descriptions, and pricing. The app features a responsive, user-friendly interface, leveraging Next.js API routes.

## 🔥 Key Features  
Key features: LuxTrip is a vehicle booking and trip management platform where users can:

* Register and login pages with form validation. Access to certain pages are restricted to logged-in users.
* Visitors can see all the listed vehicles and can see if they are available or not.
* Users can see the details of each vehicle and can book a vehicle directly from the details page for their perfect ride.
* Authenticated users can add a vehicle to our website, they can also delete the vehicles that they added.

## 📸 Screenshots

<p align="center">
  <img src="assetNexus3.png" width="45%" />
  <img src="assetNexus4.png" width="45%" />
</p>

## Technical Highlights

Tech Stack: Next.js, React, Tailwind CSS, Node.js, Vercel deployment.

## Dependencies  
List of required dependencies or major libraries:

```json
{
    "daisyui": "^5.5.5",
    "date-fns": "^4.1.0",
    "firebase": "^12.6.0",
    "js-cookie": "^3.0.5",
    "marquee": "^0.2.1",
    "next": "^16.1.3",
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "react-hot-toast": "^2.6.0",
    "react-icons": "^5.5.0",
    "sweetalert2": "^11.26.3"
}
```

## Dev Dependencies  
List of required devDependencies:

```json
{
   "@tailwindcss/postcss": "^4",
    "babel-plugin-react-compiler": "1.0.0",
    "eslint": "^9",
    "eslint-config-next": "16.0.4",
    "tailwindcss": "^4"
}
```
## ✅ Installation & Setup 
Follow these steps to run the project locally:
1. Clone the repo and install dependencies:

```bash
git clone https://github.com/nnowrose1/luxTrip-nextjs-client
cd luxTrip-nextjs-client
npm install

2. Set up environment variables by creating a `.env` file in the root directory:

```env
DATABASE_URL=your_database_url
```
3. Run the application:

```bash
npm run dev
```
---
