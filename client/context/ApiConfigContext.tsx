import { createContext, useContext, useMemo, useState } from "react";
import type { ApiConfig } from "@/lib/config";
import { getInitialConfig, saveConfig } from "@/lib/config";

interface Ctx {
  config: ApiConfig;
  setConfig: (cfg: ApiConfig) => void;
}

const ApiConfigContext = createContext<Ctx | null>(null);

export function ApiConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfigState] = useState<ApiConfig>(getInitialConfig());
  const setConfig = (cfg: ApiConfig) => {
    setConfigState(cfg);
    saveConfig(cfg);
  };
  const value = useMemo(() => ({ config, setConfig }), [config]);
  return <ApiConfigContext.Provider value={value}>{children}</ApiConfigContext.Provider>;
}

export function useApiConfig() {
  const ctx = useContext(ApiConfigContext);
  if (!ctx) throw new Error("useApiConfig must be used within ApiConfigProvider");
  return ctx;
}
