import { createContext, useState } from "react";

export const AlertContext = createContext();

export default AlertContext;

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  const Alert = (msg) => {
    setAlert(() => msg);

    setTimeout(() => setAlert(null), 5000);
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
