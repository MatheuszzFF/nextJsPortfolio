import formaturaSvg from "../../src/assets/formatura.svg";
import personSvg from "../../src/assets/person.svg";
import gymSvg from "../../src/assets/gym.svg";

export default function handler(req, res) {
    res.status(200).json([
        {
          name: "ADS",
          icon: formaturaSvg,
          content: `ADS designer , I create web pages UI /UX userinterface ,
          Ihave years of experience and many clients are happy with 
          the projects carried out.`,
        },
        {
          name: "Dev Jr",
          icon: personSvg,
          content: `Dev , I create web pages UI /UX userinterface ,
          Ihave years of experience and many clients are happy with 
          the projects carried out.`,
        },
        {
          name: "Gym",
          icon: gymSvg,
          content: `Gym , I create web pages UI /UX userinterface ,
          Ihave years of experience and many clients are happy with 
          the projects carried out.`,
        },
    ])
}