import { Route, Routes } from "react-router-dom"
import Home from "./Components/Frontend/Home"
import About from "./Components/Frontend/About"
import Services from "./Components/Frontend/Services"
import Projects from "./Components/Frontend/Projects"
import Blogs from "./Components/Frontend/Blogs"
import ContactUs from "./Components/Frontend/ContactUs"
import Login from "./Components/Backend/Login"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Components/Backend/Dashboard"
import RequireAuth from "./Components/Common/RequireAuth"
import ServicesShow from "./Components/Backend/Services/Show"
import ServicesCreate from "./Components/Backend/Services/Create"
import ServicesEdit from "./Components/Backend/Services/Edit"

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
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
