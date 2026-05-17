/**
 * Affiliate Configuration
 * 
 * Centralized configuration for affiliate links and trading platform URLs.
 * Update these values to change affiliate links across the entire application.
 */

export const AFFILIATE_CONFIG = {
  /**
   * Main affiliate signup/login link
   * Used for: Login, Signup, Demo Account, and general CTAs
   */
  mainLink: "https://tradeask.com/links/pobroker",
  
  /**
   * Affiliate ID for tracking
   */
  affiliateId: "links/pobroker",
  
  /**
   * Base broker URL (without parameters)
   */
  brokerBaseUrl: "https://tradeask.com",
  
  /**
   * Mobile app download links
   */
  googlePlayUrl: "https://tradeask.com/links/pobroker",
  appStoreUrl: "https://tradeask.com/links/pobroker",
} as const;

/**
 * Helper function to get affiliate link with optional custom parameters
 */
export function getAffiliateLink(params?: Record<string, string>): string {
  const url = new URL(AFFILIATE_CONFIG.mainLink);
  
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }
  
  return url.toString();
}

/**
 * Predefined affiliate links for common actions
 */
export const AFFILIATE_LINKS = {
  login: AFFILIATE_CONFIG.mainLink,
  signup: AFFILIATE_CONFIG.mainLink,
  demo: AFFILIATE_CONFIG.mainLink,
  createAccount: AFFILIATE_CONFIG.mainLink,
  googlePlay: AFFILIATE_CONFIG.googlePlayUrl,
  appStore: AFFILIATE_CONFIG.appStoreUrl,
} as const;
