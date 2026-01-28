import styles from "./Connection.module.css";

export const Connection = () => {
  return (
    <div className={styles.connection}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="16px"
        height="16px"
        viewBox="0,0,256,256"
        fill="#fff"
      >
        <g transform="scale(10.66667,10.66667)">
          <path d="M19,4c-1.105,0 -2,0.895 -2,2v12c0,1.105 0.895,2 2,2h2c1.105,0 2,-0.895 2,-2v-12c0,-1.105 -0.895,-2 -2,-2zM11,8c-1.105,0 -2,0.895 -2,2v8c0,1.105 0.895,2 2,2h2c1.105,0 2,-0.895 2,-2v-8c0,-1.105 -0.895,-2 -2,-2zM3,12c-1.105,0 -2,0.895 -2,2v4c0,1.105 0.895,2 2,2h2c1.105,0 2,-0.895 2,-2v-4c0,-1.105 -0.895,-2 -2,-2z"></path>
        </g>
      </svg>
    </div>
  );
};
