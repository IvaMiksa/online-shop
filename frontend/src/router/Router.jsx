import {Routes, Route} from "react-router-dom";
import Protector from "../pages/authenticated/Protector";
import NotFound from "../pages/public/NotFound";
import HomePage from "../pages/public/HomePage";
import LoginPage from "../pages/authenticated/LoginPage";
import RegisterPage from "../pages/authenticated/RegisterPage";
import RegisterValidationPage from "../pages/authenticated/RegisterValidationPage";


const Router = () =>  {
  return (
    <>
    <Routes>
       {/* Authentication and Registration Routes */}

       {/* Public routes */}
       <Route path="/" element={<HomePage/>}/>
       <Route path="*" element={<NotFound/>}/>
       <Route path="/login" element={<LoginPage />} />
       <Route path="/register" element={<RegisterPage />} />
       <Route path="/registervalidation" element={<RegisterValidationPage />} />

       {/* Protected routes */}
       <Route element={<Protector/>}>

       </Route>

    </Routes>
      
    </>
  )
}

export default Router
