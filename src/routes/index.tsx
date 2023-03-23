import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '@layouts/Default';
import { History } from '@pages/History';
import { Home } from '@pages/Home';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
};
