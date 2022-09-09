export const theme = () => {
  /*
    hot pink #fc00ff
    sensible pink #af07b1
    darkDT9 #3f475b
    brightGreen #7eff00
    less bright green #5eb906
    weirdBlue #381beb
    nearlyBlack #202125
    red #b92b27
  */

  const themeObj = {
    paperBg: "#FFFFFF",
    primaryMain: "#3e465b",
    secondaryMain: "#b92b27",
  }
  
  const { paperBg, primaryMain, secondaryMain } = themeObj

  return ({
    palette: {
      background:{
        default: "#eee",
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
