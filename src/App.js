import styles from './App.module.css';
import Header from './components/Header'
import Nav from './components/Nav'
import SideNavbar from './components/SideNavbar'
import Specialty from './components/Specialty'
import Specialties from './components/Specialties'
import data from './sample-data'
import Modal from './components/Modal'

function App() {
  console.log(data);

  return (
    <>
      <div className="App">
        <SideNavbar />
        <main className={`${styles.mainContainer}`} >
          <Header />
          <Nav />
          <Specialties specialties={data} />
          <Specialty specialties={data} />
        </main>
      </div>
      <Modal isOpen={true}>
        <h2>Test Model</h2>
        <div>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto tenetur reprehenderit, voluptas veritatis enim repudiandae voluptate error dolorem unde sunt repellat hic impedit saepe tempore minus, culpa dolor corporis. Molestias.
        </div>
      </Modal>
    </>
  );
}


export default App;
