import helioScreenshot from '../assets/helio-screenshot.jpg'
import localcodeScreenshot from '../assets/localcode-screenshot.jpg'

export const projects = [
  {
    title: 'Helio',
    description:
      'A desktop email client for Microsoft accounts built with Electron and React, backed by a Python FastAPI service that talks to the Microsoft Graph API.',
    tags: ['Electron', 'React', 'TypeScript', 'Python', 'FastAPI'],
    repo: 'https://github.com/EugeneLu12/mailclient',
    image: { src: helioScreenshot, width: 1200, height: 707 },
  },
  {
    title: 'Localcode',
    description:
      'A local code review tool for working with Claude Code. Run it in any git repo to review uncommitted changes in a GitHub-style diff view, leave line comments, and hand them back to Claude to act on.',
    tags: ['TypeScript', 'Node.js', 'Express', 'React', 'Vite'],
    repo: 'https://github.com/EugeneLu12/localcode',
    image: { src: localcodeScreenshot, width: 1600, height: 877 },
  },
]
