export default function Home() {
  return (
    <div>
      <h2>Nikolaj's CA3</h2>
      <p>
        For this project we initially used the startcode from the previous week
        to start from. Thereafter we started by rewriting and polish the backend
        portion of the project. After finishing up the Backend we moved on to
        the Frontend where things started unraveling fast, as we were
        ill-prepared for the REACT-portion of the project. Having had only two
        weeks to learn an entirely new syntax and leave behind most of the
        things we once used with JS.{" "}
      </p>
      <p>
        For my own part of this, using our own startcode i started by making a
        simple Entity class in the backend, simply named Goat, Goat does not
        have any relations to anything else in the project what so ever, as it
        was only requested that we make "1 or more additional entity classes".
        After that i made a new method in the joke facade to fetch a singular
        joke from the dad joke api, which i then attached a Endpoint, which is
        not used anywhere in the frontend what so ever as it was only requested
        that we "Include a call to at least one external server(s) from your
        backend", and not that we then use said endpoint on the frontend. For
        the frontend i made a new NavLink page where you can read facts about
        goats in danish, remember it is mandatory that you read the whole
        document about goats as it has more knowledge about the goat than you'll
        otherwise need to know.
      </p>
      <p>
        Alltogether it has been a horrible project, and it is of my opinion that
        the second part of the assignment should not have been there as while it
        does have its merits, the project it self, the startcode that we set out
        to make was of a higher importance in terms of quality as it is to be
        used for the semester project. Putting unnecessary extra pressure on an
        already important project.
      </p>
    </div>
  );
}
