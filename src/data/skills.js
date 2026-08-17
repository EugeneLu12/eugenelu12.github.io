import {
  SiGo,
  SiPython,
  SiRuby,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiSnowflake,
  SiTerraform,
  SiKubernetes,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiRubyonrails,
  SiDotnet,
  SiReact,
} from 'react-icons/si'
import { TbBrandCSharp, TbSql, TbDatabase } from 'react-icons/tb'
import { FaAws } from 'react-icons/fa6'

export const skillGroups = [
  {
    category: 'Languages',
    items: [
      { name: 'Go', icon: SiGo, color: '#00ADD8' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'C#', icon: TbBrandCSharp, color: '#68217A' },
      { name: 'Ruby', icon: SiRuby, color: '#CC342D' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Postgres', icon: SiPostgresql, color: '#4169E1' },
      { name: 'SQL', icon: TbSql, color: '#475569' },
      { name: 'Snowflake', icon: SiSnowflake, color: '#29B5E8' },
      { name: 'Yugabyte', icon: TbDatabase, color: '#FF6B4A' },
      { name: 'Terraform', icon: SiTerraform, color: '#7B42BC' },
      { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'Flask', icon: SiFlask, color: '#000000' },
      { name: 'Django', icon: SiDjango, color: '#092E20' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Rails', icon: SiRubyonrails, color: '#CC0000' },
      { name: '.NET', icon: SiDotnet, color: '#512BD4' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
    ],
  },
]
