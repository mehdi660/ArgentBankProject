import React from "react";
import LottieAnim from "../components/Lottieanim";
import money from "../assets/img/icon-money.png";
import security from "../assets/img/icon-security.png";

const data = [
  {
    id: 1,
    image: <LottieAnim />, // Utilisation du composant LottieAnimation
    title: "Vous êtes notre priorité #1",
    description:
      "Besoin de parler à un représentant? Vous pouvez entrer en contact via notre chat 24/7 ou via un appel téléphonique en moins de 5 minutes.",
  },
  {
    id: 2,
    image: money,
    title: "Plus d'économies signifie des taux plus élevés",
    description:
      "Plus vous épargnez avec nous, plus votre taux d'intérêt sera élevé !",
  },
  {
    id: 3,
    image: security,
    title: "Une sécurité à laquelle vous pouvez faire confiance",
    description:
      "Nous utilisons un cryptage haut de gamme pour nous assurer que vos données et votre argent sont toujours en sécurité.",
  },
];

export default data;
