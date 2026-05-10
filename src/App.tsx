import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FurnitureStorePage } from './pages/FurnitureStorePage';
import { CatalogPage } from './pages/CatalogPage';

function App() {
  return (
  <BrowserRouter>
    <Routes>
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/" element={<FurnitureStorePage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
