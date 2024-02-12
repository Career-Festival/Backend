// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import DetailFestivalPage from "./pages/DetailFestivalPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Community from "./components/home/Community";
import Diary from "./components/diary/Diary";
import AddDiary from "./components/diary/AddDiary";
import Participant from "./components/signup/Participant";
import Organizer from "./components/signup/Organizer";
import FestivalListPage from "./pages/FestivalListPage";
import RegisterPage from "./pages/RegisterPage";
import ExhibitionFair from "./components/diary/ExhibitionFair";
import LectureSeminar from "./components/diary/LectureSeminar";
import Other from "./components/diary/Other";
import Symposium from "./components/diary/Symposium";
import DiaryHeader from "./components/header/DiaryHeader";
import MyPage from "./pages/MyPage";
import OrganizationInfoPage from "./pages/OrganizationInfoPage";
import FooterTwo from "./components/footer/FooterTwo";
import { AuthProvider } from "./context/AuthContext";

import "./App.css";
import Level1 from "./components/Enroll/Level1";
import Level2 from "./components/Enroll/Level2";
import Level3 from "./components/Enroll/Level3";
import Level4 from "./components/Enroll/Level4";
//import Level5 from "./components/Enroll/Level5";
import Level6 from "./components/Enroll/Level6";
import Level7 from "./components/Enroll/Level7";
import OrganizationMypage from "./pages/OrganizationMypage";

function App() {
  return (
    <Router>
      <AuthProvider>
      <div className="App">
        <Routes>
          {/* 홈페이지 */}
          <Route path="/" element={<><HomePage /><Footer /></>} />
          {/* 로그인,회원가입 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<><SignupPage /><FooterTwo/></>} />
          <Route path="/participant" element={<Participant />} />
          <Route path="/organizer" element={<Organizer />}/>
          {/* 기록장 */}
          <Route path="/diary" element={<><DiaryHeader /><Diary /><Footer /></>} />
          <Route path="/addDiary" element={<><DiaryHeader /><AddDiary /><Footer /></>} />
          <Route path="/diary/exhibitionfair" element={<><DiaryHeader /><ExhibitionFair /><Footer /></>} />
          <Route path="/diary/lectureseminar" element={<><DiaryHeader /><LectureSeminar /><Footer /></>} />
          <Route path="/diary/other" element={<><DiaryHeader /><Other /><Footer /></>} />
          <Route path="/diary/symposium" element={<><DiaryHeader /><Symposium /><Footer /></>} />
          {/* 행사목록 */}
          <Route path="/festival-list" element={<><Header /><FestivalListPage /><Footer /></>} />
          <Route path="/detail" element={<><Header /><DetailFestivalPage /><Footer /></>} />
          {/* 커뮤니티 */}
          <Route path="/community" element={<><Header /><Community /><Footer /></>} />
          <Route path="/mypage" element={<><Header /><MyPage /><Footer /></>} />
          {/* 행사 등록하기 */}
          <Route path="/register" element={<><RegisterPage /></>} />
          <Route path="/register/Level1" element={<><Level1 /></>} />
          <Route path="/register/Level2" element={<><Level2 /></>} />
          <Route path="/register/Level3" element={<><Level3 /></>} />
          <Route path="/register/Level4" element={<><Level4 /></>} />
          {/*<Route path="/register/Level5" element={<><Header /><Level5 /><Footer /></>} />*/}
          <Route path="/register/Level6" element={<><Level6 /></>} />
          <Route path="/register/Level7" element={<><Level7 /></>} />

          {/* 주최자 상세페이지 */}
          <Route path="/organizationinfo/:OrganizationName" element ={<><Header/><OrganizationInfoPage/><Footer/></>} />
          {/*마이페이지*/}
          <Route path="organization-mypage" element ={<><Header/><OrganizationMypage/><Footer/></>} />
        </Routes>
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
