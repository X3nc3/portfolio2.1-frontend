import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useEffect, useState } from "react";
import LastWork from "./LastWork";
import Projets from "./Projets";
import AppProjets from "./AppProjets";

const Work = () => {
  const [lastProjet, setLastProjet] = useState({});
  const [projetsData, setProjetsData] = useState([]);
  const [appProjetsData, setAppProjetsData] = useState([]);
  const [viewMoreProjets, setViewMoreProjets] = useState(false);
  const [bouton, setBouton] = useState("Voir tout les projets")

  const allProjets = [
    {
      image: "/portfolio-morningNews.png",
      name: "Morning News",
      lien: "https://morningnews-frontend-eta.vercel.app/",
      content:
        "Morning News est une application qui va vous permettre d’afficher les nouvelles récentes du journal The Verge grâce à NewsAPI un webservice spécialisé dans la diffusion de nouvelles classées par source. Vous pourrez également sauvegarder vos articles préférés et les retrouver en vous connectant à votre compte. Il y a des restrictions d’usages qui bloquent l’usage de la fonctionnalité bookmarks aux personnes qui ne sont pas connectées. Vous pourrez rester connectés et conserver vos articles favoris même lorsque vous rafraîchirez la page. Il existe la possibilité de masquer certains articles, ceux que vous avez déjà lus par exemple. Cette application est développée en React avec différentes briques techniques comme : la navigation, l'authentification, Redux, l'ajout d'un token, le hachage du mot de passe utilisateur, la persistance du store.",
    },
    {
      image: "/portfolio-myMoviz.png",
      name: "My Moviz",
      lien: "https://mymoviz-frontend-self-eight.vercel.app/",
      content:
        "My Moviz est un site qui va vous permettre d’afficher les derniers films sortis grace à l’API The Movie Database avec la possibilité de créer une wishlist, placer un compteur de vues et d’évaluer chacun des films présentés. La particularité de cette appli est qu’elle est développée en React.",
    },
    {
      image: "/portfolio-yams.png",
      name: "Yams",
      lien: "https://yams-chi.vercel.app/",
      content:
        "Yams est une application qui simule une partie de jeux de Yams. Vous pourrez lancer et relancer les dés de façon globale (avec le bouton launch) ou de façon individuelle en lançant un dé à la fois. Un compteur vous indiquera le total de l'ensemble des dés lancés. Cette application est réalisée en react avec nextJs et utilise plusieurs composants qui interagissent grâce à different états et évènements ainsi que le principe d'inverse data flow",
    },
    {
      image: "/portfolio-tickethack.png",
      name: "Ticket Hack",
      lien: "https://tickethack-frontend-phi.vercel.app/",
      content:
        "Ticket Hack est un site de réservation de billets de trains. C'est le premier projet fait en autonomie de A à Z apres 3 semaines de formation. Cette application est conçu avec le DOM et comporte différentes pages du frontend et du backend avec la gestion d'une base de données Mongo DB . Si vous voulez essayer les differentes options vous devez savoir que seuls des voyages entre les villes de Paris, Lyon, Marseille, Bruxelles entre le 07/11/2023 et le 21/11/2023 sont répertoriés dans la base de données.",
    },
  ];

  const appProjet = [
    {
      video: "/Video_app_locapic.mp4",
    },
    {
      video: "/Vidéo_app_faceUp.mp4",
    },
  ];

  useEffect(() => {
    for (let i = 0; i < allProjets.length; i++) {
      setLastProjet(allProjets[0]);
      setProjetsData(allProjets.filter((data, i) => i > 0));
      setAppProjetsData(appProjet);
    }
  }, []);

  let lastProjets = <LastWork {...lastProjet} />;
  let projetData = projetsData.map((data, i) => {
    return <Projets key={i} {...data} />;
  });
  let appProjetData = appProjetsData.map((data, i) => {
    return <AppProjets key={i} {...data} />;
  });

  const handleClick = () => {
    if (viewMoreProjets === false) {
      setBouton("Masquer les projets")
      setViewMoreProjets(true);
    } else {
      setBouton("Voir tout les projets")
      setViewMoreProjets(false);
    }
  };

  return (
    <section className="section h-full" id="work">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center justify-start lg:flex-row gap-x-10 ">
          {lastProjets}
          <div className="flex-1 flex flex-col gap-y-10 ">{projetData}</div>
        </div>
        {viewMoreProjets && (
          <div className="flex-1 flex gap-x-10">{appProjetData}</div>
        )}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <button className="btn btn-sm max-w-max my-10 " onClick={handleClick}>
            {bouton}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
