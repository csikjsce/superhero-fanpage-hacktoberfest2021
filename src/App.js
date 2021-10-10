import './App.css';
import logo from './assets/logo2.png';
import iron_man from './assets/iron-man.jpg';
function App() {
  return (
    <div className="background">
      <img src={logo} className="logo"></img>
      <div className="superhero_container">
        <div className="photo">
          <img src={iron_man} className="superhero_photo"></img>
        </div>
        <div className="info_division">
        <div className="Author_name"> - 
            Krutika Bhatt
          </div>
          <div className="title_name">Iron Man</div>
          <div className="description">A founding member and leader of the Avengers and a genius CEO of stark industries!</div>
          <div className="powers_arrays">
            <div className="power">
              Tech Suit
            </div>
            <div className="power">
              Genius
            </div>
            <div className="power">
              Iron Armor
            </div>
            <div className="power">
              Avenger
            </div>
          </div>

          <div>
            <p className="quotes_complete">" Everyone Wants A Happy Ending, Right? But It Doesn't Always Roll That Way "</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
