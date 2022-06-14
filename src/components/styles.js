import { makeStyles } from "@material-ui/core/styles";

//color #103037
const useStyles = makeStyles((theme) => ({
  footer: {
   /* position: "absolute",
    bottom: 0,
    left: 0,
    right: 0, */
    
    margin: "auto",
  },
  pagination: {},
  cardGrid: {
    padding: "20px",
  },
  card: {
    /* height: "50%",*/
    display: "flex",
    flexDirection: "column",

    /* width: "50%", */
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flxGrow: 1,
  },
  bookCardButton: {
    backgroundColor: "#103037",
    "&:hover": {
      backgroundColor: "white",
    },
    color: "white",
    "&:hover": {
      color: "#103037",
    },
    borderWidth: '2px',
    borderColor: '#103037'
  },
}));

export default useStyles;
