import BrowseCategory from '../BrowseCategory.jsx';
import LoginForm from '../Auth/LoginForm.jsx';

const Login = ({ login }) => {
return (
    <section className="pb-20 mt-35 overflow-hidden bg-gray-2">
      <LoginForm login={login}/>
      <BrowseCategory />
    </section>
)}
export default Login;