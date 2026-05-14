function About({ image, about }) {
  return (
    <aside>
      <img
        src={image}
        alt="blog logo"
        width="250"
      />

      <p>{about}</p>
    </aside>
  );
}

export default About;