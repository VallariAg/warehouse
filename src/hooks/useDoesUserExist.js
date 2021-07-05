import { gql, useQuery } from "@apollo/client"

export default function useDoesUserExist(username) {
    const { data, loading } = useQuery(GETUSER, { variables: {username} });
    // if ((data.users).length === 1) {
        // return true;
    // }
    if (loading) return true;
    console.log(data)
    return true;
} 



const GETUSER = gql`
query GETUSER($username:String) {
  users(where: {usernames: {_eq: $username}}) {
    usernames
  }
}
`

