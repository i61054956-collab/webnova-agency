import { useEffect } from 'react';
import { siteConfig } from '../../config/siteConfig';

export default function SeoHead({ title, description }) {
  useEffect(() => {
    document.title = title || siteConfig.seo.defaultTitle;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || siteConfig.seo.defaultDescription);
    }
  }, [title, description]);

  return null;
}
