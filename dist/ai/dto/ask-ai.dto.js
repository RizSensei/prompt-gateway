var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt, Min, Max } from 'class-validator';
export class AskAiDto {
    question;
    detailLevel;
    language;
}
__decorate([
    ApiProperty({
        description: 'The question you want to ask the AI',
        example: 'What is the capital of France?',
    }),
    IsString(),
    __metadata("design:type", String)
], AskAiDto.prototype, "question", void 0);
__decorate([
    ApiPropertyOptional({
        description: 'Detail level of the answer (1 = brief, 5 = very detailed)',
        example: 3,
        minimum: 1,
        maximum: 5,
        default: 3,
    }),
    IsOptional(),
    IsInt(),
    Min(1),
    Max(5),
    __metadata("design:type", Number)
], AskAiDto.prototype, "detailLevel", void 0);
__decorate([
    ApiPropertyOptional({
        description: 'Language of the answer',
        example: 'en',
        default: 'en',
    }),
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], AskAiDto.prototype, "language", void 0);
//# sourceMappingURL=ask-ai.dto.js.map