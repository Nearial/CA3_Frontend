import React, { useState, useEffect } from "react";
import facade from "./ApiHandler";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onChange={onChange}>
        <input placeholder="User Name" id="username" />
        <input placeholder="Password" id="password" />
        <button onClick={performLogin}>Login</button>
      </form>
    </div>
  );
}

function LoggedIn() {
  const [dataFromServer1, setDataFromServer1] = useState("Loading...");
  const [dataFromServer2, setDataFromServer2] = useState("Loading...");

  useEffect(() => {
    facade.fetchData().then((data) => setDataFromServer1(data.userName));
  }, []);

  useEffect(() => {
    facade.fetchData().then((data) => setDataFromServer2(data.fullName));
  }, []);

  return (
    <div>
      <h2>Your Profile:</h2>
      <h4>Your Username: {dataFromServer1}</h4>
      <h4>Your Name: {dataFromServer2}</h4>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logout = () => {
    facade.logout();
    setIsLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setIsLoggedIn(true));
  };

  function Header() {
    return (
      <div>
        <ul className="header">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/jokes">Jokes</NavLink>
            </li>
          )}
          <li>
            <NavLink to="/profile">User Profile</NavLink>
          </li>
          {isLoggedIn && (
            <li>
              <NavLink to="/userlist">Userlist</NavLink>
            </li>
          )}
        </ul>
      </div>
    );
  }

  function Home() {
    return (
      <div>
        <h2>CA3</h2>
        <p>
          Welcome to team NewBiz's CA3 Project, are you sure you are old enough
          to be here...
        </p>
      </div>
    );
  }

  function About() {
    return (
      <div>
        <h2>Welcome To CA3</h2>
        <p>
          In This Project We Will Obnoxiously Start Every Word With An
          Uppercased Letter, This is Not Programmed, I Actually Wrote It.{" "}
        </p>
      </div>
    );
  }

  function Jokes() {
    const [dataFromServer1, setDataFromServer1] = useState("Loading...");
    const [dataFromServer2, setDataFromServer2] = useState("Loading...");
    const [dataFromServer3, setDataFromServer3] = useState("Loading...");
    const [dataFromServer4, setDataFromServer4] = useState("Loading...");
    const [dataFromServer5, setDataFromServer5] = useState("Loading...");
    const [refsFromServer1, setRefsFromServer1] = useState("Loading...");
    const [refsFromServer2, setRefsFromServer2] = useState("Loading...");
    const [refsFromServer3, setRefsFromServer3] = useState("Loading...");
    const [refsFromServer4, setRefsFromServer4] = useState("Loading...");
    const [refsFromServer5, setRefsFromServer5] = useState("Loading...");

    useEffect(() => {
      facade.fetchJokes().then((data) => setDataFromServer1(data[0].joke));
    }, []);
    useEffect(() => {
      facade.fetchJokes().then((data) => setDataFromServer2(data[1].joke));
    }, []);
    useEffect(() => {
      facade.fetchJokes().then((data) => setDataFromServer3(data[2].joke));
    }, []);
    useEffect(() => {
      facade.fetchJokes().then((data) => setDataFromServer4(data[3].joke));
    }, []);
    useEffect(() => {
      facade.fetchJokes().then((data) => setDataFromServer5(data[4].joke));
    }, []);
    useEffect(() => {
      facade.fetchJokes().then((data) => setRefsFromServer1(data[0].ref));
    }, []);
    useEffect(() => {
      facade.fetchJokes().then((data) => setRefsFromServer2(data[1].ref));
    }, []);
    useEffect(() => {
      facade.fetchJokes().then((data) => setRefsFromServer3(data[2].ref));
    }, []);
    useEffect(() => {
      facade.fetchJokes().then((data) => setRefsFromServer4(data[3].ref));
    }, []);
    useEffect(() => {
      facade.fetchJokes().then((data) => setRefsFromServer5(data[4].ref));
    }, []);

    return (
      <div>
        <p>Joke 1: {dataFromServer1}</p>
        <p>From: {refsFromServer1}</p>
        <p>Joke 2: {dataFromServer2}</p>
        <p>From: {refsFromServer2}</p>
        <p>Joke 3: {dataFromServer3}</p>
        <p>From: {refsFromServer3}</p>
        <p>Joke 4: {dataFromServer4}</p>
        <p>From: {refsFromServer4}</p>
        <p>Joke 5: {dataFromServer5}</p>
        <p>From: {refsFromServer5}</p>
      </div>
    );
  }

  function Profile() {
    return (
      <div>
        {!isLoggedIn ? (
          <LogIn login={login} />
        ) : (
          <div>
            <LoggedIn />
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    );
  }

  function Userlist() {
    return (
      <div>
        <h2>Userlist</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Full name</th>
            </tr>
          </thead>
          <tbody>{facade.listDataAdmin()}</tbody>
        </table>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/jokes">
              <Jokes />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/userlist">
              <Userlist />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
