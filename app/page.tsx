import { AvatarHeading } from "@/src/components/AvatarHeading";
import { Banner } from "@/src/components/Banner";
import { Center } from "@/src/components/Center";
import { Divider } from "@/src/components/Divider";
import { HomeContent, IHomeContentObj } from "@/src/components/HomeContent";

import infoData from "@/src/info.json";

const Home = async () => {
  const data = infoData as IHomeContentObj[];

  return (
    <Center>
      <Banner>
        <AvatarHeading />
        <Divider className="w-100" />
        <HomeContent data={data} />
      </Banner>
    </Center>
  );
};

export default Home;