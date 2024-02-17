import "@/styles/globals.css";
import { inter } from "./fonts";
import { METADATA } from "./metadate";


export const metadata = METADATA

const RootLayout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout
