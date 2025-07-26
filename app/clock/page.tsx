import type { Metadata } from "next";
import { ClockDisplay } from "./clock";

export const metadata: Metadata = {
  title: "Ltek.me | Clock",
  description: "Year-round Clock",
};

export default function ClockPage() {
  return (<ClockDisplay />);
}