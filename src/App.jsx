import { Route, Routes } from "react-router-dom"
import Home from "./Components/Frontend/Home"
import About from "./Components/Frontend/About"
import Services from "./Components/Frontend/Services"
import Projects from "./Components/Frontend/Projects"
import Blogs from "./Components/Frontend/Blogs"
import ContactUs from "./Components/Frontend/ContactUs"
import Login from "./Components/Backend/Login/Login"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Components/Backend/Dashboard/Dashboard"
import RequireAuth from "./Components/Common/RequireAuth"
import ServicesShow from "./Components/Backend/Services/Show"
import ServicesCreate from "./Components/Backend/Services/Create"
import ServicesEdit from "./Components/Backend/Services/Edit"
import ProjectsShow from "./Components/Backend/Projects/Show"
import ProjectsCreate from "./Components/Backend/Projects/Create"
import ProjectsEdit from "./Components/Backend/Projects/Edit"
import ArticlesShow from "./Components/Backend/Articles/Show"
import ArticlesCreate from "./Components/Backend/Articles/Create"
import ArticlesEdit from "./Components/Backend/Articles/Edit"
import TestimonialsShow from "./Components/Backend/Testimonials/Show"
import TestimonialsCreate from "./Components/Backend/Testimonials/Create"
import TestimonialsEdit from "./Components/Backend/Testimonials/Edit"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<ContactUs />} />

        {/* Admin Panel */}
        <Route path="/admin" element={<Login />} />

        <Route path="/admin/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        } />

        {/* services */}
        <Route path="/admin/services" element={
          <RequireAuth>
            <ServicesShow />
          </RequireAuth>
        } />

        <Route path="/admin/services/create" element={
          <RequireAuth>
            <ServicesCreate />
          </RequireAuth>
        } />

        <Route path="/admin/services/edit/:id" element={
          <RequireAuth>
            <ServicesEdit />
          </RequireAuth>
        } />

        {/* projects */}
        <Route path="/admin/projects" element={
          <RequireAuth>
            <ProjectsShow />
          </RequireAuth>
        } />

        <Route path="/admin/projects/create" element={
          <RequireAuth>
            <ProjectsCreate />
          </RequireAuth>
        } />

        <Route path="/admin/projects/edit/:id" element={
          <RequireAuth>
            <ProjectsEdit />
          </RequireAuth>
        } />

        {/* Articles */}
        <Route path="/admin/articles" element={
          <RequireAuth>
            <ArticlesShow />
          </RequireAuth>
        } />

        <Route path="/admin/articles/create" element={
          <RequireAuth>
            <ArticlesCreate />
          </RequireAuth>
        } />

        <Route path="/admin/articles/edit/:id" element={
          <RequireAuth>
            <ArticlesEdit />
          </RequireAuth>
        } />

        {/* Testimonial */}
        <Route path="/admin/testimonials" element={
          <RequireAuth>
            <TestimonialsShow />
          </RequireAuth>
        } />

        <Route path="/admin/testimonials/create" element={
          <RequireAuth>
            <TestimonialsCreate />
          </RequireAuth>
        } />

        <Route path="/admin/testimonials/edit/:id" element={
          <RequireAuth>
            <TestimonialsEdit />
          </RequireAuth>
        } />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
