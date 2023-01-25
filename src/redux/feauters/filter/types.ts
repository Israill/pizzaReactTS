export enum SortPropertyEnum {
    RATING_DESK = "rating",
    RATING_ASK = "-rating",
    TITLE_DESK = "title",
    TITLE_ASK = "-title",
    PRICE_DESK = "price",
    PRICE_ASK = "-price",
  }
  
  export type Sort = {
    name: string;
    sortProperty: SortPropertyEnum;
  };
  
  export interface FilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: Sort;
  }