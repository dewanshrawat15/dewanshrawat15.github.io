import { memo } from "react";
import { DEFAULT_BLACK } from "../../api/constants";

type FontSizeType = 'display_title' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'content' | 'display_tagline';

type FontWeightType = '300' | '400' | '500' | '600' | '700';

export interface TextComponentProps {
    content: string;
    fontSize?: FontSizeType;
    fontWeight?: FontWeightType;
    color?: string;
    paddingTop?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    paddingRight?: number;
    textAlign?: 'left' | 'center' | 'right';
}

const resolveFontSizeType = (fontSizeType?: FontSizeType): number => {
    switch (fontSizeType) {
        case 'display_title':
            return 42;
        case 'display_tagline':
            return 36;
        case 'h1':
            return 32;
        case 'h2':
            return 28;
        case 'h3':
            return 24;
        case 'h4':
            return 20;
        case 'h5':
            return 18;
        case 'content':
        default:
            return 15;
    }
}

const TextComponentImpl = (props: TextComponentProps) => {
    const { fontSize, content, fontWeight, color, paddingBottom, paddingLeft, paddingRight, paddingTop, textAlign } = props;

    const fontSizeNum = resolveFontSizeType(fontSize);
    const weight = fontWeight ? fontWeight : '400';
    const finalColor = color ? color : DEFAULT_BLACK;

    return <div className={`text-component-${fontSize}`} style={{
        fontSize: fontSizeNum,
        fontWeight: weight,
        color: finalColor,
        paddingBottom: paddingBottom ? paddingBottom : 0,
        paddingTop: paddingTop ? paddingTop : 0,
        paddingRight: paddingRight ? paddingRight : 0,
        paddingLeft: paddingLeft ? paddingLeft : 0,
        fontFamily: 'Poppins',
        textAlign: textAlign ? textAlign : 'left'
    }}>
        {content}
    </div>
}

export const TextComponent = memo(TextComponentImpl);