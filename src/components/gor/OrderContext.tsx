import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import { OrderDialog } from "./OrderDialog";

type Mode = "order" | "call" | "info";

interface Ctx {
  open: (mode?: Mode) => void;
}

const OrderCtx = createContext<Ctx | null>(null);

export const useOrder = () => {
  const ctx = useContext(OrderCtx);
  if (!ctx) throw new Error("useOrder must be used within OrderProvider");
  return ctx;
};

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("order");

  const open = useCallback((m: Mode = "order") => {
    setMode(m);
    setIsOpen(true);
  }, []);

  return (
    <OrderCtx.Provider value={{ open }}>
      {children}
      <OrderDialog open={isOpen} onOpenChange={setIsOpen} mode={mode} />
    </OrderCtx.Provider>
  );
};
