import { useState } from "react";
import { toast } from "react-toastify";
import { render } from "@react-email/render";
import { BuildRequestEmail } from "../email-templates/BuildRequestEmail";

const ContactRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    request: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const emailHtml: string = await render(
        <BuildRequestEmail
          name={formData.name}
          phone={formData.phone}
          request={formData.request}
        />
      );

      const response = await fetch("https://api.useplunk.com/v1/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_PLUNK_SECRET}`,
        },
        body: JSON.stringify({
          to: "custombuild@goatclouds.com",
          subject: "New Build Request",
          body: emailHtml,
        }),
      });

      if (response.ok) {
        toast.success(
          "✅ Details submitted successfully! We'll call you soon."
        );
        setFormData({ name: "", phone: "", request: "" });
      } else {
        toast.error("❌ Failed to submit. Please try again.");
      }
    } catch {
      toast.error("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      data-aos="fade-up"
      className="lg:mt-10 mt-4 bg-[#fff] rounded-2xl border border-[#ccc] p-4 lg:p-6 w-full"
    >
      <form onSubmit={handleSubmit}>
        <h2 className="text-[14px] text-gray-900">
          Give us information on what you want to build and we&apos;ll give you
          a call!
        </h2>

        <div className="mt-4 w-full flex justify-between lg:text-[16px] text-[14px]">
          <div className="flex flex-col space-y-2 w-[45%] text-gray-900">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="px-4 py-2 border border-[#ccc] rounded-lg outline-none w-full"
              required
            />
          </div>
          <div className="flex flex-col space-y-2 w-[45%] text-gray-900">
            <label htmlFor="phone">Phone number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="px-4 py-2 border border-[#ccc] rounded-lg outline-none w-full"
              required
            />
          </div>
        </div>

        <textarea
          name="request"
          value={formData.request}
          onChange={handleChange}
          className="px-4 py-2 mt-4 border border-[#ccc] rounded-lg outline-none w-full"
          placeholder="Describe your request in 10-20 words..."
          required
        ></textarea>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#182A62] text-white px-6 py-2 rounded-lg font-semibold disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit details"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactRequestForm;
