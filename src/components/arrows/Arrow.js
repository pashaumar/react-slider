import React from "react";
import styles from "./Arrow.module.css";
function Arrow({ setActiveIndex, type }) {
  const handleClick = (type) => {
    if (type === "Prev") {
      setActiveIndex((prevIndex) => prevIndex - 1);
    } else if (type === "Next") {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      {type === "Prev" && (
        <div onClick={() => handleClick(type)} className={styles.prev}>
          &#60;
        </div>
      )}
      {type === "Next" && (
        <div onClick={() => handleClick(type)} className={styles.next}>
          &#62;
        </div>
      )}
    </>
  );
}

export default Arrow;
