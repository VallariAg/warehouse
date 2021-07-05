import { gql, useMutation } from "@apollo/client"

export default function useDoesUserExist(username) {
    const [addUser, { data }] = useMutation(CREATEUSER);
    
    console.log(data);
    addUser({variables: { username }});
    
    return true;
} 


const CREATEUSER = gql`
mutation CREATEUSER($username: String) {
  insert_users(objects: {username: $username}) {
    returning {
      username
    }
  }
}

`
