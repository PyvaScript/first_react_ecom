import {Routes, Route} from 'react-router-dom';
import Home from "./routes/home/home.component.jsx";
import Navigation from "./routes/navigation/navigation.component.jsx";
import SignIn from "./routes/navigation/sign-in/sign-in.component";

const Shop=()=>{
  return (
    <h1 style={{paddingLeft:"1rem",}}>I love Ingrid with all my heart and soul!!</h1>
  )
}

const App=()=>{
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
      </Route>
    </Routes>
  )
}

export default App;
