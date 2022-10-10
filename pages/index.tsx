import Link from "next/link"
import Card from "../components/Card";
import styles from "../styles/Form.module.css"
import EntradaNumerica from "../components/EntradaNumerica";
import { useState } from "react";

export default function Form() {
  const [qtdePorta, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="blue">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <EntradaNumerica text="Qtde portas?" 
            value={qtdePorta}
            onChange={novaQtde => setQtdePortas(novaQtde)}>
          </EntradaNumerica>
        </Card>
      </div>
      <div>
        <Card>
          <EntradaNumerica text="Porta com Presente?" value={comPresente}
            onChange={novaPortaCom => setComPresente(novaPortaCom)}>
          </EntradaNumerica>
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/jogo/${qtdePorta}/${comPresente}`} passHref>
            <h2 className={styles.link}>
              Iniciar</h2>
          </Link>
        </Card>
      </div>

    </div>
  )
}
