import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DayPicker } from 'react-day-picker';
import { inter } from './fonts';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { useColorMode } from '@chakra-ui/react';

function Calendar({ className, classNames, showOutsideDays = true, scale = 1, ...props }) {
  const { colorMode } = useColorMode();
  return (
    <div
      style={{
        transform: `scale(${scale})`,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: inter.style.fontFamily,
      }}
    >
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn('p-2.5', className)}
        classNames={{
          months: `flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 ${inter.className}`,
          month: `space-y-2 ${inter.className}`,
          caption: 'flex justify-center pt-1 relative items-center',
          caption_label: 'text-sm font-medium',
          nav: 'space-x-1 flex items-center',
          nav_button: cn(
            buttonVariants({ variant: 'outline' }),
            'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
          ),
          nav_button_previous: 'absolute left-1',
          nav_button_next: 'absolute right-1',
          table: 'w-full border-collapse space-y-1',
          head_row: 'flex',
          head_cell: 'text-muted-foreground rounded-md w-7 font-normal text-[0.8rem]',
          row: 'flex w-full mt-1',
          cell: 'h-7 w-7 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
          day: cn(
            buttonVariants({ variant: 'ghost' }),
            'h-7 w-7 p-0 font-normal aria-selected:opacity-100',
          ),
          day_range_end: 'day-range-end',
          day_selected: `bg-[#AFB4E9] hover:bg-[#AFB4E9] text-black hover:text-black focus:bg-[#AFB4E9] focus:text-black`,
          day_today: `bg-[#AFB4E9] hover:bg-[#AFB4E9] text-black focus:text-primary-foreground hover:text-black`,
          day_outside:
            'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
          day_disabled: 'text-muted-foreground opacity-50',
          day_range_middle: 'aria-selected:bg-accent aria-selected:text-accent-foreground',
          day_hidden: 'invisible',
          ...classNames,
        }}
        components={{
          IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
          IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
        }}
        {...props}
      />
    </div>
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
