import './App.css';
import LoginPage from './login/LoginPage/LoginPage';
import FruitAi from './home/FruitAi/FruitAi';
import HelloChat from './chatbot/HelloChat/HelloChat';
import FruitAii from './FruitAI/FruitAI';
import About from './about/FruitAi/FruitAi';
import Faq from './faq/FruitFAQ/FruitFAQ';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<FruitAi />} />
          <Route path="/home/chatbot" element={<HelloChat />} />
          <Route path="/home/chat1" element={<FruitAii />} />
          <Route path="/home/about" element={<About />} />
          <Route path="/home/faq" element={<Faq />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
