export interface FormType {
    id: unknown;
    element: string;
    name: string;
    label: string;
    value: string;
    required: boolean;
    validator: string;
    type: string;
    class: string;
    optionsElement?: OptionsElement[];
}
export interface OptionsElement {
    value: string;
    name: string;
}
