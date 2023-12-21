function Section({ title, text }) {
  return (
    <div style={{ padding: '5px 0' }}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default Section;
