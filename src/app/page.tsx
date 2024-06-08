"use client"

import styled from "styled-components";
import { TbSunFilled, TbMoonFilled } from 'react-icons/tb';
import Button from "@/components/common/Button";
import { BUTTON_VARIANTS } from "@/constants/enum";
import { useTheme } from "next-themes";

const Container = styled.div`
    background-color: var(--bg);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 2rem;

    @media (min-width: 40em) {
        padding: 6rem;
    }
`
const Heading = styled.h1`
   color: var(--headingcolor);
`
const Text = styled.p`
    color: var(--fg);
    padding: 2rem 0;

    @media (min-width: 45em) {
        width: 60%;
    }
`
const ThemeToggleContainer = styled.div`
    display: flex;
    align-self: flex-end;
`
const SunIcon = styled(TbSunFilled)`
    cursor: pointer;
`
const MoonIcon = styled(TbMoonFilled)`
    cursor: pointer;
`
const ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media (min-width: 45em) {
        width: 25%;
    }
`

export default function Home() {
  const { resolvedTheme, setTheme } = useTheme();

  function handleThemeChange() {
    if (resolvedTheme === "dark") {
      setTheme("light");
    }
    else {
      setTheme("dark")
    }
  }

  return (
    <main>
      <Container>
        <ThemeToggleContainer>
          <SunIcon
            size={50}
            color={"white"}
            onClick={handleThemeChange}
            data-hide-on-theme='light'
          />
          <MoonIcon
            size={50}
            color={"black"}
            onClick={handleThemeChange}
            data-hide-on-theme='dark'
          />
        </ThemeToggleContainer>

        <Heading>
          This is a heading
        </Heading>

        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>

        <ButtonContainer>
          <Button>
            Primary
          </Button>

          <Button variant={BUTTON_VARIANTS.Secondary}>
            Secondary
          </Button>
        </ButtonContainer>
      </Container>
    </main>
  );
}
