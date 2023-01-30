import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./Home";
import Results from "./Results";

interface response {
  data: {
    continents: string[];
    cost: string[];
    landscape: string[];
  };
}

const RouteSwitch = () => {
  const [response, setResponse] = useState<object>({});

  return (
    <BrowserRouter>
      <div className="index-page">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Home updateResults={(res: response) => setResponse(res.data)} />
            }
          />
          <Route path="/results" element={<Results results={response} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;
