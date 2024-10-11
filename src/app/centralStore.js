import { create } from "zustand";
import productSlice from "./productSlice";
import courseSlice from "./courseSlice";
import { devtools } from "zustand/middleware";

const useCentralStore = create(
  devtools((...a) => ({
    ...productSlice(...a),
    ...courseSlice(...a),
  }))
);

export default useCentralStore;
