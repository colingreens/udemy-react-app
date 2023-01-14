import { useState, useContext } from "react";

import { AuthContext } from "../../shared/context/auth-context";
import Card from "../../shared/components/UIElements/Card";
import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import useForm from "../../shared/hooks/form-hook";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

import "./Auth.css";

export default function Auth() {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  function authSubmitHandler(event) {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  }

  function switchModeHandler() {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  }

  return (
    <Card>
      <h2>Login Required</h2>
      <hr />
      <form className="authentication" onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        )}
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please Enter a valid email address"
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please Enter a valid password of 5 characters"
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "Login" : "Signup"}
        </Button>
        <Button inverse onClick={switchModeHandler}>
          Switch To {isLoginMode ? "Signup" : "Login"}
        </Button>
      </form>
    </Card>
  );
}
