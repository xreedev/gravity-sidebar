import logo from './logo.svg';
import './App.css';
import { Sidebar } from './gravity-sidebar';

const options = [
  { name: "Home", icon: "fa fa-home" },
  { name: "Events", icon: "fa fa-envelope-open" },
  { name: "Communities", icon: "fa fa-users" },
];

const footerOptions = [
  { icon: "fa fa-user" },
  { icon: "fa fa-cog" },
  { icon: "fa fa-sign-out" },
];

function App() {
  return (
      <Sidebar
        options={options}
        footerOptions={footerOptions}
        sidebarButton="fa fa-bars"
      />
  );
}

export default App;
