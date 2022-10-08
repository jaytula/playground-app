const DEFAULTURL =
  "https://map.yahoo.co.jp/embedmap/V3/?lon=139.73522&lat=35.68075&zoom=17&cond=action%3Aplace%3Bmaptype%3Abasic&width=480&height=480%22%3E";

const YahooMapJapan = ({ src = DEFAULTURL }: { src?: string }) => {
  return (
    <div style={{ position: "relative", width: "480px", height: "480px" }}>
      {" "}
      <iframe
        title="Yahoo!地図"
        src={src.replace(
          "https://map.yahoo.co.jp/embedmap/V3/?",
          "https://map.yahoo.co.jp/embedmap/V3/embedmap/?"
        )}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          border: 0,
        }}
      ></iframe>
    </div>
  );
};

export default YahooMapJapan;
