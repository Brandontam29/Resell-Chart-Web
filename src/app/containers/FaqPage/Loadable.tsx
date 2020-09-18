import { lazyLoad } from 'utils/loadable';

export const FaqPage = lazyLoad(
  () => import('./index'),
  module => module.FaqPage,
);
