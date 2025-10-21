import { useState, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion, AnimatePresence } from "motion/react";
import Button from "@/components/ui/Button";
import getBanksList from "../utils/getBanksList";
import type { Bank } from "../types";

const BanksDropDown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Bank | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { data: banks = [] } = useQuery<Bank[]>({
    queryKey: ["banks", "list"],
    queryFn: getBanksList,
    staleTime: 1000 * 60 * 60 * 24
  });

  return (
    <div ref={dropdownRef} className="relative w-full">
      <Button
        variant="filled"
        className="w-full flex items-center justify-between py-4 rounded-md"
        onClick={() => setOpen(prev => !prev)}
      >
        <span>{selected ? selected.name : "Select a Bank"}</span>
        <span className="text-gray-500">{open ? "▲" : "▼"}</span>
      </Button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute h-64 left-0 mt-1 w-full bg-background border rounded-md overflow-y-auto z-10"
          >
            {banks.map(bank => (
              <motion.li
                key={bank.id}
                onClick={() => {
                  setSelected(bank);
                  setOpen(false);
                }}
                whileHover={{ backgroundColor: "#f3f4f6" }}
                className="p-4 cursor-pointer select-none"
              >
                {bank.name}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BanksDropDown;
