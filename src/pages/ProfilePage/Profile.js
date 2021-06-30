import cardDefaultImg from "./../../static/card-bg.png"
import Logout from "../../components/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

function Card() {
    return (
        <Link to="/board" className="mx-1 my-0 bg-gray-50 p-1 rounded-lg">
          <img className="w-full rounded-md" src={cardDefaultImg}></img>
          <div className="relative bg-gray-50 sm:p-3 p-3 w-full">
              <span className="mt-1 text-lg leading-tight font-medium text-gray-700"> Some long  long Title </span>
              <span className="text-gray-500 right-0 float-right"> 5 links </span>
          </div>
        </Link>
    )
}

function ProfileHeader({user, isSelfProfile}) {
  return(
    <div className="grid justify-center my-5">
      <div class="rounded-full text-gray-600 text-5xl justify-self-center my-2 h-32 w-32 flex items-center justify-center bg-blue-50">V</div>
      <h1 className="text-2xl justify-self-center">Vallari Agrawal</h1>
      <h3 className="text-gray-700 text-md justify-self-center">@username</h3>
      { isSelfProfile ?
      <><div className="py-2 my-2 px-5 text-gray-500 bg-purple-50 rounded-xl">
          {user.email_verified === true ? "" : "Reminder: Authenticate your account through mail sent at your registered ID."}  
      </div>
      <Logout />
      {/* TODO: Create posts/boards */}
      </>
      : ""
    }  
      {/* TODO: Followers and Following
      <h3 className="text-gray-700 text-lg justify-self-center">
        <a href="#" className="text-gray-800">10 Followers</a> . <a href="#" className="text-gray-800">10 Following</a> 
      </h3> */}
    </div>
  )
}

export default function ProfilePage() {
  const { user, isLoading } = useAuth0();
  let isSelfProfile = false;
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (user) { isSelfProfile = true }

  console.log(user);
  // console.log(user.username, user.user_id);

  return (
      <div className="relative items-center justify-center lg:px-14 md:px-3 sm:px-1">
          <ProfileHeader user={user} isSelfProfile={isSelfProfile} />
          <div class=" grid lg:grid-cols-4 md:grid-cols-3 gap-2">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
  </div>
  );
}

