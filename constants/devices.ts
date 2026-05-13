export interface Device {
  id: string;
  icon: string;
  name: string;
  subtitle: string;
  steps: string[];
  unsupported?: boolean;
}

export const devices: Device[] = [
  {
    id: "fire-tv",
    icon: "🔥",
    name: "Fire TV",
    subtitle: "Firestick, Fire Cube",
    steps: [
      "On your Firestick, go to Settings → My Fire TV → Developer Options.",
      "Enable 'Apps from Unknown Sources' and 'ADB Debugging'.",
      "Go back to the home screen and use the search icon to find 'Downloader'.",
      "Install the Downloader app and open it.",
      "Enter the URL provided in your welcome email to download the V17Mate APK.",
      "Install the APK and open V17Mate.",
      "Enter your Xtream Codes (URL, Username, Password) from your subscription email.",
      "Press 'Add User' and start watching!",
    ],
  },
  {
    id: "android-tv",
    icon: "🤖",
    name: "Android TV/Box",
    subtitle: "Chromecast, TCL, Sony, Nvidia Shield & more",
    steps: [
      "Open the Play Store on your Android TV or Box.",
      "Search for 'IPTV Smarters Pro' or 'V17Mate' and install it.",
      "Open the app and select 'Login with Xtream Codes API'.",
      "Enter the server URL, username, and password from your subscription email.",
      "Tap 'Add User' — your channels will load automatically.",
      "Browse Live TV, Movies, or Series and enjoy!",
    ],
  },
  {
    id: "formuler",
    icon: "📺",
    name: "Formuler Z/Dreamlink",
    subtitle: "Formuler & Dreamlink boxes",
    steps: [
      "On your Formuler/Dreamlink box, open the MyTVOnline app (pre-installed).",
      "Select 'Add New Portal'.",
      "Enter the portal URL provided in your subscription confirmation email.",
      "Enter your MAC address if prompted (found on the box label).",
      "Save and restart MyTVOnline — your channels will load.",
      "Enjoy Live TV, VOD, and catch-up content!",
    ],
  },
  {
    id: "smart-tv",
    icon: "📡",
    name: "Smart TV/Not Android",
    subtitle: "Samsung, LG, Vizio, Hisense & more",
    steps: [
      "Open the app store on your Smart TV (Samsung App Store or LG Content Store).",
      "Search for 'IPTV Smarters' and install the app.",
      "If unavailable, use a USB drive: download the APK on a PC and sideload it.",
      "Open the app and select 'Login with Xtream Codes'.",
      "Enter the URL, username, and password from your subscription email.",
      "Press Add User and start streaming!",
    ],
  },
  {
    id: "roku",
    icon: "🟣",
    name: "Roku Device",
    subtitle: "Roku TV, Streaming Stick, Ultra",
    steps: [
      "Roku does not support IPTV apps natively. Use Screen Mirroring instead.",
      "On your Android phone, enable 'Screen Mirroring' or 'Cast'.",
      "Select your Roku device from the list.",
      "Open your IPTV app on your phone — it will display on the Roku TV.",
      "Alternatively, use a Fire Stick or Android Box plugged into the Roku TV's HDMI port.",
    ],
  },
  {
    id: "apple-ios",
    icon: "🍎",
    name: "Apple/iOS",
    subtitle: "iPhone, iPad, Apple TV",
    steps: [
      "Open the App Store on your iPhone, iPad, or Apple TV.",
      "Search for 'IPTV Smarters Pro' and install it.",
      "Open the app and tap 'Login with Xtream Codes API'.",
      "Enter the server URL, username, and password from your subscription email.",
      "Tap 'Add User' to load all your channels.",
      "Enjoy live TV, movies, and series on your Apple device!",
    ],
  },
  {
    id: "windows-mac",
    icon: "💻",
    name: "Windows/Mac",
    subtitle: "Windows PC & Mac computers",
    steps: [
      "Download VLC Media Player (free) from videolan.org.",
      "Open VLC and go to Media → Open Network Stream.",
      "Paste your M3U playlist URL from your subscription email.",
      "Press 'Play' to start streaming.",
      "Alternatively, download 'IPTV Smarters for Windows' from the official website.",
      "Login with your Xtream Codes credentials and browse all channels.",
    ],
  },
  {
    id: "android-phone",
    icon: "📱",
    name: "Android Phone",
    subtitle: "Samsung, Pixel, Xiaomi, Oppo & more",
    steps: [
      "Open the Google Play Store on your Android phone.",
      "Search for 'IPTV Smarters Pro' and install it.",
      "Open the app and tap 'Login with Xtream Codes API'.",
      "Enter the server URL, username, and password from your subscription email.",
      "Tap 'Add User' to load your channels.",
      "Browse Live TV, VOD, and Series on the go!",
    ],
  },
  {
    id: "buzztv",
    icon: "📦",
    name: "BuzzTV Box",
    subtitle: "All BuzzTV models",
    steps: [
      "On your BuzzTV box, open the BuzzTV Store.",
      "Search for 'IPTV Smarters' or 'V17Mate' and install it.",
      "Open the app and select 'Login with Xtream Codes API'.",
      "Enter the server URL, username, and password from your subscription email.",
      "Press Add User — all channels will load automatically.",
      "Enjoy Live TV, Movies, and Series!",
    ],
  },
  {
    id: "mag",
    icon: "📦",
    name: "MAG Box",
    subtitle: "Not Supported",
    steps: [],
    unsupported: true,
  },
];
