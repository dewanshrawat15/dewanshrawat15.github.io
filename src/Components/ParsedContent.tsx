

export const ParsedContent = (props: {content: string}) => {

    const { content } = props;

    const trimmedContent = content.split("\n").map((item) => item.trim()).filter((el) => el.length !== 0);

    return <p>
        {trimmedContent.map((line) => {
            return <>
                {line} <br /><br />
            </>
        })}
    </p>
}