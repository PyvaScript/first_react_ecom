import { Outlet } from 'react-router-dom';
import Directory from "../../components/directory/directory.component.jsx";

const Home=()=>{
  return (
    <div>
      <Outlet/>
      <Directory/>
      <Outlet/>
    </div>
  )
}

export default Home;
