import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Declares a dictionary type.
 */
export class DictionaryTypeCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.DictionaryType)
        .withDescription("Declares a dictionary type.")
        .withParameters([
            new SingleParameter("keyType", "The type of the keys.", true),
            new SingleParameter("valueType", "The type of the values", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return DictionaryTypeCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let output = "";

        if (this.language.syntax.dictionaries.initializeAsNew) {
            output += this.language.syntax.dictionaries.className;
        }

        if (this.language.syntax.variables.explicitTypes) {
            output += this.language.syntax.dictionaries.typeLeft;
            output += this.context.convertCommon(CommandNames.Type, parameters[1]);
            output += this.language.syntax.dictionaries.typeMiddle;
            output += this.context.convertCommon(CommandNames.Type, parameters[2]);
            output += this.language.syntax.dictionaries.typeRight;
        }

        const results = LineResults.newSingleLine(output, false);

        results.addImports(this.language.syntax.dictionaries.requiredImports);

        return results;
    }
}
