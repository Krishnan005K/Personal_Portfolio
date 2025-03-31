
import styles from "./GhibliStyles.module.css"; // Assuming a CSS module for styling

// Import Ghibli-style images
import ghibli1 from '../../assets/ghibli1.png';
import ghibli2 from '../../assets/ghibli2.png';
import ghibli3 from '../../assets/ghibli3.png';



function GhibliGallery() {
  const images = [ghibli1, ghibli2, ghibli3];
  
  return (
    <section id="ghibli-gallery" className={styles.container}>
      <h1 className="sectionTitle">Ghibli Art Gallery</h1>
      <div className={styles.ghibliContainer}>
        {images.map((image, index) => (
          <div key={index} className={styles.ghibli}>
            <img src={image} alt={`Ghibli Art ${index + 1}`} className={styles.ghibliImage} />
          </div>
        ))}
      </div>
      <br />
      <br />
      <h2>Want to generate your Own <a  href="https://techtrends-krishnan005k.hashnode.dev/how-to-transform-your-image-into-stunning-glibii-art" target="_blank"><p>Check out my Hashnode page</p></a>
      </h2>
    </section>
  );
}

export default GhibliGallery;