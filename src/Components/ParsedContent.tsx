

export const ParsedContent = (props: {content: string}) => {

    const { content } = props;

    const trimmedContent = content.split("\n").map((item) => item.trim()).filter((el) => el.length !== 0);

    return <>
        {trimmedContent.map((line, idx) => {
            return <p key={idx}>
                {line}
            </p>
        })}
    </>
}