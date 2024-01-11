export interface FormConfig {
    id: unknown;
    element: string;
    name: string;
    label: string;
    value: string;
    required: boolean;
    validator: string;
    type?: string;
    placeholder?: string;
    class: ClassField;
    optionsElement?: OptionsElement[];
}
export interface OptionsElement {
    value: string;
    name: string;
}

export interface ClassField {
    input?: string;
    label?: string;
    checkbox?: string;
    size?: string;
}