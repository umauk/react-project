
import './App.css'
import LoginValidations from './components/formvalidations/loginvalidations';
import Navbar from './components/header';
import ContactForm from './components/ownerDetails/contactForm';
import ContactInfo from './components/ownerDetails/contactInformation';
import OwnerDetails from './components/ownerDetails/ownerDetails';
import { ParkList } from './components/parkList.jsx/parkList';
import { NavigationStack } from './navigationstack/navigationStack';
import { HomeScreen } from './screens/homeScreen';
import { OwnerDetailsScreen } from './screens/ownerDetailsScreen';



function App() {
  /*useEffect(async ()=>{
    const response=await axios.get("http://localhost:3000/userDetails")
    console.log(response.data)
  },[])*/
  

  return (
    <>
   
    
   <NavigationStack/>
   
    </>
  );
}

export default App;
