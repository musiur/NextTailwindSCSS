import { Image, Text, useTheme } from "@nextui-org/react";
import MoneyBag from "../static/images/moneybag.png";
import ButtonG from "../components/ButtonG";

const Home = () => {
  const { theme } = useTheme();
  return (
    <div className="containerG home__container sectionG">
      <div className="flex flex-col-reverse md:grid grid-cols-2 gap-[2rem]">
        <div className="flex flex-col justify-center">
          <Text
            h1
            css={{
              textGradient: `45deg, ${theme.colors.primarySolidHover.value} -20%, ${theme.colors.primaryBorder.value} 50%`,
            }}
            weight="bold"
            className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] 2xl:text-[4rem]"
          >
            Leave No Little One Behind
          </Text>
          <Text
            b
            className="text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] 2xl:text-[1.4rem] my-10"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            suscipit sapien viverra ligula ultricies sodales.
          </Text>
          <div>
            <ButtonG color="primary" text="Donate Now!" />
          </div>
        </div>
        <div className="relative">
          <Image
            showSkeleton
            maxDelay={10000}
            src={MoneyBag.src}
            alt="Default Image"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            className="w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
