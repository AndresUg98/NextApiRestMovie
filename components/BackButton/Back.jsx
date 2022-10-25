import React from "react";
import Image from "next/image";
import styles from "./Back.module.scss";
import Link from "next/link";
import back from "../../components/Assets/Icons/back.svg";
const Back = ({ className }) => {
  return (
    <Link href="../index">
      <div className={styles[className]}>
        <Image src={back} layout="fill" />
      </div>
    </Link>
  );
};

export { Back };
