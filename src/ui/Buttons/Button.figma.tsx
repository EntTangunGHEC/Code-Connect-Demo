import { Button } from "./Button";
import figma from "@figma/code-connect";

figma.connect(
  Button,
  "https://www.figma.com/design/rvQj59q5mJDxy4Z5HAAnMn/Config-Recap-DevMode-Demo?node-id=33-264&m=dev",
  {
    props: {
      label: figma.string("Label"),
      iconEnd: figma.boolean("Icon End", {
        true: figma.instance("↳ Icon End Instance"),
        false: undefined,
      }),
      iconStart: figma.boolean("Icon Start", {
        true: figma.instance("↳ Icon Start Instance"),
        false: undefined,
      }),
      variant: figma.enum("Variant", {
        Inverse: "inverse",
        Secondary: "secondary",
      }),
      disabled: figma.enum("* State", {
        Disabled: true,
      }),
      size: figma.enum("Size", {
        Small: "small",
      }),
    },
    example: ({ label, iconEnd, iconStart, variant, disabled, size }) => (
      <Button
        onClick={() => {}}
        iconEnd={iconEnd}
        iconStart={iconStart}
        variant={variant}
        disabled={disabled}
        size={size}
      >
        {label}
      </Button>
    ),
    links: [{ url: "https://storybookjs.org", name: "Storybook" }],
  }
);
