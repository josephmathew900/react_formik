//import "./reactformik.css";
//import YoutubeForm from "./react_formik_demo/YoutubeForm";
import LoginForm from "./formik_controls_demo/LoginForm";
//import RegistrationForm from "./formik_controls_demo/RegistrationForm";
//import FormikContainer from "./formik_controls_demo/FormikContainer";

import "./formikcontrol.css";
//import EnrollmentForm from "./formik_controls_demo/EnrollmentForm";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <LoginForm />
      </div>
    </ChakraProvider>
  );
}

export default App;
