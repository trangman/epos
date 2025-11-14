import type { Plugin } from 'vite';

/**
 * Vite plugin that provides default values for HTML environment variables
 * if they are not defined in the environment
 */
export function htmlEnvDefaults(): Plugin {
  return {
    name: 'html-env-defaults',
    transformIndexHtml(html) {
      // Default values
      const defaults: Record<string, string> = {
        VITE_APP_TITLE: 'EPOS Payments',
        VITE_APP_LOGO: '/favicon.png',
        VITE_ANALYTICS_ENDPOINT: '',
        VITE_ANALYTICS_WEBSITE_ID: '',
      };

      let transformedHtml = html;

      // Replace env vars with defaults if they still contain the % markers
      // (meaning they weren't replaced by Vite's built-in replacement)
      for (const [key, defaultValue] of Object.entries(defaults)) {
        const pattern = new RegExp(`%${key}%`, 'g');
        if (transformedHtml.includes(`%${key}%`)) {
          transformedHtml = transformedHtml.replace(pattern, defaultValue);
        }
      }

      return transformedHtml;
    },
  };
}

