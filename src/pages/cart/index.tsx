import Container from "../../components/defaults/Container";
import Footer from "../../components/defaults/Footer";
import Testimonials from "../../components/home/Testimonials";
import {
  DiscountTag,
  GreenTick,
  PaymentIcon,
  ScanIcon,
} from "../../components/svgs/Icons";

const Cart = () => {
  const items = [
    "Fast & expert support",
    "24/7 monitoring",
    "99.9% uptime guaranteed",
    "After-hours support",
    "30-Day Money Back",
    "Fast & expert support",
  ];
  return (
    <Container>
      <div className="bg-[url('/assets/bg-gradient.svg')] mt-10 bg-cover lg:pt-[15vh] pt-20 bg-no-repeat min-h-screen">
        <div className="w-[90vw] mx-auto">
          <div className="flex flex-col space-y-3">
            <div className="flex">
              <div className="bg-[#12214D] text-[#fff] font-semibold py-2 px-4 rounded-full">
                <span>Your cart</span>
              </div>
            </div>
            <h2 className="lg:text-[60px] text-[30px] font-semibold">
              Review your selected service and complete your purchase
            </h2>
          </div>

          <div className="my-10 bg-[#fff] lg:py-10 py-6 lg:px-6 px-3 rounded-3xl flex lg:flex-row flex-col justify-between">
            <div className="lg:w-[70%]">
              <h2 className="lg:text-[20px] text-[18px] font-semibold">
                Selected package
              </h2>
              <div className="mt-4 border border-[#f1f1f1] rounded-2xl shadow-lg p-4">
                <div className="border border-[#ccc] rounded-2xl lg:p-6 p-4">
                  <h2 className="lg:text-[18px] font-semibold text-[#333]">
                    Web Hosting starter
                  </h2>
                  <p className="text-[#333] text-[14px] mt-2">
                    Perfect for personal sites
                  </p>
                  <div className="flex items-baseline mt-6">
                    <h1 className="text-[30px] font-semibold">$2.99</h1>
                    <span className="text-[#333] text-[12px]">/mo</span>
                  </div>

                  <div className="mt-6 grid lg:grid-cols-4 gap-3">
                    {items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 text-[14px]"
                      >
                        <GreenTick />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-3 mt-10">
                <h2 className="lg:text-[20px] text-[18px] font-semibold">
                  Choose your billing cycle
                </h2>

                <div className="grid lg:grid-cols-4 gap-6 mt-4 border-4 border-[#f1f1f1] rounded-2xl shadow-xl p-4">
                  <div className="border border-[#1A2E6C] py-6 flex flex-col items-center justify-center text-center rounded-xl space-y-4">
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        name="month"
                        id="month"
                        defaultChecked
                      />
                      <label
                        htmlFor="month"
                        className="text-[20px] font-semibold"
                      >
                        1 month
                      </label>
                    </div>
                    <p className="text-[12px]">
                      <span className="font-semibold">$2.99</span>/month
                    </p>
                    <span className="text-[10px] text-[#667085]">
                      $17.94 per year, billed monthly
                    </span>
                  </div>
                  <div className="border border-[#1A2E6C] py-6 flex flex-col items-center justify-center text-center rounded-xl space-y-4">
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" name="month" id="month" />
                      <label
                        htmlFor="month"
                        className="text-[20px] font-semibold"
                      >
                        3 months
                      </label>
                    </div>
                    <p className="text-[12px]">
                      <span className="font-semibold">$2.99</span>/month
                    </p>
                    <span className="text-[10px] text-[#667085]">
                      $17.94 per year, billed every 3 months
                    </span>
                  </div>
                  <div className="border border-[#1A2E6C] py-6 flex flex-col items-center justify-center text-center rounded-xl space-y-4">
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" name="month" id="month" />
                      <label
                        htmlFor="month"
                        className="text-[20px] font-semibold"
                      >
                        6 months
                      </label>
                    </div>
                    <p className="text-[12px]">
                      <span className="font-semibold">$2.99</span>/month
                    </p>
                    <span className="text-[10px] text-[#667085]">
                      $17.94 per year, billed every 6 months
                    </span>
                  </div>
                  <div className="relative border border-[#1A2E6C] py-6 flex flex-col items-center justify-center text-center rounded-xl space-y-4">
                    <div className="absolute -top-4 -right-6">
                      <DiscountTag />
                    </div>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" name="month" id="month" />
                      <label
                        htmlFor="month"
                        className="text-[20px] font-semibold"
                      >
                        12 months
                      </label>
                    </div>
                    <p className="text-[12px]">
                      <span className="font-semibold">$1.2</span>/month
                    </p>
                    <span className="text-[10px] text-[#667085]">
                      $14.40 per year, billed annually
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[27%] lg:mt-0 mt-10">
              <h2 className="lg:text-[20px] text-[18px] font-semibold">
                Payment information
              </h2>
              <div className="mt-4 border border-[#f1f1f1] rounded-2xl shadow-lg p-4 space-y-4">
                <h2 className="lg:text-[18px] font-semibold">Order summary</h2>
                <div className="flex items-center justify-between">
                  <h2 className="text-[14px] text-[#333]">
                    Web hosting starter - 1 month
                  </h2>
                  <p className="text-[13px]">$2.99</p>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[14px] text-[#333]">VAT (7.5%)</h2>
                  <p className="text-[13px]">$0.22</p>
                </div>
                <div className="flex items-center justify-between">
                  <h2 className="text-[14px] font-semibold text-[#333]">
                    Total
                  </h2>
                  <p className="text-[13px]">$3.21</p>
                </div>
              </div>

              <div className="mt-6 border border-[#f1f1f1] rounded-2xl shadow-lg p-4 space-y-4">
                <h2 className="lg:text-[18px] font-semibold">Discount code</h2>
                <div className="flex p-3 rounded-xl border border-[#ccc]">
                  <div className="flex items-center space-x-3">
                    <ScanIcon />
                    <input
                      type="number"
                      placeholder="Enter discount code"
                      className="border-none outline-none bg-inherit w-[70%]"
                    />
                  </div>
                  <button className="bg-[#182A62] text-[#fff] font-semibold text-[14px] px-4 py-2 rounded-lg">
                    Apply
                  </button>
                </div>
              </div>

              <div className="mt-6 border border-[#f1f1f1] rounded-2xl shadow-lg p-4 space-y-4">
                <h2 className="lg:text-[18px] font-semibold">Payment method</h2>
                <div className="grid grid-cols-2 gap-10 mt-4">
                  <div className="flex items-center space-x-3 text-[14px] text-[#333]">
                    <input type="checkbox" name="method" id="method" />
                    <label htmlFor="method">PayPal</label>
                  </div>
                  <div className="flex items-center space-x-3 text-[14px] text-[#333]">
                    <input type="checkbox" name="method" id="method" />
                    <label htmlFor="method">Flutterwave</label>
                  </div>
                  <div className="flex items-center space-x-3 text-[14px] text-[#333]">
                    <input type="checkbox" name="method" id="method" />
                    <label htmlFor="method">Bank Transfer</label>
                  </div>
                  <div className="flex items-center space-x-3 text-[14px] text-[#333]">
                    <input type="checkbox" name="method" id="method" />
                    <label htmlFor="method">Bank Transfer</label>
                  </div>
                </div>
              </div>

              <button className="bg-[#182A62] w-[100%] text-[#fff] font-semibold text-[14px] px-4 py-4 mt-6 flex items-center justify-center space-x-3 rounded-lg">
                <PaymentIcon />
                <span>Proceed to pay #3.21</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </Container>
  );
};

export default Cart;
