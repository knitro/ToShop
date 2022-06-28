import React from "react";
import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import { Route } from "react-router-dom";
import SplashPage from "./pages/introduction/splash/splash-page";
import LoginPage from "./pages/introduction/login/login-page";
import HomePage from "./pages/main/home/home-page";
import SettingsPage from "./pages/main/settings/settings-page";
import EditItemPage from "./pages/edit-item/edit-item-page";
import ViewListPage from "./pages/list/view/view-list-page";
import CreateListPage from "./pages/list/create-list/create-list-page";
import EditListPage from "./pages/list/edit-list/edit-list-page";
import CreateItemPage from "./pages/item/create-item/create-item-page";
import ViewItemPage from "./pages/item/view/view-item-page";

const AppRouter : React.FC = () => {

  return (
    <IonReactRouter>
        <IonRouterOutlet>

          {/*Introduction Pages*/}
          <Route exact path="/" component={SplashPage} />
          <Route exact path="/login" component={LoginPage} />

          {/*Main Pages*/}
          <Route exact path="/home" component={HomePage}/>
          <Route exact path="/settings" component={SettingsPage}/>

          {/*List Pages*/}
          <Route exact path="/list" component={ViewListPage} />
          <Route exact path="/list/create" component={CreateListPage} />
          <Route path="/list/:listId" component={ViewListPage} />
          <Route path="/list/:listId/edit" component={EditListPage} />
          
          {/*Item Pages*/}
          <Route path="/list/:listId/create" component={CreateItemPage} />
          <Route path="/list/:listId/:itemId" component={ViewItemPage} />
          <Route path="/list/:listId/:itemId/edit" component={EditItemPage} />

        </IonRouterOutlet>
    </IonReactRouter>
  );
}

export default AppRouter;