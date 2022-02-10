const Header = () => {
    return(
        <header style={{ marginTop: 50}}>
            <img src="svgs/1.svg" alt="1.svg" style={{ borderRadius: 500 }}/>
            <div style={{ backgroundColor: "#CCD5AE", textAlign: 'center', marginTop: 100, borderRadius: '100%', width: '20%' }}>
                <div style={{ marginTop: 150, color: 'black' }}>
                    <h1>Creando <mark>proyectos</mark> del futuro</h1>
                </div>
            </div>
        </header>
    )
}

export default Header;