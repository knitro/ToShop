import { IonCol, IonContent, IonGrid, IonImg, IonPage, IonRow } from "@ionic/react";
import React  from "react";
import { useHistory } from "react-router";
import { auth } from "../../firebase/firebase";
import "./page-template.css"

////////////////////////////////////////////////////////
/*Props*/
////////////////////////////////////////////////////////

interface Props {
    children : React.ReactNode
}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const PageTemplateIntroduction : React.FC<Props> = (props : Props) => {

  ////////////////////////
  // Variables
  ////////////////////////

  const children = props.children;
  const history = useHistory()

  auth.onAuthStateChanged(function(user) {
    if (user) {
      history.push("home")
    }
  });

  ////////////////////////
  // Return
  ////////////////////////

  return (
    <IonPage className="splash-page-ion-page">
      <IonContent className="splash-page-background">
        <IonGrid>
          <IonRow>
            <IonCol>
              <div className="splash-page-header-div">
                <IonImg src="/assets/logo-transparent-large.png"/>
              </div>
            </IonCol>
          </IonRow>
          {children}
        </IonGrid>  
      </IonContent>
    </IonPage>
  );
}

export default PageTemplateIntroduction;