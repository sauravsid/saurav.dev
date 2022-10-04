import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <div className="pt-5 border-t border-gray-600">
      <div className="text-sm text-gray-200">
        {`\u00A9 Copyright ${new Date().getFullYear()} by Saurav Sidharthan`}
      </div>
    </div>
  </Section>
);

export { Footer };
