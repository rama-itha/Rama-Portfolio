export default function GlitchText({ text, style = {} }) {
  return (
    <span className="glitch" data-text={text} style={style}>
      {text}
    </span>
  );
}
