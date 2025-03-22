import React from "react";
import Header from "../components/Header";
import EmailSubscription from "../components/EmailSubscription";
import Footer from "../components/Footer";
import { AboutHeader, AboutSectionsGrid } from "./components";

function AboutPage(): JSX.Element {
  return (
    <>
      <Header />
      <AboutHeader />
      <AboutSectionsGrid />
      <EmailSubscription />
      <Footer />
    </>
  );
}

export default AboutPage;
