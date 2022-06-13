import React from "react";
import { TextFileds } from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Atoms/TextField",
    component: TextFileds,
  } as ComponentMeta<typeof TextFileds>;

  const Template: ComponentStory<typeof TextFileds> = (args) => (
    <TextFileds {...args} />
  );

  export const TextFiled1 = Template.bind({});
  TextFiled1.args = {
    label:"Todo Item",
    onChange:()=>{console.log("Hello")}
 
};