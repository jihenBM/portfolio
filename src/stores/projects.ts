import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projects', () => {
  const projects = [
    {
      title: 'Metaowl',
      description: [
        'Working closely with data scientists to determine the most relevant data and insights to present on the site, maximizing their usefulness for game studios. Advanced chart design, such as box plots, Sankey charts, as well as zoomable charts, providing a rich visual representation of data related to player behavior, engagement patterns, and monetization strategies.',
        'Implemented custom display features, allowing users to choose between dark or light mode.',
        'Implemented the ability for customers to upload their own game maps in FBX format. Integration of Three.js for interactive 3D visualization, including analysis of busy areas for in-depth insights into player behavior.',
        'Design and implementation of a dedicated microservice, responsible for receiving data sent by the MetaOwl SDK. This server is responsible for efficiently storing data in the Kafka platform.',
        'Technologies used: PostgreSQL, Flask, Django, Poetry, Kafka, Apex Chart, Nuxt 3, Tailwind, Ansible, Gitlab CI/CD, GCP'
      ],
      link: 'https://meta-owl.io/',
      src: ['/images/portfolio/metaowl.png'],
      videos: ['/videos/metaowl.mp4']
    },
    {
      title: 'Herodot Studio',
      description: [
        'development and maintenance of the Herodot Studio company website.',
        'Technologies used: Django, Nuxt 3, Tailwind, Gitlab CI/CD, GCP'
      ],
      link: 'https://www.herodotstudio.com/',
      src: ['/images/portfolio/herodot.png'],
      videos: ['/videos/herodot-latest.mp4', '/videos/herodot-old.mp4']
    },
    {
      title: 'RimExpert',
      description: [
        'Design and implementation of a bilingual platform (French and Arabic) with an optimal user interface for clients.',
        'Robust administrator dashboard with advanced features for managing tenders, jobs, and advertising spaces.',
        'Integration of a custom text editor for easy content editing by users.',
        'Incorporation of Chart.js and Google Analytics for interactive data visualization, including hourly visitor counts, geographic distribution, and most viewed pages.',
        'Technologies used: Django, Angular, Chart.js, Google Analytics, PostgreSQL, Docker, OVH, Bootstrap'
      ],
      link: 'https://rimexpert.net',
      src: ['/images/portfolio/rimexpert.png']
    },
    {
      title: 'Ligne 13',
      description: [
        'Design and complete development of an e - commerce site specializing in the sale of bags Manufactured from recycled materials.',
        'Advanced search engine allowing users to filter products by color, size, keywords, etc.',
        "Automatic generation of invoices in PDF format with Django, automatically sent to sellers and buyers' emails.",
        'Technologies used: Angular, Tailwind, django, GCP'
      ],
      src: ['/images/portfolio/ligne13.png'],
      videos: ['/videos/ligne13.mp4']
    },
    // {
    //   title: 'Apollo',
    //   description: [
    //     'Implemented an automated notification system to Discord in case of task failure in Airflow workflows, enhancing responsiveness to operational issues.',
    //     'Incorporated DevOps practices into the project, focusing on the following aspects:',
    //     '- Established comprehensive test coverage with unit tests to ensure code stability and facilitate iterations.',
    //     '- Integrated a test coverage badge into the GitLab repository for immediate visibility into code quality.',
    //     '- Implemented a continuous deployment process using Ansible.',
    //     '- Fully dockerized the application.',
    //     'Technologies used: Airflow, Docker, Gitlab CI/CD, GCP, Ansible'
    //   ],
    //   src: ['/images/portfolio/apollo.png', '/images/portfolio/notif-metaowl.png']
    // },
    {
      title: 'Aivataria',
      description: [
        'Designed and implemented a user-friendly client interface allowing users to upload their avatars and choose from a selection of animations.',
        'Created a dedicated interface for administrators to upload completed animated avatars.',
        'Integrated a feature enabling clients to download the deliverable once the administrator has finalized the animation.',
        'Technologies used: Django, Angular, PostgreSQL, Docker, Bootstrap'
      ],
      src: ['/images/portfolio/aivataria.png'],
      videos: ['/videos/aivataria.mp4']
    },
    {
      title: 'Dari.tn',
      description: [
        'Implemented JWT-based authentication for secure user access.',
        'Developed an advanced search engine for filtering properties by location, type, and price.',
        'Established an advertisement management system, allowing users to publish, edit, and remove their listings.',
        'Integrated instant messaging for real-time communication between users.',
        'Incorporated a price estimation feature.',
        'Technologies used: Spring Boot, Spring JPA, Spring Security, Angular, Lombok'
      ],
      src: ['/images/portfolio/dari.png'],
      videos: ['/videos/dari.mp4']
    }
  ]
  return { projects }
})
