import '../Main/Button.css';
import { useNavigate } from 'react-router-dom';


function Button() {
    const navigate= useNavigate();

    return(
        <div className='button-container'>
    <button onClick={()=>navigate("/submit")} className="button"> Make A Bet </button>
    </div>
);

}

export default Button 