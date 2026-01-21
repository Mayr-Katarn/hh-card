export type Profile = {
  name: string
  role: string
  location?: string
  skills: string[]
  experience: Array<{
    title: string
    company: string
    period: string
    bullets: string[]
  }>
  projects: Array<{
    title: string
    description: string
    stack: string[]
    links?: Array<{ label: string; href: string }>
  }>
  contacts: Array<{ label: string; value: string; href: string }>
}

export const profile: Profile = {
  name: 'Беликов Алексей',
  role: 'Middle+ Frontend Game Developer (Cocos Creator, Phaser)',
  location: 'Новосибирск • м. Золотая нива',
  skills: [
    'TypeScript',
    'Phaser 3',
    'Cocos Creator',
    'React',
    'Node.js',
    'Vue.js',
    'Git',
    'Linux (Ubuntu)',
    'NX monorepo',
    'Cordova',
    'Performance optimization',
    'Game programming',
  ],
  experience: [
    {
      title: 'Frontend-разработчик',
      company: 'Playnautica (Новосибирск)',
      period: 'Март 2023 — настоящее время',
      bullets: [
        'Развитие и поддержка проектов на Phaser 3 и React.',
        'Разработка игровых механик и UI, оптимизация производительности.',
        'Поддержка и развитие существующего кода и функционала.',
      ],
    },
    {
      title: 'Cocos Creator TypeScript Developer',
      company: 'Zebomba',
      period: 'Октябрь 2022 — Февраль 2023',
      bullets: [
        'Разработка мобильной игры на Cocos Creator.',
        'Реализация игровых механик и интерфейсов на TypeScript.',
      ],
    },
    {
      title: 'JavaScript Playable Developer',
      company: 'Playgendary',
      period: 'Ноябрь 2021 — Июнь 2022',
      bullets: [
        'Создание playable ads (30 секунд геймплея) на Cocos Creator.',
        'Разработка креативов-игр и их оптимизация под рекламные платформы.',
      ],
    },
    {
      title: 'Developer',
      company: 'ИП Семен Глушков (Новосибирск)',
      period: 'Январь 2021 — Ноябрь 2021',
      bullets: [
        'Разработка игр на движке Phaser 3.',
        'Реализация механик, интерфейсов и оптимизация производительности.',
      ],
    },
  ],
  projects: [
    {
      title: 'Сборщик атласов (внутренний инструмент)',
      description:
        'Разработал сборщик атласов для удобного использования текстур спрайтов в проектах на Phaser 3 и React.',
      stack: ['Node.js', 'TypeScript', 'Phaser 3', 'React'],
    },
    {
      title: 'Playable Ads (Cocos Creator)',
      description: 'Создание игр-креативов с ~30 секундами геймплея, оптимизация производительности и размеров.',
      stack: ['Cocos Creator', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'NX monorepo (настройка/миграция)',
      description: 'Практический опыт настройки и миграции проекта на NX monorepo.',
      stack: ['NX', 'TypeScript', 'Node.js'],
    },
    {
      title: 'Портирование на мобильные платформы (Cordova)',
      description: 'Опыт портирования веб-игр на мобильные платформы.',
      stack: ['Cordova', 'JavaScript', 'TypeScript'],
    },
  ],
  contacts: [
    { label: 'Телефон', value: '+7 (923) 234-10-36', href: 'tel:+79232341036' },
    { label: 'Email', value: 'redtein77@live.com', href: 'mailto:redtein77@live.com' },
    { label: 'VK', value: 'vk.com/mayr_white', href: 'https://vk.com/mayr_white' },
  ],
}
