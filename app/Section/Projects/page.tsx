import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function page() {

    const projects = [
        {
            Image: "",
            Title: "",
            Description: "",
            Link: ""
        }
    ]
  return (
    <main className="h-screen bg-[#101828]">
      <h1 className="text-center text-white text-[4rem] font-bold pt-10">PROJECTS</h1>
    </main>
  );
}