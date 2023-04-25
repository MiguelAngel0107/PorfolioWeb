import htmlLogo from "../img/whiteIcons/html.png";
import cssLogo from "../img/whiteIcons/css.png";
import javascriptLogo from "../img/whiteIcons/javascript.png";
import pythonLogo from "../img/whiteIcons/python.png";
import reactLogo from "../img/whiteIcons/react.png";
import reduxLogo from "../img/whiteIcons/redux.png";
import nextjsLogo from "../img/whiteIcons/nextjs.png";
import postgresLogo from "../img/whiteIcons/postgresql.png";
import spotifyLogo from "../img/whiteIcons/spotify.png";
import awsLogo from "../img/whiteIcons/aws.png";
import djangoLogo from "../img/whiteIcons/django.png";
import dockerLogo from "../img/whiteIcons/docker.png";
import ethereumLogo from "../img/whiteIcons/ethereum.png";
import git from "../img/whiteIcons/git.png";
import githubLogo from "../img/whiteIcons/github.png";
import postmanLogo from "../img/whiteIcons/postman.png";
import redisLogo from "../img/whiteIcons/redis.png";
import tailwindLogo from "../img/whiteIcons/tailwind.png";
import vscLogo from "../img/whiteIcons/vsc.png";

import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { useState, useEffect, useRef } from "react";

export default function TechnologySlider() {
  const glideRef = useRef(null);

  useEffect(() => {
    if (glideRef.current) {
      new Glide(glideRef.current, {
        type: "carousel",
        perView: 4,
        autoplay: 2000,
        gap: 5,
        animationDuration: 2000,
        swipeThreshold: false,
        hoverpause: false,
        breakpoints: {
          1024: {
            perView: 4,
          },
          768: {
            perView: 3,
          },
          576: {
            perView: 2,
          },
        },
      }).mount();
    }
  }, []);

  return (
    <div className="glide bg-slate-900/5 w-128" ref={glideRef}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide flex justify-center">
            <img src={htmlLogo} alt="Slide 1" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={cssLogo} alt="Slide 2" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={javascriptLogo} alt="Slide 3" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={pythonLogo} alt="Slide 4" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={reactLogo} alt="Slide 5" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={reduxLogo} alt="Slide 5" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={nextjsLogo} alt="Slide 5" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={postgresLogo} alt="Slide 5" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={spotifyLogo} alt="Slide 5" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={awsLogo} alt="Slide 5" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={djangoLogo} alt="Slide 5" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={dockerLogo} alt="Slide 5" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={ethereumLogo} alt="Slide 5" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={git} alt="Slide 5" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={githubLogo} alt="Slide 5" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={postmanLogo} alt="Slide 5" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={redisLogo} alt="Slide 5" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={tailwindLogo} alt="Slide 5" className="h-32 w-32" />
          </li>
          <li className="glide__slide flex justify-center">
            <img src={vscLogo} alt="Slide 5" className="h-32 w-32" />
          </li>
        </ul>
      </div>
    </div>
  );
}
