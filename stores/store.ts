import { makeAutoObservable } from "mobx";
import axios from "axios";
import { Place } from "../models/interfaces/place";

class Store {
  places: Place[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  async getApiPlace() {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_GET_RESTAURANT}`
      );
      this.places = response.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export const store = new Store();
