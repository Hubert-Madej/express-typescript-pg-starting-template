export const healthCheck = async () => {
  return {
    app: "NodeJS API",
    timestamp: new Date().toISOString(),
    version: "v1",
  };
};
