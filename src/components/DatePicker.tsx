'use client'

import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { CalendarIcon, ChevronsUpDown } from "lucide-react";
import { format, setDate } from "date-fns";
import { ru } from "date-fns/locale"
import { Calendar } from "./ui/calendar";


type DatePickerProps = {
  className: string;
  date: Date | undefined;
  setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
};

export const DatePicker = ({ className, date, setDate }: DatePickerProps) => {

  const [ month, setMonth ] = useState<Date | undefined>(new Date());
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  return ( <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={className}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            <span>
              {format(updateDatePart(month as Date,date), "PPP", {locale:ru})}
            </span>
          ) : (
            <span className="hidden sm:block">Дата рождения</span>
          )}
          <ChevronsUpDown className="sm:ml-2 h-4 w-4 shrink-0 opacity-50 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-background">
        <Calendar
          className="text-foreground"
          mode="single"
          month={month}
          onMonthChange={(month) => setMonth(month)}
          selected={date}
          onSelect={(e) => {
            setDate(e);
            setIsCalendarOpen(false);
          }}
          initialFocus
          captionLayout="dropdown-buttons"
          fromYear={1970}
          locale={ru}
          toYear={new Date().getFullYear()}
        />
      </PopoverContent>
    </Popover>
  );
};


export const updateDatePart = (month: Date, newDay: Date): Date => {
  return setDate(month, newDay.getDate());
};
