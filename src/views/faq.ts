import { Vue, Component } from 'vue-property-decorator'

interface IQuestion {
  id       : number
  question : string
  answer   : string
}

@Component
export default class FAQ extends Vue {
  get id () : number {
    return Number(this.$route.params.id || 0)
  }

  show (id: number) {
    if (id === this.id) { return }
    this.$router.replace({ name: 'faq', params: { id: id.toString() } })
  }

  hidden (id: number) {
    if (id !== this.id) { return }
    if (!this.$route.params.id) { return }
    this.$router.replace({ name: 'faq' })
  }

  mounted () {
    if (this.id === 0) {
      this.show(this.questions[0].id)
    }
  }

  questions : IQuestion[] = [
    {
      id       : 101,
      question : '<b-icon icon="controller"/> How do I control the mod?',
      answer   : `
        <p>
          Main menu:
          <ul>
            <li><smoo-btn ZL/> + <smoo-btn A/> - Mod configuration</li>
          </ul>
        </p>
        <p>
          Pause menu:
          <ul>
            <li><smoo-btn ZL/> + <smoo-btn A/> or <smoo-btn ZL/> + <smoo-btn B/> - Mod configuration</li>
          </ul>
        </p>
        <p>
          In-game:
          <ul>
            <li><smoo-btn L/> + <smoo-btn DLeft/> - Enable/disable Hide &amp; Seek [H&amp;S]</li>
            <li>[H&amp;S] <smoo-btn DUp/> - Switch between hider and seeker</li>
            <li>[H&amp;S] [Hider] <smoo-btn DLeft/> - Decrease hiding time</li>
            <li>[H&amp;S] [Hider] <smoo-btn DRight/> - Increase hiding time</li>
            <li>[H&amp;S] [Hider] <smoo-btn L/> + <smoo-btn DDown/> - Reset hiding time</li>
            <li>[H&amp;S] [Gravity] <smoo-btn L/> + <smoo-btn DRight/> - Toggle gravity camera</li>
            <li style="margin-top: 0.75em;"><smoo-btn ZR/> + <smoo-btn DUp/> - Open/close [Debug] menu</li>
            <li>[Debug] <smoo-btn ZR/> + <smoo-btn DLeft/> - Previous page</li>
            <li>[Debug] <smoo-btn ZR/> + <smoo-btn DRight/> - Next page</li>
            <li>[Debug] <smoo-btn ZL/> + <smoo-btn DLeft/> - Previous player</li>
            <li>[Debug] <smoo-btn ZL/> + <smoo-btn DRight/> - Next player</li>
          </ul>
        </p>
      `,
    },
    {
      id       : 102,
      question : '<b-icon icon="alt"/> How do I change the server I\'m connected to?',
      answer   : `
        By one of these methods:
        <ul>
          <li>
            In the main or pause menu hold <smoo-btn ZL/> and press <smoo-btn A/> to enter the hidden options menu
            where you can <code>Change Server IP</code>.
            You have to restart the game after saving the game.
            <b-icon icon="info-circle-fill" id="faq-change-ip"/>
            <b-tooltip target="faq-change-ip" triggers="hover">
              <p>
                With mod version <code>v1.0.0</code> you'll need to manually save the game.
              </p>
              <p>
                Newer versions of the mod will automatically save the game after changing the IP or port.
                Just wait a moment until you gain the control back before quitting.
              </p>
            </b-tooltip>
          </li>
          <li>
            Hold/press <smoo-btn ZL/> while starting the game. This will prompt you for the IP.
            <b-icon icon="info-circle-fill" id="faq-prompt-trigger"/>
            <b-tooltip target="faq-prompt-trigger" triggers="hover">
              Might not work with older versions of the mod.
            </b-tooltip>
          </li>
          <li>
            Delete the <code>common.bin</code> file in the save directory.
            <b-icon icon="info-circle-fill" id="faq-save-dir"/>
            <b-tooltip target="faq-save-dir" triggers="hover">
              <p>
                Inside the
                <a-int name="play" id="ryujinx">Ryujinx</a-int> emulator you can
                right click on the game to get to its save directory.
              </p>
              <p>
                On the <a-int name="play" id="switch">Switch</a-int> this file
                is on the internal storage and not on the SD card,
                which makes it difficult to delete easily.
                You could use a save file backup app, to export, modify and then restore the directory.
              </p>
            </b-tooltip>
          </li>
        </ul>
        <b-alert variant="warning" show class="mt-3">
          <b-icon icon="exclamation-triangle" class="text-danger" font-scale="1.5"/>
          <b>Don't use the reconnect feature under any circumstances.</b>
          <br/>
          It will likely corrupt your connection to the current server, not connect to the new one, and possibly even crash your game.
        </b-alert>
      `,
    },
    {
      id       : 103,
      question : '<b-icon icon="tools"/> How do I hack my Switch?',
      answer   : `
        <p>
          You need an <a-ext href="https://ismyswitchpatched.com/">unpatched</a-ext>
          older revision of the Nintendo Switch, a microSDXC card, a USB-C connection cable,
          and a computer (PC/Laptop/Smartphone) or a specific payload injecting device.
          To make the RCM exploit safer and easier, it's advised to use a RCM jig.
        </p>
        <p>
          Follow this <a-ext href="https://nh-server.github.io/switch-guide/">guide</a-ext>.
        </p>
        <hr/>
        <p>
          The SD card should be formatted with <code>FAT32</code> and not with <code>exFAT</code>.
          Because <code>exFAT</code> is known for having issues with the Nintendo Switch causing corrupted files and crashes.
        </p>
        <p>
          For the purpose of
          <a-int name="play" id="switch">downgrading</a-int>
          the game to version <code>1.0.0</code> and/or to
          <a-int name="faq" id="104">dump</a-int>
          the game ROM to be used for emulators,
          make sure that you back up the console keys
          using <a-ext href="https://google.com/search?q=Lockpick+RCM">Lockpick RCM</a-ext>.
        </p>
        <p>
          Because you need to connect the Nintendo Switch to the internet to play online, make sure that you properly
          <a-ext href="https://nh-server.github.io/switch-guide/extras/blocking_nintendo/">block Nintendo servers</a-ext>
          to
          <a-ext href="https://nh-server.github.io/switch-guide/faq/#is-it-safe-to-use-homebrew-will-i-get-banned">not get banned</a-ext>.
        </p>
      `,
    },
    {
      id       : 104,
      question : '<b-icon icon="download"/> How do I obtain a SMO ROM for emulators?',
      answer   : `
        <p>
          The only <i>legal</i> way to obtain a ROM is by dumping it from your
          <a-int name="faq" id="103">hacked Nintendo Switch</a-int>
          onto the SD card.
        </p>
        <hr/>
        <p>
          The short version is that you download the latest
          <a-ext href="https://github.com/DarkMatterCore/nxdumptool/releases">nxdumptool</a-ext>
          <b-icon icon="info-circle-fill" id="faq-nxdumptool-keys"/>
          <b-tooltip target="faq-nxdumptool-keys" triggers="hover">
            Please keep in mind, that <code>nxdumptool</code> needs the
            <a-int name="faq" id="103">console keys</a-int>
            on the SD card in order to work.
          </b-tooltip>
          and put it onto your SD card. (If it isn't already there. Some guides include it by default.)
          You then run it on the Nintendo Switch from the homebrew menu in the <code>title override mode</code>.
          <b-icon icon="info-circle-fill" id="faq-override-mode"/>
          <b-tooltip target="faq-override-mode" triggers="hover">
            This means that you don't start the homebrew menu via the <code>Album</code>, but instead
            you hold down <smoo-btn R/> while launching any game.
          </b-tooltip>
        </p>
        <p>
          Dump game from inserted gamecard:
          <ul>
            <li><code>Dump gamecard content</code></li>
            <li><code>Nintendo Submission Package (NSP) dump</code></li>
            <li><code>Split output dump (FAT32 support): Yes</code></li>
            <li><code>Start NSP dump process</code></li>
          </ul>
        </p>
        <p>
          Dump installed game (eShop):
          <ul>
            <li><code>Dump installed SD card / eMMC content</code></li>
            <li>Select SMO</li>
            <li><code>Nintendo Submission Package (NSP) dump</code></li>
            <li><code>Dump base application NSP</code></li>
            <li><code>Split output dump (FAT32 support): Yes</code></li>
            <li><code>Remove console specific data: Yes</code></li>
            <li><code>Generate ticket-less dump: Yes</code></li>
            <li><code>Start NSP dump process</code></li>
          </ul>
        </p>
        <p>
          The resulting ROM will be located on the SD card inside <code>/switch/nxdumptool/NSP/</code>.
          Because the SMO game has a size of over 4 GB the dump will be splitted into two files.
          On your computer (with a partition that isn't <code>FAT32</code>) you should merge the files together using the
          <a-ext href="https://github.com/emiyl/nxDumpMerger/releases">nxDumpMerger</a-ext>.
        </p>
      `,
    },
    {
      id       : 111,
      question : '<b-icon icon="laptop"/> Which emulator should I use?',
      answer   : `
        <a-int name="play" id="ryujinx">Ryujinx</a-int>
      `,
    },
    {
      id       : 105,
      question : '<b-icon icon="arrow-down-up"/> Am I on SMO version <code>1.0.0</code>?',
      answer   : `
        <p>
          When the game is downgraded using the
          <a-ext href="https://github.com/Istador/odyssey-downgrade/releases/latest">Odyssey Downgrade</a-ext>
          tool on the Nintendo Switch, the system and the main menu will show the game as being on version <code>1.3.0</code>.
          This is correct, because technically that is still the installed version.
        </p>
        <p>
          A good indicator if the game is really downgraded to <code>1.0.0</code>
          and is not running version <code>1.3.0</code> anymore
          is the <code>"Playing in VR"</code> option in the main menu.
          When the option is visible that means that the downgrade didn't work correctly
          and the game is still on version <code>1.3.0</code>.
        </p>
        <p>
          For emulators a real <code>1.0.0</code> ROM is needed, which can be
          <a-int name="faq" id="104">dumped</a-int>
          from the Nintendo Switch.
        </p>
      `,
    },
    {
      id       : 106,
      question : '<b-icon icon="box-arrow-right"/> Will the mod work for SMO version <code>1.3.0</code> in the future?',
      answer   : `
        No, it's too much effort to develop, test, build, release and support different versions of the mod.
        Also apparently version <code>1.3.0</code> is more difficult to mod than version <code>1.0.0</code> of the game.
      `,
    },
    {
      id       : 112,
      question : '<b-icon icon="building"/> How do I host my own server?',
      answer   : `
        <ol>
          <li>
            Run the server by one of these options:
            <ul>
              <li>
                <b-badge variant="success">easy</b-badge>
                run a <a-int name="host" id="binary">binary file</a-int> that you download.
              </li>
              <li>
                <b-badge variant="warning">advanced</b-badge>
                run a <a-int name="host" id="docker">docker image</a-int> that is already build for you.
              </li>
              <li>
                <b-badge variant="danger">hard</b-badge>
                build the binary file or docker image yourself from the source code.
              </li>
            </ul>
          </li>
          <li>
            Allow people to connect to your server.
            <ul>
              <li>
                This is difficult to understand for regular people.
                Generally speaking there needs to be a connection path between your server and its players that is not blocked
                (e.g. for security reasons by a router or firewall).
              </li>
              <li>
                It depends on where you run your server and how people can/should connect to it:
                <ul>
                  <li>
                    <b-badge variant="success">easy</b-badge>
                    It runs on your PC and only computers within your home network connect to it.
                  </li>
                  <li>
                    <b-badge variant="warning">advanced</b-badge>
                    It runs on your PC behind a <a-int name="host" id="router">router</a-int> with others connecting to your <a-int name="faq" id="107">public IP address</a-int>.
                  </li>
                  <li>
                    <b-badge variant="warning">advanced</b-badge>
                    It runs on your PC which connects to its players via a shared <a-int name="host" id="vpn">VPN</a-int> network.
                  </li>
                  <li>
                    <b-badge variant="primary">todo</b-badge>
                    <b-badge variant="warning">advanced</b-badge>
                     It runs on your PC which is connected to a <a-int name="host" id="remote">proxy</a-int> server or service to which players connect to.
                  </li>
                  <li>
                    <b-badge variant="primary">todo</b-badge>
                    <b-badge variant="danger">hard</b-badge>
                    It runs on a <a-int name="host" id="remote">remote server</a-int> somewhere else on the internet.
                  </li>
                </ul>
              </li>
              <li>
                Information you might also need:
                <ul>
                  <li><a-int name="faq" id="107">FAQ: What is a public/private IPv4 address?</a-int></li>
                  <li><a-int name="faq" id="109">FAQ: How do I port forward?</a-int></li>
                  <li><a-int name="host" id="router">Firewall settings</a-int>.</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            Configure and control your server:
            <ul>
              <li>
                <b-badge variant="success">easy</b-badge>
                by modifying the <a-int name="host" id="settings">settings.json</a-int> file that is automatically created when running the server.
              </li>
              <li>
                <b-badge variant="success">easy</b-badge>
                by typing <a-int name="host" id="commands">server commands</a-int> into the server window that opens up (command line interface).
              </li>
              <li>
                <b-badge variant="warning">advanced</b-badge>
                by messaging <a-int name="host" id="commands">server commands</a-int> to the <a-int name="host" id="discord">discord bot</a-int> of your server.
              </li>
              <li>
                <b-badge variant="danger">hard</b-badge>
                by sending <a-int name="host" id="commands">server commands</a-int> to the
                <a-ext href="https://github.com/Istador/SmoOnlineServer/blob/json-api/Server/JsonApi/README.md">JSON API</a-ext>
                of your non-official server.
              </li>
            </ul>
          </li>
        </ol>
      `,
    },
    {
      id       : 113,
      question : '<b-icon icon="list-ul"/> How do I get my server listed as a public server?',
      answer   : `
        <p>
          To get listed on the <a-int name="servers">server list</a-int> of this website you can:
          <ul>
            <li><a-ext href="https://github.com/Istador/smoo.it/blob/public/src/store/servers.ts" icon="github">Edit the file</a-ext> yourself and submit a GitHub pull request.</li>
            <li><a-ext href="https://rcl.smoo.it/contact" icon="envelope">Contact</a-ext> its developer.</li>
          </ul>
        </p>
        <p>
          To get listed on the official <a-ext href="https://discord.gg/w3TnB899ww" icon="discord">Discord</a-ext> server
          with channels for your server contact a Discord server admin, e.g. <code>Sanae</code>.
        </p>
      `,
    },
    {
      id       : 107,
      question : '<b-icon icon="broadcast"/> What is a public/private IPv4 address?',
      answer   : `
        <p>
          <b>TL;DR</b>
          <ul>
            <li>
              When you're hosting a server, then
              <a-ext href="https://www.google.com/search?q=What+is+my+IP">google "What is my IP"</a-ext>
              and give your public IP to other players (requires <a-int name="faq" id="109">port forwarding</a-int>).
            </li>
            <li>
              In an emulator with the server running on the same PC: use <code>127.0.0.1</code> (only valid on your PC).
            </li>
            <li>
              On a Nintendo Switch connecting to the server on your PC: use the private IP of your PC (only valid inside your network).
            </li>
            <li>
              Use <code>0.0.0.0</code> only in the <a-int name="host" id="settings">settings.json</a-int>.
            </li>
          </ul>
        </p>
        <hr/>
        <p>
          A public IPv4 address is the address under which a computer is accessible on the internet by other computers.
          Usually your router receives a public IPv4 address from your ISP.
          But be aware that there are internet subscriptions that don't give you a public IPv4 address but only a IPv6 address (e.g. LTE, DS Lite).
        </p>
        <p>
          Private IPv4 addresses are usually only used inside your home network or for VPN networks and aren't publicly reachable from the internet.
          You can easily detect them by their leading numbers:
          <code>10.x.x.x</code>, <code>172.[16-31].x.x</code>, and <code>192.168.x.x</code> are all private addresses.
        </p>
        <p>
          Additionally <code>127.x.x.x</code> is reserved for the local computer.
          You can input <code>127.0.0.1</code> as the server IP in the <a-int name="play">mod</a-int>,
          if you're playing with an emulator on the same computer that runs the <a-int name="host">server</a-int>.
        </p>
        <p>
          <code>0.0.0.0</code> usually stands for an invalid IPv4 address.
          It is only valid in context of hosting a <a-int name="host">server</a-int>
          inside the <a-int name="host" id="settings">settings.json</a-int> file to denote listening to connections from all networks.
          (On some systems it's a workable alias for <code>127.0.0.1</code>, but you should avoid using it.)
        </p>
      `,
    },
    {
      id       : 108,
      question : '<b-icon icon="wifi-off"/> Does this mod work with IPv6?',
      answer   : `
        <p>
          No.
          The Nintendo Switch doesn't support IPv6 natively.
          As long as Nintendo doesn't change this, or there's a homebrew network stack that supports it, this will likely never change.
        </p>
      `,
    },
    {
      id       : 109,
      question : '<b-icon icon="skip-forward"/> How do I port forward?',
      answer   : `
        <p>This depends on your specific router model.</p>
        <p>
          Usually you open the web interface of your router, login there, and search for an option that let you configure port forwarding.
          Common router addresses are:
          <ul>
            <li><a-ext href="http://192.168.0.1/">192.168.0.1</a-ext></li>
            <li><a-ext href="http://192.168.1.1/">192.168.1.1</a-ext></li>
          </ul>
          If you can't figure it out, check the outside of your router (usually there's a sticker on it),
          consult its manual, or check the default gateway of your network adapter.
        </p>
        <p>
          Once you found the settings, you want to configure:
          <ul>
            <li>Port: <code>1027</code> (internal &amp; external)</li>
            <li>Protocol: <code>TCP</code></li>
          </ul>
          Additionally you also need to say to which computer inside your network the port shall be forwarded to.
          You want to forward the port to the computer that runs the <a-int name="host">server</a-int>.
          Most routers will give you the option to select one of the currently connected devices.
          (Or you have already selected it to reach the port forwarding settings.)
          But sometimes you need to provide its private IP address manually.
        </p>
      `,
    },
    {
      id       : 114,
      question : '<b-icon icon="arrows-angle-contract"/> How do I join the game of my friend?',
      answer   : `
        <p>You don't.</p>
        <p>The SMOO mod does not contain a component that could connect games directly.</p>
        <p>Instead the mod needs to connect to a server, which is its own piece of software separate from the mod.</p>
        <p>
          You can <a-int name="faq" id="112">host your own private server</a-int> to which you and your friend(s) connect to (which might be a bit difficult).
          Or y'all can connect to one of the <a-int name="servers">public servers</a-int> that are hosted voluntarily for everyone to use.
        </p>
      `,
    },
    {
      id       : 110,
      question : '<b-icon icon="question-circle"/> Something doesn\'t work / Where do I get help?',
      answer   : `
        <p>
          Make sure that you read all instructions on this website thoroughly before bothering other people.
        </p>
        <p>
          If you still can't figure it out or have problems, head over to the
          <a-ext href="https://discord.gg/w3TnB899ww">official Discord server</a-ext>.
          It's an active community of people that might be able and willing to help you in one of the help channels.
        </p>
        <p>
          The issues sections of the GitHub projects for the
          <a-ext href="https://github.com/CraftyBoss/SuperMarioOdysseyOnline/issues">mod</a-ext>
          and the
          <a-ext href="https://github.com/Sanae6/SmoOnlineServer/issues">server</a-ext>
          are NOT for support,
          but for submitting actual bugs and feature requests.
          When submitting a bug, make sure that you describe it in detail
          and that you provide log files and/or crash reports if available.
        </p>
      `,
    },
  ]
}
