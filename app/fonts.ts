import { Inter, Palanquin, Montserrat } from "next/font/google";
export const inter = Inter({ display: "optional", subsets: ["latin"], variable: '--font-inter',  weight: ['300' , '400' , '500' , '600' , '700' , '800' , '900'] });
export const palanquin = Palanquin({ display: "swap", subsets: ["latin"], weight: ["200", "300","400", "500", "600", "700",], variable: '--font-palanquin'})
export const montserrat = Montserrat({ display: "swap", weight: ['300' , '400' , '500' , '600' , '700' , '800' , '900'], subsets: ["latin"], variable: '--font-montserrat'})
