export interface Product {
  name: string
  emoji: string
  cardBg: string
  description?: string
}

export const products: Product[] = [
  { name: 'Wafer Rolls', emoji: '🧇', cardBg: '#FADADD' },
  { name: 'Enrobed Wafer Rolls', emoji: '🍫', cardBg: '#FFE0C3' },
  { name: 'Wafer Biscuits', emoji: '🍪', cardBg: '#FFF3CC' },
  { name: 'Chocolate Wafer Biscuits', emoji: '🍩', cardBg: '#E8E4FF' },
  { name: 'Hard Boiled Candies', emoji: '🍬', cardBg: '#FFD6A5' },
  { name: 'Jellies', emoji: '🍭', cardBg: '#FFB3A0' },
  { name: 'Chocolate Toy', emoji: '🎁', cardBg: '#FFD6E8' },
  { name: 'Lollipop', emoji: '🍭', cardBg: '#FFCCE0' },
]

export interface BestSeller {
  name: string
  subtitle: string
  description: string
  emoji: string
  cardBg: string
  textColor: string
  btnTextColor: string
}

export const bestSellers: BestSeller[] = [
  {
    name: 'Wafer Biscuit',
    subtitle: 'Crunchy Layers',
    description: 'Delicate wafer layers filled with rich cream, baked to golden perfection.',
    emoji: '🍪',
    cardBg: '#F9429E',
    textColor: 'white',
    btnTextColor: '#F9429E',
  },
  {
    name: 'Rich Rolls Dark',
    subtitle: 'Wafer Rolls',
    description: 'Premium dark chocolate enrobed wafer rolls with a satisfying crunch.',
    emoji: '🍫',
    cardBg: '#2E7D32',
    textColor: 'white',
    btnTextColor: '#2E7D32',
  },
  {
    name: 'Joos Jelly',
    subtitle: 'Jellies',
    description: 'Bursting with fruity flavors, soft and chewy jelly treats kids love.',
    emoji: '🍬',
    cardBg: '#00BCD4',
    textColor: 'white',
    btnTextColor: '#00BCD4',
  },
  {
    name: 'Hunny Kaju Candy',
    subtitle: 'Premium Candy',
    description: 'Traditional kaju flavor wrapped in a smooth, melt-in-your-mouth candy.',
    emoji: '🍯',
    cardBg: '#F5C842',
    textColor: '#3B1F0A',
    btnTextColor: '#F5C842',
  },
]

export interface Feature {
  title: string
  description: string
  icon: string
  color: string
}

export const features: Feature[] = [
  {
    title: 'Wide Product Portfolio',
    description: 'From wafer rolls to candies, we offer a diverse range of confectionery delights.',
    icon: '🍬',
    color: '#F8A6C0',
  },
  {
    title: 'Fun & Engaging Concepts',
    description: 'Creative packaging and flavors that bring joy to every bite and smile.',
    icon: '😊',
    color: '#F5C842',
  },
  {
    title: 'Consistent Quality & Taste',
    description: 'Every product meets the highest standards of quality and flavor consistency.',
    icon: '✅',
    color: '#5BBCB0',
  },
  {
    title: 'Reliable Supply Partner',
    description: 'Trusted supply chain ensuring timely delivery across all regions of India.',
    icon: '🛡️',
    color: '#E8223A',
  },
  {
    title: 'Hygienic Manufacturing',
    description: 'State-of-the-art facilities with strict hygiene protocols at every step.',
    icon: '🏭',
    color: '#4CAF50',
  },
  {
    title: 'Value-Driven Excellence',
    description: 'Premium quality products at competitive prices that deliver true value.',
    icon: '⭐',
    color: '#9C27B0',
  },
]
