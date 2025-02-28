import { IServer } from '@/types'

const github = (repo = 'Sanae6/SmoOnlineServer') =>
  `https://github.com/${repo}/`
const externLink = (href: string, text: string) =>
  '<a href="' + href + '" class="extern" target="_blank">' + text + '</a>'
const linkRelease = (tag: string, label?: string, repo?: string) =>
  externLink(github(repo) + 'releases/tag/' + tag, label || tag)
const linkTree = (branch: string, label?: string, repo?: string) =>
  externLink(github(repo) + 'tree/' + branch, label || branch)

export const servers: IServer[] = [
  {
    name     : 'Piplup (Main)',
    link     : 'https://piplup.smoo.it',
    server   : { host: 'piplup.smoo.it', ip: '35.228.67.224' },
    location : { flag: 'fi', name: 'Finland' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 10 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Piplup (Capture Sync)',
    link     : 'https://piplup.smoo.it',
    server   : { host: 'piplup.smoo.it', ip: '35.228.67.22', port: 1028 },
    location : { flag: 'fi', name: 'Finland' },
    version  : linkTree('server', 'piplup/server', 'TeamPiplup/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Piplup (UDP)',
    link     : 'https://piplup.smoo.it',
    server   : { host: 'piplus.smoo.it', ip: '34.29.243.224', port: 1029 },
    location : { flag: 'us', name: 'US-Central' },
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
    version: {
      html    : linkRelease('1.0.5-rcl.1', 'udp/1.0.5', 'Istador/smo-multi-rs'),
      details : `<p>Connecting requires mod version ${linkRelease('v1.4.0', 'v1.4.0', 'CraftyBoss/SuperMarioOdysseyOnline')} or later.</p>`,
    },
  },
  {
    name     : 'Muz',
    server   : { host: 'larbe.org', ip: '49.13.203.68' },
    location : { flag: 'de', name: 'Germany' },
    version  : linkTree('1.0.5-rcl.8', 'Muz-dev/SmoOnlineServer'),
    settings : {
      Server         : { MaxPlayers: 12 },
      Scenario       : { MergeEnabled: true },
      Shines         : { Emabled: true },
      PersistShines  : { Enabled: true },
    },
  },
  {
    dead     : true,
    name     : 'Sanae',
    server   : { host: 'sanae.smoo.it', ip: '64.201.219.20' },
    location : { flag: 'ca', name: 'Canada' },
    settings : {
      Server: { MaxPlayers: 13 },
    },
  },
  {
    dead     : true,
    name     : 'F0C0S',
    server   : { host: 'f0c0s.smoo.it', ip: '94.130.25.137' },
    location : { flag: 'de', name: 'Germany' },
  },
  {
    name     : 'Sleepyy',
    server   : { host: 'sleepyy.smoo.it', ip: '141.94.109.19' },
    location : { flag: 'fr', name: 'France' },
    settings : {
      Server: { MaxPlayers: 6 },
    },
  },
  {
    name     : 'Parknich',
    server   : { host: 'parknich.smoo.it', ip: '15.204.209.108' },
    location : { flag: 'us', name: 'US-East' },
    settings : {
      Server: { MaxPlayers: 8 },
    },
  },
  {
    dead     : true,
    name     : 'Rocket',
    server   : { host: 'rocket.smoo.it', ip: '71.34.227.68', port: 1027 },
    location : { flag: 'us', name: 'US-Central' },
    version  : linkRelease('1.0.4'),
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: false },
    },
  },
  {
    name     : 'Luwuna (H&S)',
    server   : { host: 'luwuna.smoo.it', ip: '5.180.182.219', port: 1027 },
    location : { flag: 'nl', name: 'Netherlands' },
    version  : linkTree('main', 'LunaBroeke/main', 'LunaBroeke/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Luwuna (Co-op)',
    server   : { host: 'luwuna.smoo.it', ip: '5.180.182.219', port: 1028 },
    location : { flag: 'nl', name: 'Netherlands' },
    version  : linkTree('main', 'LunaBroeke/main', 'LunaBroeke/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    name     : 'Luwuna (Versus)',
    server   : { host: 'luwuna.smoo.it', ip: '5.180.182.219', port: 1029 },
    location : { flag: 'nl', name: 'Netherlands' },
    version  : linkTree('main', 'LunaBroeke/main', 'LunaBroeke/SmoOnlineServer'),
    settings : {
      Server        : { MaxPlayers: 4 },
      Scenario      : { MergeEnabled: false },
      Shines        : { Enabled: false },
      PersistShines : { Enabled: false },
    },
  },
  {
    name     : 'Krokilex',
    server   : { host: 'krokilex.smoo.it', ip: '37.16.29.245' },
    location : { flag: 'fr', name: 'France' },
    version  : linkRelease('0.3.0', 'rust/0.3.0', 'JulesGuesnon/smo-online-server'),
    settings : {
      Server: { MaxPlayers: 8 },
    },
  },
  {
    name     : 'Kamrons Public (H&S)',
    server   : { host: '66.220.29.106', ip: '66.220.29.106', port: 1027 },
    location : { flag: 'us', name: 'US-West' },
    version  : linkTree('main', 'Sanae6/SmoOnlineServer', 'Sanae6/Server'),
    settings : {
      Server        : { MaxPlayers: 8 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: true },
    },
  },
  {
    dead     : true,
    name     : 'Jeff',
    server   : { host: 'jeff.smoo.it', ip: '172.105.137.146' },
    location : { flag: 'us', name: 'US-East' },
    version  : {
      html    : linkTree('master', 'proximity/1.0.1', 'TheUbMunster/SmoOnlineServer'),
      details : `
        The Proximity Voice Chat (PVC) client requires additional settings:
        <ul>
          <li>PVC Port: <code>12000</code></li>
          <li>Discord Application ID: <code>1011047390133899324</code></li>
        </ul>
      `,
    },
    settings: {
      Server: { MaxPlayers: 6 },
    },
  },
  {
    dead     : true,
    name     : 'Snafty',
    server   : { host: 'snafty.smoo.it', ip: '209.25.141.180', port: 62102 },
    location : { flag: 'de', name: 'Germany' },
    version  : linkRelease('1.0.3'),
    settings : {
      Server        : { MaxPlayers: 16 },
      Scenario      : { MergeEnabled: true },
      Shines        : { Enabled: true },
      PersistShines : { Enabled: false },
    },
  },
].map((s: IServer) => {
  s.server.state = null
  return s
})
