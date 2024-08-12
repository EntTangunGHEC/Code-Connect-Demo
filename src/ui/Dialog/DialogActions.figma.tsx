import { DialogActions } from "./DialogActions";
import figma from "@figma/code-connect";

figma.connect(
  DialogActions,
  "https://www.figma.com/design/rvQj59q5mJDxy4Z5HAAnMn/Config-Recap-DevMode-Demo?node-id=122-1371&m=dev",
  {
    props: { children: figma.children(["Button"]) },
    example: (props) => <DialogActions>{props.children}</DialogActions>,
  }
);
