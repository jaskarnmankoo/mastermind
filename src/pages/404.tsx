import * as React from 'react';

import { Link } from 'gatsby';

import SearchEngineOptimization from '../components/common/SearchEngineOptimization';

/** Renders this page when a route does not exist */
export default function NotFound(): JSX.Element {
  return (
    <>
      <SearchEngineOptimization title="Oops..." />
      <main className="grid grid-cols-1 gap-4 text-center">
        <h1>Mastermind</h1>
        <h2 className="text-xl bold">Page not found!</h2>
        <p>Oops! The page you are looking for has been removed or relocated.</p>
        <Link to="/" className="underline">
          Go Back
        </Link>
      </main>
    </>
  );
}
