import { twMerge } from 'tailwind-merge';
import type { AstroGlobal } from 'astro';

type Procedure = (...args: any[]) => void;

function debounce<T extends Procedure>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;

  return function (...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, wait);
  };
}

const componentProperties = (classes: (string | undefined)[], rest: Record<string, any>) => {
  const classNames = [
    ...classes,
    rest.class,
  ].filter(Boolean);

  const { class: className, ...attrs } = rest;

  return {
    classes: twMerge(classNames),
    attributes: attrs
  };
}

async function hasSlot(slot: AstroGlobal['slots'], name: string) {
  const renderedContent = await slot.render(name);
  return !!renderedContent?.trim().length;
}

const sleep = async (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

export { debounce, componentProperties, sleep, hasSlot };