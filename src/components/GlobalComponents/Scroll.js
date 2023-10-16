function Scroll({
  className,
  children,
  areaPosition,
  implementationPosition,
  partnersPosition,
}) {
  function adjustPosition(positionClass) {
    return positionClass || "";
  }
  return (
    <div
      className={`${className} ${adjustPosition(areaPosition)} ${adjustPosition(
        implementationPosition
      )} ${adjustPosition(partnersPosition)}`}
    >
      {children}
    </div>
  );
}

export default Scroll;
