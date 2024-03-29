import {
  ArrowPathIcon,
  Bars4Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

import Social1 from "../img/proyectos/Proyect4/photo1.png";
import Social2 from "../img/proyectos/Proyect4/photo2.png";
import Social3 from "../img/proyectos/Proyect4/photo3.png";
import Social4 from "../img/proyectos/Proyect4/photo4.png";

import Dark1 from "../img/proyectos/Proyect 2/photo1.png";
import Dark2 from "../img/proyectos/Proyect 2/photo2.png";
import Dark3 from "../img/proyectos/Proyect 2/photo3.png";
import Dark4 from "../img/proyectos/Proyect 2/photo4.png";
import Dark5 from "../img/proyectos/Proyect 2/photo5.png";
import Dark6 from "../img/proyectos/Proyect 2/photo6.png";
import Dark7 from "../img/proyectos/Proyect 2/photo7.png";
import Dark8 from "../img/proyectos/Proyect 2/OwnDark.png";

import Infinity1 from "../img/proyectos/Proyect 3/photo1.png";
import Infinity2 from "../img/proyectos/Proyect 3/photo2.png";
import Infinity3 from "../img/proyectos/Proyect 3/photo3.png";
import Infinity4 from "../img/proyectos/Proyect 3/photo4.png";
import Infinity5 from "../img/proyectos/Proyect 3/photo5.png";
import Infinity6 from "../img/proyectos/Proyect 3/photo6.png";
import Infinity7 from "../img/proyectos/Proyect 3/photo7.png";
import Infinity8 from "../img/proyectos/Proyect 3/photo8.png";
import Infinity9 from "../img/proyectos/Proyect 3/photo9.png";
import Infinity10 from "../img/proyectos/Proyect 3/photo10.png";
import Infinity11 from "../img/proyectos/Proyect 3/photo11.png";

import AllSkills1 from "../img/proyectos/Proyect 1/photo1.png";
import AllSkills2 from "../img/proyectos/Proyect 1/photo2.png";
import AllSkills3 from "../img/proyectos/Proyect 1/photo3.png";
import AllSkills4 from "../img/proyectos/Proyect 1/photo4.png";
import AllSkills5 from "../img/proyectos/Proyect 1/photo5.png";
import AllSkills6 from "../img/proyectos/Proyect 1/photo6.png";
import AllSkills7 from "../img/proyectos/Proyect 1/photo7.png";
import AllSkills8 from "../img/proyectos/Proyect 1/photo8.png";
import AllSkills9 from "../img/proyectos/Proyect 1/photo9.png";
import AllSkills10 from "../img/proyectos/Proyect 1/photo10.png";
import AllSkills12 from "../img/proyectos/Proyect 1/photo12.png";
import AllSkills14 from "../img/proyectos/Proyect 1/photo14.png";
import AllSkills15 from "../img/proyectos/Proyect 1/photo15.png";
import AllSkills16 from "../img/proyectos/Proyect 1/photo16.png";
import AllSkills17 from "../img/proyectos/Proyect 1/photo17.png";
import AllSkills18 from "../img/proyectos/Proyect 1/photo18.png";
import AllSkills19 from "../img/proyectos/Proyect 1/photo19.png";

import DataForIA1 from "../img/proyectos/Proyecto 6/DataForIA 1.png";
import DataForIA2 from "../img/proyectos/Proyecto 6/DataForIA 2.png";
import DataForIA3 from "../img/proyectos/Proyecto 6/DataForIA 3.jpg";
import DataForIA4 from "../img/proyectos/Proyecto 6/DataForIA 4.png";
import DataForIA5 from "../img/proyectos/Proyecto 6/DataForIA 5.png";

import TePagoImg1 from "../img/proyectos/Proyecto 5/TePago1.png";
import TePagoImg2 from "../img/proyectos/Proyecto 5/TePago2.png";
import TePagoImg3 from "../img/proyectos/Proyecto 5/TePago3.png";
import TePagoImg4 from "../img/proyectos/Proyecto 5/TePago4.png";
import TePagoImg5 from "../img/proyectos/Proyecto 5/TePago5.png";
import TePagoImg6 from "../img/proyectos/Proyecto 5/TePago6.png";
import TePagoImg7 from "../img/proyectos/Proyecto 5/TePago7.png";
import TePagoImg8 from "../img/proyectos/Proyecto 5/TePago8.png";

export const proyectos = [
  {
    name: "DjangoSocial",
    description:
      "Se utilizo Django y TailwindCSS, fue uno de los primeros proyectos",
    href: "/proyectos/social",
    photos: [Social1, Social2, Social3, Social4],
    icon: ChartPieIcon,
  },
  {
    name: "OwnDarkEcommerce",
    description:
      "Se utilizo DRF, React y Tailwind, se llego a desplegar pero era costo mantenerlo.",
    href: "/proyectos/dark",
    photos: [Dark1, Dark2, Dark3, Dark4, Dark5, Dark6, Dark7, Dark8],
    icon: CursorArrowRaysIcon,
  },
  {
    name: "OwnInfinity",
    description:
      "Se utilizo DRF, React y Tailwind, fue el primer intento de aperturar un Studio",
    href: "/proyectos/infinity",
    photos: [
      Infinity1,
      Infinity2,
      Infinity3,
      Infinity4,
      Infinity5,
      Infinity6,
      Infinity7,
      Infinity8,
      Infinity9,
      Infinity10,
      Infinity11,
    ],
    icon: FingerPrintIcon,
  },
  {
    name: "Multi-Tasks",
    description:
      "Se utilizo demasiadas tecnologias, el objetivo era consolidar conocimientos",
    href: "/proyectos/all",
    photos: [
      AllSkills1,
      AllSkills2,
      AllSkills3,
      AllSkills4,
      AllSkills5,
      AllSkills6,
      AllSkills7,
      AllSkills8,
      AllSkills9,
      AllSkills10,
      AllSkills12,
      AllSkills14,
      AllSkills15,
      AllSkills16,
      AllSkills17,
      AllSkills18,
      AllSkills19,
    ],
    icon: SquaresPlusIcon,
  },
  {
    name: "TePago",
    description:
      "TePago se enfoca en bridar un mayor control y seguimiento sobre deudas y fiados. ",
    href: "/proyectos/tepago",
    photos: [
      TePagoImg1,
      TePagoImg2,
      TePagoImg3,
      TePagoImg4,
      TePagoImg5,
      TePagoImg6,
      TePagoImg7,
      TePagoImg8,
    ],
    icon: ArrowPathIcon,
  },
  {
    name: "DataForIA",
    description:
      "Proyecto de Investigacion, recolecta datos para poder crear y entrenar modelos Neuronales",
    href: "/proyectos/dataforia",
    photos: [DataForIA1, DataForIA2, DataForIA3, DataForIA4, DataForIA5],
    icon: ChartPieIcon,
  },
  /*{
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },*/
];
