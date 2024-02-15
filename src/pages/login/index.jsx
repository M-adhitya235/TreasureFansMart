import { useNavigate } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Footer from "../../components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    navigate("/");
  };

  return (
    <aside className="">
      <div className="sidebar md:flex">
        <div className={`hidden md:inline-block flex-1 bg-no-repeat bg-cover bg-[url('src/assets/buketuang.jpg')]`}>

        </div>
        <div className="h-screen flex-1 flex flex-col justify-center bg-white">
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        
        </div>
      </div>
      <Footer />
    </aside>
  );
};

export default Login;
