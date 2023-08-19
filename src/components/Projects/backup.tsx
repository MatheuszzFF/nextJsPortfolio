import { TProjects } from "./type";
import { useState, useEffect } from "react";
import styles from "./projects.module.css";
import Image from "next/image";

export const Projects = ({ projects }: {projects: TProjects[]}) => {
  const [allCategories, setCategories] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [filteredProjects, setFilteredProjects] = useState<TProjects[]>(projects);
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
    setFilteredProjects(projects)
  }, []);

  const handleClick = (selectedCategory?: string) => {
    setFilteredProjects(
      projects.filter(project => {
        let hasCategory = false;
        project.categories.forEach(category => {

          if(category === selectedCategory) {
            hasCategory = true;
          } 
        })
        return hasCategory
      })
    )
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
              {allCategories.map((category: string, index) => {
                return (
                  <li
                    key={`category-${index}`}
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
            {filteredProjects.map((project: TProjects, index) => {
              const { name, title, image, categories } = project;
                return (
                  <div key={`image ${index}`}>
                    <Image src={image} width={300} height={150} alt={title} />
                    <h2>
                      {categories.map((category, index) => {
                        return <span key={`categoryName ${index}`}>{category} </span>;
                      })}
                    </h2>
                  </div>
                );
            })}
          </div>
        </div>
      </section>
    );
  }
};
