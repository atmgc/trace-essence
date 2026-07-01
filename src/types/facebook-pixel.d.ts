export {};

declare global {
  interface Window {
    fbq?: (
      command: string,
      eventOrPixelId: string,
      parameters?: Record<string, unknown>,
    ) => void;
  }
}
