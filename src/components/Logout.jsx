import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider"
import { useLocation, useNavigate } from "react-router-dom";

export default function logout() {
    const {logout} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";


    const handleLogout = () => {
        logout().then(() => {
            alert("Good Bye")
            alert("Sign Out successful")
            navigate(from, {replace: true});
        }).catch((e) => {
            alert("Error: "+e.message)
        })
    }
    return (
        <div className="h-screen bg-teal-100 flex items-center justify-center">
            <button onClick={handleLogout} className="bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQo9wqkMafTCUKstdyAzLIGU6caZTEu5Md4g&s)] h-100 w-75 flex items-center justify-center">  
            </button>
        </div>
    )
}