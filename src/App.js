import styles from './App.module.css';
import Header from './components/Header'
import Nav from './components/Nav'
import SideNavbar from './components/SideNavbar'
import Specialty from './components/Specialty'
import Specialties from './components/Specialties'
import data from './sample-data'

function App() {

  console.log(data);

  return (
    <div className="App">
      <SideNavbar />
      <main className={`${styles.mainContainer}`} >
        <Header />
        <Nav />
        <Specialties specialties={data}/>
        <Specialty specialties={data} />
      </main>
    </div>
  );
}


export default App;
