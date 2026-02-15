export interface HeroSlide {
  id: string;
  category: { tr: string; en: string };
  title: { tr: string; en: string };
  description: { tr: string; en: string };
  image: string;
  link?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 'trainings',
    category: { tr: 'LİDERLİK', en: 'LEADERSHIP' },
    title: {
      tr: 'Liderlik ve Yönetim Becerileri',
      en: 'Leadership and Management Skills',
    },
    description: {
      tr: 'Yöneticilerinizin potansiyelini açığa çıkarın. Stratejik düşünme, ekip yönetimi ve karar alma becerilerini geliştirin.',
      en: 'Unlock your managers\' potential. Develop strategic thinking, team management, and decision-making skills.',
    },
    image: '/hero-carousel/julia-sakelli.jpg',
    link: '/trainings',
  },
  {
    id: 'coaching',
    category: { tr: 'KOÇLUK', en: 'COACHING' },
    title: {
      tr: 'Yönetici Koçluğu & Takım Koçluğu',
      en: 'Executive Coaching & Team Coaching',
    },
    description: {
      tr: 'Spesifik ihtiyaçlarınız için spesifik yaklaşımlar ile hızlı ve etkili çözüm.',
      en: 'Fast and effective solutions with specific approaches for your specific needs.',
    },
    image: '/hero-carousel/luis-quintero.jpg',
    link: '/consultancy',
  },
  {
    id: 'communication',
    category: { tr: 'İLETİŞİM', en: 'COMMUNICATION' },
    title: {
      tr: 'Etkili İletişim, Başarılı İletişim',
      en: 'Effective Communication, Successful Communication',
    },
    description: {
      tr: 'Profesyonel, hedefe yönelik, insanı ve beklentilerini gözeten ilişki ve iletişim için en doğru eğitimler.',
      en: 'The most effective training for professional, goal-oriented relationships and communication that respects people and their expectations.',
    },
    image: '/hero-carousel/rdne.jpg',
    link: '/trainings/communication-conflict-resolution',
  },
];
