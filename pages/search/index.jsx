// @flow
import * as React from "react";
import styles from "./search.module.scss";
import { Input } from "../../components/Input/Input";
import { Hrefbutton } from "../../components/BackButton/Hrefbutton";
import back from "../../components/Assets/Icons/back.svg";
export const search = () => {
  return (
    <div>
      <section className={styles.searchBarContainer}>
        <Hrefbutton className={"relative"} icon={back} url={"../index"} />
        <Input type="search" placeholder="Search" />
      </section>

      <section className={styles.moviesResult}>
        <div className={styles.card}>
          <img
            src="https://es.web.img3.acsta.net/pictures/21/03/05/14/08/2811747.jpg"
            alt=""
          />
          <div className={styles.cardTitle}>
            <p>Digimon last evolution</p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://as01.epimg.net/meristation/imagenes/2022/06/06/noticias/1654498397_532691_1654498566_noticia_normal.jpg"
            alt=""
          />
          <div className={styles.cardTitle}>
            <p>DB:Super Hero</p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://depor.com/resizer/2z6hz-20RV7Q9jIV1mHBxzbFURY=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/RHXPLHQTQJCRRMRJTP3AK4IWOU.jpg"
            alt=""
          />
          <div className={styles.cardTitle}>
            <p>Weathering with you</p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://es.web.img3.acsta.net/pictures/21/03/05/14/08/2811747.jpg"
            alt=""
          />
          <div className={styles.cardTitle}>
            <p>Digimon last evolution</p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://as01.epimg.net/meristation/imagenes/2022/06/06/noticias/1654498397_532691_1654498566_noticia_normal.jpg"
            alt=""
          />
          <div className={styles.cardTitle}>
            <p>DB:Super Hero</p>
          </div>
        </div>

        <div className={styles.card}>
          <img
            src="https://depor.com/resizer/2z6hz-20RV7Q9jIV1mHBxzbFURY=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/RHXPLHQTQJCRRMRJTP3AK4IWOU.jpg"
            alt=""
          />
          <div className={styles.cardTitle}>
            <p>Weathering with you</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default search;
