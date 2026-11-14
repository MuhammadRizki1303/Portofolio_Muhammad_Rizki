const Bulb = () => {
  return (
    <div className="ambient-ornament ambient-ornament--prism" aria-hidden="true">
      <div className="ambient-ornament__prism">
        <span className="ambient-ornament__facet" />
      </div>
      <span className="ambient-ornament__orbit ambient-ornament__orbit--prism" />
      <div className="ambient-ornament__glow" />
    </div>
  );
};

export default Bulb;
