import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "./Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function FontOptimization() {
  return (
    <div className={myFont.className}>
      <h1 className="text-4xl">Hello Next.js 🚀</h1>
      <p className="mt-4">This text is using my local font.</p>
    </div>
  );
}