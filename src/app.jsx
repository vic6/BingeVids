import React from "react";
import ReactDOM from "react-dom";
import SearchBar from './components/SearchBar.jsx';

const API_KEY = 'AIzaSyCfKadtDHqAq6nHkoodEqwancOqNqPEhzM';

const App = () =>
<div>hello dude
  <SearchBar />
</div>;

ReactDOM.render(<App />, document.getElementById("app"));
