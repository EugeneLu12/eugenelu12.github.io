export const experience = [
  {
    company: 'Instacart',
    role: 'Software Engineer',
    location: 'Toronto, ON',
    start: 'Feb 2026',
    end: 'Present',
    summary:
      "I'm on an infrastructure team which manages and builds tooling for the entire 500+ fleet of production databases at Instacart.",
    highlights: [
      'Led the build of a pipeline and interface for viewing database costs, exposing costly and unused databases and saving $400K a year',
      'Audited and optimized telemetry retention policies across core systems, saving $300K a year',
      'Built self-serve tooling that automates database proxy provisioning',
      'Implemented Temporal workflows that detect and mitigate query performance degradations before they spread',
    ],
  },
  {
    company: 'DraftKings',
    role: 'Software Engineer',
    location: 'Boston, MA',
    start: 'Aug 2023',
    end: 'Oct 2025',
    summary:
      'I was on a product-centric backend team which owned the microservices that directly power the DraftKings Sportsbook app.',
    highlights: [
      'Led a refactor of core Sportsbook backend flows from system design to delivery, making homepage loads 30% faster',
      'Led a team of 5 developers to serve real-time player statistics in the Sportsbook app',
    ],
  },
  {
    company: 'Alida',
    role: 'Software Engineer Intern',
    location: 'Toronto, ON',
    start: 'Sep 2020',
    end: 'Aug 2021',
    summary: 'I was an intern on a fullstack team which owned the entire Alida mobile app.',
    highlights: [
      'Led the design and build of single sign-on in the mobile app using OAuth 2.0',
      'Cut latency on frequently called API endpoints by 80% by caching data in Redis',
      'Migrated CI/CD from GoCD to GitHub Actions, reducing false test failures by 60%',
    ],
  },
]
