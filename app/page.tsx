import { AvatarHeading } from "@/src/components/AvatarHeading";
import { Banner } from "@/src/components/Banner";
import { Center } from "@/src/components/Center";
import { Divider } from "@/src/components/Divider";
import { HomeContent, getHomeContentData } from "@/src/components/HomeContent";

const Home = async () => {
  const data = await getHomeContentData(process.cwd() + '/src/info.json');

  return (
    <Center>
      <Banner>
        <AvatarHeading />
        <Divider width="350px" />
        <HomeContent data={data} />
      </Banner>
    </Center>
  );
};

export default Home;