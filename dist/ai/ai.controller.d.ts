export let AiController: {
    new (aiService: any): {
        aiService: any;
        ask(dto: any): any;
    };
};
