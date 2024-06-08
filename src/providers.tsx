"use client"

import { ThemeProvider } from "next-themes"
import StyledComponentsRegistry from "./app/lib/registry"
import GlobalStyle from "./app/GlobalStyle"

function Providers(props: React.PropsWithChildren) {
    return (
        <StyledComponentsRegistry>
            <ThemeProvider>
                <GlobalStyle />
                {props.children}
            </ThemeProvider>
        </StyledComponentsRegistry>
    )
}

export default Providers