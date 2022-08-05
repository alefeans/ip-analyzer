/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_IP_ANALYZER_ENDPOINT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
