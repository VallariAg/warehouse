import { gql, useMutation } from "@apollo/client";


export default function useCreateBoard() {
    const [addBoardWithImg] = useMutation(CREATE_BOARD_WITH_IMG);
    const [addBoard] = useMutation(CREATE_BOARD);
  
    return { addBoard, addBoardWithImg };
}


const CREATE_BOARD = gql`
mutation CREATE_BOARD($username: String, $board_name: String)  {
  insert_boards(objects: {username: $username, board_name: $board_name}) {
    returning {
      username
      board_name
      board_img
      link_data_aggregate {
        aggregate {
          count
        }
      }
    }
  }
}
`

const CREATE_BOARD_WITH_IMG = gql`
mutation CREATE_BOARD_WITH_IMG($username: String, $board_name: String, $board_img: String) {
  insert_boards(objects: {username: $username, board_name: $board_name, board_img: $board_img}) {
    returning {
      username
      board_name
      board_img
      link_data_aggregate {
        aggregate {
          count
        }
      }
    }
  }
}
`
