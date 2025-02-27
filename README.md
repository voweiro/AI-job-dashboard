# 🚀 AI Job Match Dashboard  

An AI-powered job search platform that helps job seekers find the best job opportunities based on their skills and experience.  

---

## 🌟 Features  

### ✅ **Core Features**  
- **Dynamic Job Listings** – Displays job opportunities with title, company, location, salary, and AI match score.  
- **Match Score Visualization** – Progress bar showing job fit percentage.  
- **Job Details Page** – Displays detailed job descriptions, required skills, and an "Apply Now" button.  
- **Application Form** – Collects user details and allows resume upload.  

### ✅ **Advanced Features**  
- **Search & Filters**  
  - 🔎 **Search Bar** – Search jobs by title, company, or skills.  
  - 📍 **Location Filter** – Filter jobs by remote, specific cities, or countries.  
  - 💰 **Salary Range Filter** – Select jobs based on salary brackets.  
  - 🏢 **Job Type Filter** – Frontend, Backend, Full Stack, UI/UX, etc.  

- **Enhanced UI/UX**  
  - 🎨 **Modern & Responsive Design** – Styled with Tailwind CSS.  
  - 📜 **Slideshow on Home Page** – Engaging job market insights.  
  - 🌟 **Navbar & Footer** – Easy navigation across pages.  
  - 📩 **Contact Form** – Users can submit inquiries.  

---

## 🛠️ Technologies Used  
- **Next.js** – React Framework  
- **TypeScript** – Type Safety  
- **Tailwind CSS** – Styling  
- **Zustand** – State Management  
- **Swiper.js** – Slideshow on Home Page  

---

## 📂 Folder Structure  

/src ├── app │ ├── layout.tsx # Global Layout (Navbar, Footer) │ ├── page.tsx # Home Page (Slideshow + Job Search) │ ├── about # About Us Page │ │ ├── page.tsx │ ├── contact # Contact Us Page │ │ ├── page.tsx │ ├── jobs # Find Jobs Page │ │ ├── page.tsx # Job Listings + Filters │ ├── job # Job Details Page │ │ ├── [id] # Dynamic Job Details │ │ │ ├── page.tsx ├── components │ ├── Navbar.tsx # Responsive Navbar │ ├── Footer.tsx # Footer Section │ ├── JobCard.tsx # Job Listing Card │ ├── MatchScore.tsx # AI Match Score Visualization │ ├── Pagination.tsx # Next/Prev Pagination │ ├── ApplyForm.tsx # Job Application Form ├── public │ ├── jobs.json # Mock Job Data │ ├── images # Icons & Slideshow Images ├── store │ ├── jobStore.ts # Zustand State Management ├── styles │ ├── globals.css # Global Styles