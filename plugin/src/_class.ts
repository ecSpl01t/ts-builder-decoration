import { TemplateContext, TemplateLanguageService } from 'typescript-template-language-service-decorator';

export class EchoTemplateLanguageService implements TemplateLanguageService {
    getCompletionsAtPosition(
        context: TemplateContext,
        position: ts.LineAndCharacter
    ): ts.CompletionInfo {
        const line = context.text.split(/\n/g)[position.line];
        return {
            isGlobalCompletion: false,
            isMemberCompletion: false,
            isNewIdentifierLocation: false,
            entries: [
                {
                    name: line.slice(0, position.character),
                    kind: <ts.ScriptElementKind>'',
                    kindModifiers: 'echo',
                    sortText: 'echo'
                }
            ]
        };
    }
}