'use client'

type Props = { cambioIdioma: (idioma: string) => void }

export default function BtnIngles({ cambioIdioma }: Props) {
    return (
        <button onClick={() => cambioIdioma("en")}>Ingles</button>
    )
}