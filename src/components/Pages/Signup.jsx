import BrowseCategory from "../BrowseCategory";
import SignupForm from "../Auth/SignupForm";

const Signup = ({signup}) => {
  return (
    <section className="pb-20 mt-35 overflow-hidden bg-gray-2">
      <SignupForm signup={signup}/>
      <BrowseCategory />
    </section>
  )
}
export default Signup;