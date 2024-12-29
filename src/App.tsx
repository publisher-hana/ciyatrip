import Tour from "./pages/Tour";
import { Home, Layout, TripDetails } from "./utils/Route";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={
        <Layout>
          <Home />
        </Layout>
      } />
      <Route path ="/datalist/:id" element={
        <Layout>
          <TripDetails />
        </Layout>
      } />
      <Route path ="/tour" element={
        <Layout>
          <Tour />
        </Layout>
      } />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
