import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Image src="/image.jpg" width={100} height={100} alt="">
      </Image>
    </>
  )
}