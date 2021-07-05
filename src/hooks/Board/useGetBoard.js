import { gql, useQuery } from "@apollo/client"

export default function useGetBoards(username) {
    const { data, loading, error } = useQuery(GETUSERBOARDS, { variables: { username: username } });
    
    if (loading) return { loading: true };
    if (error) return {"error": error};

    // no such user exist
    if (data.users.length === 0) return null;
 
    const userData = { username: data.users[0].username, boards: data.users[0].boards };
    if (!userData.boards) userData.boards = [];
    return userData;
} 



const GETUSERBOARDS = gql`
query MyQuery($username: String) {
  users(where: {username: {_eq: $username}}) {
    username
    boards {
      board_img
      board_id
      board_name
      link_data_aggregate {
        aggregate {
          count(columns: link)
        }
      }
    }
  }
}
`
