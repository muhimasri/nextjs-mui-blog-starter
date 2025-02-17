import Footer from "./components/Footer";
import Banner from "./components/banner";
import Header from "./components/Header";
import RecentArticles from "./components/RecentArticles";
import EmailSubscription from "./components/EmailSubscription";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <RecentArticles />
      <EmailSubscription />
      <Footer />
    </>
  );
}
