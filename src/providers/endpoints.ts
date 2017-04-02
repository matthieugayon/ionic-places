
import { Injectable } from '@angular/core';

@Injectable()
export class Endpoints {

  API_PATH: string = "https://in-memory-todo-rurosxkzsc.now.sh";

  getLogin(){
    return this.API_PATH + "/sessions/create";
  }

  getSignup(){
    return this.API_PATH + "/users";
  }

  getPlaces(){
      return this.API_PATH + "/user/places"
  }

}
