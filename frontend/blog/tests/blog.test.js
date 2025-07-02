import {render, screen} from '@testing-library/svelte'
import userEvent from '@testing-library/user-event'
import {expect, test} from 'vitest'

import About from '../src/routes/about/+page.svelte'

test("check about page", () => {
  render(About);

  const paragraph = screen.getByRole("p");

  expect(paragraph).toBeInTheDocument();
})
