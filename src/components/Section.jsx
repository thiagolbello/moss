const Section = ({titulo, descripcion, svg}) => {
    return (
        <section>
            <h1>{titulo}</h1>
            <p style={{maxWidth: '50%'}}>{descripcion}</p>
            <img src={svg} alt={svg} />
        </section>
    )
}

export default Section;