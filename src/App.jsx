import { MoviesGrid } from "./MoviesGrid";
import styles from "./App.module.css";
import Vote from "./Vote";




export function App() {
  return (
    <div>
      <header>
    
        <h1 className={styles.title}>Movie Awards</h1>

        <div class="input-group" className={styles.search} >
           <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
           <button type="button" class="btn btn-outline-primary">search</button>
         </div>
       
      </header>
      <main>
        <MoviesGrid />
        <Vote />
      </main>
    </div>
  );
}
