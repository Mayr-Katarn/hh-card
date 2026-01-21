export const resources = {
  ru: {
    common: {
      appTitle: 'Беликов Алексей — резюме',
      themeLight: 'Светлая тема',
      themeDark: 'Тёмная тема',
      navHome: 'Главная',
      navProjects: 'Проекты',
      navCv: 'CV (PDF)',
      navContacts: 'Контакты',
      heroTitle: 'Беликов Алексей',
      heroRole: 'Middle+ Frontend Game Developer',
      heroLead:
        'Middle+ Frontend Game Developer. Коммерческий опыт разработки и поддержки проектов на Phaser 3 и Cocos Creator, а также UI/админ-панелей на React. Фокус: игровые механики, интерфейсы и оптимизация производительности.',
      ctaDownloadCv: 'Скачать CV (PDF)',
      ctaGoContacts: 'Перейти к контактам',
      sectionSkills: 'Навыки',
      sectionExperience: 'Опыт',
      sectionProjects: 'Проекты',
      sectionContacts: 'Контакты',
      cvTitle: 'CV в PDF',
      cvLead:
        'Положите актуальный PDF в папку public под именем cv.pdf — после этого кнопка скачивания начнёт работать.',
      cvPathHint: 'Путь: public/cv.pdf',
    },
  },
  en: {
    common: {
      appTitle: 'Aleksei Belikov — Resume',
      themeLight: 'Light theme',
      themeDark: 'Dark theme',
      navHome: 'Home',
      navProjects: 'Projects',
      navCv: 'CV (PDF)',
      navContacts: 'Contacts',
      heroTitle: 'Aleksei Belikov',
      heroRole: 'Middle+ Frontend Game Developer',
      heroLead:
        'Middle+ Frontend Game Developer with commercial experience building and supporting projects with Phaser 3 and Cocos Creator, plus UI/admin panels with React. Focus: gameplay mechanics, UI, and performance optimization.',
      ctaDownloadCv: 'Download CV (PDF)',
      ctaGoContacts: 'Go to contacts',
      sectionSkills: 'Skills',
      sectionExperience: 'Experience',
      sectionProjects: 'Projects',
      sectionContacts: 'Contacts',
      cvTitle: 'CV as PDF',
      cvLead: 'Put your PDF into public folder as cv.pdf — after that the link will work.',
      cvPathHint: 'Path: public/cv.pdf',
    },
  },
} as const

export type AppLanguage = keyof typeof resources
