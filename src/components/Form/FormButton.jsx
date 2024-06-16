import '../Form/FormButton.css';
import { useNavigate } from 'react-router-dom';


function BackButton() {
    const navigate= useNavigate();

    return(
        <div className='formbutton-container'>
    <button onClick={()=>navigate("/home")} className="formbutton"> Go Back </button>
    </div>
);

}

export default BackButton 