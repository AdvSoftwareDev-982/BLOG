import {render, screen} from '@testing-library/svelte'
import {expect, test} from 'vitest'

import About from '../src/routes/about/+page.svelte'

test("check about page", () => {
  render(About);

  const paragraph = screen.getByRole("p");

  expect(paragraph).toBeInTheDocument();
})
