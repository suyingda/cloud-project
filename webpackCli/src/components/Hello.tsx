import * as React from "react";

interface HelloProps {
    compiler?: string;
    framework?: string;
}

export const Hello = (props: HelloProps) => <h1>Hello  {props.compiler}    ？{props.framework}!</h1>;
