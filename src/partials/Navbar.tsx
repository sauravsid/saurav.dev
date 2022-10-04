import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <svg
              className="w-10 h-10 mr-1 stroke-cyan-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>

            // <svg
            //   className="w-10 h-10 mr-1 stroke-cyan-600"
            //   xmlns="http://www.w3.org/2000/svg"
            //   viewBox="0 0 24 24"
            //   fill="none"
            //   strokeWidth="1.5"
            //   strokeLinecap="round"
            //   strokeLinejoin="round"
            // >
            //   <path d="M0 0h24v24H0z" stroke="none"></path>
            //   <rect x="3" y="12" width="6" height="8" rx="1"></rect>
            //   <rect x="9" y="8" width="6" height="12" rx="1"></rect>
            //   <rect x="15" y="4" width="6" height="16" rx="1"></rect>
            //   <path d="M4 20h14"></path>
            // </svg>
          }
          name="Saurav Sidharthan"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/">GitHub</NavMenuItem>
        <NavMenuItem href="/">Twitter</NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
