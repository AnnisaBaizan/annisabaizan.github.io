import type { Metadata } from "next";
import DailyProphet from "@/components/labs/DailyProphet";

export const metadata: Metadata = {
  title: "The Daily Prophet — Labs · Annisa Baizan",
  description: "A magical moving newspaper built with canvas animation and Pretext text measurement.",
};

export default function DailyProphetPage() {
  return <DailyProphet />;
}
