import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Form from './pages/Form';
import NotFound from './pages/NotFound';
import Registered from './pages/Registered';
import RegistrationClosed from './pages/RegistrationClosed';

const App = () => {
  return (
    <Router>
      <ChakraProvider>
        <Routes>
          <Route path="/event/:eventID/:orgID" element={<Form />} />
          <Route path="/already-registered" element={<Registered />} />
          <Route path="/registrationclosed" element={<RegistrationClosed />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
};

export default App;
