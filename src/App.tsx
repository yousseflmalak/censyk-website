import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import DigitalTransformation from './pages/DigitalTransformation';
import Consulting from './pages/Consulting';
import Support from './pages/Support';
import Invoicing from './pages/Invoicing';
import Training from './pages/Training';
import Privacy from './pages/Privacy';
import SAP from './pages/SAP';

// Placeholder for 404
const NotFound = () => (
  <div className="pt-32 pb-20 container mx-auto px-4 text-center">
    <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
    <p className="text-gray-400">The page you are looking for does not exist.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sap" element={<SAP />} />
          <Route path="digital-transformation" element={<DigitalTransformation />} />
          <Route path="consulting" element={<Consulting />} />
          <Route path="support" element={<Support />} />
          <Route path="invoicing" element={<Invoicing />} />
          <Route path="training" element={<Training />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
