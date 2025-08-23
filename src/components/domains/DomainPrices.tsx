import { SearchIcon } from "../svgs/Icons";

const Prices = () => {
  const domainExtensions = [
    {
      type: ".academy",
      category: "Education",
      catBgColor: "#EFF4FF",
      catColor: "#05038E",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
    {
      type: ".agency",
      category: "Professional",
      catBgColor: "#F0FDF9",
      catColor: "#107569",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
    {
      type: ".app",
      category: "Technology",
      popular: true,
      catBgColor: "#F9F5FF",
      catColor: "#9F1AB1",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
    {
      type: ".art",
      category: "Music, Photography & Arts",
      catBgColor: "#FDF4FF",
      catColor: "#9F1AB1",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
    {
      type: ".africa",
      category: "Africa",
      popular: true,
      catBgColor: "#F0FDF9",
      catColor: "#107569",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
    {
      type: ".asia",
      category: "International",
      catBgColor: "#FEFBE8",
      catColor: "#A15C07",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
    {
      type: ".associates",
      category: "Professional",
      catBgColor: "#FFF1F3",
      catColor: "#C01048",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
    {
      type: ".audio",
      category: "Music, Photography & Arts",
      catBgColor: "#FDF4FF",
      catColor: "#9F1AB1",
      regCost: "$2.99",
      transferCost: "$2.99",
      renewalCost: "$4.99",
    },
  ];

  return (
    <div className="bg-[#fff] py-10">
      <div className="w-[90vw] mx-auto border border-[#ccc] rounded-2xl py-6">
        {/* Header + Filters */}
        <div className="flex flex-col space-y-3 px-6 pb-6">
          <h2 className="text-[20px] font-semibold">Domain prices</h2>

          {/* Filters - responsive */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-3 md:space-y-0">
            {/* Search */}
            <div className="w-full md:w-[55%] border border-[#ccc] p-3 rounded-lg flex items-center space-x-3">
              <SearchIcon />
              <input
                type="text"
                placeholder="Enter domain name you want to transfer"
                className="w-[90%] outline-none border-none bg-inherit"
              />
            </div>

            {/* Dropdowns */}
            <div className="w-full md:w-[15%] border border-[#ccc] rounded-lg px-6 py-3">
              <select className="outline-none border-none w-full">
                <option>All prices</option>
              </select>
            </div>
            <div className="w-full md:w-[15%] border border-[#ccc] rounded-lg px-6 py-3">
              <select className="outline-none border-none w-full">
                <option>All categories</option>
              </select>
            </div>
            <div className="w-full md:w-[15%] border border-[#ccc] rounded-lg px-6 py-3">
              <select className="outline-none border-none w-full">
                <option>Name (A-Z)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-hidden rounded-2xl mx-6 shadow-sm">
          <table className="w-full">
            <thead>
              <tr className="bg-white text-[#667085] text-[12px] text-left">
                <th className="px-6 py-4 font-semibold">Domain Extension</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Register (per year)</th>
                <th className="px-6 py-4 font-semibold">Renewal (per year)</th>
                <th className="px-6 py-4 font-semibold">Transfer</th>
              </tr>
            </thead>
            <tbody>
              {domainExtensions.map((ext, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"}`}
                >
                  <td className="px-6 py-4 font-medium">{ext.type}</td>
                  <td className="px-6 py-4">
                    <span
                      className="px-3 py-1 rounded-lg text-sm font-medium"
                      style={{
                        backgroundColor: ext.catBgColor,
                        color: ext.catColor,
                      }}
                    >
                      {ext.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">{ext.regCost}</td>
                  <td className="px-6 py-4">{ext.renewalCost}</td>
                  <td className="px-6 py-4">{ext.transferCost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden px-3 space-y-4">
          {domainExtensions.map((ext, index) => (
            <div
              key={index}
              className="border border-[#ccc] rounded-xl p-4 flex justify-between items-start"
            >
              <div className="flex flex-col space-y-2">
                <span className="font-semibold text-lg">{ext.type}</span>
                <span
                  className="px-3 py-1 rounded-lg text-[11px] font-medium w-fit"
                  style={{
                    backgroundColor: ext.catBgColor,
                    color: ext.catColor,
                  }}
                >
                  {ext.category}
                </span>
              </div>

              <div className="flex flex-col items-end space-y-2 text-sm">
                <span>Reg: {ext.regCost}</span>
                <span>Renew: {ext.renewalCost}</span>
                <span>Transfer: {ext.transferCost}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
