import { TProjects } from "./type";
import { useState, useEffect } from "react";
import styles from "./projects.module.css";
import Image from "next/image";

export const Projects = ({ projects }: any) => {
  const [allCategories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  useEffect(() => {
    if (projects.length > 0) {
      const uniqueCategories = new Set<string>();
      projects.forEach(({ categories }: TProjects) => {
        categories.map((category: string) => {
          uniqueCategories.add(category);
        });
      });
      const categoriesArray = Array.from(uniqueCategories);
      setCategories(categoriesArray);
    }
  }, [projects]);

  useEffect(() => {
    console.log(activeCategory);
  }, [activeCategory]);

  const handleClick = (category?: string) => {
    category ? setActiveCategory(category) : setActiveCategory("all");
  };

  
  if (projects.length > 0) {
    return (
      <section>
        <div className="container">
          <nav>
            <ul className={styles.categorys}>
              <li
                onClick={() => handleClick()}
                className={activeCategory == "all" ? styles.activeCategory : ""}
              >
                Todos
              </li>
              {allCategories.map((category: string) => {
                return (
                  <li
                    key={`category-${category}`}
                    onClick={() => handleClick(category)}
                    className={
                      activeCategory == category ? styles.activeCategory : ""
                    }
                  >
                    {category}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.grid}>
            {projects.map((project: TProjects, index) => {
              const { name, title, image, categories } = project;

              if (
                categories.includes(activeCategory) ||
                activeCategory == "all"
              ) {
                return (
                  <div key={`image ${index}`}>
                    <Image src={image} width={300} height={150} onClick={() => openInterna(this)}/>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    );
  }
};
