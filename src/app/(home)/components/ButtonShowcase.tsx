"use client";
import type React from "react";
import { useState } from "react";
import BadgeButton from "@/components/ui/badge-button";
import ShareButton from "@/components/ui/share-button";
// import SlideButton from "@/components/ui/slide-button";
import WrapButton from "@/components/ui/wrap-button";
import { Facebook, Linkedin, Share, SparklesIcon, Twitter, Mail, Send } from "lucide-react";
import Link from "next/link";
// import { BsDiscord } from "react-icons/bs";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ButtonShowcase = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  type SubmitStatus = { success: boolean; message: string } | null;
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus({ success: true, message: "Message sent successfully!" });
    } catch (error) {
      setSubmitStatus({ success: false, message: "Failed to send message." });
    }
    setIsSubmitting(false);
  };

  const shareLinks = [
    {
      icon: Twitter,
      onClick: () => window.open("https://twitter.com/share"),
      label: "Share on Twitter",
    },
    {
      icon: Facebook,
      onClick: () => window.open("https://facebook.com/share"),
      label: "Share on Facebook",
    },
    {
      icon: Linkedin,
      onClick: () => window.open("https://linkedin.com/share"),
      label: "Share on LinkedIn"
    },
    {
      icon: MessageCircle,
      onClick: () => navigator.clipboard.writeText(window.location.href),
      label: "Copy link",
    },
  
  ];

  return (
    <section className="py-10 overflow-x-clip">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-5">
          <div className="w-fit border rounded-2xl px-4 py-1 flex items-center gap-2">
            <SparklesIcon className="fill-[#EEBDE0] stroke-1 text-neutral-800" />
            <span className="font-mono">Click in style</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 py-0 md:py-20 gap-x-8">
            <div className="flex items-center md:items-start flex-col px-4 md:px-0">
              <span
                style={{ fontFamily: "poppins" }}
                className="text-5xl text-center md:text-left md:text-8xl font-black "
              >
                <span className="dark:text-amber-200 text-amber-400">
                  KraftX
                </span>{" "}
                That Fit Every Style.
              </span>
              <p className="text-center md:text-left font-mono mt-4 text-xs md:text-xl ">
                From minimal to bold, discover variants that add{" "}
                <span className="text-red-400">personality</span> and{" "}
                <span className="text-blue-400">functionality</span> to your{" "}
                <span className="text-amber-400">project</span>.
              </p>

              <div className="w-fit text-left dark:bg-amber-300 bg-amber-400 py-2 px-4 rounded-none text-black mt-5">
                <Link href={"/"}>
                  <span className="font-mono">Learn More.</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start justify-start gap-y-6 mt-10 md:mt-0">
              <ShareButton links={shareLinks} className="self-end">
                <Share />
                Share
              </ShareButton>

              <form onSubmit={handleSubmit} className="w-full space-y-4 mt-8">
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-white" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Your Email ..."
                      required
                      className="w-full pl-10 p-3 text-white bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message ..."
                    rows={4}
                    className="w-full p-3 text-white bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
                  ></textarea>
                </div>
                <div className="flex justify-center md:justify-start">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 shadow-md shadow-white bg-gradient-to-r from-primary to-secondary text-white rounded-xl hover:opacity-90 transition-all duration-300 disabled:opacity-70 flex items-center group"
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                    <Send
                      size={18}
                      className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
                {submitStatus && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`${
                      submitStatus.success ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.p>
                )}
              </form>

              <WrapButton className="mt-6">Let's build sleek</WrapButton>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-300 text-sm">© All Rights Reserved. KraftX 2025</div>

    </section>
  );
};

export default ButtonShowcase;
