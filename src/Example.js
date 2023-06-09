import { Score } from "react-vexflow";

export default function Example() {
  return (
    <Score
      staves={[
        ["g4", "d5", "e4", "d4"],
        ["a4", "d4", "e4", "d4"],
        ["a4", "a4", "b4", "a4"],
        ["d4", "e4", ["g3", 2]]
      ]}
    />
  );
}
