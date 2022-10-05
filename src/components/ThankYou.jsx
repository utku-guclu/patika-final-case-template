import { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function ThankYou() {
  const { userEmail } = useContext(UserContext);

  return (
    <>
      <h1>Thank you for SUBSCRIBING!</h1>
      <p>Your email is {userEmail}</p>
      <span></span>
    </>
  );
}

export default ThankYou;
