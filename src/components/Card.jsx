import styles from "./Card.module.css"
import ditto from "./../assets/ditto.jpg"

function Card({nome="Não encontrado", imagem=ditto, tipo = "indefinido"}){
    return (
        <>
          <div className={styles.card}>
            <img className={styles["card-image"]} src={imagem}/>
            <h2 className={styles["card-title"]}>
                {nome}
            </h2>
            <p className={styles["card-text"]}>
                {tipo}
            </p>
          </div>
        </>
    )
}

export default Card