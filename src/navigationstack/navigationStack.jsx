import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomeScreen } from "../screens/homeScreen"
import { AboutScreen } from "../screens/aboutScreen"
import Navbar from "../components/header"
import { RegisterScreen } from "../screens/registerscreen"
import { LoginScreen } from "../screens/loginscreen"
import { OwnerDetailsScreen } from "../screens/ownerDetailsScreen"
import { ParkList } from "../components/parkList.jsx/parkList"

export const NavigationStack=()=>{
    return(
        <>
        
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/about" element={<AboutScreen/>}/>
            <Route path="/register" element={<RegisterScreen/>}/>
            <Route path="/login" element={<LoginScreen/>}/>
            <Route path="/ownerDetails" element={<OwnerDetailsScreen/>}/>
            <Route path="/parkList" element={<ParkList/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}