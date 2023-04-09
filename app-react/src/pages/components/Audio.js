export default function Audio (props) {
    return (
        <>
        <div>
            <h4>Esto es un audio:</h4>
            <br/>
            <audio controls src={props.audio}/>
        </div>
        </>
    )
}