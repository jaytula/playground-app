declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_FROM_ADDRESS: string;
      NEXT_PUBLIC_TO_ADDRESS: string;
    }
  }
}

export {}