import { twMerge } from 'tailwind-merge';

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

const sleep = async (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

export { debounce, componentProperties, sleep };