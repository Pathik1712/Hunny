export interface Product {
  name: string;
  emoji: string;
  cardBg: string;
  src: string;
}

export const products: Product[] = [
  {
    name: "Wafer Rolls",
    emoji: "🧇",
    cardBg: "#F5D1EE",
    src: "/productChocolateWafer.svg",
  },
  {
    name: "Enrobed Wafer Rolls",
    emoji: "🍫",
    cardBg: "#FFF2B8",
    src: "/productChocolateRoll.svg",
  },
  {
    name: "Wafer Biscuits",
    emoji: "🍪",
    cardBg: "#F4E1AA",
    src: "/productChocolateBiscuit.svg",
  },
  {
    name: "Chocolate Wafer Biscuits",
    emoji: "🍩",
    cardBg: "#F7ADAF",
    src: "/productWaferBiscuit.svg",
  },
  {
    name: "Hard Boiled Candies",
    emoji: "🍬",
    cardBg: "#D1A184",
    src: "/productCandy.svg",
  },
  { name: "Jellies", emoji: "🍭", cardBg: "#F9A825", src: "/productJelly.svg" },
  {
    name: "Chocolate Toy",
    emoji: "🎁",
    cardBg: "#F7ADAF",
    src: "/productKinder.svg",
  },
  {
    name: "Lollipop",
    emoji: "🍭",
    cardBg: "#FFF9C4",
    src: "/productLollipop.svg",
  },
];

export interface BestSeller {
  name: string;
  subtitle: string;
  description: string;
  className: string;
  imgSrc: string;
  cardBg: string;
}

export const bestSellers: BestSeller[] = [
  {
    name: "Wafer Biscuit",
    subtitle: "Crunchy Layers",
    description:
      "Crispy wafer layers with smooth chocolate goodness in every bite.",
    className: "h-[450px] relative -top-12",
    imgSrc: "/bestSellerImage1.svg",
    cardBg: "#FF8FB8",
  },
  {
    name: "Rich Rolls Dark",
    subtitle: "Wafer Rolls",
    description: "Crunchy wafer rolls with smooth chocolate in every bite.",
    className: "h-[450px] relative -top-12",
    imgSrc: "/bestSellerImage4.svg",
    cardBg: "#9AC43C",
  },
  {
    name: "Joos Jelly",
    subtitle: "Jellies",
    description: "Delightfully chewy jellies with a touch of chocolate magic.",
    className: "relative top-20",
    imgSrc: "/bestSellerImage2.svg",
    cardBg: "#00BCD4",
  },
  {
    name: "Hunny Kaju Candy",
    subtitle: "Premium Candy",
    description: "Sweet moments made better with Hunny Chocolate Candy.",
    className: "relative top-20",
    imgSrc: "/bestSellerImage3.svg",
    cardBg: "#FFD66E",
  },
];

export interface Feature {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const features: Feature[] = [
  {
    title: "Wide Product Portfolio",
    description:
      "From wafer rolls to candies, we offer a diverse range of confectionery delights.",
    icon: "🍬",
    color: "#F8A6C0",
  },
  {
    title: "Fun & Engaging Concepts",
    description:
      "Creative packaging and flavors that bring joy to every bite and smile.",
    icon: "😊",
    color: "#F5C842",
  },
  {
    title: "Consistent Quality & Taste",
    description:
      "Every product meets the highest standards of quality and flavor consistency.",
    icon: "✅",
    color: "#5BBCB0",
  },
  {
    title: "Reliable Supply Partner",
    description:
      "Trusted supply chain ensuring timely delivery across all regions of India.",
    icon: "🛡️",
    color: "#E8223A",
  },
  {
    title: "Hygienic Manufacturing",
    description:
      "State-of-the-art facilities with strict hygiene protocols at every step.",
    icon: "🏭",
    color: "#4CAF50",
  },
  {
    title: "Value-Driven Excellence",
    description:
      "Premium quality products at competitive prices that deliver true value.",
    icon: "⭐",
    color: "#9C27B0",
  },
];
