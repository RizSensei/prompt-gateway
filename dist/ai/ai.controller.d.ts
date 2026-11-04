import { AiService } from './ai.service.js';
import { AskAiDto } from './dto/ask-ai.dto.js';
export declare class AiController {
    private readonly aiService;
    constructor(aiService: AiService);
    ask(dto: AskAiDto): Promise<{
        question: string;
        detailLevel: number;
        language: string;
        answer: string | undefined;
    }>;
}
