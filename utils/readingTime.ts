interface ReadingTimeOptions {
    wordsPerMinute?: number;
    codeWordsPerMinute?: number;
    imageReadingSeconds?: number;
  }
  
  export function calculateReadingTime(content: string, options: ReadingTimeOptions = {}) {
    const {
      wordsPerMinute = 225, // Velocidad promedio de lectura
      codeWordsPerMinute = 100, // Más lento para código
      imageReadingSeconds = 12, // Tiempo por imagen
    } = options;
  
    // Separar el contenido en código y texto normal
    const codeBlocks = content.match(/```[\s\S]*?```/g) || [];
    let normalText = content;
    
    // Remover bloques de código del texto normal
    codeBlocks.forEach(block => {
      normalText = normalText.replace(block, '');
    });
  
    // Contar imágenes (tanto Markdown como componentes)
    const mdImageCount = (normalText.match(/!\[.*?\]\(.*?\)/g) || []).length;
    const componentImageCount = (normalText.match(/<Image.*?\/>/g) || []).length;
    const totalImages = mdImageCount + componentImageCount;
  
    // Contar palabras en texto normal (excluyendo frontmatter y sintaxis markdown)
    const cleanText = normalText
      .replace(/---[\s\S]*?---/, '') // Remover frontmatter
      .replace(/[#*`_\[\]]/g, '') // Remover sintaxis markdown
      .trim();
    
    const words = cleanText.split(/\s+/).length;
  
    // Contar palabras en código
    const codeWords = codeBlocks.reduce((total, block) => {
      const code = block.replace(/```.*\n|```/g, '').trim();
      return total + code.split(/\s+/).length;
    }, 0);
  
    // Calcular tiempos
    const textMinutes = words / wordsPerMinute;
    const codeMinutes = codeWords / codeWordsPerMinute;
    const imageMinutes = (totalImages * imageReadingSeconds) / 60;
  
    // Tiempo total en minutos
    const totalMinutes = textMinutes + codeMinutes + imageMinutes;
  
    // Formatear el resultado
    const minutes = Math.ceil(totalMinutes);
    
    if (minutes < 1) {
      return 'menos de 1 min de lectura';
    }
  
    let timeRange = '';
    if (minutes <= 4) {
      timeRange = `${minutes} min de lectura`;
    } else {
      // Redondear a múltiplos de 5 para lecturas más largas
      const roundedMin = Math.round(minutes / 5) * 5;
      timeRange = `~${roundedMin} min de lectura`;
    }
  
    return timeRange;
  }