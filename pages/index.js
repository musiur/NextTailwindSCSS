import { Image, Text, useTheme } from "@nextui-org/react";
import MoneyBag from "../static/images/moneybag.png";
import MapPin from "../static/images/mappin.png";
import NotifyHeart from "../static/images/notifyheart.png";
import Fire from "../static/images/fire.png";
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
              textGradient: `45deg, ${theme.colors.yellow300.value} -20%, ${theme.colors.yellow600.value} 50%`,
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
            <ButtonG color="warning" text="Donate Now!" />
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
      <div className="text-center sectionG">
        <Text
          h1
          css={{
            textGradient: `45deg, ${theme.colors.yellow600.value} 50%, ${theme.colors.yellow300.value} 90%`,
          }}
          weight="bold"
          className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] 2xl:text-[4rem]"
        >
          Your Donation is Life-changing
        </Text>

        <Text className="text-[1rem] md:text-[1.1rem] lg:text-[1.3rem] 2xl:text-[1.4rem] my-10">
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
          impedit quo minus id quod maxime placeat facere possimus.
        </Text>
        <ul className="flex items-center gap-[2rem] justify-center">
          <li className="font-bold text-[1.2rem] lg:text-[2rem]">Explore</li>
          <li className="font-bold text-[1.2rem] lg:text-[2rem]">Engage</li>
          <li className="font-bold text-[1.2rem] lg:text-[2rem]">Work</li>
        </ul>
        <div className="grid grid-cols-3 gap-2 mt-10">
        <div className="relative">
          <Image
            showSkeleton
            maxDelay={10000}
            src={MapPin.src}
            alt="Default Image"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            className="w-[80%]"
          />
        </div>
        <div className="relative">
          <Image
            showSkeleton
            maxDelay={10000}
            src={NotifyHeart.src}
            alt="Default Image"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            className="w-[80%]"
          />
        </div>
        <div className="relative">
          <Image
            showSkeleton
            maxDelay={10000}
            src={Fire.src}
            alt="Default Image"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            className="w-[80%]"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
