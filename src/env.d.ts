/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly VERCEL_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
