import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login";
import HomePage from "../pages/Home";
import SignupFirstPage from "../pages/Signup/first";
import SignupSecondPage from "../pages/Signup/second";
import PostDetail from "../components/common/Table/Detail";
import WritingPage from "../pages/Writing";
import CategoryPage from "../pages/Category";

const Router = () => {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<SignupFirstPage />} path="/Signup" />
      <Route element={<SignupSecondPage />} path="/SignupSecond" />
      <Route element={<PostDetail />} path="/detail" />
      <Route element={<WritingPage />} path="/write" />
      <Route element={<CategoryPage />} path="/category" />
    </Routes>
  );
};

export default Router;
