import { readdir, readFile, writeFile, mkdir } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import SVGSpriter from "svg-sprite";

export async function createSprite(iconDir: string, outputPath: string) {
  try {
    await readdir(iconDir);
  } catch (error) {
    console.error(`Icon directory not found: ${iconDir}`);
    return null;
  }

  const spriter = new SVGSpriter({ 
    mode: { 
      symbol: { 
        sprite: 'sprite.svg' 
      } 
    } 
  });

  const svgFiles = await readdir(iconDir);
  for (const svg of svgFiles) {
    if (!svg.endsWith('.svg')) continue;
    const path = resolve(iconDir, svg);
    const fileContents = await readFile(path, 'utf8');
    spriter.add(path, svg, fileContents);
  }

  try {
    const { result } = await spriter.compileAsync();
    const svgSprite = result.symbol.sprite.contents;

    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, svgSprite);
    
    console.log(`SVG Sprite generated: ${outputPath}`);
    return svgSprite;
  } catch (error) {
    console.error('Failed to generate SVG sprite:', error);
    return null;
  }
}

export function generateSprite() {
  return {
    name: 'yellowball-sprite',
    hooks: {
      'astro:config:setup': async ({ config } : { config: any }) => {
        const iconDir = './src/icons';
        const outputPath = resolve(config.publicDir.pathname, 'sprite.svg');
        await createSprite(iconDir, outputPath);
      },
      'astro:build:done': async ({ dir } : { dir: any }) => {
        const iconDir = './src/icons';
        const outputPath = resolve(dir.pathname, 'sprite.svg');
        await createSprite(iconDir, outputPath);
      }
    }
  };
}