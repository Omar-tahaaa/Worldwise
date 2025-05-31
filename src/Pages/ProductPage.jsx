import styles from "./ProductPage.module.css";
import Product from "../Components/Product";
import PageNav from "../Components/PageNav";

function ProductPage() {
  return (
    <main className={styles.productPage}>
      <PageNav />
      <Product />
    </main>
  );
}

export default ProductPage;
