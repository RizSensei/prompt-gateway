import { ConfigService } from '@nestjs/config';
import { AskAiDto } from './dto/ask-ai.dto.js';
export declare class AiService {
    private readonly config;
    private readonly ai;
    private readonly model;
    private readonly logger;
    constructor(config: ConfigService);
    ask(dto: AskAiDto): Promise<{
        question: string;
        detailLevel: number;
        language: string;
        answer: string | undefined;
    }>;
}
