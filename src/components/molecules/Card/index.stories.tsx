import React from "react";
import  Card from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Molecules/Card",
    component: Card,
  } as ComponentMeta<typeof Card>;

  const Template: ComponentStory<typeof Card> = (args) => (
    <Card {...args} />
  );

  export const Card1 = Template.bind({});
  Card1.args = {
    "id":1,
    "name":"Chicken Biriyani",
    "cusine":"Indian",
    "url":"https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe-500x500.jpg"
};