"use client";

import { Check, ChevronDown } from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "~/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

type Item = {
  id: string;
  name: string;
};

export default function Combobox<T extends Item>({
  values,
  value,
  onChange,
  children,
  contentClassName,
  className
}: {
  values: T[];
  value: T | undefined
  onChange: (value: T | null) => void;
  children: ReactNode;
  className?:string;
  contentClassName?:string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild className={cn(className, "hover:bg-white/0 text-primary border border-primary bg-white/0 w-full")}>{children}</PopoverTrigger>
      <PopoverContent className={`${contentClassName || "w-24"} p-0 bg-background`}>
        <Command className="w-full">
          <CommandList className="bg-background py-2">
            <CommandGroup>
              {values.map((v) => (
                <CommandItem
                  value={v.name}
                  key={v.id}
                  className="data-[selected='true']:bg-primary  data-[selected=true]:text-primary-foreground"
                  onSelect={() => {
                    onChange(v);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "size-4 mr-2",
                      v.id === value?.id ? "opacity-50" : "opacity-0"
                    )}
                  />
                  {v.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
