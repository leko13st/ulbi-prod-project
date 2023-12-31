import React, { Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

export const AppRouter: React.FC = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} /> */}
                {Object.values(routeConfig).map(({ element, path }) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};
