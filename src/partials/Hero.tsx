import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Saurav</GradientText> 👋
        </>
      }
      description={
        <>
          A passionate Full Stack Software Developer having an experience of
          building Web, Mobile and web3 applications with JavaScript, Reactjs,
          Nodejs, Ether.js, React Native and some other cool libraries and
          frameworks.
        </>
      }
      avatar={
        <img
          className="w-64 h-80"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
    />
  </Section>
);

export { Hero };
