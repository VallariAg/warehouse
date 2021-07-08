import { gql, useMutation } from "@apollo/client"

export default function useCreateLink() {
    const [ createLink, { loading: mutationLoading, error: mutationError } ] = useMutation(CREATE_LINKDATA);

    return { createLink, mutationError, mutationLoading };
}

const CREATE_LINKDATA = gql`
mutation CREATE_LINKDATA($description: String, $link: String, $title: String, $board_id: Int) {
    insert_link_data(objects: {board_id: $board_id, title: $title, link: $link, description: $description}) {
        returning {
        board {
        board_id
        link_data {
          description
          id
          link
          title
        }
        board_name
      }
    }
  }
}
`
