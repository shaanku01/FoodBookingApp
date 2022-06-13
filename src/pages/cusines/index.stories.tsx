import React from "react";
import  CusinePage  from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { currentUser } from "../../store";


export default {
    title: "Pages/CusinePage",
    component: CusinePage,
  } as ComponentMeta<typeof CusinePage>;

  const Template: ComponentStory<typeof CusinePage> = () => (
    <BrowserRouter>
    <CusinePage user={currentUser}  />
    </BrowserRouter>
   
  );

  export const CusinePage1 = Template.bind({});