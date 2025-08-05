const HeaderCompenent = () => {
  return (
    <div /*className="text-white-500 flex flex-col items-center justify-center gap-4 bg-orange"*/
      style={{
        textAlign: "center",
        color: "white",
        width: "100%",
        height: "170px",
        padding: "30px",
      }}
      className="bg-orange-500"
    >
      <span
        style={{
          fontFamily: "sans-serif",
          fontSize: "50px",
        }}
      >
        Company
      </span>
      <p
        style={{
          fontSize: "20px",
          fontFamily: "Gill Sans",
          padding: "10px",
        }}
      >
        We specialise in something...
      </p>
    </div>
  );
};

export default HeaderCompenent;
