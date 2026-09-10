import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>FASHION STATION</Text>
      <Text style={styles.title}>Shared platform foundation</Text>
      <Text style={styles.copy}>
        This Expo client will use the shared NestJS API. No commerce workflows
        are implemented yet.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    backgroundColor: "#f8fafc",
    flex: 1,
    justifyContent: "center",
    padding: 24
  },
  eyebrow: {
    color: "#64748b",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.2,
    marginBottom: 12
  },
  title: {
    color: "#1f2937",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12
  },
  copy: {
    color: "#475569",
    fontSize: 16,
    lineHeight: 24
  }
});
