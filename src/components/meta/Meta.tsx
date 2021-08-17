import React from 'react';
import { Helmet } from 'react-helmet';

import { SEO } from '@/constants';

export interface MetaProps {
  title?: string;
  description?: string;
  url?: string;
  keywords?: string;
}

const Meta: React.FC<MetaProps> = ({ title, description, url, keywords }) => (
  <Helmet>
    <title>{title || SEO.TITLE}</title>
    <meta property="og:title" content={title || SEO.TITLE} />
    <meta property="og:image" content={SEO.LOGO} />
    <meta property="og:site_name" content={SEO.NAME} />
    <meta property="og:type" content={SEO.TYPE} />
    <meta property="og:url" content={url || SEO.HOME_LINK} />
    <link rel="canonical" href={url || SEO.HOME_LINK} />
    <meta name="description" content={description || SEO.DESCRIPTION} />
    <meta property="og:description" content={description || SEO.DESCRIPTION} />
    <meta name="keywords" content={keywords || SEO.KEYWORDS} />
  </Helmet>
);

export { Meta };
export default Meta;
