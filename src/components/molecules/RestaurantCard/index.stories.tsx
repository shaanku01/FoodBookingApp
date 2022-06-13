import React from "react";
import  RestaurantCard from ".";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
    title: "Molecules/RestaurantCard",
    component: RestaurantCard,
  } as ComponentMeta<typeof RestaurantCard>;

  const Template: ComponentStory<typeof RestaurantCard> = (args) => (
    <RestaurantCard {...args} />
  );

  export const RestaurantCard1 = Template.bind({});
  RestaurantCard1.args = {
    "id":2,
    "name":"AnTeRa",
    "rating":"4.2",
    "url":"https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/j/y/p94145-162696013160f97103d4056.jpg?tr=tr:n-xlarge",
    "location":"Jublie Hills , Hyderabad"
};