import { Browser, Page } from "@playwright/test";

export let page: Page;
export let browser: Browser;

export const setPageBrowser = (p: Page, b: Browser) => {
    page = p;
    browser = b;
}