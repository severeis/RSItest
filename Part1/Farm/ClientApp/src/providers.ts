function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

export const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
