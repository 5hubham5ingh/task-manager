
export const BluredBackground = ({ onClick }) => {
    return (
      <div
        style={{
          position: "fixed",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          width: "100vw",
          height: "100vh",
          backdropFilter: "blur(5px)",
          zIndex: -999,
        }}
        onClick={onClick}
      ></div>
    );
  };