import { IconButton } from "./IconButton";
import figma from "@figma/code-connect";

figma.connect(
  IconButton,
  "https://www.figma.com/design/rvQj59q5mJDxy4Z5HAAnMn/Config-Recap-DevMode-Demo?node-id=33-422&m=dev",
  {
    props: {
      variant: figma.enum("Variant", {
        Inverse: "inverse",
        Secondary: "secondary",
      }),
      icon: figma.instance("Icon"),
      disabled: figma.enum("* State", {
        Disabled: true,
      }),
    },
    example: ({ icon, variant }) => (
      <IconButton
        ariaLabel="Describe the action here."
        variant={variant}
        icon={icon}
        onClick={() => {}}
      />
    ),
  }
);
