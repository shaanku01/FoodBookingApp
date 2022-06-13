import { Grid } from "@mui/material";
import axios from "axios";
import { observer } from "mobx-react-lite";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Buttons } from "../../components/atoms/Button";
import { UserImpl } from "../../store";

interface RestaurantAlertProps{
    user:UserImpl;
}

const RestaurantAlerts : React.FC<RestaurantAlertProps>= observer(({user}) => {

    const navigate = useNavigate();
  const api = axios.create({
    baseURL: "http://localhost:3004",
  });

  const [foods, setFoods] = useState<any>([]);
  const [restaurants, setRestaurants] = useState([]);
  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(false);

  const retrieveOrders = async () => {
    await api.get("/orders").then((res) => setOrders(res.data));
  };
  const retriveFoods = async () => {
    await api.get("/foods").then((res) => setFoods(res.data));
  };
  const retrieveRestaurants = async () => {
    await api.get("/restaurants").then((res) => setRestaurants(res.data));
    setLoading(true);
  };

  useLayoutEffect(() => {
    retrieveOrders();
    retriveFoods();
    retrieveRestaurants();
    console.log(foods, restaurants, orders);
  }, [loading]);

  const myfunction = () => {
    return restaurants.map((itemps: any) => {
      return (
            <>
          <Grid
            item
            xs={12}
            sx={{ borderBottom: "5px solid gray", marginBottom: "30px" }}
          >
            <h3>{itemps.name}</h3>
          </Grid>

          {orders.map((item: any) => {
            const rests = item.restaurant;
            const foodItems = item.foods;
            if (rests.includes(itemps.id)) {
              return (
                <div style={{ border: "1px solid black" }}>
                  <p>{item.userid} </p>

                  {item.foods.map((x: any) => {
                    return <p>{foods[x - 1].name}</p>;
                  })}
                </div>
              );
            }
          })}
       </>
      );
    });
  };







  if (loading == false) {
    return <h1>Loading</h1>;
  } else if (orders.length == 0 && loading == true) {
    return (
      <div>
        <h4>No Orders Yer!!</h4>
      </div>
    );
  } else if (loading) {
    return (
      <Grid container>
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          {" "}
          <h2>Restaurant Alerts!</h2>
        </Grid>

    

               {myfunction()}

        {/* <Grid
          item
          xs={12}
          sx={{ borderBottom: "5px solid gray", marginBottom: "30px" }}
        >
          <h3>Vivah Bhojanambu</h3>
        </Grid>

        {orders.map((item: any) => {
          const rests = item.restaurant;
          const foodItems = item.foods;
          if (rests.includes(1)) {
            return (
              <div style={{ border: "1px solid black" }}>
                <p>{item.userid} </p>

                {item.foods.map((x: any) => {
                  return <p>{foods[x - 1].name}</p>;
                })}
              </div>
            );
          }
        })}

        <Grid
          item
          xs={12}
          sx={{ borderBottom: "5px solid gray", marginBottom: "30px" }}
        >
          <h3>AnTeRa</h3>
        </Grid>

        {orders.map((item: any) => {
          const rests = item.restaurant;
          const foodItems = item.foods;

          if (rests.includes(2)) {
            return (
              <div style={{ border: "1px solid black" }}>
                <p>{item.userid} </p>

                {item.foods.map((x: any) => {
                  return <p>{foods[x - 1].name}</p>;
                })}
              </div>
            );
          }
        })}

        <Grid
          item
          xs={12}
          sx={{ borderBottom: "5px solid gray", marginBottom: "30px" }}
        >
          <h3>SPG GRAND</h3>
        </Grid>

        {orders.map((item: any) => {
          const rests = item.restaurant;
          const foodItems = item.foods;

          if (rests.includes(3)) {
            return (
              <div style={{ border: "1px solid black" }}>
                <p>{item.userid} </p>

                {item.foods.map((x: any) => {
                  console.log(foods[x]);
                  return <p>{foods[x - 1].name}</p>;
                })}
              </div>
            );
          }
        })}

        <Grid
          item
          xs={12}
          sx={{ borderBottom: "5px solid gray", marginBottom: "30px" }}
        >
          <h3>Pista House</h3>
        </Grid>

        {orders.map((item: any) => {
          const rests = item.restaurant;
          const foodItems = item.foods;

          if (rests.includes(4)) {
            return (
              <div style={{ border: "1px solid black" }}>
                <p>{item.userid} </p>

                {item.foods.map((x: any) => {
                  return <p>{foods[x - 1].name}</p>;
                })}
              </div>
            );
          }
        })} */}

        <Grid item xs={12} sx={{padding:"30px"}}><Buttons text={"Logout"} onClick={()=>{
                user.clearUserData();
                navigate("/");
        }} /></Grid>
      </Grid>
    );
  } else {
    return <></>;
  }
})

export default RestaurantAlerts;
