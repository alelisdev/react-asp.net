import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Online from './pages/Online';
import OnPremise from './pages/Onpremise';
import NotFound from './pages/NotFound';
import ContactPage from './pages/Contact';
import Pricing from './pages/Pricing';
import CaseStudies from './pages/Case-Studies';
import Faq from './pages/Faq';
import About from './pages/About';
import Supportpolicy from './pages/Supportpolicy';
import Service from './pages/Service';
import ProjectSync from './pages/ProjectSync';
import ListSync from './pages/ListSync';
import Privacy from './pages/Privacy';
import ReturnsPolicy from './pages/ReturnsPolicy';
import Terms from './pages/Terms';
import End from './pages/End';
import Shipping from './pages/Shipping';
import TOS from './pages/TOS';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome';
import './App.css'


function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Header />
          <Routes>
          <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Online />} />
            <Route path="/on-premise" element={<OnPremise />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/supportpolicy" element={<Supportpolicy />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/bi-service-ssrs-reports-sharepoint" element={<Service />} />
            <Route path="/list-sync-sql-sharepoint-online" element={<ListSync />} />
            <Route path="/project-sync-project-online" element={<ProjectSync />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/returns-policy" element={<ReturnsPolicy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/eula" element={<End />} />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/terms-of-service" element={<TOS />} />
          </Routes>
          <Footer />
        </Fragment>
      </Router>
    </div>
  );
}

export default App;