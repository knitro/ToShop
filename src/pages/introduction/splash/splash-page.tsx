
import React from "react"
import { IonButton, IonCol, IonRow } from "@ionic/react";
import PageTemplateIntroduction from "../../page-templates/page-template-introduction";
import { useHistory } from "react-router";

////////////////////////////////////////////////////////
/*Props*/
////////////////////////////////////////////////////////

interface Props {}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const SplashPage : React.FC<Props> = () => {

  ////////////////////////
  // Variables
  ////////////////////////

  const history = useHistory()

  ////////////////////////
  // Functions
  ////////////////////////

  const getStartedPress = () => {
    history.push("login")
  }

  ////////////////////////
  // Return
  ////////////////////////

  return (
    <PageTemplateIntroduction>
      <IonRow>
        <IonCol>
          <IonButton onClick={getStartedPress}>Get Started</IonButton>
        </IonCol>
      </IonRow>
    </PageTemplateIntroduction>
  );
}

export default SplashPage;