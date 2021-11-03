import styles from './App.module.css';
import Nav from './components/Nav'
import SideNavbar from './components/SideNavbar'
import Specialty from './components/Specialty'

function App() {
  return (
    <div className="App">
        <SideNavbar />
        <main className={`${styles.mainContainer}`} >
          <Nav/>
          <Specialty/>
        </main>
    </div>
  );
}


export default App;
