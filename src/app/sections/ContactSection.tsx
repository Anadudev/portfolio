import { Linkedin, Mail } from "lucide-react";
import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section
      className="w-full bg-background-light py-24 dark:bg-background-dark md:py-40"
      id="contact"
    >
      <ScrollReveal className="mx-auto flex max-w-4xl flex-col items-center gap-12 px-4 md:gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="sf-display text-5xl font-black tracking-tight text-[#1D1D1F] dark:text-[#F5F5F7] md:text-7xl">
            Get in Touch.
          </h2>
          <p className="sf-display mx-auto max-w-xl text-lg text-gray-600 dark:text-gray-400 md:text-xl">
            I'm currently open to new opportunities and collaborations. Feel
            free to reach out.
          </p>
        </div>
        <div className="w-full max-w-3xl rounded-lg border border-solid border-black/5 bg-white p-8 dark:border-white/10 dark:bg-[#1C1C1E]">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-around">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800/80">
                <Mail />
              </div>
              <div>
                <h3 className="sf-display text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                  Email
                </h3>
                <Link
                  className="sf-display text-base text-[#135bec] transition-opacity hover:opacity-80 dark:text-blue-400"
                  href="mailto:anadudev@gmail.com"
                >
                  anadudev@gmail.com
                </Link>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800/80">
                <Linkedin />
              </div>
              <div>
                <h3 className="sf-display text-base font-semibold text-[#1D1D1F] dark:text-[#F5F5F7]">
                  LinkedIn
                </h3>
                <Link
                  className="sf-display text-base text-[#135bec] transition-opacity hover:opacity-80 dark:text-blue-400"
                  href="https://linkedin.com/in/anadudev"
                >
                  linkedin.com/in/anadudev
                </Link>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default ContactSection;
