import "@/styles/globals.css";
import { METADATA } from "./metadate";
import { inter, montserrat, palanquin } from "./fonts";


export const metadata = METADATA
const RootLayout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${palanquin.variable} ${montserrat.variable}`} >{children}</body>
    </html>
  );
}

export default RootLayout
