export type ReactComponentProps = {
    someStringProp: string;
    user: {
        name: string;
        age?: number; // ? - means optional
        email: string;
        married: boolean;
    }
}

export type ReactComponentModifiers = "_red" | "_green" | "_blue";

// export interface IReactComponentProps {
//     someStringProp: string;
//     user: {
//         name: string;
//         age?: number; // ? - means optional
//         email: string;
//         married: boolean;
//     }
// }

const reactComponent = ({someStringProp, user}: ReactComponentProps) => "Hello typed world";