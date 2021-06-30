import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
// components
import ProfileHeader from "./ProfileHeader";
import Card from "./BoardCard"


export default function ProfilePage() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  let isSelfProfile = false;
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (user) { isSelfProfile = true }

  console.log(user, isAuthenticated);
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

