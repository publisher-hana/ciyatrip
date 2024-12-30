import { Blog, Destination, Home, Layout, Shop, Tour, TripDetails } from "./utils/Route";
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
        <Route path ="/destination" element={
          <Layout>
            <Destination />
          </Layout>
        } />
        <Route path ="/blog" element={
          <Layout>
            <Blog />
          </Layout>
        } />
        <Route path ="/shop" element={
          <Layout>
            <Shop />
          </Layout>
        } />
        
      </Routes>
  </Router>
  );
}

export default App;
