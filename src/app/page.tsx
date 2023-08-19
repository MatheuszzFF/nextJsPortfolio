"use client";
import { Banner, Tab, SimpleSlider } from "components";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { ProjectContext } from "../context";
import { UserContext } from '../context/UserContext/UserContext';

export default function Home() {
  const projects = useContext(ProjectContext);
  const [sobre, setSobre] = useState([]);
  const [conhecimentos, setConhecimentos] = useState([]);
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:3000/api/sobre")
      .then((response) => response.json())
      .then((data) => setSobre(data));

    fetch("http://localhost:3000/api/conhecimentos")
      .then((response) => response.json())
      .then((data) => setConhecimentos(data));
  }, []);

  const slideSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const slideImages: string[] = [];

  projects.map(({ image }, index) => {
    slideImages.push(image);
  });

  return (
      <main>
        
        <Banner />
        <Tab
          title="Sobre"
          isWithImage={true}
          iconWithBorders={true}
          backgroundBlack={false}
          cvButton={true}
          contentInLeft={false}
          contents={sobre}
        />
        <Tab
          title="Conhecimentos"
          isWithImage={false}
          iconWithBorders={false}
          backgroundBlack={true}
          cvButton={false}
          contentInLeft={true}
          contents={conhecimentos}
        />
  
        <SimpleSlider
          settings={slideSettings}
          images={slideImages}
        />
      </main>
    );
  }
