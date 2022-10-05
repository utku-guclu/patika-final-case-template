import { createContext, useState } from "react";

const UserContext = createContext();

function ContextProvider({ children }) {
  const [userEmail, setUserEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [display, setDisplay] = useState();

  return (
    <UserContext.Provider
      value={{
        userEmail,
        setUserEmail,
        isChecked,
        setIsChecked,
        display,
        setDisplay,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { ContextProvider, UserContext };
