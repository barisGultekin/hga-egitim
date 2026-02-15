export interface Testimonial {
  slug: string;
  image: string;
  name: string;
  title: {
    tr: string;
    en: string;
  };
  company: string;
  summary: {
    tr: string;
    en: string;
  };
  fullText: {
    tr: string;
    en: string;
  };
}

export const testimonials: Testimonial[] = [
  {
    slug: 'ilker-colak',
    image: '/testimonials/ilker-colak.png',
    name: 'İlker Çolak',
    title: {
      tr: 'Genel Müdür Yardımcısı',
      en: 'General Manager Assistant',
    },
    company: 'Recticel',
    summary: {
      tr: 'Eğitimlerde hedeflenen başarının sağlanmasında en önemli faktörün eğitimci olduğunu Handan Gültekin Aktuğ sayesinde bir kez daha teyid etmiş olduk.',
      en: 'We once again confirmed that the trainer is the most important factor in achieving the targeted success in trainings, thanks to Handan Gültekin Aktuğ.',
    },
    fullText: {
      tr: `Eğitimlerde hedeflenen başarının sağlanmasında en önemli faktörün eğitimci olduğunu Handan Gültekin Aktuğ sayesinde bir kez daha teyid etmiş olduk. Normal mesai günleri için bile eğitimlerin planlanması ve katılımın sağlanması zorken, iş planlamasından kaynaklı zorunlu nedenlerle hafta sonu düzenlenecek eğitimlerde katılımın sağlanması başlı başına ayrı bir sorun teşkil ediyordu, ta ki ilk eğitim gününe kadar.

İlk eğitim gününden sonra ilk katılımcıların yorumları, bir sonraki grubun heyecanla eğitim gününü beklemesine sebep oldu. Eğitim süresi boyunca Handan Hanım'ın profesyonel yaklaşımı, konuya hakimiyeti ve katılımcılarla kurduğu güçlü bağ sayesinde tüm katılımcılar eğitimlerden maksimum verim aldılar.

Kendisine teşekkür eder, başarılarının devamını dileriz.`,
      en: `We once again confirmed that the trainer is the most important factor in achieving the targeted success in trainings, thanks to Handan Gültekin Aktuğ. While it was difficult to plan trainings and ensure participation even for normal working days, ensuring participation in trainings to be held on weekends for mandatory reasons arising from work planning was a separate problem in itself, until the first training day.

After the first training day, the comments of the first participants caused the next group to eagerly await the training day. Throughout the training period, thanks to Ms. Handan's professional approach, mastery of the subject and strong bond with the participants, all participants got maximum benefit from the trainings.

We thank her and wish her continued success.`,
    },
  },
  {
    slug: 'ali-naki-karadag',
    image: '/testimonials/naki-karadag.png',
    name: 'Ali Naki Karadağ',
    title: {
      tr: 'Teknik Eğitim Sorumlusu',
      en: 'Technical Training Manager',
    },
    company: 'Lisi-FTB Bağlantı Elemanları',
    summary: {
      tr: 'Handan Gültekin Aktuğ\'dan almış olduğumuz duyarlılık ve iletişim geliştirme eğitimleri arkadaşlarımız arasında ilişki ve iletişimin geliştirilmesinde büyük rol oynamaktadır.',
      en: 'The sensitivity and communication development trainings we received from Handan Gültekin Aktuğ play a major role in developing relationships and communication among our colleagues.',
    },
    fullText: {
      tr: `Eğitimlerin sosyal yaşamda ve çalışma alanında sağlamış olduğu katkı ve olumlu etkilerden üst düzeyde faydalanma bilinci ve isteği içerisinde çalışmalarımızı yürütmekteyiz.

Handan Gültekin Aktuğ'dan almış olduğumuz duyarlılık ve iletişim geliştirme eğitimleri arkadaşlarımız arasında ilişki ve iletişimin geliştirilmesinde büyük rol oynamakta ve faaliyetlerimizin her alanına yansımaktadır.

Kendisine teşekkür eder, başarılarının devamını dileriz.`,
      en: `We carry out our work with the awareness and desire to benefit at the highest level from the contribution and positive effects of trainings in social life and work area.

The sensitivity and communication development trainings we received from Handan Gültekin Aktuğ play a major role in developing relationships and communication among our colleagues and are reflected in all areas of our activities.

We thank her and wish her continued success.`,
    },
  },
  {
    slug: 'gozde-pehlivan',
    image: '/testimonials/gozde-pehlivan.png',
    name: 'Gözde Pehlivan',
    title: {
      tr: 'İK Uzmanı',
      en: 'HR Specialist',
    },
    company: 'Gediz A.Ş.',
    summary: {
      tr: 'Handan Hanım\'ın eğitiminin sonunda, katılımcıların yazılı ve sözlü olarak yaptığı değerlendirmeler ve eğitim hakkındaki olumlu geri dönüşler gerçekten çok motive ediciydi.',
      en: 'At the end of Ms. Handan\'s training, the written and verbal evaluations made by the participants and the positive feedback about the training were really very motivating.',
    },
    fullText: {
      tr: `Handan Hanım ile, 2015 yılının Ekim-Kasım aylarında 80'nin üzerinde orta kademe yöneticimizle, Planlama ve Organize Etme Eğitimi'ni gerçekleştirdik.

Birimlerimizin uzak lokasyonlarda olması ve iş yoğunluğu sebebiyle çalışanlarımız eğitimlere karşı isteksiz olabiliyorlar. Yöneticilerimizi eğitim salonuna getirmek gerçekten zor oluyor. Fakat Handan Hanım'ın eğitiminin sonunda, katılımcıların yazılı ve sözlü olarak yaptığı değerlendirmeler ve eğitim hakkındaki olumlu geri dönüşler gerçekten çok motive ediciydi.

Katılımcılar eğitimin içeriğinden, eğitim yöntemlerinden ve özellikle eğitmenin yaklaşımından son derece memnun kaldıklarını ifade ettiler. Handan Hanım'a teşekkür eder, çalışmalarında başarılar dileriz.`,
      en: `With Ms. Handan, we conducted Planning and Organizing Training with over 80 mid-level managers in October-November 2015.

Due to the remote locations of our units and work intensity, our employees can be reluctant to attend trainings. It is really difficult to bring our managers to the training hall. However, at the end of Ms. Handan's training, the written and verbal evaluations made by the participants and the positive feedback about the training were really very motivating.

Participants expressed that they were extremely satisfied with the content of the training, the training methods, and especially the trainer's approach. We thank Ms. Handan and wish her success in her work.`,
    },
  },
];
