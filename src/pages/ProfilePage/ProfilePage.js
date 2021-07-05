import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
// components
import ProfileHeader from "./ProfileHeader";
import Boards from "./Boards";
// custom hooks
import useGetBoards from "../../hooks/Board/useGetBoard";



export default function ProfilePage() {

  let { username } = useParams();
  const userData = useGetBoards(username);

  // check if current profile is user's own profile 
  let isSelfProfile = false;
  const { user, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  if (user) { // a user is logged in
    user["username"] = user['https://myapp.example.com/username'];
    if (user.username === username){
      isSelfProfile = true;
    }
  }

  // no user in database
  if (!userData) { 
     return <div className="text-200 text-gray-600 my-24 text-center">No such user exists</div>
  }

  if (userData.loading ===  true) return <div>loading...</div>

  return (
      <div className="relative items-center justify-center lg:px-14 md:px-3 sm:px-1">
          <ProfileHeader user={userData} isSelfProfile={isSelfProfile} loggenInData={user} />
          <Boards boardsData={userData.boards} isSelfProfile={isSelfProfile} />
  </div>
  );
}


