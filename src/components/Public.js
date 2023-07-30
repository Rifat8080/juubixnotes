import { Link } from 'react-router-dom';

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">JuubixNotes!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Juubix, a new fintech start up that growing with it's talented hard
          workers
        </p>
        <address className="public__addr">
          Juubix
          <br />
          555 Foo Drive
          <br />
          Foo City, CA 12345
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
        <br />
        <p>Owner: Juubix Fintech</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );
  return content;
};
export default Public;
