import { ImageHeadingSpanCard } from "../molecules";
import { CheckOutForm } from "../organisms";
import Heading from "../../components/atoms/Heading";
import logo from "../../assets/logo.svg";

export const CheckoutPage = () => {
  return (
    <div className="pt-4 px-4 flex flex-col items-center mt-8 bottom-[-5]">
      <div className="w-full max-w-4xl mb-8 text-center">
        <Heading level={6} className="text-white text-4xl md:text-5xl">
          Card Payment <br />
          Checkout Form
        </Heading>
      </div>

      <div className="w-full md:w-10/12 lg:w-10/12 gap-2 justify-between flex flex-col lg:flex-row  mx-auto bg-white rounded-3xl   ">
        <div className="w-full md:w-full lg:w-6/12 flex justify-center items-center">
          <ImageHeadingSpanCard
            imageSrc={logo}
            headingText="Payment gateway"
            spanText="Enter school location details"
            altText="Payment gateway logo"
          />
        </div>
        <div className="w-full md:w-full lg:w-6/12 mr-4">
          <CheckOutForm />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
