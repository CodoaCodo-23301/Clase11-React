export default function Video ( props ) {
    return (
        <>
        <div>
            <h4>Esto es un video:</h4>
            <video controls src={props.children} width={400} height={400}>
            </video>
        </div>
        </>
    )
}