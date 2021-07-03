import { useAuth0 } from "@auth0/auth0-react";
import { Link, useParams } from "react-router-dom";
// components
import ProfileHeader from "./ProfileHeader";
import Card from "./BoardCard"


export default function ProfilePage() {
  let isSelfProfile = false;

  let { username } = useParams();
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (username === "profile") {
    document.location = process.env.REACT_APP_URI + user['https://myapp.example.com/username'];
  }
  // if (username) {
  //   // check if username in hasura database
  // }

  if (user) {
    user["username"] = user['https://myapp.example.com/username'];
    if (user.username === username){
      isSelfProfile = true;
    }
  }

  console.log(user);

  return (
      <div className="relative items-center justify-center lg:px-14 md:px-3 sm:px-1">
          <ProfileHeader user={user} isSelfProfile={isSelfProfile} username={username} />
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
