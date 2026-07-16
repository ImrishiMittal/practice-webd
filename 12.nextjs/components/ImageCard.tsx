import Image from "next/image";
import img from "@/assets/IMG20221227142453.jpg";

export default function ImageCard() {
  return (
    <Image
      src={img}
      alt="Haridwar"
      width={400}
      height={300}
    />
  );
}