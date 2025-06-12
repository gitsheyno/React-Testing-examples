const Banner = ({ text = "Default" }: { text?: string }) => {
  return (
    <div>
      <h2 data-testid="text">{text}</h2>
      <p>This is a simple banner component.</p>
    </div>
  );
};

export default Banner;
