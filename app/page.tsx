import { AvatarHeading } from "@/src/components/AvatarHeading";
import { Banner } from "@/src/components/Banner";
import { Divider } from "@/src/components/Divider";
import { HomeContent, getHomeContentData } from "@/src/components/HomeContent";

const Home = async () => {
  const data = await getHomeContentData(process.cwd() + '/src/info.json');

  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <Banner>
        <AvatarHeading imagePath="/avatar.webp" />
        <Divider width="350px" />
        <HomeContent data={data} />
      </Banner>
    </div>
  );
};

export default Home;