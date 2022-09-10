export const theme = () => {
  /*
    hot pink #fc00ff
    darkSeaBlue: "#0080bc",
    lightSeaBlue: "#00a4e1",
  */

  const themeObj = {
    paperBg: "#FFFFFF",
    primaryMain: "#0080bc",
    secondaryMain: "#00a4e1",
  };

  
  
  const { paperBg, primaryMain, secondaryMain } = themeObj

  return ({
    palette: {
      background:{
        default: "#136096",
        paper: paperBg,
      },
      primary: {
        main: primaryMain,
      },
      secondary: {
        main: secondaryMain,
      },
    }
  })
}
