export interface RouterObjects {
    path: string;
    children?: RouterObjects[];
    element?: JSX.Element;
    assignedToRoutes?: string[];
    loader?: (() => Promise<unknown>) | (({ params }: any) => Promise<unknown>);
    errorElement?: JSX.Element;
}
