const openaiKey =
  process.env.OPENAI_API_KEY ?? process.env.BUILT_IN_FORGE_API_KEY ?? "";

console.log(
  "[ENV] OPENAI_API_KEY configured:",
  openaiKey ? `Yes (${openaiKey.substring(0, 10)}...)` : "No"
);

export const ENV = {
  appId: process.env.VITE_APP_ID ?? "",
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
  ownerId: process.env.OWNER_OPEN_ID ?? "",
  isProduction: process.env.NODE_ENV === "production",
  forgeApiUrl: process.env.BUILT_IN_FORGE_API_URL ?? "",
  forgeApiKey: openaiKey, // 🔹 aqui usamos o valor correto
};

