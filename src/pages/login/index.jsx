import { useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
<<<<<<< HEAD
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
=======
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

>>>>>>> f3e9945 (tfm progress)

const Login = () => {
  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    navigate("/");
  };

  return (
    <aside className="">
<<<<<<< HEAD
      <Navbar />
=======
      <Navbar/>
>>>>>>> f3e9945 (tfm progress)
      <div className="sidebar md:flex">
        <div className={`hidden md:inline-block flex-1 bg-no-repeat bg-cover bg-[url('src/assets/buketuang.jpg')]`}>

        </div>
        <div className="h-screen flex-1 flex flex-col justify-center bg-white">
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        
        </div>
<<<<<<< HEAD
      </div>
      <div style={{ height: "100px" }}></div>
      <Footer />
=======
      </div> 
      <Footer/>
>>>>>>> f3e9945 (tfm progress)
    </aside>
  );
};

export default Login;
