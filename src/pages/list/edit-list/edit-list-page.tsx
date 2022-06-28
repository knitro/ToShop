import React  from "react";
import { RouteComponentProps } from "react-router";
import ListFormPage from "../list-form/list-form";

////////////////////////////////////////////////////////
/*Props*/
////////////////////////////////////////////////////////

interface Props extends RouteComponentProps<{
  id: string;
}>{}

////////////////////////////////////////////////////////
/*Component*/
////////////////////////////////////////////////////////

const EditListPage : React.FC<Props> = (props : Props) => {

  ////////////////////////
  // Constants
  ////////////////////////

  const id = props.match.params.id

  ////////////////////////
  // Return
  ////////////////////////

  return (
    <ListFormPage id={id}/>
  );
}

export default EditListPage;
