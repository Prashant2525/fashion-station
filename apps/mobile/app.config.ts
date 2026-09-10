import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Fashion Station",
  slug: "fashion-station",
  version: "0.1.0",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  extra: {
    apiUrl: process.env.EXPO_PUBLIC_API_URL ?? "http://10.0.2.2:4000/v1"
  }
});
