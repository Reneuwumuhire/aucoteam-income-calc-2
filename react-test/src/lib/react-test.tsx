import styles from './react-test.module.css';

/* eslint-disable-next-line */
export interface ReactTestProps {}

export function ReactTest(props: ReactTestProps) {
  return (
    <div className=" bg-red-100">
      <h1>Welcome to ReactTest!</h1>
    </div>
  );
}

export default ReactTest;
