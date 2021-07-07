import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// components
import Loading from "./../../components/Loading";
import Error from "./../../components/Error";
// custom hooks
import useGetLinks from "../../hooks/Links/useGetLink";
import Links from "./Links";



export default function BoardPage() {

  let { username, boardname } = useParams();
  const boardData = useGetLinks(username, boardname);

  // check if current profile is user's own profile 
  let isSelfProfile = false;
  const { user, isLoading } = useAuth0();

  if (isLoading) return <Loading />

  if (user) { // a user is logged in
    user["username"] = user['https://myapp.example.com/username'];
    if (user.username === username){
      isSelfProfile = true;
    }
  }

  // no user in database
  if (!boardData) { 
     return <div className="text-200 text-gray-600 my-24 text-center">No such board exists</div>
  }

  if (boardData.loading ===  true) return <Loading />
  if (boardData.error) return <Error error={boardData.error} />

  return (
      <Links isSelfProfile={isSelfProfile} boardData={boardData} />
  );
}



