import { gql, useQuery } from "@apollo/client"

export default function useGetBoards(username, boardname) {
    const { data, loading, error } = useQuery(GETUSERLINKS, { variables: { username, boardname } });
    
    if (loading) return { loading: true };
    if (error) return { error };

    // no such user exist
    if (data.boards.length === 0) return null;
 
    return data.boards[0];
} 



const GETUSERLINKS = gql`
query GETUSERLINKS($username: String, $boardname: String) {
  boards(where: {board_name: {_eq: $boardname}, username: {_eq: $username}}) {
    link_data {
      link
      title
      id
      description
    }
    board_id
  }
}
`
