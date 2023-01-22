import Nav from "../components/Nav";
export default function home({ children }) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Nav />
      {children}
    </section>
  );
}
