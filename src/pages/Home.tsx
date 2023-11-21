import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import Equipe from "./nba/Equipe";
import "./css/fontawesome-5/css/all.min.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Basket NBA</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle
              className="flex-title"
              style={{ color: "#ff6a53", fontSize: "24px", fontWeight: "bold" }}
            >
              <i className="fa fa-braille i_title " ></i>Basket NBA
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <Equipe />
      </IonContent>
    </IonPage>
  );
};

export default Home;
