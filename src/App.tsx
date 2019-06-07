import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import About from "./About";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import News from './News';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static">
      <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Button href="/News"
          target="_blank"> Click Me </Button>
      <About greeting="hello"/>
      <About greeting="my name is cynthia"/>

      <Router>
        <Link to="/News">
          News </Link>
          <Route path="/news" component={News} />
      </Router>

        
      

    </div>
  );
}

export default App;
