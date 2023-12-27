import { configureStore } from "@reduxjs/toolkit";

import reducer from "./User";
export const store = configureStore({ reducer: reducer });
