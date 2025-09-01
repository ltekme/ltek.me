import { BannerContent } from "@/src/components/Ui";
import { HomeContent } from "@/src/components/HomeContent";

const Home = async () => {
  return (<BannerContent
    headingText='Hello 👋'
    // content long enough that a fixed size is not needed
    // dividerClassNames="w-60 sm:w-100"
  >
    <HomeContent />
  </BannerContent>);
};

export default Home;