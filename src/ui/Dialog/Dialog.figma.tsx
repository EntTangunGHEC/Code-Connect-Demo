import { Dialog } from "./Dialog";
import figma from "@figma/code-connect";

figma.connect(
  Dialog,
  "https://www.figma.com/design/rvQj59q5mJDxy4Z5HAAnMn/Config-Recap-DevMode-Demo?node-id=33-545&m=dev",
  {
    props: {
      children: figma.boolean("Actions", {
        true: figma.children(["Dialog Content", "Dialog Actions"]),
        false: figma.children(["Dialog Content"]),
      }),
    },
    example: (props) => <Dialog>{props.children}</Dialog>,
  }
);
