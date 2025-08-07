import { createContext, useContext, useState, useCallback } from 'react';

const Ctx = createContext();
export const useNotify = () => useContext(Ctx);

export function NotificationProvider({ children }) {
  const [msg, setMsg] = useState(null);
  const notify = useCallback((text) => {
    setMsg(text);
    setTimeout(() => setMsg(null), 3000);
  }, []);
  return <Ctx.Provider value={notify}>{children}</Ctx.Provider>;
}
