import {
  Star,
  TestAuthorOne,
  TestAuthorThree,
  TestAuthorTwo,
} from "../svgs/Icons";

const Testimonials = () => {
  const testimonialItems = [
    {
      id: 1,
      comment:
        '"Goatcloud Hosting made launching my e-commerce store incredibly easy. The AI builder helped me create a professional site in under an hour, and the local support team has been amazing."',
      author: "Amara Okafor",
      location: "Lagos, Nigeria",
      authorIcon: <TestAuthorOne />,
    },
    {
      id: 2,
      comment:
        '"The uptime has been fantastic - 99.9% as promised. My blog loads super fast for my African audience, and the security features give me peace of mind."',
      author: "Kwame Asante",
      location: "Accra, Ghana",
      authorIcon: <TestAuthorTwo />,
    },
    {
      id: 3,
      comment:
        '"Migrating from my old host was seamless. The team handled everything, and my site is now faster than ever. The pricing in local currency is a huge plus!"',
      author: "Lindiwe Mthembu",
      location: "Cape Town, South Africa",
      authorIcon: <TestAuthorThree />,
    },
  ];
  return (
    <div className="lg:py-20 py-10 bg-[#fff]">
      <div className="mt-10 w-[90vw] mx-auto py-10 flex flex-col space-y-3 items-center justify-center">
        <div className="bg-[#E6E6FA] text-[#05038E] font-semibold py-2 px-4 rounded-full">
          <span>Testimonials</span>
        </div>
        <h2 className="lg:text-[48px] text-[20px] text-center font-semibold">
          Trusted by thousands
        </h2>
        <p className="lg:text-[20px] text-center">
          See what our customers say about their experience with Goatcloud
          Hosting.
        </p>

        <div className="mt-20 grid lg:grid-cols-3 gap-20">
          {testimonialItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center space-y-6"
            >
              <div className="flex">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <p className="">{item.comment}</p>
              <div className="flex items-center space-x-3">
                <div className="">{item.authorIcon}</div>
                <div className="flex flex-col space-y-1">
                  <h2 className="">{item.author}</h2>
                  <p className="">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
