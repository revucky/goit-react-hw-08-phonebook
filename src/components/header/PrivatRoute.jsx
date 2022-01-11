import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import authSelectors from "../../redux/auth/AuthSelectors";

function PrivatRoute({ children, ...routPr }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Route {...routPr}>{isLoggedIn ? children : <Redirect to="/" />}</Route>
  );
}

export default PrivatRoute;
