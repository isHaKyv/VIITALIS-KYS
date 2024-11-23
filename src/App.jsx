import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Quote from './components/Quote';
import ContactInfo from './components/ContactInfo';
import Directory from './components/Directory';
import Analysis from './components/Analysis';
import Contact from './components/contact';
import Statistics from './components/Statistics';
import PatientForm from './components/PatientForm'; // Import the new PatientForm component
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <Services />
                            <Quote />
                            <ContactInfo />
                        </>
                    } />
                    <Route path="/directorio" element={<Directory />} />
                    <Route path="/analisis" element={<Analysis />} />
                    <Route path="/contacto" element={<Contact />} />
                    <Route path="/estadisticas" element={<Statistics />} />
                    <Route path="/paciente" element={<PatientForm />} /> {/* New Route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
