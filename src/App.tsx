import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Login from "./pages/Login/Login";
import Toast from "./components/Toast/Toast";
import Header from "./components/Header/Header";
import PostDetail from "./pages/PostDetail/PostDetail";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </main>
      <Toast />
    </BrowserRouter>
  );
}

export default App;
