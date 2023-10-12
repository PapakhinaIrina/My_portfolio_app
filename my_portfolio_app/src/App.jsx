import React, {Suspense} from "react"
import { Layout } from "./app/Layout"
import { RouterProvider } from "./app/providers"
import { Router } from "./pages/index" 
import "./18n"

function App() {
  return (
    <Suspense fallback={          
    <di>Loading...</di>}>
      <RouterProvider>
        <Layout>
          <Router />
        </Layout>
      </RouterProvider>
    </Suspense>
  );
}
export default App;
