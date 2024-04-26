/// <reference types="vite/client" />
declare module "react/jsx-runtime" {
  export default any;
}

interface ImportMetaEnv {
  readonly VITE_APP_API_URL: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
