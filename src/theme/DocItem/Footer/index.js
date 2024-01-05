import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import DocsRating from '../../../components/DocsRating';

export default function FooterWrapper(props) {
  return (
    <>
      <DocsRating label={metadata.unversionedId} />
      <Footer {...props} />
    </>
  );
}
