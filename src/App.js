import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./pages/Create";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import Notes from "./pages/Notes";
import Layout from "./components/Layout";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: blue,
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route component={Notes} path="/" exact />
            <Route component={Create} path="/create" exact />
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
