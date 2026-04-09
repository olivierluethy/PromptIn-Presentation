declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(
  eventName: string,
  category: string,
  label?: string,
  value?: number
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export function trackScrollDepth(depth: number) {
  trackEvent('scroll_depth', 'Engagement', `${depth}% Scroll`, depth)
}

export function trackArticleClick(articleTitle: string) {
  trackEvent('article_click', 'Blog', articleTitle)
}

export function trackDonationClick() {
  trackEvent('donation_click', 'CTA', 'Buy Me a Coffee')
}
