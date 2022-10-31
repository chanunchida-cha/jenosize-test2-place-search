import { makeAutoObservable } from "mobx";

class SearchStore {
  searchText: string = "";
  constructor() {
    makeAutoObservable(this);
  }

  setSearchText = (searchText: string) => {
    this.searchText = searchText;
    console.log(this.searchText);
  };
}

export const searchStore = new SearchStore();
