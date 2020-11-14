import { URL } from "./settings";

function ApiHandler() {
  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };

  const setUser = (userName) => {
    localStorage.setItem("user", userName);
  };

  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };

  const getUser = () => {
    return localStorage.getItem("user");
  };

  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };

  const logout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("user");
  };

  const login = (user, password) => {
    const options = makeOptions("POST", false, {
      userName: user,
      password: password,
    });
    return fetch(URL + "/api/auth/login", options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
        setUser(res.userName);
      });
  };

  const fetchData = () => {
    const options = makeOptions("GET", true);
    return fetch(URL + "/api/info/" + getUser(), options).then(
      handleHttpErrors
    );
  };

  const fetchJokes = () => {
    const options = makeOptions("GET", true);
    return fetch(URL + "/api/fun/jokes", options).then(handleHttpErrors);
  };

  const fetchDataAdmin = () => {
    const options = makeOptions("GET", true);
    return fetch(URL + "/api/info/allUsers", options).then(handleHttpErrors);
  };

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };

  return {
    makeOptions,
    setToken,
    getUser,
    getToken,
    loggedIn,
    login,
    logout,
    fetchData,
    fetchDataAdmin,
    fetchJokes,
  };

  function handleHttpErrors(res) {
    if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() });
    }
    return res.json();
  }
}

const handler = ApiHandler();
export default handler;
