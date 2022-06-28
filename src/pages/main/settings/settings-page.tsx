import React from "react";
import PageTemplateDefault from "../../page-templates/page-template-default";

////////////////////////////////////////////////////////
/*Props*/
////////////////////////////////////////////////////////

interface Props {}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const SettingsPage : React.FC<Props> = (props : Props) => {

  ////////////////////////
  // Variables
  ////////////////////////

  // Nothing

  ////////////////////////
  // Return
  ////////////////////////

  return (
    <PageTemplateDefault headerLabel="Settings" isProfile backButton>
    </PageTemplateDefault>
  );
}

export default SettingsPage;