import { css } from "styled-components";

export const StyledFontBold = css`
    font-family: NotoSans, sans-serif;
    font-family: var(--font-base-font-family, NotoSans, sans-serif);
    font-style: normal;
    font-weight: 700;
    font-weight: var(--font-bold-font-weight, 700);
    font-size: 22px;
    font-size: var(--font-bold-large-font-size, 22px);
`;

export const StyledFontLight = css`
    font-family: NotoSans, sans-serif;
    font-family: var(--font-base-font-family, NotoSans, sans-serif);
    font-style: normal;
    font-weight: 300;
    font-weight: var(--font-bold-font-weight, 300);
    font-size: 18px;
    font-size: var(--font-bold-large-font-size, 18px);
`;

export const StyledFontRegular = css`
    font-family: NotoSans, sans-serif;
    font-family: var(--font-base-font-family, NotoSans, sans-serif);
    font-style: normal;
    font-weight: 400;
    font-weight: var(--font-bold-font-weight, 400);
    font-size: 16px;
    font-size: var(--font-bold-large-font-size, 16px);
`;
