import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'hello',
  webDir: 'www',
  plugins: {
    GoogleMaps: {
      apiKey: 'AIzaSyCLDc700D_Bmc6BBKxWiWSE7WR_LeCRsU8'
    }
  }
};

export default config;
