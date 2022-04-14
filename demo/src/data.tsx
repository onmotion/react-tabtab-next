import { LoremIpsum } from 'lorem-ipsum';
import * as React from 'react';

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4,
    },
    wordsPerSentence: {
        max: 16,
        min: 4,
    },
});

export const makeData = (number: number, titlePrefix = 'Tab', useTitleCounter = true) => {
    const data = [];
    for (let i = 0; i < number; i++) {
        data.push({
            title: useTitleCounter ? `${titlePrefix} ${i + 1}` : titlePrefix,
            content: (
                <div>
                    <b>Content {i + 1}</b>
                    <p>{lorem.generateWords(15)}</p>
                </div>
            ),
        });
    }
    return data;
};
