import React, {useState} from "react";

const Login = function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChange = event => {
        const {value} = event.target;
        setUsername(value);
    };

    const onSubmit = event => {
        event.preventDefault();
        const inputs = {username: username};
        console.log("send info to server" + inputs);
    }

    return (
      <div>
        <form onChange={onChange} onSubmit={onSubmit}>
          <input type="text"></input>
          <button type="submit" onSubmit={onSubmit}>
            submit
          </button>
        </form>
      </div>
    );
}

export default Login;

