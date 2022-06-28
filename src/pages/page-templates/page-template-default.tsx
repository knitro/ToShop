import { IonContent, IonIcon, IonLabel, IonPage, IonTabBar, IonTabButton } from "@ionic/react";
import { home } from "ionicons/icons";
import React  from "react";
import Header from "../../components/general/header/header";
import "./page-template.css"

////////////////////////////////////////////////////////
/*Props*/
////////////////////////////////////////////////////////

interface Props {
    children : React.ReactNode
    headerLabel : string
    backButton? : boolean // Default is false
    isProfile ? : boolean
}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const PageTemplateDefault : React.FC<Props> = (props : Props) => {

  ////////////////////////
  // Variables
  ////////////////////////

  const children = props.children;
  const headerLabel = props.headerLabel;
  const backButton =  (props.backButton) ? props.backButton : false
  const isProfile =  (props.isProfile) ? props.isProfile : false

  ////////////////////////
  // Return
  ////////////////////////

  return (
    <IonPage className="page-template-background">
      <Header headerLabel={headerLabel} isBackButton={backButton} isProfile={isProfile}/>
        <IonContent className="page-template-transparent">
            {children}
        </IonContent>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={home} />
          <IonLabel>Home</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
}

export default PageTemplateDefault;