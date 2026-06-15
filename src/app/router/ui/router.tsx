import { Route, Routes } from 'react-router-dom';

import { config } from '../config/config';

export const Router = () => {
  const mapped = Object.values(config);

  return (
    <Routes>
      {mapped.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
};
