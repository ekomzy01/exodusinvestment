import axios from "axios";
import uuid from "uuid";
import { createContext, useState } from "react";

export const AlertContext = createContext();

export default AlertContext;

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState([]);

  const Alert = (msg, type) => {
    const id = uuid.v4();
    setAlert((prev) => [...prev]);

    setTimeout(() => setAlert([]), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert,
        Alert,
      }}>
      {children}
    </AlertContext.Provider>
  );
};
