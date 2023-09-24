import AreaSingleList from "./AreaSingleList";

function AreaList({ list }) {
  return (
    <ul className="area__list">
      {list.map((li) => (
        <AreaSingleList list={li} key={crypto.randomUUID()} />
      ))}
    </ul>
  );
}

export default AreaList;
