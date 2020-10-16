import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';

function Routes() {
  return (
    <BrowserRouter>
      {/* Apenas uma única rota é chamada sozinha */}
      <Switch>
        {/* path é o caminho para a rota */}
        {/* exact verifica se o path é exatamente o qual está sendo informado */}
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={OrphanagesMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;