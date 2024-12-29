import Tour from "./pages/Tour";
import { Home, Layout, TripDetails } from "./utils/Route";
import { Route,  HashRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
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
  </Router>
  );
}

export default App;
