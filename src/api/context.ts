import { createContext } from "react";
import { defaultValue } from "../utils/constants";
import { PortfolioWebsiteModel } from "./models";

export const PortfolioContext = createContext<PortfolioWebsiteModel>(defaultValue);