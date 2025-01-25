declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_PORT?: number;
      DB_USER: string;
      DB_PASSWD: string;
      DB_DATABASE: string;
      DB_HOST: string;
    }
  }
}

export {};
