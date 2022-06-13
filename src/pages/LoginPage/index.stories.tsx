import React from "react";
import  LoginPage  from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";


export default {
    title: "Pages/LoginPage",
    component: LoginPage,
  } as ComponentMeta<typeof LoginPage>;

  const Template: ComponentStory<typeof LoginPage> = () => (
    <BrowserRouter>
    <LoginPage  />
    </BrowserRouter>
   
  );

  export const Login1 = Template.bind({});
 