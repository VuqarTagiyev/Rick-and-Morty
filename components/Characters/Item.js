import React from "react";
import Link from "next/link";

import styles from "./characters.module.css";

const Item = ({ character }) => {
  return (
    <li className={styles.item}>
      <Link href="/character/[id]" as={`/character/${character.id.toString()}`}>
        <a>
          <img
            src={character.image}
            alt={character.name}
            className={styles.itemImage}
          />
          <div className={styles.itemContent}>
            <h2>{character.name}</h2>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Item;
