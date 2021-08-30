import React,{useState , useContext} from 'react';
import {ProductContext} from "./ProductContext";
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';
import AppsIcon from '@material-ui/icons/Apps';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom"
import MenuItem from '@material-ui/core/MenuItem';
import { v4 as uuidv4 } from "uuid";

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  newroot: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }
}));
  const Addproduct = () =>{
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [prodname, setprodname] = useState('');
  const [prodbrand, setprodbrand] = useState('');
  const quants = [
    {
      value: 'Litre',
      label: 'Litre',
    },
    {
      value: 'Gallon',
      label: 'Gallon',
    },
    {
      value: 'Quantal',
      label: 'Quantal',
    },
    {
      value: 'Tonne',
      label: 'Tonne',
    },
  ];
  const status = [
    {
      value: "yes",
      label: 'In-Stock',
    },
    {
      value: "no",
      label: 'Out-Of-Stock',
    }
  ];
  const [prodquant, setprodquant] = useState('kilo');
  const [prodstock, setprodstock] = useState('');
  const [prodprice, setprodprice] = useState('');

  const handleQuantChange = (event) => {
    setprodquant(event.target.value);
  };
  const handlePriceChange = (event) => {
    setprodprice(event.target.value);
  };
  const handleStockChange = (event) => {
    setprodstock(event.target.value);
  };
  const [products,setProducts]=useContext(ProductContext);
  const handleSubmit = e => {
    e.preventDefault();
    setProducts(prevProducts => [...prevProducts,{id :uuidv4() ,prodname : prodname , prodbrand : prodbrand, prodprice : prodprice , prodquant : prodquant , prodstock : prodstock}]);
  };

  function getSteps() {
    return ['Add your Product', 'Review Your Product', 'Finish!'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return 'Add your Product';
      case 1:
        return 'Review Your Product';
      case 2:
        return 'Finish!';
      default:
        return 'Unknown step';
    }
  }
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      
      <CssBaseline />
      <AppBar
        style={{ backgroundColor : "#01AA00" }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>
            Quantiphi
          </Typography>

          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
          <Button 
          endIcon = {<ArrowDropDownOutlinedIcon/>}
          color="inherit">Links</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link to="/">
          <ListItem button key={'Home'}>
              <ListItemIcon>{<HomeIcon/>}</ListItemIcon>
              <ListItemText primary={'Home'} />
          </ListItem>
          </Link>
          <Link to="/register">
          <ListItem button key={'Register'}>
              <ListItemIcon>{<ExitToAppIcon/>}</ListItemIcon>
              <ListItemText primary={'Register'} />
          </ListItem>
          </Link>
          <Link to="/login">
            <ListItem button key={'Login'}>
                <ListItemIcon>{<VpnKeyIcon/>}</ListItemIcon>
                <ListItemText primary={'Login'} />
            </ListItem>
          </Link>
          <Link to="/employees">
          <ListItem button key={'Employees'}>
              <ListItemIcon>{<GroupIcon/>}</ListItemIcon>
              <ListItemText primary={'Employees'} />
          </ListItem>
          </Link>
          <Link to="/products">
          <ListItem button key={'Products'}>
              <ListItemIcon>{<AppsIcon/>}</ListItemIcon>
              <ListItemText primary={'Products'} />
          </ListItem>
          </Link>
          <Link to="/addproduct">
          <ListItem button key={'Add Product'}>
              <ListItemIcon>{<LibraryAddIcon/>}</ListItemIcon>
              <ListItemText primary={'Add Product'} />
          </ListItem>
          </Link>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
        <div className={classes.root}>
          <Grid container justify = "center">
            <Grid item>
            <Typography  style={{fontFamily : "Montserrat" , fontSize : "16px" , paddingTop : "15px"}} variant='h6'>Add Your Product</Typography>
            </Grid>
          </Grid>
          </div>
          <div className = {classes.root}>
          <Grid container justify = "center">
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  if (isStepOptional(index)) {
                    labelProps.optional = <Typography variant="caption">Optional</Typography>;
                  }
                  if (isStepSkipped(index)) {
                    stepProps.completed = false;
                  }
                  return (
                    <Step key={label} {...stepProps}>
                      <StepLabel {...labelProps}>{label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <br/>
              <div>
                {activeStep === steps.length ? (
                  <div>
                    <Typography className={classes.instructions}>
                      All steps completed - you&apos;re finished
                    </Typography>
                    <Button onClick={handleReset} className={classes.button}>
                      Reset
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                    <div>
                      <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                        Back
                      </Button>
                      {isStepOptional(activeStep) && (
                        <Button
                          style = {{ backgroundColor : "#01AA00" , color : "white" , borderColor : "#01AA00"}}
                          variant="contained"
                          onClick={handleSkip}
                          className={classes.button}
                        >
                          Skip
                        </Button>
                      )}

                      <Button
                        style = {{ color : "#01AA00" , borderColor : "white"}}
                        variant="outlined"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                )}
            </div>
          </Grid>
          </div>
          
          <Grid style = {{ paddingTop : "40px"}} container justify = "space-around" spacing={6}>
            <form className={classes.newroot} onSubmit={handleSubmit}>
              <TextField
                label="Product Name"
                variant="outlined"
                required
                value={prodname}
                onChange={e => setprodname(e.target.value)}
              />
              <TextField
                label="Product Brand"
                variant="outlined"
                required
                value={prodbrand}
                onChange={e => setprodbrand(e.target.value)}
              />
              <TextField
                label="Product Price"
                variant="outlined"
                required
                value={prodprice}
                onChange={handlePriceChange}
              ></TextField>
              <TextField
                id="select-quant"
                select
                required
                label="Product Quantity"
                value={prodquant}
                onChange={handleQuantChange}
              >
                {quants.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                id="select-stock"
                select
                required
                label="Product Status"
                value={prodstock}
                onChange={handleStockChange}
                helperText="Please select your Product Status"
              >
                {status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <div>
              <Button variant = "contained" type = "submit"
                style={{ 
                  fontSize : "12px" ,
                  padding : "12px 18px ",
                  backgroundColor : "#01AA00",
                  color :"White",
                  }}>Add Product</Button>
                
                <Button variant = "outlined" type = "submit"
                style={{ 
                  fontSize : "12px" ,
                  padding : "12px 34px ",
                  color :"#01AA00",
                  }}>Cancel</Button>
              </div>
              <Link to = "/products"
                style = {{
                  padding : "12px 18px ",
                  backgroundColor : "#01AA00",
                  color :"White",
                  borderRadius : "6px"
                }}
              >Go to Products Page</Link>
            </form>
          </Grid>
        
      </main>
    </div>
  );
};
export default Addproduct;
