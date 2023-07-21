import htmlLogo from "../../img/colors/html.png";
import cssLogo from "../../img/colors/css.png";
import javascriptLogo from "../../img/colors/javascript.png";
import pythonLogo from "../../img/colors/python.png";
import reactLogo from "../../img/colors/react.png";
import reduxLogo from "../../img/colors/redux.png";
import nextjsLogo from "../../img/colors/nextjs.png";
import postgresLogo from "../../img/colors/postgresql.png";
import spotifyLogo from "../../img/colors/spotify.png";
import awsLogo from "../../img/colors/aws.png";
import djangoLogo from "../../img/colors/django.png";
import dockerLogo from "../../img/colors/docker.png";
import ethereumLogo from "../../img/colors/ethereum.png";
import git from "../../img/colors/git.png";
import githubLogo from "../../img/colors/github.png";
import postmanLogo from "../../img/colors/postman.png";
import redisLogo from "../../img/colors/redis.png";
import tailwindLogo from "../../img/colors/tailwind.png";
import vscLogo from "../../img/colors/vsc.png";

import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { useState, useEffect, useRef } from "react";

export default function CsarruseLogos(props) {
  const [logos, setLogos] = useState({
    social: [
      djangoLogo,
      tailwindLogo,
      postmanLogo,
      pythonLogo,
      postgresLogo,
      htmlLogo,
    ],
    infinity: [
      djangoLogo,
      tailwindLogo,
      postmanLogo,
      pythonLogo,
      postgresLogo,
      reactLogo,
      reduxLogo,
      git,
      githubLogo,
      vscLogo,
    ],
    dark: [
      djangoLogo,
      tailwindLogo,
      postmanLogo,
      pythonLogo,
      postgresLogo,
      reactLogo,
      reduxLogo,
      git,
      githubLogo,
      vscLogo,
      awsLogo,
    ],
    allSkills: [
      djangoLogo,
      tailwindLogo,
      postmanLogo,
      pythonLogo,
      postgresLogo,
      javascriptLogo,
      reduxLogo,
      nextjsLogo,
      dockerLogo,
      ethereumLogo,
      redisLogo,
    ],
    TePago: [
      djangoLogo,
      postmanLogo,
      pythonLogo,
      postgresLogo,
      javascriptLogo,
      reduxLogo,
      nextjsLogo,
    ],
    DataForIA: [
      djangoLogo,
      tailwindLogo,
      postmanLogo,
      pythonLogo,
      postgresLogo,
      javascriptLogo,
      reduxLogo,
      nextjsLogo,
      dockerLogo,
      redisLogo,
    ],
  });

  useEffect(() => {
    new Glide(glideRef2.current, {
      type: "carousel",
      perView: 4,
      autoplay: 2000,
      gap: 5,
      animationDuration: 2000,
      swipeThreshold: false,
      hoverpause: false,
      breakpoints: {
        1280: {
          perView: 3,
        },
        1024: {
          perView: 3,
        },
        768: {
          perView: 3,
        },
        576: {
          perView: 2,
        },
      },
    }).mount();
  }, []);

  const glideRef2 = useRef(null);

  return (
    <div
      className="glide bg-slate-900/5 w-128 pr-40 md:pr-0 md:-mr-44 lg:-mr-12 lg:-ml-12 lg:p-12 2xl:pr-32"
      ref={glideRef2}
    >
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          {logos[props.logos].map((img, index) => {
            return (
              <li className="glide__slide flex justify-center" key={index}>
                <img className=" h-32 w-32" src={img} alt="" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
