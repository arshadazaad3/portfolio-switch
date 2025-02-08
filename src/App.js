import { motion } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <motion.div
          className="switch-box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "https://arshad.rootxl.com")}
        >
          Arshad Azaad
        </motion.div>

        <motion.div
          className="switch-box"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (window.location.href = "https://rootxl.com")}
        >
          RootXL
        </motion.div>
      </div>
    </div>
  );
}

export default App;
