import * as React from "react";
// import TimemachineIcon from "./TimemachineIcon";
import DefaultIcon from "@mui/icons-material/DisabledByDefault";
import SearchIcon from "@mui/icons-material/SortOutlined";
import HomeIcon from "@mui/icons-material/HomeOutlined";

export default function GPXIcon(props: any) {
  let { icon, color } = props;
  if (!color) color = "inherit";
  let iconFragment
  switch (icon) {

    case "home":
      iconFragment = <HomeIcon color={color} />
      break

      case "search":
        iconFragment = <SearchIcon color={color} />
        break

      // case 'gpx':
      //   iconFragment = <TimemachineIcon color={color} />
      //   break

      // case 'timemachine':
      //   iconFragment = <TimemachineIcon color={color} />
      //   break

    default:
      iconFragment = <DefaultIcon color="error" />
  }
  return <React.Fragment>{iconFragment}</React.Fragment>
}
