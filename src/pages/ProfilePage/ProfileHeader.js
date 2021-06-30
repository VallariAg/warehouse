import Logout from "../../components/Logout";
import { Link } from "react-router-dom";

function SelfUserEditComponents({user}) {
    return (
    <>
        <div className="py-2 my-2 px-5 text-gray-500 bg-red-50 rounded-xl">
            {user.email_verified === true ? "" : "Reminder: Authenticate your account through mail sent at your registered ID."}  
        </div>
        {/* TODO: Followers and Following
        <h3 className="text-gray-700 text-lg justify-self-center">
          <a href="#" className="text-gray-800">10 Followers</a> . <a href="#" className="text-gray-800">10 Following</a> 
        </h3> */}
        <Logout />
        {/* TODO: Create posts/boards */}
    </>
    )
}

export default function ProfileHeader({user, isSelfProfile}) {
    return(
      <div className="grid justify-center my-5">
        <div class="rounded-full text-gray-600 text-5xl justify-self-center my-2 h-32 w-32 flex items-center justify-center bg-blue-50">V</div>
        <h1 className="text-2xl justify-self-center">Vallari Agrawal</h1>
        <h3 className="text-gray-700 text-md justify-self-center">@username</h3>
        { isSelfProfile ? <SelfUserEditComponents user={user} /> : "" }  
      </div>
    )
  }
