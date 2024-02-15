import { useNavigate } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
// import { background } from "../../assets/gambar.png";

const Register = () => {
  const navigate = useNavigate();
  const handleLoginSuccess = () => {
    navigate("/");
  };

  return (
    <aside className="">
      <div className="sidebar md:flex">
        <div className={`hidden md:inline-block flex-1 bg-no-repeat bg-cover bg-[url('src/assets/gambar.png')]`}>

        </div>
        <div className="h-screen flex-1 flex flex-col justify-center bg-white">
          <RegisterForm onLoginSuccess={handleLoginSuccess} />
        </div>
      </div>
    </aside>
  );
};

export default Register;