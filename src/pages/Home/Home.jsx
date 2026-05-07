import { useState } from "react";
import { products, categories } from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Home.module.css";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroSub}>Tienda oficial</p>
          <h1 className={styles.heroTitle}>
            Diseños <br />
            <em>con sentido</em>
          </h1>
          
        </div>
        <div className={styles.heroDivider} aria-hidden="true" />
      </section>

      {/* Catálogo */}
      <section className={`${styles.catalog} container`}>
        <div className={styles.catalogHeader}>
          <h2 className={styles.catalogTitle}>Productos</h2>
          <p className={styles.catalogCount}>{filtered.length} artículos</p>
        </div>

        {/* Filtros */}
        <div className={styles.filters} role="group" aria-label="Filtrar por categoría">
          <button
            className={`${styles.filterBtn} ${activeCategory === "Todos" ? styles.active : ""}`}
            onClick={() => setActiveCategory("Todos")}
          >
            Todos
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`${styles.filterBtn} ${activeCategory === cat.name ? styles.active : ""}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No hay productos en esta categoría.</p>
        )}
      </section>
    </main>
  );
};

export default Home;
