import './App.css';

import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import {Cloudinary} from "@cloudinary/url-gen";



// Pages
import Community from './pages/Community';
import Find from './pages/Find';
import List from './pages/List';
// import Map from './pages/Map';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import SignUpBusiness from './pages/SignUpBusiness';
import EditUserProfile from './pages/EditUserProfile';
import YourProfile from './pages/YourProfile';
import ProfileBusiness from './pages/ProfileBusiness';





function App() {

  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: 'dqfsyl5rv'
  //   }
  // });




  return (
    <>
    
    <Router>
    <Routes>
     
     <Route path='/join' element={<SignUp />}/>
     <Route path='/joinbiz' element={<SignUpBusiness />}/>
     <Route path='/list' element={<List />}/>
     <Route path='/find' element={<Find />}/>
     <Route path='/community' element={<Community />}/>
     <Route path='/editprofile' element={<EditUserProfile />}/>
     <Route path="/profile/" element={<YourProfile />} />
     <Route path="/profile/:id" element={<Profile />} />
     <Route path="/biz/:id" element={<ProfileBusiness />} />
    </Routes>
    
    </Router>
    
    </>
  );
}

export default App;
