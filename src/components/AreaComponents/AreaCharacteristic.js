import AreaCharacter from "./AreaCharacter";

function AreaCharacteristic({ texts }) {
  return (
    <div className="area__characteristic">
      {texts.map((text) => (
        <AreaCharacter key={crypto.randomUUID()} text={text} />
      ))}
    </div>
  );
}

export default AreaCharacteristic;
