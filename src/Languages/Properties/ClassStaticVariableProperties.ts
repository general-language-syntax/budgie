import { CaseStyle } from "../Casing/CaseStyle";

/**
 * Metadata on a language's class static variables.
 */
export class ClassStaticVariableProperties {
    /**
     * Decorator for public statics.
     */
    public public: string;

    /**
     * Casing modifier for public static variables.
     */
    public publicCase: CaseStyle;

    /**
     * Prefix for public statics.
     */
    public publicPrefix: string;

    /**
     * Decorator for protected statics.
     */
    public protected: string;

    /**
     * Casing modifier for protected static variables.
     */
    public protectedCase: CaseStyle;

    /**
     * Prefix for protected statics.
     */
    public protectedPrefix: string;

    /**
     * Decorator for private statics.
     */
    public private: string;

    /**
     * Casing modifier for private static variables.
     */
    public privateCase: CaseStyle;

    /**
     * Prefix for private statics.
     */
    public privatePrefix: string;

    /**
     * Whether static variables shouldn't be declared.
     */
    public skipStaticVariables: boolean;
}
