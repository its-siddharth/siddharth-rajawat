import { readFile } from "node:fs/promises";
import { expect, test } from "@playwright/test";

const projectNames = [
  "CryptoLens Analytics Platform",
  "Customer Churn & Retention Engine",
  "Sales Funnel & Ad Performance BI",
  "Predictive Diagnostic Classifier",
];

test("renders the portfolio, résumé content, and contact links without layout overflow", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");

  await expect(page).toHaveTitle(/Siddharth Rajawat/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Good data.",
  );
  await expect(page.getByRole("main")).toBeVisible();
  for (const section of ["work", "about", "experience", "contact"]) {
    await expect(page.locator(`#${section}`)).toBeVisible();
    await expect(page.locator(`#${section}-heading`)).toBeVisible();
  }
  await expect(page.locator("#about")).toContainText(
    "Vivekananda Global University",
  );
  await expect(page.locator("#experience")).toContainText("Amdox Technology");
  await expect(page.locator("#experience")).toContainText(
    "SkillCraft Technology",
  );
  await expect(
    page.getByRole("link", { name: "srajawat.dev@gmail.com", exact: true }),
  ).toHaveAttribute("href", "mailto:srajawat.dev@gmail.com");
  await expect(
    page.locator(".social-links").getByRole("link", { name: "GitHub" }),
  ).toHaveAttribute("href", "https://github.com/its-siddharth");
  await expect(
    page.locator(".social-links").getByRole("link", { name: "LinkedIn" }),
  ).toHaveAttribute("href", "https://www.linkedin.com/in/siddharthrajawat");

  await page.evaluate(() => document.fonts.ready);
  const horizontalOverflow = await page.evaluate(
    () =>
      document.documentElement.scrollWidth -
      document.documentElement.clientWidth,
  );
  expect(horizontalOverflow).toBeLessThanOrEqual(1);
  expect(errors).toEqual([]);
});

test("filters the four projects into their two specialties and resets the selection", async ({
  page,
}) => {
  await page.goto("/");
  const filters = page.getByRole("group", {
    name: "Filter projects by specialty",
  });
  const cards = page.getByRole("button", { name: /^View .+ project details$/ });
  await expect(cards).toHaveCount(4);
  await expect(
    filters.getByRole("button", { name: /^All projects/ }),
  ).toHaveAttribute("aria-pressed", "true");

  await filters.getByRole("button", { name: /^Machine Learning/ }).click();
  await expect(cards).toHaveCount(2);
  await expect(
    page.getByRole("button", {
      name: `View ${projectNames[1]} project details`,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", {
      name: `View ${projectNames[3]} project details`,
    }),
  ).toBeVisible();
  await expect(
    filters.getByRole("button", { name: /^Machine Learning/ }),
  ).toHaveAttribute("aria-pressed", "true");

  await filters.getByRole("button", { name: /^Data & Analytics/ }).click();
  await expect(cards).toHaveCount(2);
  await expect(
    page.getByRole("button", {
      name: `View ${projectNames[0]} project details`,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", {
      name: `View ${projectNames[2]} project details`,
    }),
  ).toBeVisible();
  await expect(
    filters.getByRole("button", { name: /^Machine Learning/ }),
  ).toHaveAttribute("aria-pressed", "false");

  await filters.getByRole("button", { name: /^All projects/ }).click();
  await expect(cards).toHaveCount(4);
  await expect(
    filters.getByRole("button", { name: /^All projects/ }),
  ).toHaveAttribute("aria-pressed", "true");
});

