const styles = (theme) => ({
    main: {
      width: "auto",
      display: "block",
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto",
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `20px`,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
    hasAccountHeader: {
      width: "100%",
      textAlign: "center",
      fontSize: "1.1em",
      color: "gray",
      marginTop: "10px",
      marginBottom: '10px'
    },
    logInLink: {
      width: "100%",
      textDecoration: "none",
      color: "#303f9f",
      fontWeight: "bolder",
    },
    errorText: {
      color: "red",
      textAlign: "center",
    },
  });
  
  export default styles;
  