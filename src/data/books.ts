export interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  description: {
    tr: string;
    en: string;
  };
  link: string;
}

export const books: Book[] = [
  {
    id: 'your-brain-and-business',
    title: 'Your Brain and Business',
    author: 'Srinivasan S. Pillay',
    image: '/books/your-brain-and-business.jpg',
    description: {
      tr: 'Harvard psikiyatristi ve yönetici koçu Srinivasan S. Pillay, modern beyin bilimi ile liderlik arasındaki bağlantıları aydınlatıyor.',
      en: 'Harvard psychiatrist and executive coach Srinivasan S. Pillay illuminates the rapidly-emerging links between modern brain science and the corner office.',
    },
    link: '/books/your-brain-and-business',
  },
  {
    id: 'ermis',
    title: 'Ermiş',
    author: 'Halil Cibran',
    image: '/books/ermis.jpg',
    description: {
      tr: 'Mustafa\'nın ağzından, yakın zaman filozofu Cibran\'ın, günümüz hayatını dolduran kurumlara bakışını anlatan bir eser.',
      en: 'A timeless work by philosopher Khalil Gibran, presenting his views on the institutions that fill modern life through the voice of Mustafa.',
    },
    link: '/books/ermis',
  },
];
