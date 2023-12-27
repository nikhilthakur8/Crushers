import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
function Auth() {
	const userData = useSelector();
	const {redirectLink}=useParams();
	const navigate = useNavigate();
	if(!userData) navigate(`/user/${redirectLink}`);
	return (
		<div>
			Authorising
		</div>
	)
}

export default Auth
