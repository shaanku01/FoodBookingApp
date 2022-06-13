//User Store:

import {action,computed,makeObservable,observable} from 'mobx';

interface User{
    userid:string;
    role:string;
    foods:number [];
    restaurant: number[];
}

export class UserImpl{
    user:User = {userid:"",role:"",foods:[],restaurant:[]};

    constructor(){
        makeObservable(this,{
           user:observable,
           setUser:action,
           setFoods:action,
           addItem:action,
           removeItem:action,
           addRestaurant:action,
           removeRestaurant:action,
           clearFoods:action,
           clearUserData:action
           
            
        })
    }

    clearUserData(){
        this.user = {userid:"",role:"",foods:[],restaurant:[]};
    }

    clearFoods(){
        this.user.foods = [];
    }

    setUser(obj:any){
        this.user.userid = obj.userid;
        this.user.role = obj.role;

    }

    setFoods(obj:[]){
        this.user.foods = obj;
    }

    addItem(id:number){
        this.user.foods.push(id);

    }

    removeItem(id:number){
        const index = this.user.foods.indexOf(id);
            if (index > -1) {
                this.user.foods.splice(index, 1); 
                }
       

    }

    addRestaurant(id:number){
        this.user.restaurant.push(id);
    }

    removeRestaurant(id:number){
        const index = this.user.restaurant.indexOf(id);
        if (index > -1) {
            this.user.restaurant.splice(index, 1); 
            }
        
    }
   
}


export const currentUser = new UserImpl();