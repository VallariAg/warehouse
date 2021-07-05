import { gql, useMutation } from "@apollo/client"

export default function useDoesUserExist(username) {
    const [addTodo, { data }] = useMutation(CREATEUSER);
    
    console.log(data);
    addTodo({variables: { username }});
    
    return true;
} 


const CREATEUSER = gql`
mutation MyQuery($username: String) {
  insert_users(objects: {usernames: $username}) {
    returning {
      usernames
    }
  }
}
`
