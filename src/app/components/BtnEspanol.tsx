 'use client'

type Props = { cambioIdioma: (idioma: string) => void }

export default function BtnEspanol({ cambioIdioma }: Props) {
    return (
        <button onClick={() => cambioIdioma("es")}>Espanol</button>
    )
}