import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Screen/Dashboard";
import Questions from "./Pages/Questions";
import CodeChef from "./Pages/CodeChef";
import CodeForce from "./Pages/CodeForce";
import LeetCode from "./Pages/LeetCode";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/question/:contestId" element={<Questions />} />
          <Route path="/codechef" element={<CodeChef />} />
          <Route path="/codeforce" element={<CodeForce />} />
          <Route path="/leetcode" element={<LeetCode />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
