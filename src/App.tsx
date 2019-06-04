import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchInput from "./Components/SearchInput";
import ImageResults from "./Components/ImageResults";
const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={SearchInput} />
          <Route path="/image_results" component={ImageResults} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
