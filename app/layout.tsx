import type { Metadata } from "next";
import Image, { getImageProps } from "next/image";

import { Analytics } from "@vercel/analytics/react"

import { Center, Banner } from "@/src/components/Ui";
import campFire from "@/public/campfire.jpg"

import "@/src/globals.css";

export const metadata: Metadata = {
  title: "Ltek.me",
  description: "My Website",
};

const getBackgroundImage = (srcSet = '') => {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageSet})`
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    props: { srcSet },
  } = getImageProps({ alt: 'css40/41', width: 282, height: 376, src: campFire.src })
  const backgroundImage = getBackgroundImage(srcSet)

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
      <Analytics />
      <body
        className={`select-none`}
        style={{
          backgroundImage,
          backgroundPosition: "right bottom",
          backgroundSize: "40vh",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#080301",
          backdropFilter: "blur(5px)"
        }}
      >
        <Center><Banner
          style={{ backgroundColor: "rgba(8, 3, 1, 0.85)", }}>
          {children}
        </Banner></Center>
      </body>
    </html>
  );
}
