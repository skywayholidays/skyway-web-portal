import { IconBreakfast, IconElectricity, IconExercise, IconOtherService, IconParkingArea, IconPrivateWorkspace, IconSwimmingpool, IconWifi } from "../assets/icons";
import Button from "./Button";

const Facilities = () => {
  const dynamicFacilitiesData = [
    {
      icon: IconPrivateWorkspace,
      title: "Private Workspace",
      link: null
    },
    {
      icon: IconParkingArea,
      title: "Parking Area",
      link: null
    },
    {
      icon: IconBreakfast,
      title: "Breakfast",
      link: null
    },
    {
      icon: IconWifi,
      title: "Free Wifi",
      link: null
    },
    {
      icon: IconElectricity,
      title: "Free Electricity",
      link: null
    },
    {
      icon: IconSwimmingpool,
      title: "Swimming Pool",
      link: null
    },
    {
      icon: IconExercise,
      title: "Exercise Space",
      link: null
    },
    {
      icon: IconOtherService,
      title: "Other Service",
      link: null
    },
  ];

  const FacilitiesBox = ({ icon, title }) => {
    return (
      <div className="facilities-box flex flex-col justify-center items-center w-[193px] h-[193px] rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
        <img src={icon} className="mx-auto" alt={`${title} Icon`} />
        <p className="mt-6 text-center">{title}</p>
      </div>
    );
  };

  return (
    <div className="md:container md:mx-auto max-md:mx-10 flex flex-col items-center mt">
      <div className="text-center mb-8">
        <h2 className="leading-[50px] text-[40px] font-semibold max-md:text-2xl">We do our best facilities to provide you</h2>
        <p className="mt-5 text-[16px] text-[#555555] leading-7 max-md:hidden">
          Experience world-class facilities at Skyway Holidays, your ultimate destination for relaxation and adventure. From luxurious accommodations to top-notch services, we cater to all your needs. Discover stunning locations, indulge in exceptional amenities, and create unforgettable memories. At Skyway Holidays, your dream getaway is just a reservation away!
        </p>
        <Button addClass=" py-10 px-8 rounded-[36px] max-md:hidden">
          Contact Now
        </Button>
      </div>
      <div className="flex flex-wrap justify-center w-full max-md:grid max-md:grid-cols-2 max-md:gap-4">
        {dynamicFacilitiesData.map((data, index) => (
          <FacilitiesBox key={index} icon={data.icon} title={data.title} />
        ))}
      </div>
    </div>
  );
}

export default Facilities;
