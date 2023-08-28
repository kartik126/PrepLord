import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
export const SEO = ({
  title,
  description,
  canonical,
  css,
  js,
  image,
  keywords,
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <meta
      name="viewport"
      content="width=device-width,minimum-scale=1,initial-scale=1"
    />
    <meta property="og:type" content="website" />
    <meta name="og:title" property="og:title" content={title} />
    <meta
      name="og:description"
      property="og:description"
      content={description}
    />
    <meta property="og:site_name" content="EstateDekho" />
    <meta property="og:url" content={`${canonical}`} />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:site" content="" />
    <meta name="twitter:creator" content="" />

    {css && <link rel="stylesheet" href={`${css}`} />}
    {image && <meta property="og:image" content={`${image}`} />}
    {image && <meta name="twitter:image" content={`${image}`} />}
    {canonical && <link rel="canonical" href={`${canonical}`} />}
    {js && <Script type="text/javascript" src={`${js}`}></Script>}
  </Head>
);
