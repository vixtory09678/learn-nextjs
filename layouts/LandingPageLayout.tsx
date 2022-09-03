import Head from "next/head";
import { ReactNode } from "react";
import NavComponent from "../components/NavComponent";


type Props = {
  pageName: string;
  children: ReactNode
}

const LandingPageLayout = ({ pageName, children } : Props) => {
  return (
    <>
    <Head>
      <title>{pageName}</title>
    </Head>
    <NavComponent 
      textOrLogo={
        <div className="text-3xl text-blue-50">
          {pageName}
        </div>
      }
    />
    <div className="container mx-auto px-4 py-5 -z-10">
      {children}
    </div>
    </>
  )
}

export default LandingPageLayout;