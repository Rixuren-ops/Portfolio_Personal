import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SobreMiPage from './pages/SobreMiPage';
import styles from './App.module.css';

export default function App() {
  return (
    <BrowserRouter basename="/Portfolio_Personal">
      <div className={styles.layout}>
        <Navbar />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<SobreMiPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
