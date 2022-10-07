import { NextPage } from "next";
import classes from "../styles/Envelope.module.scss";

const FROM_ADDRESS = (process.env.NEXT_PUBLIC_FROM_ADDRESS || "").split("\n");
const TO_ADDRESS = (process.env.NEXT_PUBLIC_TO_ADDRESS || "").split("\n");

const ToLisa: NextPage = () => {
  return (
    <main className={classes.root}>
      <div>
        {FROM_ADDRESS.map((el) => (
          <div key={el}>{el}</div>
        ))}
      </div>
      <div>
        {TO_ADDRESS.map((el) => (
          <div key={el}>{el}</div>
        ))}
      </div>
    </main>
  );
};

export default ToLisa;
