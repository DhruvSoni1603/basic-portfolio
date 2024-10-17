import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { Progress } = useProgress();

  return (
    <Html>
      <span className="canvas-load">
        <p>
          style=
          {{
            fontsize: 14,
            color: "#f1f1f1",
            fontweight: 800,
            marginTop: 40,
          }}
        </p>
      </span>
    </Html>
  );
};

export default Loader;
