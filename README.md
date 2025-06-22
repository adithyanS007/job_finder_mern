# 🧳 Job Finder - MERN Stack Job Board

A full-stack responsive Job Board web application built using the **MERN Stack** (MongoDB, Express, React, Node.js).

---

## 🚀 Features

- View job listings (title, company, category, location)
- Search jobs by title or company
- Filter jobs by category
- Add new job postings via a form
- View individual job details with "Apply Now" button
- Responsive design for mobile, tablet, and desktop
- Clean UI with Tailwind CSS
- MongoDB Atlas integration

---

## 🛠️ Tech Stack

**Frontend:**
- React (Vite)
- React Router
- Axios
- Tailwind CSS
- React Icons

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- Dotenv

---

## 📁 Project Structure

```
Job_Finder_Mern/
├── client/ # React frontend
│ └── src/
│ └── components/
│ └── pages/
├── server/ # Node + Express backend
│ └── controllers/
│ └── models/
│ └── routes/
├── .env # Environment variables
├── README.md

```


---

## ⚙️ Setup Instructions

### 🔹 Prerequisites

- Node.js and npm installed
- MongoDB Atlas or local MongoDB running
- Git

---

### 🔹 1. Clone the repository

```bash
git clone https://github.com/your-username/job-finder-mern.git
cd job-finder-mern
```

### 🔹 2. Setup Backend

```
cd server
npm install
```
**Create a .env file inside /server:**
```
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/job_finder_db?retryWrites=true&w=majority
```

**Then start the server:**
```
npm start
```

### 🔹 3. Setup Frontend
```
cd ../client
npm install
npm run dev
```

## 📸 Screenshots

### 🏠 Home Page
![Home Page](./screenshots/HomePage.png)

### 📄 Job List Page
![Job Details](./screenshots/JobList.png)

### 📄 Post Job Page
![Job Details](./screenshots/PostJob.png)

### 📄 Job Details Page
![Job Details](./screenshots/JobDetails.png)


### ✨ Future Improvements

- Job application form with file upload
- Admin dashboard
- Authentication (JWT)
- Pagination
- Deploy on Vercel & Render



### ✅ What to Do Next:
- Replace placeholders like:
  - `your-username`
  - `your-email@example.com`
  - MongoDB connection string
  - Screenshot links or LinkedIn URL
- Save this file as `README.md` in the root of your project.
- Commit & push it to GitHub.

Let me know if you'd like a **version with deployment instructions for Vercel/Render** too!
