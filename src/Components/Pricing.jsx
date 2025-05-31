import building from "../assets/buildings.jpg";
import styles from "./Pricing.module.css";
function Pricing() {
  return (
    <section className={styles.pricingContainer}>
      <div className={styles.pricing}>
        <h1>
          Simple pricing.
          <br />
          Just $9/month.
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
          labore mollitia iusto. Recusandae quos provident, laboriosam fugit
          voluptatem iste.
        </p>
      </div>
      <img src={building} alt="bulding" />
    </section>
  );
}

export default Pricing;
