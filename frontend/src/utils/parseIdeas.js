export function parseIdeas(text) {
  if (!text) return [];

  // Split by "Idea X:"
  const blocks = text.split(/Idea\s+\d+:/).filter(Boolean);

  return blocks.map((block, index) => {
    const titleMatch = block.match(/Title:\s*(.*)/);
    const descMatch = block.match(/Description:\s*([\s\S]*?)Features:/);
    const featuresMatch = block.match(/Features:\s*([\s\S]*)/);

    const title = titleMatch ? titleMatch[1].trim() : `Project Idea ${index + 1}`;
    const description = descMatch ? descMatch[1].trim() : "";

    let features = [];
    if (featuresMatch) {
      features = featuresMatch[1]
        .split("\n")
        .map(l => l.replace("-", "").trim())
        .filter(Boolean);
    }

    return {
      id: index,
      title,
      description,
      features
    };
  });
}
