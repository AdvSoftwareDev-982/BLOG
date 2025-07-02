import {render, screen} from '@testing-library/svelte'
import {expect, test} from 'vitest'

import About from '../src/routes/about/+page.svelte'

test("check about page", () => {
  render(About);

  const paragraph = screen.getByRole("paragraph");
  const link = screen.getByRole("link");
  console.log(paragraph);
  expect(paragraph).toBeInTheDocument();
  expect(link).toBeInTheDocument();
})
