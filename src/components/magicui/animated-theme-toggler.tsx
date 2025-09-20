'use client';

import { cn } from '@/lib/utils';
import { Moon, SunDim } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { Button } from '../ui/button';

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    // Toggle between light and dark, ignoring system theme
    const newTheme = resolvedTheme === 'light' ? 'dark' : 'light';

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };

  // Render a placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button
        ref={buttonRef}
        className={cn(className)}
        aria-label="Toggle theme"
        variant="outline"
        size="icon"
      >
        <Moon className="h-4 w-4" />
      </Button>
    );
  }

  return (
    <Button
      ref={buttonRef}
      onClick={changeTheme}
      className={cn('rounded-full border-0 bg-muted',className)}
      aria-label="Toggle theme"
      variant="outline"
      size="icon"
    >
      {resolvedTheme === 'dark' ? (
        <SunDim className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
};
