const { test, expect } = require('@playwright/test');

test('homepage has expected title', async ({ page }) => {
  await page.goto('/');

  // wait for the title to be "Home - H.E.R. Home Care"
  await expect(page).toHaveTitle(/Home - H.E.R. Home Care/i);
  
  // also check that some elements are visible
  const body = page.locator('body');
  await expect(body).toBeVisible();
});
