import './App.css';
import setAuthTokenApi from './utils/setAuthToken';

import Layout from './components/Layout/Layout';
import {AuthProvider }from './context/AuthContext'


if (localStorage.authToken) {
  setAuthTokenApi(localStorage.authToken);
}


function App() {
  return (
    <AuthProvider>
      <Layout />
   </AuthProvider>
  );
}

export default App;
