 import styles from "./MovieCard.module.css";
 import Vote from "./Vote";

 export function MovieCard({ movie }) {
   const imageUrl = movie.photoUrL;
   return (
     <li className={styles.movieCard}>
       <img
         width={230}
         height={345}
         className={styles.movieImage}
         src={imageUrl}
         alt={movie.title}
       />
       <div>{movie.title}</div>


       <h6> <button className={styles.moviebutton} onClick={() => setVotar1(votar1+1)}>
        {movie.title}
            </button>
        </h6>


     </li>
   );
 }




