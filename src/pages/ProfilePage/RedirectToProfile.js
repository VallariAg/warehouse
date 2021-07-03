import { useAuth0 } from "@auth0/auth0-react";

export default function RedirectToProfile() {
    const { user, isLoading } = useAuth0();

    if (isLoading) {
        return "is loading...";
    }

    const username = user['https://myapp.example.com/username'];
    document.location = process.env.REACT_APP_URI + username;
    return ("")
}
