import type { MetaFunction } from "@remix-run/node";
import LatestArticle from "~/components/article/LatestArticle";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="flex items-center flex-col bg-[#fafafa]">
      <LatestArticle article={{
        title: "5 mistakes that kill your start-up before it takes off",
        description: "We often hear about the ENIAC, hailed as the first computer, but its story is just one thread in a rich tapestry woven by brilliant",
        profileImage: "/img/profile.png",
        name: "Nora Nora",
        time: "7 mins",
        creationDate: "July 12, 2024",
        image: "/img/blogimage.png",
        link: "#",
        tag: "business"
      }} />

<LatestArticle article={{
        title: "5 mistakes that kill your start-up before it takes off",
        description: "We often hear about the ENIAC, hailed as the first computer, but its story is just one thread in a rich tapestry woven by brilliant",
        profileImage: "/img/profile.png",
        name: "Nora Nora",
        time: "7 mins",
        creationDate: "July 12, 2024",
        image: "/img/blogimage2.jpg",
        link: "#",
        tag: "business"
      }} />

<LatestArticle article={{
        title: "5 mistakes that kill your start-up before it takes off",
        description: "We often hear about the ENIAC, hailed as the first computer, but its story is just one thread in a rich tapestry woven by brilliant",
        profileImage: "/img/profile.png",
        name: "Nora Nora",
        time: "7 mins",
        creationDate: "July 12, 2024",
        image: "/img/blogimage3.jpg",
        link: "#",
        tag: "business"
      }} />
    </main>
  );
}
