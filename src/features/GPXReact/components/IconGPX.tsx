import * as React from "react"
import DefaultIcon from "@mui/icons-material/DisabledByDefault"
import HomeIcon from "@mui/icons-material/Home"

export default function Icon(props: any) {
  let { icon, color } = props;
  if (!color) color = "inherit";
  let iconFragment
  switch (icon) {
    case "home":
      iconFragment = <HomeIcon color={color} />
      break
    case "default":
      iconFragment = <DefaultIcon color={color} />
      break
    default:
      iconFragment = <DefaultIcon color="error" />
  }
  return <React.Fragment>{iconFragment}</React.Fragment>
}
