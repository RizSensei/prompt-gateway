export let AiService: {
    new (config: any): {
        config: any;
        ai: GoogleGenAI;
        model: any;
        logger: Logger;
        ask(dto: any): Promise<{
            question: any;
            detailLevel: any;
            language: any;
            answer: string | undefined;
        }>;
    };
};
import { GoogleGenAI } from '@google/genai';
import { Logger } from '@nestjs/common';
