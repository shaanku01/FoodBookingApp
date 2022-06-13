import React from "react";
import  Login  from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { currentUser } from "../../../store";
import { BrowserRouter } from "react-router-dom";

export default {
    title: "Organisms/Login",
    component: Login,
  } as ComponentMeta<typeof Login>;

  const Template: ComponentStory<typeof Login> = (props) => (
    <BrowserRouter>
    <Login user={currentUser}  />
    </BrowserRouter>
  );

  export const Login1 = Template.bind({});
 