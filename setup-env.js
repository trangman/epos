#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const envPath = path.join(__dirname, '.env');
const envExamplePath = path.join(__dirname, '.env.example');

// Create .env from .env.example if .env doesn't exist
if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
  fs.copyFileSync(envExamplePath, envPath);
  console.log('Created .env file from .env.example');
} else if (!fs.existsSync(envPath)) {
  // Create .env with defaults if neither exists
  const defaultEnv = `# Application Configuration
VITE_APP_TITLE=EPOS Payments
VITE_APP_LOGO=/favicon.png

# Analytics Configuration (optional - leave empty to disable)
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=
`;
  fs.writeFileSync(envPath, defaultEnv);
  console.log('Created .env file with default values');
} else {
  console.log('.env file already exists');
}

