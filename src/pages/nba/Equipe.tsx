import {
  IonContent,
  IonHeader,
  IonPage,
  IonRouterLink,
  IonTitle,
  IonToolbar,
  IonNav
} from "@ionic/react";
import "./Equipe.css";
import "../css/fontawesome-5/css/all.min.css";
import { useEffect, useState } from "react";

const Equipe: React.FC = () => {
//   const list_equipe = [
//     { idequipe: "1", nom: "Lakers", abreviation: "LKS" },
//     { idequipe: "1", nom: "Lakers", abreviation: "LKS" },
//     { idequipe: "1", nom: "Lakers", abreviation: "LKS" },
//     { idequipe: "1", nom: "Lakers", abreviation: "LKS" },
//     { idequipe: "1", nom: "Lakers", abreviation: "LKS" },
//     { idequipe: "1", nom: "Lakers", abreviation: "LKS" },
//     { idequipe: "1", nom: "Lakers", abreviation: "LKS" },
//     { idequipe: "1", nom: "Lakers", abreviation: "LKS" },
//   ];

  const [list_equipe, setListEquipe] = useState([]);

  useEffect(() => {
    // Utilisez une API publique pour obtenir la liste des équipes NBA
    // Vous pouvez remplacer l'URL par celle d'une API fournissant ces données
    fetch("https://www.balldontlie.io/api/v1/teams")
      .then((response) => response.json())
      .then((data) => {
        // Mettez à jour la liste des équipes avec les données de l'API
        setListEquipe(data.data);
      })
      .catch((error) => console.error("Erreur lors de la récupération des données :", error));
  }, []);
  const handleInfoRightClick = (index: number) => {
    // Naviguer vers le composant StatJoueur avec l'indice en tant que paramètre
    history.push(`/StatJoueur/${index}`);
  };
  console.log( )
  return (
    <IonContent>
        <div className="title_equipe">
            Liste des équipes
        </div>
      {list_equipe.map((equipe, index) => (
        <div key={index} className="equipe_card">
          <hr className="hr_card" />
          <div className="icon_basket">
            <i className="fa fa-users"></i>
          </div>
          <div className="info_equipe">
            <div className="inf_left">
              <div className="equipe">{equipe.full_name}</div>
              <div className="abreviation">{equipe.abbreviation}</div>
            </div>
            <div className="info_right">
              <IonRouterLink  style={{ color: '#0f6db4' }}
                onClick={() => handleInfoRightClick(index)}
                routerDirection="forward"
                routerLink={`/StatJoueur/${index}/${equipe.full_name}`}
              >
                <i className="fa fa-angle-double-right"></i>
              </IonRouterLink>
            </div>
          </div>
        </div>
      ))}
    </IonContent>
  );
};

export default Equipe;
