// PDF export utilities
// Uses print CSS with ?print=true query param

export function isPrintMode(): boolean {
  if (typeof window === 'undefined') return false;
  return new URLSearchParams(window.location.search).has('print');
}

export function getPrintStyles(): string {
  return `
    @media print {
      .slide {
        page-break-after: always;
        page-break-inside: avoid;
        width: 100vw;
        height: 100vh;
      }

      .slide-indicator,
      .presenter-notes {
        display: none !important;
      }
    }
  `;
}
