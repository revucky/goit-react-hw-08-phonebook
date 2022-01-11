import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../../redux/auth/AuthSelectors";

export default function PublicRoute({
  children,
  restricted = false,
  ...routPr
}) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routPr}>{shouldRedirect ? <Redirect to="/" /> : children}</Route>
  );
}
