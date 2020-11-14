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
          <li>
            <NavLink to="/ged">Viden om Ged</NavLink>
          </li>
        </ul>
      </div>
    );
  }

  function Home() {
    return (
      <div>
        <h2>Nikolaj's CA3</h2>
        <p>
          For this project we initially used the startcode from the previous
          week to start from. Thereafter we started by rewriting and polish the
          backend portion of the project. After finishing up the Backend we
          moved on to the Frontend where things started unraveling fast, as we
          were ill-prepared for the REACT-portion of the project. Having had
          only two weeks to learn an entirely new syntax and leave behind most
          of the things we once used with JS.{" "}
        </p>
        <p>
          For my own part of this, using our own startcode i started by making a
          simple Entity class in the backend, simply named Goat, Goat does not
          have any relations to anything else in the project what so ever, as it
          was only requested that we make "1 or more additional entity classes".
          After that i made a new method in the joke facade to fetch a singular
          joke from the dad joke api, which i then attached a Endpoint, which is
          not used anywhere in the frontend what so ever as it was only
          requested that we "Include a call to at least one external server(s)
          from your backend", and not that we then use said endpoint on the
          frontend. For the frontend i made a new NavLink page where you can
          read facts about goats in danish, remember it is mandatory that you
          read the whole document about goats as it has more knowledge about the
          goat than you'll otherwise need to know.
        </p>
        <p>
          Alltogether it has been a horrible project, and it is of my opinion
          that the second part of the assignment should not have been there as
          while it does have its merits, the project it self, the startcode that
          we set out to make was of a higher importance in terms of quality as
          it is to be used for the semester project. Putting unnecessary extra
          pressure on an already important project.
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

  function GedInfo() {
    return (
      <div>
        <h2>Vigtig viden om Geden</h2>
        <ul>
          <li>
            <p>
              Geden har været holdt som husdyr længe før man begyndte at holde
              køer.
            </p>
          </li>
          <li>
            <p>Geden kom til Danmark for ca. 6000 år siden.</p>
          </li>
          <li>
            <p>
              Den er rigtig god til at holde krat nede, og den kan klare sig i
              områder, hvor andre dyr har svært ved at finde føde. Den kan bl.a.
              leve i klippeområder med meget lidt bevoksning.
            </p>
          </li>
          <li>
            <p>
              Der findes forskellige typer af geder. Nogle geder blev brugt som
              pak- og lastedyr, andre blev brugt som kødleverandør, og så var
              der nogle, der blev brugt som malkegeder.
            </p>
          </li>
          <li>
            <p>
              Gederne har haft op og nedture i Danmark. Omkring1700 gik det ikke
              godt for gederne, fordi det blev forbudt at lade gederne gå frit
              omkring i skovene. Det var den måde, man plejede at holde geder
              på. Nu skulle gederne holdes indhegnet eller tøjret istedet.
              Gederne fik et opsving omkring 1. verdenskrig, hvor mange
              landarbejdere holdt geder, der græssede i grøftekanten. Da de
              sociale forhold efterhånden blev bedre, faldt antallet af geder,
              men under 2. verdenskrig steg antallet igen. Geden fik øgenavnet
              fattigmandsko. Efter krigen blev den almindelige velstand
              forbedret, og geden fik atter tilbagegang. Man købte nemlig komælk
              istedet.
            </p>
          </li>
          <li>
            <p>
              I naturen lever gederne sammen i flokke af 25-30 geder i alle
              aldre anført af en voksen buk. Der er rangorden i en gedeflok, der
              strengt respekteres.
            </p>
          </li>
          <li>
            <p>
              Der findes 7 gederacer i Danmark, og en af dem er Landracegeden,
              der findes i 7 farvevarianter. Den ene farvevariant er den blå
              landraceged. Det specielle ved denne ged er, at denne farve har
              været på randen af udryddelse, og dette til trods for, at det er
              en farve, der har været almindelig hos landracegeden før i tiden.
              Grunden til at det kunne gå så galt var, at man troede, at geder
              med den blå farve var krydsninger med dværggeder, der nemlig
              findes i den blå farve. Fik man et blåt kid, var det jo pinligt,
              fordi man troede , at det ikke var et rent landracekid!
            </p>
          </li>
          <li>
            <p>
              Landracegeden har aner tilbage til de allerførste geder, der kom
              til Danmark. Det er en robust malkeged, der leverer fra 500 kg -
              1000 kg mælk om året.
            </p>
          </li>
          <li>
            <p>Den har et omgængeligt og livligt temperament.</p>
          </li>
          <li>
            <p>
              Den har som regel horn, og pelsen er kort eller lang med underuld
              og dækhår.
            </p>
          </li>
          <li>
            <p>
              På grund af deres rangorden, vil førergeden komme ind i
              malkestalden først, dernæst nr. 2 i rangordenen osv. Når gederne
              bliver malket, bliver de fodret med kraftfoder, som de godt kan
              lide.
            </p>
          </li>
          <li>
            <p>
              Her findes mange malkebesætninger i Danmark. Der er ca. 5000
              geder, der bliver malket. Der findes endda også et par enkelte
              private mejerier, hvor der bliver lavet gedeost. Udover mælken,
              bruger man både kød, uld og skind fra geden. Bl.a. er filet’en en
              yndet spise. Gedeulden er utrolig varm, og ulden bruges bla. til
              sjaler. Skindet bruger man til sko og handsker.
            </p>
          </li>
          <li>
            <p>
              Man kan f.eks. bruge geden som græsslåmaskine eller til at fjerne
              tornekrat, da geden hellere vil have det lidt stride foder fremfor
              saftigt grønt græs.
            </p>
          </li>
          <li>
            <p>
              Mange geder bliver holdt som kæledyr ude på landet. Geder er
              nemlig som regel sjove og venlige. Hvis man vil holde geder, er
              det vigtigt at gederne trives. De kan godt lide at have plads til
              at boltre sig på. Hvis der mulighed for at klatre, vil gederne
              værdsætte det. Oprindeligt levede gederne nemlig i bjergene. Nogle
              mennesker tøjrer deres geder, men det bør kun betragtes som en
              midlertidig løsning, da gederne helst skal kunne bevæge sig frit
              omkring og have plads. De små gedekid springer rundt og spjætter
              med benene, og det er for at styrke deres muskler.
            </p>
          </li>
          <li>
            <p>
              I nogle afrikanske stammer anvendes geder som betalingsmiddel,
              f.eks. ved brudekøb.
            </p>
          </li>
          <li>
            <p>
              Der findes mange geder i Grækenland, Spanien, Italien, Frankrig,
              Tyskland og Schweiz. I Schweiz er der mange forskellige racer af
              malkegeder. Der findes i alt ca. 6000 geder i Danmark. (Oplysning
              fra 1997.) Omkring 1. verdenskrig var der 40.000 geder i Danmark.
            </p>
          </li>
        </ul>
        <h2>Quick Facts om geden</h2>
        <ul>
          <li>
            <p>Der findes 7 gederacer i Danmark.</p>
          </li>
          <li>
            <p>Den blå landraceged har været betragtet som næsten uddød.</p>
          </li>
          <li>
            <p>
              Den blå landraceged blev godkendt i 1993, til trods for, at farven
              er en oprindelig farve.
            </p>
          </li>
          <li>
            <p>Landracegeden findes i 7 farvevarianter.</p>
          </li>
          <li>
            <p>En ged kan blive ca. 15 år gammel.</p>
          </li>
          <li>
            <p>En ged får mellem 1 og 4 kid af gangen.</p>
          </li>
          <li>
            <p>
              Bezoargeden, der stadig lever vildt i bjergene i Asien, er
              stamfader til vores tamme geder.
            </p>
          </li>
          <li>
            <p>Man bruger uld, skind, kød og mælk fra geden.</p>
          </li>
          <li>
            <p>En ged kan give op til 1000 liter mælk på 1 år.</p>
          </li>
          <li>
            <p>Mælken bruges til fremstilling af ost.</p>
          </li>
          <li>
            <p>Gedemælken bruges til komælksallergikere.</p>
          </li>
          <li>
            <p>Mange geder holdes som kæledyr.</p>
          </li>
          <li>
            <p>Geden kom til Danmark for ca. 6000 år siden.</p>
          </li>
          <li>
            <p>Geden er et pattedyr af Capra slægten</p>
          </li>
        </ul>
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
            <Route path="/ged">
              <GedInfo />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