test("opens every project, keeps keyboard focus in the dialog, and restores its trigger", async ({
  page,
}) => {
  await page.goto("/");

  for (const [index, title] of projectNames.entries()) {
    const trigger = page.getByRole("button", {
      name: `View ${title} project details`,
      exact: true,
    });
    await trigger.click();
    const dialog = page.getByRole("dialog", { name: title, exact: true });
    await expect(dialog).toBeVisible();
    await expect(
      dialog.getByRole("heading", { name: title, exact: true }),
    ).toBeVisible();
    await expect(
      dialog.getByRole("heading", { name: "The question", exact: true }),
    ).toBeVisible();
    await expect(
      dialog.getByRole("heading", { name: "The approach", exact: true }),
    ).toBeVisible();
    await expect(
      dialog.getByRole("heading", { name: "The result", exact: true }),
    ).toBeVisible();
    await expect(dialog.getByRole("listitem")).toHaveCount(3);
    await expect(page.locator("body")).toHaveCSS("overflow", "hidden");

    const closeButton = dialog.getByRole("button", {
      name: "Close project details",
    });
    await expect(closeButton).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(
      dialog.getByRole("link", { name: "Let’s talk about this project" }),
    ).toBeFocused();
    await page.keyboard.press("Tab");
    await expect(closeButton).toBeFocused();

    if (index === 1) {
      await closeButton.click();
    } else if (index === 2) {
      // The dialog has an outer margin at both configured viewport sizes.
      await page.mouse.click(2, 2);
    } else {
      await page.keyboard.press("Escape");
    }
    await expect(page.getByRole("dialog")).not.toBeVisible();
    await expect(trigger).toBeFocused();
    await expect(page.locator("body")).not.toHaveCSS("overflow", "hidden");
  }
});

test("adapts navigation to the viewport and closes the mobile menu predictably", async ({
  page,
  isMobile,
}) => {
  await page.goto("/");
  const mobileNavigation = page.getByRole("navigation", {
    name: "Mobile navigation",
  });
  const openMenu = page.getByRole("button", {
    name: "Open navigation",
    exact: true,
  });

  if (isMobile) {
    await expect(
      page.getByRole("navigation", { name: "Main navigation", exact: true }),
    ).not.toBeVisible();
    await expect(mobileNavigation).not.toBeVisible();
    await openMenu.click();
    await expect(mobileNavigation).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Close navigation", exact: true }),
    ).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(mobileNavigation).not.toBeVisible();
    await expect(openMenu).toBeFocused();
    await expect(openMenu).toHaveAttribute("aria-expanded", "false");

    await openMenu.click();
    await page
      .getByRole("button", { name: "Close navigation", exact: true })
      .click();
    await expect(mobileNavigation).not.toBeVisible();

    await openMenu.click();
    await mobileNavigation
      .getByRole("link", { name: "Experience", exact: true })
      .click();
    await expect(page).toHaveURL(/#experience$/);
    await expect(mobileNavigation).not.toBeVisible();
    await expect(page.locator("#experience-heading")).toBeInViewport();
  } else {
    const desktopNavigation = page.getByRole("navigation", {
      name: "Main navigation",
      exact: true,
    });
    await expect(desktopNavigation).toBeVisible();
    await expect(openMenu).not.toBeVisible();
    await desktopNavigation
      .getByRole("link", { name: "About", exact: true })
      .click();
    await expect(page).toHaveURL(/#about$/);
    await expect(page.locator("#about-heading")).toBeInViewport();
    await desktopNavigation
      .getByRole("link", { name: "Experience", exact: true })
      .click();
    await expect(page).toHaveURL(/#experience$/);
    await expect(page.locator("#experience-heading")).toBeInViewport();
  }
});

test("navigates from the hero to the work and back from the footer", async ({
  page,
}) => {
  await page.goto("/");
  await page
    .getByRole("link", { name: "Explore my work", exact: true })
    .click();
  await expect(page).toHaveURL(/#work$/);
  await expect(page.locator("#work-heading")).toBeInViewport();
  await page.getByRole("link", { name: "Back to top", exact: true }).click();
  await expect(page).toHaveURL(/#home$/);
  await expect(page.getByRole("heading", { level: 1 })).toBeInViewport();
});

test("downloads the supplied résumé as a complete PDF", async ({ page }) => {
  await page.goto("/");
  const downloadPromise = page.waitForEvent("download");
  await page
    .getByRole("link", { name: "Download résumé", exact: true })
    .click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("Siddharth-Rajawat-Resume.pdf");
  expect(await download.failure()).toBeNull();
  const downloadedPath = await download.path();
  expect(downloadedPath).not.toBeNull();
  const pdf = await readFile(downloadedPath!);
  expect(pdf.subarray(0, 5).toString()).toBe("%PDF-");
  expect(pdf.length).toBeGreaterThan(10_000);
});
