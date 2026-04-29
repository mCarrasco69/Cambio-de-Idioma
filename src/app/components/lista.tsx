type Props = {
    lista: string[]
}

export default function Lista({ lista }: Props) {
    return (
        <ul>
            {lista.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    )
}