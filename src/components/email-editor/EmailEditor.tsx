import { Bold, Eraser, Italic } from "lucide-react";
import styles from "./EmailEditor.module.css";

export function EmailEditor() {
  return (
    <>
      <h1>Email editor</h1>
      <div className={styles.card}>
        <div className={styles.editor}>
          Hey! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
          velit vitae nam inventore consectetur neque amet numquam eum
          reprehenderit, ipsa voluptatum ad quae natus recusandae deleniti alias
          totam dolor tempore?
        </div>
        <div className={styles.actions}>
          <div className={styles.tools}>
            <button>
              <Eraser />
            </button>
            <button>
              <Bold />
            </button>
            <button>
              <Italic />
            </button>
            <button>
              <Eraser />
            </button>
          </div>
          <button>Send now</button>
        </div>
      </div>
    </>
  );
}
