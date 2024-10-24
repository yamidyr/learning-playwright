import { test, expect } from '@playwright/test';

test('Buscar titulo google', async ({ page }) => {
  await page.goto('https://google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});

test('Link buscar', async ({ page }) => {
  await page.goto('https://google.com');

  // Espera que este editable el texto
  // // await page.waitForTimeout(5000);
  await expect(page.getByRole('combobox', { name: 'Buscar' })).toBeEditable({ timeout: 20_000 });

  //Escribe
  await page.getByRole('combobox', { name: 'Buscar' }).fill("Hola mundo");

  //Click en el boton
  //await page.locator('(//input[@name="btnK"])[last()]').click();
  await page.getByRole('button', { name: 'Buscar con Google' }).click();

  // valida que carga un titulo con hola mundo
  // await page.waitForTimeout(5000);
  await expect(page.getByRole('heading', { name: 'hola mundo' }).first()).toBeVisible({ timeout: 20_000 });
});
