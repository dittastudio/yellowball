import { getRandomBetween, easingsAsBezier } from '@/utils/helpers'

type Position = { x: number; y: number };

export class MouseSimulator {
  private container: HTMLElement;
  private cursor: HTMLElement;
  private intervalId: number | null = null;
  private intervalDuration: number = 1000;
  private easing: string = 'ease-out';

  constructor(container: HTMLElement, cursor: HTMLElement) {
    this.container = container;
    this.cursor = cursor;
  }

  private getRandomEasing(): string {
    const keys = Object.keys(easingsAsBezier);
    const randomIndex = getRandomBetween(0, keys.length - 1);
    const value = easingsAsBezier[keys[randomIndex] as keyof typeof easingsAsBezier];

    return value;
  }

  public setTransitionProperties(): void {
    const duration = getRandomBetween(this.intervalDuration / 2, this.intervalDuration);
    this.easing = this.getRandomEasing();

    this.cursor.style.transitionProperty = 'transform';
    this.cursor.style.transitionDuration = `${duration}ms`;
    this.cursor.style.transitionTimingFunction = this.easing;
  }

  private move(position: Position): void {
    this.cursor.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
  }

  private getRandomPosition(): Position {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    const x = Math.random() * (width - this.cursor.offsetWidth);
    const y = Math.random() * (height - this.cursor.offsetHeight);

    return { x, y };
  }

  public start(): void {
    if (this.intervalId) return;

    const position = this.getRandomPosition();
    this.intervalDuration = getRandomBetween(1000, 5000);

    this.setTransitionProperties();
    this.move(position);

    this.intervalId = window.setInterval(() => {
      const newPosition = this.getRandomPosition();
      this.intervalDuration = getRandomBetween(1000, 5000);

      this.setTransitionProperties();
      this.move(newPosition);
    }, this.intervalDuration);
  }

  public stop(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
}
