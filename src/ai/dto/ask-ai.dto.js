import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, Max, Min } from 'class-validator';

export class AskAiDto {
}

const applyTypeMetadata = (property, type) => {
    Reflect.metadata('design:type', type)(AskAiDto.prototype, property);
};

applyTypeMetadata('question', String);
ApiProperty({
    description: 'The question you want to ask the AI',
    example: 'What is the capital of France?',
})(AskAiDto.prototype, 'question');
IsString()(AskAiDto.prototype, 'question');

applyTypeMetadata('detailLevel', Number);
ApiPropertyOptional({
    description: 'Detail level of the answer (1 = brief, 5 = very detailed)',
    example: 3,
    minimum: 1,
    maximum: 5,
    default: 3,
})(AskAiDto.prototype, 'detailLevel');
IsOptional()(AskAiDto.prototype, 'detailLevel');
IsInt()(AskAiDto.prototype, 'detailLevel');
Min(1)(AskAiDto.prototype, 'detailLevel');
Max(5)(AskAiDto.prototype, 'detailLevel');

applyTypeMetadata('language', String);
ApiPropertyOptional({
    description: 'Language of the answer',
    example: 'en',
    default: 'en',
})(AskAiDto.prototype, 'language');
IsOptional()(AskAiDto.prototype, 'language');
IsString()(AskAiDto.prototype, 'language');
