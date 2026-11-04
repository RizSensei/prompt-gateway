var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AiService_1;
import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GoogleGenAI } from '@google/genai';
let AiService = AiService_1 = class AiService {
    config;
    ai;
    model;
    logger = new Logger(AiService_1.name);
    constructor(config) {
        this.config = config;
        this.ai = new GoogleGenAI({
            apiKey: this.config.getOrThrow('GEMINI_API_KEY'),
        });
        this.model = this.config.get('GEMINI_MODEL', 'gemini-2.5-flash');
    }
    async ask(dto) {
        const detailLevel = dto.detailLevel ?? 3;
        const language = dto.language ?? 'en';
        const prompt = [
            `Answer the following question in ${language}.`,
            `Detail level: ${detailLevel} out of 5 (1 = very brief, 5 = very thorough).`,
            '',
            `Question: ${dto.question}`,
        ].join('\n');
        const response = await this.ai.models.generateContent({
            model: this.model,
            contents: prompt,
        });
        return {
            question: dto.question,
            detailLevel,
            language,
            answer: response.text,
        };
    }
};
AiService = AiService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ConfigService])
], AiService);
export { AiService };
//# sourceMappingURL=ai.service.js.map