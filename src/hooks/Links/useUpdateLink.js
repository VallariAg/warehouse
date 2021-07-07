import { gql, useMutation } from "@apollo/client"

export default function useUpdateLink() {
    const [ updateLink ] = useMutation(UPDATE_LINKDATA);

    return updateLink;
}

const UPDATE_LINKDATA = gql`
mutation MyQuery($id: Int, $description: String, $link: String, $title: String) {
  update_link_data(where: {id: {_eq: $id}}, _set: {description: $description, link: $link, title: $title}) {
    returning {
      description
      id
      link
    }
  }
}`
