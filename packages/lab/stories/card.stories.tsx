import { ReactNode } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Link, ToolkitProvider } from "@salt-ds/core";
import { Card, Panel } from "@salt-ds/lab";
import { ColumnLayoutContainer, ColumnLayoutItem } from "./story-layout";

export default {
  title: "Core/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

interface ExampleRowProps {
  children: ReactNode;
  name: string;
}

const ExampleRow = ({ name, children }: ExampleRowProps) => (
  <Panel style={{ height: "unset", width: 800 }}>
    <h1>{name} - ( Touch, Low, Medium, High )</h1>
    <ColumnLayoutContainer>
      <ColumnLayoutItem>
        Touch
        <ToolkitProvider density="touch">{children}</ToolkitProvider>
      </ColumnLayoutItem>
      <ColumnLayoutItem>
        Low
        <ToolkitProvider density="low">{children}</ToolkitProvider>
      </ColumnLayoutItem>
      <ColumnLayoutItem>
        Medium
        <ToolkitProvider density="medium">{children}</ToolkitProvider>
      </ColumnLayoutItem>
      <ColumnLayoutItem>
        High
        <ToolkitProvider density="high">{children}</ToolkitProvider>
      </ColumnLayoutItem>
    </ColumnLayoutContainer>
  </Panel>
);

const Examples = () => (
  <>
    <ExampleRow name="Default">
      <Card>
        <div>
          <h1 style={{ margin: "0", lineHeight: "1.3em" }}>
            Card with Density
          </h1>
          <span>Here is some content</span>
        </div>
      </Card>
    </ExampleRow>
  </>
);

export const DefaultCard: ComponentStory<typeof Card> = () => (
  <Card>
    <div>
      <h1>This is Card</h1>
      <span>Using Nested DOM Elements</span>
    </div>
  </Card>
);

export const Disabled: ComponentStory<typeof Card> = () => (
  <Card data-testid="card-disabled-example" disabled>
    <div>
      <h1>Disabled Card</h1>
      <span>Here is some content</span>
    </div>
  </Card>
);

export const Interactable: ComponentStory<typeof Card> = () => (
  <Link
    href="https://google.com"
    style={{ display: "inline-block", textDecoration: "none" }}
    tab-index="0"
    target="_parent"
  >
    <Card interactable>
      <div>
        <p>Visit Google</p>
      </div>
    </Card>
  </Link>
);

export const All: ComponentStory<typeof Card> = () => (
  <div style={{ marginTop: -200 }}>
    <ToolkitProvider mode="light">
      <Examples />
    </ToolkitProvider>
    <ToolkitProvider mode="dark">
      <Examples />
    </ToolkitProvider>
  </div>
);