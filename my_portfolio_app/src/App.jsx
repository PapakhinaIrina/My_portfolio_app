/* eslint-disable unicorn/filename-case */
import React, { Suspense } from 'react';
import { Layout } from './app/Layout.js';
import { RouterProvider } from './app/providers';
import { Router } from './pages/index';
import './18n';

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <RouterProvider>
        <Layout>
          <Router />
        </Layout>
      </RouterProvider>
    </Suspense>
  );
}
export default App;
