export type Options = {
    width: number;
    align?: 'left' | 'middle' | 'right';
};

export function alignTexts(texts: string[], options: Options) {
    return texts.map((text) =>
        alignLines(splitLines(text, options.width), options)
    );
}

function splitLines(text: string, width: number) {
    const lines: string[] = [];
    let line = '';

    for (const word of text.split(' ')) {
        if (line === '') {
            line = word;
        } else if (line.length + word.length < width) {
            line += ` ${word}`;
        } else {
            lines.push(line);
            line = word;
        }
    }

    lines.push(line);

    return lines;
}

const aligners = {
    left: (line: string, width: number) => line.padEnd(width),
    middle: (line: string, width: number) => {
        const remainingSpaces = width - line.length;

        let newLine = line;
        if (remainingSpaces > 0) {
            newLine = line.padStart(
                line.length + Math.floor(remainingSpaces / 2)
            );
            newLine = newLine.padEnd(
                newLine.length + Math.ceil(remainingSpaces / 2)
            );
        }

        return newLine;
    },
    right: (line: string, width: number) => line.padStart(width),
};

function alignLines(lines: string[], { align = 'left', width }: Options) {
    return lines.map((line) => {
        return aligners[align](line, width);
    });
}
