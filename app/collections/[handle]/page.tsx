import Announcements from "@/components/announcements";
import Footer from "@/components/footer";
import InfoPanel from "@/components/info_panel";
import NavBar from "@/components/nav_bar";
import { getCollection } from "@/lib/shopify";
import { notFound } from "next/navigation";
import CollectionProducts from "./components/collection_products";
import Hero from "./components/hero";

type Props = {
  params: {
    handle: string;
  };
};
export default async function Page({ params }: Props) {
  const { handle } = params;
  const collection = await getCollection(handle);
  if (!collection) return notFound();

  return (
    <>
      <Announcements />
      <NavBar />
      <Hero collection={collection} />
      <CollectionProducts collection={collection} />
      <InfoPanel />
      <Footer />
    </>
  );
}
