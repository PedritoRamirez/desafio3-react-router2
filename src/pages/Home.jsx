import pikaChu from "../assets/img/pikachu.png"
function Home() {
  return (
    <>
      <div className="contHome">
        <h1>Bienvenido Maestro Pokemon</h1>
        <img src={pikaChu} alt="Pikachu" className="pikachu" />
      </div>
    </>
  );
}

export default Home;
