import { createContext, useState,useEffect } from "react"
import { onAuthStateChangedListener ,createUserDocumentfromAuth} from "../utils/firebase";
export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [toaster, setToaster] = useState(false);
  const value = { currentUser, setCurrentUser ,toaster ,setToaster};
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentfromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};