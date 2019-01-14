import * as ts from 'typescript/lib/tsserverlibrary';
import { decorateWithTemplateLanguageService } from 'typescript-template-language-service-decorator';
import { LanguageServiceLogger } from './_logger';
import { EchoTemplateLanguageService } from './_class';

export = (mod: { typescript: typeof ts }) => {
    return {
        create(info: ts.server.PluginCreateInfo): ts.LanguageService {
            const logger = new LanguageServiceLogger(info);

            logger.log('config: ' + JSON.stringify(info.config));
            return decorateWithTemplateLanguageService(
                mod.typescript,
                info.languageService,
                info.project,
                new EchoTemplateLanguageService(),
                { tags: ['echo'] });
        }
    };
};