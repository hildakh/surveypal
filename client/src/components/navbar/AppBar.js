/* eslint no-restricted-globals:0 */
import React from "react";
import { makeStyles, useTheme, createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import Login from "../navbar/Login";
import Logout from "../navbar/Logout";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BallotIcon from "@material-ui/icons/Ballot";
import { FaUsers } from "react-icons/fa";
import FaceIcon from "@material-ui/icons/Face";
import PollIcon from "@material-ui/icons/Poll";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  typography: {
    fontFamily: 'Muli',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': "Muli",
      },
    },
  },
  grow: {
    flexGrow: 1,
    fontFamily: "Muli"
  },
  menuButton: {
    marginRight: theme.spacing(1),
    fontFamily: "Muli"
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    fontFamily: "Satisfy",
    fontSize: "1.5rem",
    input: {
      color: "white"
    },
    overflow: 'visible',
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    },
    fontFamily: "Muli"
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    },
    fontFamily: "Muli"
  },
  name: {
    margin: "3%",
    fontFamily: "Satisfy",
    color: "white",
    fontSize: "1.5rem",
    overflow: 'visible'
  },
  root: {
    display: "flex",
    fontFamily: "Muli"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: "#f9fbe7",
    typography: {
      fontFamily: 'Muli',
    },
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
    fontFamily: "Muli",
    backgroundColor: "#677b00",
    height: '8.4%'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,
    fontFamily: "Muli",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0,
    fontFamily: "Muli"
  }
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const userType = props.userType;

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerOpen = event => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = event => {
    setDrawerOpen(false);
  };

  const logout = event => {
    setDrawerOpen(false);
    props.logout();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      className={classes.sideDrawer}
    >
      <MenuItem onClick={handleMenuClose} className={classes.sideDrawer}>
        Profile
      </MenuItem>
      <MenuItem onClick={handleMenuClose} className={classes.sideDrawer}>
        My account
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      {drawerOpen && (
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={drawerOpen}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon style={{ color: 'white' }}/>
              ) : (
                <ChevronRightIcon style={{ color: 'white' }}/>
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem
              button
              onClick={props.loadSurveys}
            >
              <ListItemIcon>
                <BallotIcon />
              </ListItemIcon>
              <ListItemText >
                <Typography style={{fontFamily: 'Muli'}}>
                Surveys
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PollIcon />
              </ListItemIcon>
              <ListItemText>
              <Typography style={{fontFamily: 'Muli'}}>
                Reports
                </Typography>
                </ListItemText>
            </ListItem>

            <ListItem button onClick={props.loadSurveyors}>
              <ListItemIcon>
                <FaceIcon />
              </ListItemIcon>
              <ListItemText>
              <Typography style={{fontFamily: 'Muli'}}>
                Surveyors
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem
              button
              onClick={props.loadTeams}
            >
              <ListItemIcon>
                <FaUsers />
              </ListItemIcon>
              <ListItemText>
              <Typography style={{fontFamily: 'Muli'}}>
                Teams
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Drawer>
      )}
      <AppBar
        position="static"
        inputfield={props.inputfield}
        session={props.session}
        style={{ background: 'linear-gradient(45deg, #e0aa34 25%, #7a9100 50%, #677b00 100%)' }}
      >
        <Toolbar>
          {userType === 1 && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Typography className={classes.title} variant="h6" noWrap>
            SurveyPal
          </Typography>
          <div className={classes.grow} />
          {userType !== 0 && (
            <div>
              <div className={classes.sectionDesktop}>
                <IconButton
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Typography className={classes.name} variant="h6" noWrap>
                  {props.userName}
                </Typography>
                <Logout logout={logout} />
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </div>
          )}
          {userType === 0 && <Login login={props.login} />}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
