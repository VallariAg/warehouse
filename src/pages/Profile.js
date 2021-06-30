import cardDefaultImg from "./../static/card-bg.png"
import { useAuth0 } from "@auth0/auth0-react";

function Card() {
    return (
        <a href="#" className="mx-1 my-0 bg-gray-50 p-1 rounded-lg ">
          <img className="w-full rounded-md" src={cardDefaultImg}></img>
          <div className="relative bg-gray-50 sm:p-3 p-3 w-full">
            {/* <div className="px-1"> */}
              <span className="mt-1 text-lg leading-tight font-medium text-gray-700"> Some long  long Title </span>
              <span className="text-gray-500 right-0 float-right"> 5 links </span>
            {/* </div> */}
          </div>
        </a>
    )
}

function ProfileHeader() {
  return(
    <div className="grid justify-center my-5">
      <div class="rounded-full text-gray-600 text-5xl justify-self-center my-2 h-32 w-32 flex items-center justify-center bg-blue-50">V</div>
      <h1 className="text-2xl justify-self-center">Vallari Agrawal</h1>
      <h3 className="text-gray-700 text-md justify-self-center">@username</h3>
      <h3 className="text-gray-700 text-lg justify-self-center">
        <a href="#" className="text-gray-800">10 Followers</a> . <a href="#" className="text-gray-800">10 Following</a> 
      </h3>
    </div>
  )
}

export default function ProfilePage() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>
  }

  console.log(user);
  console.log(user.username, user.user_id);

  return (
      <div className="relative items-center justify-center lg:px-14 md:px-3 sm:px-1">
          <ProfileHeader username={user} />
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

