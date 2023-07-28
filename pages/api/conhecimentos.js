import cssSvg from "../../src/assets/conhecimentos/css-icon.svg";
import htmlSvg from "../../src/assets/conhecimentos/html.svg";
import jsSvg from "../../src/assets/conhecimentos/js-icon.svg";
import reactSvg from "../../src/assets/conhecimentos/react-icon.svg";
import sassSvg from "../../src/assets/conhecimentos/sass-icon.svg";
import wordpressSvg from "../../src/assets/conhecimentos/wordpress-icon.svg";



export default function handler(req, res) {
    res.status(200).json([
        {
          name: "ADS",
          icon: cssSvg,
          content: `ADS designer , I create web pages UI /UX userinterface ,
          Ihave years of experience and many clients are happy with 
          the projects carried out.`,
        },
        {
          name: "Dev Jr",
          icon: htmlSvg,
          content: `Dev , I create web pages UI /UX userinterface ,
          Ihave years of experience and many clients are happy with 
          the projects carried out.`,
        },
        {
          name: "Gym",
          icon: jsSvg,
          content: `Gym , I create web pages UI /UX userinterface ,
          Ihave years of experience and many clients are happy with 
          the projects carried out.`,
        },
        {
          name: "Gym",
          icon: reactSvg,
          content: `Gym , I create web pages UI /UX userinterface ,
          Ihave years of experience and many clients are happy with 
          the projects carried out.`,
        },
        {
          name: "Gym",
          icon: sassSvg,
          content: `Gym , I create web pages UI /UX userinterface ,
          Ihave years of experience and many clients are happy with 
          the projects carried out.`,
        },
        {
          name: "Gym",
          icon: wordpressSvg,
          content: `Gym , I create web pages UI /UX userinterface ,
          Ihave years of experience and many clients are happy with 
          the projects carried out.`,
        },
    ])
}