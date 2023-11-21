import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router-dom";
import "../css/fontawesome-5/css/all.min.css";
import "./StatJoueur.css";

const StatJoueur: React.FC = () => {
  // Utilisation de useParams pour récupérer les paramètres de l'URL
  const { index } = useParams<{ index: string }>();
  const { equipe } = useParams<{ equipe: string }>();
  const handleRetourClick = () => {
    // Naviguer vers la page /home
    history.push("/home");
  };
  //   const statistique = [
  //     {
  //       nom: "Kevin",
  //       m: 2,
  //       mj: 3,
  //       ppm: 12.2,
  //       rpm: 12.2,
  //       pdpm: 12.2,
  //       lf: 12.2,
  //       deuxp: 12.2,
  //       troisp: 12,
  //       mpm: 12,
  //     },
  //     {
  //       nom: "Kevin",
  //       m: 2,
  //       mj: 3,
  //       ppm: 12.2,
  //       rpm: 12.2,
  //       pdpm: 12.2,
  //       lf: 12.2,
  //       deuxp: 12.2,
  //       troisp: 12,
  //       mpm: 12,
  //     },
  //     {
  //       nom: "Kevin",
  //       m: 2,
  //       mj: 3,
  //       ppm: 12.2,
  //       rpm: 12.2,
  //       pdpm: 12.2,
  //       lf: 12.2,
  //       deuxp: 12.2,
  //       troisp: 12,
  //       mpm: 12,
  //     },
  //     {
  //       nom: "Kevin",
  //       m: 2,
  //       mj: 3,
  //       ppm: 12.2,
  //       rpm: 12.2,
  //       pdpm: 12.2,
  //       lf: 12.2,
  //       deuxp: 12.2,
  //       troisp: 12,
  //       mpm: 12,
  //     },
  //     {
  //       nom: "Kevin",
  //       m: 2,
  //       mj: 3,
  //       ppm: 12.2,
  //       rpm: 12.2,
  //       pdpm: 12.2,
  //       lf: 12.2,
  //       deuxp: 12.2,
  //       troisp: 12,
  //       mpm: 12,
  //     },
  //     {
  //       nom: "Kevin",
  //       m: 2,
  //       mj: 3,
  //       ppm: 12.2,
  //       rpm: 12.2,
  //       pdpm: 12.2,
  //       lf: 12.2,
  //       deuxp: 12.2,
  //       troisp: 12,
  //       mpm: 12,
  //     },
  //     {
  //       nom: "Kevin",
  //       m: 2,
  //       mj: 3,
  //       ppm: 12.2,
  //       rpm: 12.2,
  //       pdpm: 12.2,
  //       lf: 12.2,
  //       deuxp: 12.2,
  //       troisp: 12,
  //       mpm: 12,
  //     },
  //     {
  //       nom: "Kevin",
  //       m: 2,
  //       mj: 3,
  //       ppm: 12.2,
  //       rpm: 12.2,
  //       pdpm: 12.2,
  //       lf: 12.2,
  //       deuxp: 12.2,
  //       troisp: 12,
  //       mpm: 12,
  //     },
  //     {
  //       nom: "Kevin",
  //       m: 2,
  //       mj: 3,
  //       ppm: 12.2,
  //       rpm: 12.2,
  //       pdpm: 12.2,
  //       lf: 12.2,
  //       deuxp: 12.2,
  //       troisp: 12,
  //       mpm: 12,
  //     },
  //     {
  //       nom: "Kevin",
  //       m: 2,
  //       mj: 3,
  //       ppm: 12.2,
  //       rpm: 12.2,
  //       pdpm: 12.2,
  //       lf: 12.2,
  //       deuxp: 12.2,
  //       troisp: 12,
  //       mpm: 12,
  //     },
  //   ];
  const [statistique, setStatistique] = useState([]);

  useEffect(() => {
    // Utilisez une URL réelle pour une API NBA ici
    const apiUrl = "https://example.com/api/nba/stats";

    // Effectuez une requête HTTP à l'API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setStatistique(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données :", error)
      );
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonButtons slot="start" style={{ padding: "20px" }}>
          <IonBackButton style={{ color: "#0f6db4" }} defaultHref="/home" />
        </IonButtons>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle
              className="flex-title"
              size="large"
              style={{ color: "#ff6a53", fontSize: "24px", fontWeight: "bold" }}
            >
              <i className="fa fa-chart-bar i_title "></i>Stats de {equipe}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="stat_container">
          <div className="table-container_stat">
            <table className="stat-table" border={0}>
              <thead>
                <tr>
                  <th className="fixed-col">Joueur</th>
                  <th>M</th>
                  <th>MJ</th>
                  <th>PPM</th>
                  <th>RPM</th>
                  <th>PDPM</th>
                  <th>LF</th>
                  <th>2P</th>
                  <th>3P</th>
                  <th>MPM</th>
                </tr>
              </thead>
              <tbody>
                {statistique.map((stats, i) => (
                  <tr key={i}>
                    <td
                      style={{ background: "#032f4f", color: "#f2f2f2" }}
                      className="fixed-col"
                    >
                      {stats.nom}
                    </td>
                    <td>{stats.m}</td>
                    <td>{stats.mj}</td>
                    <td>{stats.ppm}</td>
                    <td>{stats.rpm}</td>
                    <td>{stats.pdpm}</td>
                    <td>{stats.lf}</td>
                    <td>{stats.deuxp}</td>
                    <td>{stats.troisp}</td>
                    <td>{stats.mpm}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default StatJoueur;
